var discoveredPlanets = [];
var planetsBeingMined = [];
var planetNamePrefixes = ["Nuka", "I", "Plaki", "Genji", "Tracer", "At", "4ll", "Ra", "Na", "Nab", "Tuva", "Poj", "Zork", "Gen", "Smol", "Ben", "Bronx", "Planet-"];
var planetNameSuffixes = ["freezom", "o", "i", "fr", "ve", "owt", "las", "lie", "arry", "ze", "ton", "shozt", "8", "egg", "bork", "ton", "uncus", "ubl"];

function Planet(name, size) {
	this.name = name;
	this.size = size;

	this.element1 = {
		element: undefined,
		elementCount: undefined,
		beingMined: false,
		mineInterval: undefined,
		mineTimer: 0,
		mine: function(planet) {
			planet.element1.mineTimer++;
			if (planet.element1.mineTimer > 5) {
				planet.element1.mineTimer = 0;
				var chanceToMine = Math.random();
				if (chanceToMine > planet.element1.element.strength) {
					var numberMined = Math.floor(Math.random() * planet.element1.element.strength * 10 * player.miningRigEfficiency + Math.random());
					if (planet.element1.elementCount - numberMined < 0) {
						planet.element1.element.count += planet.element1.elementCount;
						planet.element1.elementCount = 0;
						gameConsole.log("Mined " + numberMined + " "+ planet.element1.element.name);
						gameConsole.log("Depleted " + planet.name + " of " + planet.element1.element.name);
						clearInterval(planet.element1.mineInterval);
						planet.element1.beingMined = true;
					} else {
						if (numberMined > 0) {
							planet.element1.element.count += numberMined;
							gameConsole.log("Mined " + numberMined + " " + planet.element1.element.name + " out of " + planet.name);
							planet.element1.elementCount -= numberMined;
							if ($("#planet-name").html() === planet.name) {
								renderStats(planet);
							}
							updateElementList();
						}
					}
				}
			}
		}
	};

	this.element2 = {
		element: undefined,
		elementCount: undefined,
		beingMined: false,
		mineInterval: undefined,
		mineTimer: 0,
		mine: function(planet) {
			planet.element2.mineTimer++;
			if (planet.element2.mineTimer > 5) {
				planet.element2.mineTimer = 0;
				var chanceToMine = Math.random();
				if (chanceToMine > planet.element2.element.strength) {
					var numberMined = Math.floor(Math.random() * planet.element2.element.strength * 10 * player.miningRigEfficiency + Math.random());
					if (planet.element2.elementCount - numberMined < 0) {
						planet.element2.element.count += planet.element2.elementCount;
						planet.element2.elementCount = 0;
						gameConsole.log("Mined " + numberMined + " "+ planet.element2.element.name);
						gameConsole.log("Depleted " + planet.name + " of " + planet.element2.element.name);
						clearInterval(planet.element2.mineInterval);
						planet.element2.beingMined = true;
					} else {
						if (numberMined > 0) {
							planet.element2.element.count += numberMined;
							gameConsole.log("Mined " + numberMined + " " + planet.element2.element.name + " out of " + planet.name);
							planet.element2.elementCount -= numberMined;
							if ($("#planet-name").html() === planet.name) {
								renderStats(planet);
							}
							updateElementList();
						}
					}
				}
			}
		}

	};

	this.element3 = {
		element: undefined,
		elementCount: undefined,
		beingMined: false,
		mineInterval: undefined,
		mineTimer: 0,
		mine: function(planet) {
			planet.element3.mineTimer++;
			if (planet.element3.mineTimer > 5) {
				planet.element3.mineTimer = 0;
				var chanceToMine = Math.random();
				if (chanceToMine > planet.element3.element.strength) {
					var numberMined = Math.floor(Math.random() * planet.element3.element.strength * 10 * player.miningRigEfficiency + Math.random());
					if (planet.element3.elementCount - numberMined < 0) {
						planet.element3.element.count += planet.element3.elementCount;
						planet.element3.elementCount = 0;
						gameConsole.log("Mined " + numberMined + " "+ planet.element3.element.name);
						gameConsole.log("Depleted " + planet.name + " of " + planet.element3.element.name);
						clearInterval(planet.element3.mineInterval);
						planet.element3.beingMined = true;
					} else {
						if (numberMined > 0) {
							planet.element3.element.count += numberMined;
							gameConsole.log("Mined " + numberMined + " " + planet.element3.element.name + " out of " + planet.name);
							planet.element3.elementCount -= numberMined;
							if ($("#planet-name").html() === planet.name) {
								renderStats(planet);
							}
							updateElementList();
						}
					}
				}
			}
		}
	};

	this.generateElements = function() {
		var numOfElements = elements.length;
		var element1;
		var element2;
		var element3;
		for (var i = 0; i <= 3; i++) {
			var randomElementChance = Math.random();
			var randomElement = elements[Math.floor(Math.random() * numOfElements)];
			if (randomElementChance >= randomElement.rarity) {
				if (this.element1.element === undefined) {
					this.element1.element = randomElement;
					this.element1.elementCount = Math.ceil((Math.random() * this.size) / this.element1.element.rarity);
				} else if (this.element2.element === undefined) {
					this.element2.element = randomElement;
					this.element2.elementCount = Math.ceil((Math.random() * this.size) / this.element2.element.rarity);
				} else if (this.element3.element === undefined) {
					this.element3.element = randomElement;
					this.element3.elementCount = Math.ceil((Math.random() * this.size) / this.element3.element.rarity);
					break;
				}
			} else {
				i--;
			}
		}
	};

	this.beginMining = function(elementNumber, planet) {
		switch (elementNumber) {
			case 1:
				gameConsole.log("Began mining " + this.element1.element.name + " out of " + this.name);
				this.element1.beingMined = true;
				this.element1.mineInterval = setInterval(function() {
					planet.element1.mine(planet);
				}, 1000);
				break;
			case 2:
				gameConsole.log("Began mining " + this.element2.element.name + " out of " + this.name);
				this.element2.beingMined = true;
				this.element2.mineInterval = setInterval(function() {
					planet.element2.mine(planet);
				}, 1000);
				break;
			case 3:
				gameConsole.log("Began mining " + this.element3.element.name + " out of " + this.name);
				this.element3.beingMined = true;
				this.element3.mineInterval = setInterval(function() {
					planet.element3.mine(planet);
				}, 1000);
				break;
		}
	};

	this.rename = function() {
		var newName = prompt("Rename the planet " + this.name + " to what?");
		if (newName !== "" && newName !== null && newName !== "null") {
			var oldName = this.name;
			this.name = newName;
			gameConsole.log("You have renamed " + oldName + " to " + this.name);
		} else {
			gameConsole.log("You must input something!");
		}
	};

	this.discover = function() {
		this.generateElements();
		discoveredPlanets.push(this);
		updatePlanetList();
		gameConsole.log("You've discovered the world " + this.name + "!");
	};

	this.abandon = function() {
		discoveredPlanets.splice(discoveredPlanets.indexOf(this), 1);
		gameConsole.log("Abandoned " + this.name);
	};

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

				renderStats(currPlanet);
				renderButtons(currPlanet);

				break;
			}
		}
	});
	
}

function renderButtons(planet) {
	$("#planet-controls").empty();

	var str = "";

	str += "<button class='" + planet.name.toLowerCase() + "'id='rename-planet'>Rename Planet</button><br>";
	str += "<button class='" + planet.name.toLowerCase() + "'id='abandon-planet'>Abandon Planet</button><br>";

	planet.element1.beingMined ? str += "<button class='" + planet.name.toLowerCase() + "'id='mine-e1'>Halt Mining " + planet.element1.element.name + "</button><br>" : str += "<button class='" + planet.name.toLowerCase() + "'id='mine-e1'>Begin Mining " + planet.element1.element.name + "</button><br>";
	planet.element2.beingMined ? str += "<button class='" + planet.name.toLowerCase() + "'id='mine-e2'>Halt Mining " + planet.element2.element.name + "</button><br>" : str += "<button class='" + planet.name.toLowerCase() + "'id='mine-e2'>Begin Mining " + planet.element2.element.name + "</button><br>";
	planet.element3.beingMined ? str += "<button class='" + planet.name.toLowerCase() + "'id='mine-e3'>Halt Mining " + planet.element3.element.name + "</button><br>" : str += "<button class='" + planet.name.toLowerCase() + "'id='mine-e3'>Begin Mining " + planet.element3.element.name + "</button><br>";
	
	$("#planet-controls").append(str);

	$("#rename-planet").click(function() {
		planet.rename();
		setPlanetInfoHeader(planet.name);
		updatePlanetList();
	});

	$("#abandon-planet").click(function() {
		if (confirm("Are you sure you want to abandon " + planet.name + "?")) {
			planet.abandon();
			updatePlanetList();
			$("#planet-controls").empty();
			$("#planet-info").empty();
			$("#planet-name").html("Click a planet for more info!");
		}
	});

	$("#mine-e1").click(function() {
		if (planet.element1.beingMined === true) {
			planet.element1.beingMined = false;
			clearInterval(planet.element1.mineInterval);
			gameConsole.log("Halted mining of " + planet.element1.element.name + " out of " + planet.name);
			renderButtons(planet);
		} else {
			planet.beginMining(1, planet);
			renderButtons(planet);
		}

	});

	$("#mine-e2").click(function() {
		if (planet.element2.beingMined === true) {
			planet.element2.beingMined = false;
			clearInterval(planet.element2.mineInterval);
			gameConsole.log("Halted mining of " + planet.element2.element.name + " out of " + planet.name);
			renderButtons(planet);
		} else {
			planet.beginMining(2, planet);
			renderButtons(planet);
		}

	});

	$("#mine-e3").click(function() {
		if (planet.element3.beingMined === true) {
			planet.element3.beingMined = false;
			clearInterval(planet.element3.mineInterval);
			gameConsole.log("Halted mining of " + planet.element3.element.name + " out of " + planet.name);
			renderButtons(planet);
		} else {
			planet.beginMining(3, planet);
			renderButtons(planet);
		}

	});

}

function renderStats(planet) {
	$("#planet-info").empty();
	var str = "";
	str += "<h3>Stats</h3>";
	str += "<p>Diameter: " + planet.size +" miles</p>"
	str += "<h3>Elements</h3>";
	str += "<p>" + planet.element1.element.name + ": <span class='highlight-color'>" + planet.element1.elementCount + "</span>"+ "</p>";
	str += "<p>" + planet.element2.element.name + ": <span class='highlight-color'>" + planet.element2.elementCount + "</span>"+ "</p>";
	str += "<p>" + planet.element3.element.name + ": <span class='highlight-color'>" + planet.element3.elementCount + "</span>"+ "</p>";
	$("#planet-info").append(str);
}

function setPlanetInfoHeader(planetName) {
	$("#planet-name").html(planetName);	
}

