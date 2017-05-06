$(document).ready(function() {
	player.setBusinessName("test");
	player.updateMoney();

	var Stone = new Element(0, "Stone", 2, true, 0, 0.2, 0.1);
	var Iron = new Element(1, "Iron", 15, true, 0, 0.4, 0.3);
	var Silver = new Element(2, "Silver", 15, true, 0, 0.3, 0.4);
	var Cobalt = new Element(3, "Cobalt", 20, true, 0, 0.3, 0.4);
	var Gold = new Element(4, "Gold", 50, true, 0, 0.2, 0.6);
	var Copper = new Element(5, "Copper", 6, true, 0, 0.3, 0.3);
	var Zinc = new Element(6, "Zinc", 18, true, 0, 0.3, 0.6);
	var Gallium = new Element(7, "Gallium", 20, true, 0, 0.2, 0.7);
	var Titanium = new Element(8, "Titanium", 55, true, 0, 0.6, 0.8);
	var Mercury = new Element(9, "Mercury", 30, true, 0, 0.2, 0.6);
	var Platinum = new Element(10, "Platinum", 60, true, 0, 0.5, 0.9);

	for (var i = 0; i < 2; i++) {
		new Planet(generateRandomPlanetName(), Math.floor(Math.random() * 100));
	}
	
	updateElementList();
	updatePlanetList();
});
