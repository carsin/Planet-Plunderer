var player = {
	businessname: undefined,
	money: 10000,
	miningRigs: 1,
	miningRigEfficiency: 0.4,

	setBusinessName: function(name) {
		player.businessname = name;
		$("#player-name").html(player.businessname);
		$("#player-name").click(player.promptBusinessName);
	},

	promptBusinessName: function() {
		var newName = prompt("What shall you call your business");
		if (newName !== "" && newName !== null && newName !== "null") {
			player.setBusinessName(newName);
			gameConsole.log("You have changed your business name to " + newName)
		} else {
			gameConsole.log("Your business name can't be nothing!");
		}
	},

	updateMoney: function() {
		$("#money-count").html(player.money);
	},

}