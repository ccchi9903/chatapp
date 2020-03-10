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

io.on('connection', function(socket)
{
	//socket.emit("Hello", "world");
	socket.username = "anonymous";
	socket.on("set username", function(username)
	{
		socket.username = username;
		io.emit("Connected", socket.username);
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