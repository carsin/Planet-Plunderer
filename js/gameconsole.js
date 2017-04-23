var consoleElement = $("#console-list");

var gameConsole = {
	text: [],
	log: function(text) {
		var text = text;
		gameConsole.text.unshift(text);
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