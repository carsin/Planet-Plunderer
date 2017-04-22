var mainViewButton = $("#main-view-button");
var planetViewButton = $("#planet-view-button");
var researchViewButton = $("#research-view-button");

var mainView = $("#main-view");
var planetView = $("#planet-view");
var researchView = $("#research-view");

mainViewButton.click(function() {
	if (!mainViewButton.hasClass("current")) {
		mainView.css("display", "inline");
		mainViewButton.addClass("current");
		if (planetViewButton.hasClass("current")) {
			planetViewButton.removeClass("current");
			planetView.css("display", "none");
		} else if (researchViewButton.hasClass("current")) {
			researchViewButton.removeClass("current");
			researchView.css("display", "none");
		}
	}
});

planetViewButton.click(function() {
	if (!planetViewButton.hasClass("current")) {
		planetViewButton.addClass("current");
		planetView.css("display", "inline");
		if (mainViewButton.hasClass("current")) {
			mainViewButton.removeClass("current");
			mainView.css("display", "none");
		} else if (researchViewButton.hasClass("current")) {
			researchViewButton.removeClass("current");
			researchView.css("display", "none");
		}
	}
});

researchViewButton.click(function() {
	console.log("click");
	if (!researchViewButton.hasClass("current")) {
		researchViewButton.addClass("current");
		researchView.css("display", "inline");
		if (mainViewButton.hasClass("current")) {
			mainViewButton.removeClass("current");
			mainView.css("display", "none");
		} else if (planetViewButton.hasClass("current")) {
			planetViewButton.removeClass("current");
			planetView.css("display", "none");
		}
	}
});