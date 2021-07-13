var getTime = function () {
	var time = moment();
	time = time.format("k");
	time = parseInt(time);
	now = time;
	console.log(now);

	var textAreaEl = $("textarea");

	for (var i = 0; i < textAreaEl.length; i++) {
		var comp = textAreaEl[i].dataset.time;
		textAreaEl[i].getAttribute;

		if (comp < now) {
			textAreaEl[i].setAttribute("data-background", "past");
		}

		if (comp == now) {
			textAreaEl[i].setAttribute("data-background", "present");
		}

		if (comp > now) {
			textAreaEl[i].setAttribute("data-background", "future");
		}
	}
};
getTime();
var updateTime = setInterval(getTime, 3000);
