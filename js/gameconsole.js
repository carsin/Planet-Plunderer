var consoleElement = $("#console-list");
var notificationSound = new Audio("./assets/sound/pop.mp3");

var gameConsole = {
	text: [],
	log: function(text) {
		var text = text;
		gameConsole.text.unshift("[" + getTime() + "] " + text);
		notificationSound.play();
		gameConsole.update();
	},
	
	update: function() {
		consoleElement.empty();
		var textElementsInArray = gameConsole.text.length;
		var str = "";

		for (var i = 0; i < textElementsInArray; i++) {
			str += "<li>" + gameConsole.text[i] + "</li>";
		}

		consoleElement.append(str);
	},

}

function getTime() {
	var date = new Date();
	var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
	var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
	var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
	time = hours + ":" + minutes + ":" + seconds;
	return time;
}