var Stone;
var Iron;

$(document).ready(function() {
	player.setBusinessName();
	player.updateMoney();

	Stone = new Element(0, "Stone", 2, true, 10);
	Iron = new Element(1, "Iron", 10, true, 2);

	new Planet("Zorkbork", 3, 10);
	updateElementList();
	updatePlanetList();

});
