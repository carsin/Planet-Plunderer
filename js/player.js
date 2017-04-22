var player = {
	businessname: undefined,
	money: 10000,

	setBusinessName: function() {
		//player.businessname = prompt("What shall you call your buisness name");
		player.businessname = "prompt industries";
		$("#player-name").html(player.businessname);
	},

	updateMoney: function() {
		$("#money-count").html(player.money);
	},

}