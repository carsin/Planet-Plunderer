var elements = [];
var unlockedElements = [];

function Element(id, name, worth, unlocked, count, strength, rarity) {
	this.id = id;
	this.name = name;
	this.worth = worth;
	this.unlocked = unlocked;
	this.count = count;
	this.strength = strength;
	this.rarity = rarity;
	
	this.init = function() {
		elements.push(this);
	}

	this.unlock = function() {
		this.unlocked = true;
		unlockedElements.push(this);
	}

	if (this.unlocked === true) {
		this.unlock();
	}

	this.init();

}

function updateElementList() {
	var elementNumber = elements.length;
	var elementListElement = $("#element-list");

	var str = "";
	str += "<ul>";

	elementListElement.empty();

	for (var i = 0; i < elementNumber; i++) {
		if (elements[i].unlocked === true && elements[i].count > 0) {
			str += "<li>" + elements[i].name + ": " + "<span class='highlight-color'>" + elements[i].count + "</span><button class='element-sell-button' id='" + elements[i].name.toLowerCase() +"-sell-button'>Sell 1</button></li>";
		}
	}

	str += "</ul>";
	elementListElement.append(str);

	$(".element-sell-button").click(function() {
		var elementNumber = elements.length;
		for (var i = 0; i < elementNumber; i++) {
			if ($(this).attr("id").toLowerCase() === elements[i].name.toLowerCase() + "-sell-button") {
				console.log("dasdasd");
				var element = elements[i];
				player.money += element.worth;
				element.count--;
				gameConsole.log("Sold 1 " + element.name + " for " + element.worth + " Teks");
				updateElementList();
				player.updateMoney();
				break;
			}
		}
	});
}