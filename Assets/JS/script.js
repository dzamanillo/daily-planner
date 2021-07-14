//* Load Tasks Function
var loadTasks = function () {
	var savedTasks = JSON.parse(localStorage.getItem("tasks"));

	if (savedTasks === null) {
	} else {
		$("#nine-am-text").text(savedTasks[0].text);
		$("#ten-am-text").text(savedTasks[1].text);
		$("#eleven-am-text").text(savedTasks[2].text);
		$("#twelve-pm-text").text(savedTasks[3].text);
		$("#one-pm-text").text(savedTasks[4].text);
		$("#two-pm-text").text(savedTasks[5].text);
		$("#three-pm-text").text(savedTasks[6].text);
		$("#four-pm-text").text(savedTasks[7].text);
		$("#five-pm-text").text(savedTasks[8].text);
	}
};
loadTasks();

// *Time Coding Functions
var getTime = function () {
	var time = moment();
	time = time.format("k");
	time = parseInt(time);
	now = time;

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

// * Local Storage Array
var tasks = [
	{
		time: "9",
		text: "",
	},
	{
		time: "10",
		text: "",
	},
	{
		time: "11",
		text: "",
	},
	{
		time: "12",
		text: "",
	},
	{
		time: "13",
		text: "",
	},
	{
		time: "14",
		text: "",
	},
	{
		time: "15",
		text: "",
	},
	{
		time: "16",
		text: "",
	},
	{
		time: "17",
		text: "",
	},
];

//* Save Tasks Function
var saveTasks = function () {
	localStorage.setItem("tasks", JSON.stringify(tasks));
};

//* Save Button
$(".container").on("click", "button", function (event) {
	event.preventDefault();

	var textAreas = $("textarea");

	for (var i = 0; i < textAreas.length; i++) {
		var area = textAreas[i];

		let newText = area.value;

		area.textContent = newText;

		tasks[i].text = newText;

		saveTasks();
	}
});
