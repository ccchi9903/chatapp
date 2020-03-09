let express = require("express");
let app  = express();
let socket = require("socket.io");
let http = require("http").createServer(app);
let io = require("socket.io")(http);

app.use(express.static(__dirname + "/public"));
app.get("/", function(req,res)
{
	res.sendFile(__dirname + '/index.html');
});
app.get("/chat", function(req,res)
{
	res.send("chatting");
});

io.on('connection', function(socket)
{
	console.log("a user connected");
	socket.on('chat message', function(msg)
	{
		console.log("message: " + msg);
		io.emit("chat message", msg);
	});
	socket.on('disconnect', function()
	{	
		io.emit("disconnected");
		console.log("user disconnected");
	});
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}


http.listen(port, '0.0.0.0', function()
{
	console.log("Listening on port 8080...");
})