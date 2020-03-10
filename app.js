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
io.on('connection', function(socket)
{
	numberusers += 1;
	socket.username = "anonymous";
	socket.on("set username", function(username)
	{
		socket.username = username;
		names.push(username);
		console.log(names);
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