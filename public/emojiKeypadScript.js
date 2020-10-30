<<<<<<< HEAD
let emojis;/* = [
"👍",
"😎",
"😀",
"😅",
"😰",
"🤐",
"🙄",
"🖕",
"😮",
];*/
//the code here is ugly but works for now

=======
>>>>>>> 7e82834bdae396f80e2504f0ac03f47ecd9036d3
let emojiString = "😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 🥰 😗 😙 😚 ☺️ 🙂 🤗 🤩 🤔 🤨 😐 😑 😶 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 😴 😌 😛 😜 😝 🤤 😒 😓 😔 😕 🙃 🤑 😲 ☹️ 🙁 😖 😞 😟 😤 😢 😭 😦 😧 😨 😩 🤯 😬 😰 😱 🥵 🥶 😳 🤪 😵 😡 😠 🤬 😷 🤒 🤕 🤢 🤮 🤧 😇 🤠 🤡 🥳 🥴 🥺 🤥 🤫 🤭 🧐 🤓 😈 👿 👹 👺 💀 👻 👽 🤖 💩 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👶 👧 🧒 👦 👩 🧑 👨 👵 🧓 👴 👲 👳‍♀️ 👳‍♂️ 🧕 🧔 👱‍♂️ 👱‍♀️ 👨‍🦰 👩‍🦰 👨‍🦱 👩‍🦱 👨‍🦲 👩‍🦲 👨‍🦳 👩‍🦳 🦸‍♀️ 🦸‍♂️ 🦹‍♀️ 🦹‍♂️ 👮‍♀️ 👮‍♂️ 👷‍♀️ 👷‍♂️ 💂‍♀️ 💂‍♂️ 🕵️‍♀️ 🕵️‍♂️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 👰 🤵 👸 🤴 🤶 🎅 🧙‍♀️ 🧙‍♂️ 🧝‍♀️ 🧝‍♂️ 🧛‍♀️ 🧛‍♂️ 🧟‍♀️ 🧟‍♂️";
emojiString = emojiString.concat(" 🧞‍♀️ 🧞‍♂️ 🧜‍♀️ 🧜‍♂️ 🧚‍♀️ 🧚‍♂️ 👼 🤰 🤱 🙇‍♀️ 🙇‍♂️ 💁‍♀️ 💁‍♂️ 🙅‍♀️ 🙅‍♂️ 🙆‍♀️ 🙆‍♂️ 🙋‍♀️ 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀️ 🤷‍♂️ 🙎‍♀️ 🙎‍♂️ 🙍‍♀️ 🙍‍♂️ 💇‍♀️ 💇‍♂️ 💆‍♀️ 💆‍♂️ 🧖‍♀️ 🧖‍♂️ 💅 🤳 💃 🕺 👯‍♀️ 👯‍♂️ 🕴 🚶‍♀️ 🚶‍♂️ 🏃‍♀️ 🏃‍♂️ 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 🤲 👐 🙌 👏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤟 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖 👋 🤙 💪 🦵 🦶 🖕 ✍️ 🙏 💍 💄 💋 👄 👅 👂 👃 👣 👁 👀 🧠 🦴 🦷 🗣 👤 👥");
let paleEmojis = "👶🏻 👦🏻 👧🏻 👨🏻 👩🏻 👱🏻‍♀️ 👱🏻 👴🏻 👵🏻 👲🏻 👳🏻‍♀️ 👳🏻 👮🏻‍♀️ 👮🏻 👷🏻‍♀️ 👷🏻 💂🏻‍♀️ 💂🏻 🕵🏻‍♀️ 🕵🏻 👩🏻‍⚕️ 👨🏻‍⚕️ 👩🏻‍🌾 👨🏻‍🌾 👩🏻‍🍳 👨🏻‍🍳 👩🏻‍🎓 👨🏻‍🎓 👩🏻‍🎤 👨🏻‍🎤 👩🏻‍🏫 👨🏻‍🏫 👩🏻‍🏭 👨🏻‍🏭 👩🏻‍💻 👨🏻‍💻 👩🏻‍💼 👨🏻‍💼 👩🏻‍🔧 👨🏻‍🔧 👩🏻‍🔬 👨🏻‍🔬 👩🏻‍🎨 👨🏻‍🎨 👩🏻‍🚒 👨🏻‍🚒 👩🏻‍✈️ 👨🏻‍✈️ 👩🏻‍🚀 👨🏻‍🚀 👩🏻‍⚖️ 👨🏻‍⚖️ 🤶🏻 🎅🏻 👸🏻 🤴🏻 👰🏻 🤵🏻 👼🏻 🤰🏻 🙇🏻‍♀️ 🙇🏻 💁🏻 💁🏻‍♂️ 🙅🏻 🙅🏻‍♂️ 🙆🏻 🙆🏻‍♂️ 🙋🏻 🙋🏻‍♂️ 🤦🏻‍♀️ 🤦🏻‍♂️ 🤷🏻‍♀️ 🤷🏻‍♂️ 🙎🏻 🙎🏻‍♂️ 🙍🏻 🙍🏻‍♂️ 💇🏻 💇🏻‍♂️ 💆🏻 💆🏻‍♂️ 🕴🏻 💃🏻 🕺🏻 🚶🏻‍♀️ 🚶🏻 🏃🏻‍♀️ 🏃🏻 🤲🏻 👐🏻 🙌🏻 👏🏻 🙏🏻 👍🏻 👎🏻 👊🏻 ✊🏻 🤛🏻 🤜🏻 🤞🏻 ✌🏻 🤟🏻 🤘🏻 👌🏻 👈🏻 👉🏻 👆🏻 👇🏻 ☝🏻 ✋🏻 🤚🏻 🖐🏻 🖖🏻 👋🏻 🤙🏻 💪🏻 🖕🏻 ✍🏻 🤳🏻 💅🏻 👂🏻 👃🏻";
emojiString = emojiString.concat(paleEmojis);
<<<<<<< HEAD

emojis = emojiString.split(" ");
var emojiKeypadEnabled = false;
=======
var emojis = emojiString.split(" ");
let emojiKeypadEnabled = false;

>>>>>>> 7e82834bdae396f80e2504f0ac03f47ecd9036d3
var emojiDropup;
var recentEmojisTable;

let columnCount = 6;

let recentEmojiRows = 2;
/*Length of recent emojis should always be the same as columnCount multiplied by recentEmojiRows*/
var recentEmojiIndexes = [];

function getRecentEmojiIndexesMaxLength() { return columnCount * recentEmojiRows; }

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
	tryAddRecentEmoji(emoji);
	
}

function getEmojiIndex(emoji) {
	
	for (var i = 0; i < emojis.length; i++) {
		
		if (emojis[i] == emoji) {
			return i;
		}
		
	}
	
}

function tryAddRecentEmoji(emoji) {
	
	let emojiIndex = getEmojiIndex(emoji);
	
	if (recentEmojiIndexes.includes(emojiIndex)) { return; }
	
	recentEmojiIndexes.unshift(emojiIndex);
	
	if (recentEmojiIndexes.length > getRecentEmojiIndexesMaxLength()) {
		
		recentEmojiIndexes.pop();
		
	}
	
	refreshRecentEmojis();
	
}

function refreshRecentEmojis() {
	
	recentEmojisTable.innerHTML = "";
	
	for (var row = 0; row < recentEmojiRows; row++) {
	
		var tableRow = document.createElement("tr");
		
		for (var column = 0; column < columnCount; column++) {
			
			var emoji = emojis[recentEmojiIndexes[(row * columnCount) + column]];
			if (emoji == null) { break; }
			
			var tableData = createEmojiButton(emoji);
			
			tableRow.appendChild(tableData);
			
		}
		
		recentEmojisTable.appendChild(tableRow);
	
	}
	
}

window.onload = function() {
	
	emojiDropup = document.getElementById("emojiDropup");
	recentEmojisTable = document.getElementById("recentEmojisTable");
	
	var emojiDropupTable = document.getElementById("emojiDropupTable");
	
	var rows = emojis.length / columnCount;
	
	if (rows * columnCount < emojis.length) { rows++; }
	
	for (var row = 0; row < rows; row++) {
		
		var tableRow = document.createElement("tr");
		
		for (var column = 0; column < columnCount; column++) {
			
			var emoji = emojis[(row * columnCount) + column];
			if (emoji == null) { break; }
			
			var tableData = createEmojiButton(emoji);
			
			tableRow.appendChild(tableData);
			
		}
		
		emojiDropupTable.appendChild(tableRow);
		
	}
	
	refreshEmojiKeypadState();
	
}

function createEmojiButton(emoji) {
	
	var tableData = document.createElement("td");
	tableData.className = "emojiKeypadOption";
	
	tableData.innerText = emoji;
	
	tableData.setAttribute("onclick", "onEmojiSelected('" + emoji + "')");
	
	return tableData;
	
}

window.onclick = function(event) {
	
	if (!event.target.matches("#emojiKeypad *")) {
		
		setEmojiKeypadState(false);
		
	}
	
}