var discoveredPlanets = [];
var planetsBeingMined = [];
var planetNamePrefixes = ["Nuka", "I", "Plaki", "Genji", "Tracer", "At", "4ll", "Ra", "Na", "Nab", "Tuva", "Poj", "Zork", "Gen", "Smol", "Ben", "Bronx", "Planet-"];
var planetNameSuffixes = ["freezom", "o","i","fr", "ve", "owt", "las", "lie", "arry", "ze", "ton", "shozt", "8", "egg", "bork", "ton", "uncus", "ubl"];

function Planet(name, size) {
	this.name = name;
	this.size = size;

	this.element1 = {
		element: elements[Math.floor(Math.random() * elements.length)],
		elementCount: Math.floor(Math.random() * 2.7518 * this.size) + 1,
		beingMined: false,
		mineInterval: undefined,
		mineTimer: 0,
		mine: function(planet) {
			planet.element1.mineTimer++;
			if (planet.element1.mineTimer > 10) {
				planet.element1.mineTimer = 0;
				var chanceToMine = Math.random();
				if (chanceToMine > planet.element1.element.strength) {
					var numberMined = Math.floor(Math.random() * 10 * player.miningRigEfficiency + Math.random());
					if (planet.element1.elementCount - numberMined < 0) {
						planet.element1.element.count += planet.element1.elementCount;
						planet.element1.elementCount = 0;
						gameConsole.log("Mined " + numberMined + " "+ planet.element1.element.name);
						gameConsole.log("Depleted " + planet.name + " of " + planet.element1.element.name);
						clearInterval(planet.element1.mineInterval);
					} else {
						if (numberMined > 0) {
							planet.element1.element.count += numberMined;
							gameConsole.log("Mined " + numberMined + " " + planet.element1.element.name + " out of " + planet.name);
							planet.element1.elementCount -= numberMined;
						}
					}
				}
			} 
		},

	}

	this.element2 = {
		element: elements[Math.floor(Math.random() * elements.length)],
		elementCount: Math.floor(Math.random() * 2.4513 * this.size) + 1,
		beingMined: false,
		mineInterval: undefined,
		mineTimer: 0,
	}

	this.element3 = {
		element: elements[Math.floor(Math.random() * elements.length)],
		elementCount: Math.floor(Math.random() * 2.2432 * this.size) + 1,
		beingMined: false,
		mineInterval: undefined,
		mineTimer: 0,
	}

	this.beginMining = function(elementNumber, planet) {
		switch (elementNumber) {
			case 1:
				gameConsole.log("Began mining " + this.element1.element.name + " out of " + this.name);
				this.element1.beingMined = true;
				this.element1.mineInterval = setInterval(function() {
					planet.element1.mine(planet);
				}, 1000);
		}
	}

	this.rename = function() {
		var newName = prompt("Rename the planet " + this.name + " to what?");
		if (newName !== "" && newName !== null && newName !== "null") {
			var oldName = this.name;
			this.name = newName;
			gameConsole.log("You have renamed " + oldName + " to " + this.name);
		} else {
			gameConsole.log("You must input something!");
		}
	}

	this.discover = function() {
		discoveredPlanets.push(this);
		updatePlanetList();
		gameConsole.log("You've discovered the world " + this.name + "!");
	}

	this.abandon = function() {
		discoveredPlanets.splice(discoveredPlanets.indexOf(this), 1);
	}

	this.discover();

}

function generateRandomPlanetName() {
	return planetNamePrefixes[Math.floor(Math.random() * planetNamePrefixes.length)] + planetNameSuffixes[Math.floor(Math.random() * planetNameSuffixes.length)];
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

	$(".listed-planet").click(function planetClick() {
		var currPlanet;
		var str = "";
		for (var i = 0; i < planetsNumber; i++) {
			if ($(this).html() === discoveredPlanets[i].name) {
				currPlanet = discoveredPlanets[i];
				$("#planet-name").html(currPlanet.name);
				$("#planet-info").empty();
				str += "<h3>Stats</h3>";
				str += "<p>Diameter: " + currPlanet.size +" miles</p>"
				str += "<h3>Elements</h3>";
				str += "<p>" + currPlanet.element1.element.name + ": <span class='highlight-color'>" + currPlanet.element1.elementCount+"</span>"+ "</p>";
				str += "<p>" + currPlanet.element2.element.name + ": <span class='highlight-color'>" + currPlanet.element2.elementCount+"</span>"+ "</p>";
				str += "<p>" + currPlanet.element3.element.name + ": <span class='highlight-color'>" + currPlanet.element3.elementCount+"</span>"+ "</p>";
				$("#planet-info").append(str);
				str = "";
				$("#planet-controls").empty();
				str += "<button class='" + currPlanet.name.toLowerCase() + "'id='rename-planet'>Rename Planet</button>";
				$("#planet-controls").append(str);
				$("#rename-planet").click(function() {
					console.log("click");
					currPlanet.rename();
					setPlanetInfoHeader(currPlanet.name);
					updatePlanetList();
				});
				break;
			}
		}
	});
	
}

function setPlanetInfoHeader(planetName) {
	$("#planet-name").html(planetName);	
}