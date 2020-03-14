let emojis = [
"👍",
"😎",
"😀",
"😅",
"😰",
"🤐",
"🙄",
"🖕"
];

var emojiKeypadEnabled = false;
var emojiDropup;

function setEmojiKeypadState(state) {
	
	emojiKeypadEnabled = state;
	refreshEmojiKeypadState();
	
}

function toggleEmojiKeypad() {
	
	setEmojiKeypadState(!emojiKeypadEnabled);
	
}

function refreshEmojiKeypadState() {
	
	emojiDropup.style.display = emojiKeypadEnabled ? "block" : "none";
	
}

function onEmojiSelected(emoji) {
	
	document.getElementById("m").value += emoji;
	
}

window.onload = function() {
	
	emojiDropup = document.getElementById("emojiDropup");
	
	let _emojisRoot = Math.sqrt(emojis.length);
	let columns = Math.floor(_emojisRoot);
	
	var rows;
	
	if (_emojisRoot == columns) {
		
		rows = columns;
		
	}
	else {
		
		var extra = emojis.length - (columns ** 2);
		var addedRows = Math.floor(extra / columns);
		
		rows = columns + (addedRows * columns == extra ? addedRows : addedRows + 1);
		
	}
	
	for (var row = 0; row < rows; row++) {
		
		var tableRow = document.createElement("tr");
		
		for (var column = 0; column < columns; column++) {
			
			var tableData = document.createElement("td");
			tableData.className = "emojiKeypadOption";
			
			var emoji = emojis[(row * columns) + column];
			if (emoji == null) { break; }
			
			tableData.innerText = emoji;
			
			tableData.setAttribute("onclick", "onEmojiSelected('" + emoji + "')");
			
			tableRow.appendChild(tableData);
			
		}
		
		emojiDropup.appendChild(tableRow);
		
	}
	
	refreshEmojiKeypadState();
	
}

window.onclick = function(event) {
	
	if (!event.target.matches("#emojiKeypad *")) {
		
		setEmojiKeypadState(false);
		
	}
	
}