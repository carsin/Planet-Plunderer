var discoveredPlanets = [];

function Planet(name, numberOfElements, size) {
	this.name = name;
	this.numberOfElements = numberOfElements;
	this.size = size;

	this.discover = function() {
		discoveredPlanets.push(this);
		gameConsole.log("Discovered the world " + this.name + "!");
	}

	this.abandon = function() {
		discoveredPlanets.splice(discoveredPlanets.indexOf(this), 1);
	}

	this.discover();

}

function updatePlanetList() {
	var planetsNumber = discoveredPlanets.length;
	var planetListElement = $("#planet-list");

	var str = "";
	str += "<ul>";

	planetListElement.empty();

	for (var i = 0; i < planetsNumber; i++) {
		str += "<li class='listed-planet'>" + discoveredPlanets[i].name + "</li>";
	}

	str += "</ul>";
	planetListElement.append(str);

	$(".listed-planet").click(function() {
		var currPlanet;
		for (var i = 0; i < planetsNumber; i++) {
			if ($(this).html() === discoveredPlanets[i].name) {
				currPlanet = discoveredPlanets[i];

				break;
			}
		}
	});
}

