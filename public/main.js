var sfxEnabled = false;
let timeoutTyping;
let isInFocus = true;
let messagesNotRead = 0;
$(window).blur(function() {
	isInFocus = false;
});
$(window).focus(function() {
	isInFocus = true;
	$("title").text("");
	messagesNotRead = 0;
});
$(function()
{
	let name = getName(20);
	let socket = io();
	$('form').submit(function(e){
		e.preventDefault(); //prevents page reloading
		let text = $('#m').val();
		if(text != null && text != "")
		{
			socket.emit('chat message', name + ": " + text);
			$('#m').val('');
			socket.emit("stopped typing", name);
		}
		return false;
	});

	$("#m").keypress(function(){
		socket.emit("typing", name);
		clearTimeout(timeoutTyping);
		timeoutTyping = setTimeout(() => {socket.emit("stopped typing", name);}, 5000);
	});

	socket.on("silent", function()
	{	
		changeTyping(null);
	});

	socket.on("Connected", (username) => {
		tryPlayWow();
		let msg = username + " has joined the chat!";
		newChatMessage(msg);
	});
	
	socket.on("Users", (data) => {
		let number = data["numberusers"];
		let names = data["names"];
		resetSidebar(number, names);
	});
	
	socket.on('chat message', function(msg)
	{
		tryPlayWow();
		changeTyping(null);
		newChatMessage(msg);
		if(!isInFocus)
		{
			messagesNotRead++;
			$("title").text("(" + messagesNotRead + ") Snopchat");
		}
	});
	
	socket.on("disconnected", function(username)
	{
		let leave_message = username + " has left the chat :(";
		tryPlayWow();
		newChatMessage(leave_message);
	});
	socket.on("typing", function(username)
	{
		changeTyping(username);
	});
	
	//set initial name and tell the server to send the "someone connected" message
	socket.emit("set username", name);
	
});
function getName(max_length)
{
	do
	{
		name = prompt("Whats your name? (Max " + max_length + " characters):");
	} while(name.length > max_length);
	
	if(name == null || name == "")
	{
		name="anonymous";
	}
	return name;
}
function newChatMessage(msg)
{
	$('#messages').append($("<li>").text(msg));
	window.scrollTo(0,document.body.scrollHeight);//scrolls down
}
function resetSidebar(number, names)
{
	$("#onlinenumber").text(number);
	
	let nameList = document.getElementById("onlinenames");
	
	while(nameList.lastElementChild)//clear the current sidebar
	{
		nameList.removeChild(nameList.lastElementChild);
	}
	
	names.forEach(function(name)//add all names to sidebar
	{
		$("#onlinenames").append($("<li>").text(name));
	});
}

function toggleSfx() {
	
	sfxEnabled = !sfxEnabled;
	setSfxButtonState(sfxEnabled);
	
}

/*First items are when sfx are off, second is when they are on*/
let sfxButtonImgs = ["/volume_off.png", "/volume_on.png"];

function setSfxButtonState(state) {
	
	$("#toggleSfxButton").attr("src", sfxButtonImgs[state ? 1 : 0]);
	
}

function tryPlayWow()
{
	
	if (sfxEnabled) {
		let audio = new Audio('/audio_file.mp3');
		audio.play();
	}
	
}
function changeTyping(username)
{
	let defaultmsg = "It's silent...";
	if(username)
	{
		$("#typing").text(username + " is typing...");
		$("#typing").css("color", "white");
	}
	else
	{
		$("#typing").text(defaultmsg);
		$("#typing").css("color", "black");
	}
}

window.onload = function() {
	
	setSfxButtonState(sfxEnabled);
	
}
//useless function Ive written yay
function resetTypingIfEmpty()
{
	if(!isThisUserTyping()){
		changeTyping(null);
	}
}

function isThisUserTyping()
{
	if($("#m").val() != null && $("#m").val() != "")
	{
		return true;
	}
	else
	{
		return false;
	}
}

