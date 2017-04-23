var Stone;
var Iron;
var Silver;
var Cobalt;
var Gold;
var Copper;
var Zinc;
var Gallium;
var Titanium;
var Mercury;
var Platinum;

$(document).ready(function() {
	player.setBusinessName("test");
	player.updateMoney();

	Stone = new Element(0, "Stone", 2, true, 50, 0.2);
	Iron = new Element(1, "Iron", 15, true, 20, 0.4);
	Silver = new Element(2, "Silver", 15, true, 20, 0.3);
	Cobalt = new Element(3, "Cobalt", 20, true, 20, 0.3);
	Gold = new Element(4, "Gold", 50, true, 10, 0.2);
	Copper = new Element(5, "Copper", 6, true, 50, 0.3);
	Zinc = new Element(6, "Zinc", 18, true, 50, 0.3);
	Gallium = new Element(7, "Gallium", 20, true, 50, 0.2);
	Titanium = new Element(8, "Titanium", 55, true, 50, 0.6);
	Mercury = new Element(9, "Mercury", 30, true, 50, 0.2);
	Platinum = new Element(10, "Platinum", 60, true, 50, 0.5);

	for (var i = 0; i < 2; i++) {
		new Planet(generateRandomPlanetName(), Math.floor(Math.random() * 100));
	}
	
	discoveredPlanets[0].beginMining(1, discoveredPlanets[0]);
	discoveredPlanets[1].beginMining(1, discoveredPlanets[0]);

	updateElementList();
	updatePlanetList();
});
