let express = require("express");
let app  = express();
let socket = require("socket.io");
let http = require("http").createServer(app);
let io = require("socket.io")(http);

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", function(req,res)
{
	res.render('index.ejs');
});
app.get("/secret", function(req,res)
{
	res.send("You found the secret page!!");
});

let numberusers = 0;
let names = [];
let typing_names = [];

io.on('connection', function(socket)
{
	numberusers += 1;
	socket.username = "anonymous";
	socket.on("set username", function(username)
	{
		socket.username = username;
		names.push(username);
		io.emit("Connected", socket.username);
		io.emit("Users", {"numberusers": numberusers, "names": names});
	});
	socket.on('chat message', function(msg)
	{
		if(msg)
		{
			console.log("message: " + msg);
			io.emit("chat message", msg);
		}
	});
	socket.on("typing", function(username)
	{
		if(username)
		{
			let index = typing_names.indexOf(username);
			if(index == -1)
			{
				socket.broadcast.emit("typing", username);//emit to everyone else except this socket
				typing_names.push(username);
			}
		}
	});
	socket.on("stopped typing", function(username)
	{
		if(username)
		{
			//console.log(username + "stopped typing external");
			let index = typing_names.indexOf(username);
			if(index != -1)
			{
				typing_names.splice(index, 1);
				if(typing_names.length > 0)
				{
					let next_typing = typing_names[typing_names.length - 1];
					if(next_typing == socket.username)
					{
						socket.broadcast.emit("typing", next_typing);
					}
				}
				else
				{
					io.emit("silent");
				}
			}	
		}
	});
	socket.on('disconnect', function()
	{	
		io.emit("disconnected", socket.username);
		console.log(socket.username + " disconnected");
		if(socket.username && numberusers > 0)
		{
			numberusers--;
			let index = names.indexOf(socket.username);
			if(index != -1)
			{
				names.splice(index, 1);
			}
			io.emit("Users", {"numberusers": numberusers, "names": names});
		}
	});
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}

http.listen(port, '0.0.0.0', function()
{
	console.log("Listening on port " + port + "...");
})
