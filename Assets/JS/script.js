// *Time Coding Functions
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

// * Local Storage Array
var tasks = [
	{
		time: "nine-am-text",
		text: "",
	},
	{
		time: "ten-am-text",
		text: "",
	},
	{
		time: "eleven-am-text",
		text: "",
	},
	{
		time: "twelve-pm-text",
		text: "",
	},
	{
		time: "one-pm-text",
		text: "",
	},
	{
		time: "two-pm-text",
		text: "",
	},
	{
		time: "three-pm-text",
		text: "",
	},
	{
		time: "four-pm-text",
		text: "",
	},
	{
		time: "five-pm-text",
		text: "",
	},
];

//* Save Tasks Function
var saveTasks = function () {
	localStorage.setItem("tasks", JSON.stringify(tasks));
};

//TODO Load Tasks Function
var loadTasks = function () {
	var savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

	console.log(typeof savedTasks);

	for (var i = 0; i < savedTasks.length; i++) {}
};
loadTasks();

// * Save Button
$(".container").on("click", "button", function (event) {
	event.preventDefault();
	loadTasks();
	// Target row of button
	var row = event.target.closest(".row");
	console.log(row);
	// Target value of textarea
	var newText = row.childNodes[3].value;
	console.log(row.childNodes);
	// Set textarea value to new text
	row.childNodes[3].textContent = newText;

	// Get data-time
	var dataTimeValue = row.childNodes[3].getAttribute("data-time");
	// Turn to int
	dataTimeValue = parseInt(dataTimeValue);

	tasks[dataTimeValue - 9].text = newText;
	saveTasks();
});
