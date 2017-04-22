var elements = [];

function Element(id, name, worth, unlocked, count) {
	this.id = id;
	this.name = name;
	this.worth = worth;
	this.unlocked = unlocked;
	this.count = count;
	
	this.init = function() {
		elements.push(this);
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
		console.log(i);
		if (elements[i].unlocked === true) {
			str += "<li>" + elements[i].name + ": " + "<span class='highlight-color'>" + elements[i].count + "</span></li>"; 
		}
	}
	str += "</ul>";
	elementListElement.append(str);
}