var getTimeData = function (target) {
	return document.querySelector(target).getAttribute("data-time");
};

console.log(getTimeData("#eleven-am-text"));

// TODO Temp Time Tracker
var test = 9;

var textAreaEl = $("textarea");

for (var i = 0; i < textAreaEl.length; i++) {
	var comp = textAreaEl[i].dataset.time;
	textAreaEl[i].getAttribute;

	if (comp < test) {
		textAreaEl[i].setAttribute("data-background", "past");
	}

	if (comp == test) {
		textAreaEl[i].setAttribute("data-background", "present");
	}

	if (comp > test) {
		textAreaEl[i].setAttribute("data-background", "future");
	}
}
