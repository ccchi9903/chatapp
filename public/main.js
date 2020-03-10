$(function()
{
	let COLORS = [
	    '#e21400', '#91580f', '#f8a700', '#f78b00',
	    '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
	    '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
	  ];

	let name = prompt("Whats your name?");
	if(name == null)
	{
		name="anonymous";
	}

	var socket = io();
	$('form').submit(function(e){
		e.preventDefault(); //prevents page reloading
		socket.emit('chat message', name + ": " + $('#m').val());
		$('#m').val('');
		return false;
	});
	socket.on("Connected", (username) => {
		let msg = username + " has joined the chat!";
		$('#messages').append($("<li>").text(msg));
	});
	socket.on('chat message', function(msg)
	{
		var audio = new Audio('/audio_file.mp3');
		audio.play();
		$('#messages').append($("<li>").text(msg));
		window.scrollTo(0,document.body.scrollHeight);
	});
	socket.on("Hello", function(data)
	{
		console.log(data);
	})
	socket.on("disconnected", function(username)
	{
		let leave_message = $("<li>").text(username + " has left the chat :(");
		$('#messages').append($("<li>").text(username + " has left the chat :("));
	});
	socket.emit("set username", name);
});