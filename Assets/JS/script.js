var now = 13;
// 9am Logic
var nineAmTextAreaEl = document.getElementById("nine-am-text");

if (now < 9) {
	nineAmTextAreaEl.classList.remove("past");
	nineAmTextAreaEl.classList.remove("present");
	nineAmTextAreaEl.classList.add("future");
}
if (now == 9) {
	nineAmTextAreaEl.classList.remove("future");
	nineAmTextAreaEl.classList.remove("past");
	nineAmTextAreaEl.classList.add("present");
}
if (now > 9) {
	nineAmTextAreaEl.classList.remove("future");
	nineAmTextAreaEl.classList.remove("present");
	nineAmTextAreaEl.classList.add("past");
}

// 10am Logic
var tenAmTextAreaEl = document.getElementById("ten-am-text");

if (now < 10) {
	tenAmTextAreaEl.classList.remove("past");
	tenAmTextAreaEl.classList.remove("present");
	tenAmTextAreaEl.classList.add("future");
} else if (now == 10) {
	tenAmTextAreaEl.classList.remove("future");
	tenAmTextAreaEl.classList.remove("past");
	tenAmTextAreaEl.classList.add("present");
} else {
	tenAmTextAreaEl.classList.remove("future");
	tenAmTextAreaEl.classList.remove("present");
	tenAmTextAreaEl.classList.add("past");
}

// 11am Logic
var elevenAmTextAreaEl = document.getElementById("eleven-am-text");

if (now < 11) {
	elevenAmTextAreaEl.classList.remove("past");
	elevenAmTextAreaEl.classList.remove("present");
	elevenAmTextAreaEl.classList.add("future");
} else if (now == 11) {
	elevenAmTextAreaEl.classList.remove("future");
	elevenAmTextAreaEl.classList.remove("past");
	elevenAmTextAreaEl.classList.add("present");
} else {
	elevenAmTextAreaEl.classList.remove("future");
	elevenAmTextAreaEl.classList.remove("present");
	elevenAmTextAreaEl.classList.add("past");
}

// 12pm Logic
var twelvePmTextAreaEl = document.getElementById("twelve-pm-text");

if (now < 12) {
	twelvePmTextAreaEl.classList.remove("past");
	twelvePmTextAreaEl.classList.remove("present");
	twelvePmTextAreaEl.classList.add("future");
} else if (now == 12) {
	twelvePmTextAreaEl.classList.remove("future");
	twelvePmTextAreaEl.classList.remove("past");
	twelvePmTextAreaEl.classList.add("present");
} else {
	twelvePmTextAreaEl.classList.remove("future");
	twelvePmTextAreaEl.classList.remove("present");
	twelvePmTextAreaEl.classList.add("past");
}

// 1pm Logic
var onePmTextAreaEl = document.getElementById("one-pm-text");

if (now < 13) {
	onePmTextAreaEl.classList.remove("past");
	onePmTextAreaEl.classList.remove("present");
	onePmTextAreaEl.classList.add("future");
} else if (now == 13) {
	onePmTextAreaEl.classList.remove("future");
	onePmTextAreaEl.classList.remove("past");
	onePmTextAreaEl.classList.add("present");
} else {
	onePmTextAreaEl.classList.remove("future");
	onePmTextAreaEl.classList.remove("present");
	onePmTextAreaEl.classList.add("past");
}

// 2pm Logic
var twoPmTextAreaEl = document.getElementById("two-pm-text");

if (now < 14) {
	twoPmTextAreaEl.classList.remove("past");
	twoPmTextAreaEl.classList.remove("present");
	twoPmTextAreaEl.classList.add("future");
} else if (now == 14) {
	twoPmTextAreaEl.classList.remove("future");
	twoPmTextAreaEl.classList.remove("past");
	twoPmTextAreaEl.classList.add("present");
} else if (now > 14) {
	twoPmTextAreaEl.classList.remove("future");
	twoPmTextAreaEl.classList.remove("present");
	twoPmTextAreaEl.classList.add("past");
}

// 3pm Logic
var threePmTextAreaEl = document.getElementById("three-pm-text");

if (now < 15) {
	threePmTextAreaEl.classList.remove("past");
	threePmTextAreaEl.classList.remove("present");
	threePmTextAreaEl.classList.add("future");
} else if (now == 15) {
	threePmTextAreaEl.classList.remove("future");
	threePmTextAreaEl.classList.remove("past");
	threePmTextAreaEl.classList.add("present");
} else if (now > 15) {
	threePmTextAreaEl.classList.remove("future");
	threePmTextAreaEl.classList.remove("present");
	threePmTextAreaEl.classList.add("past");
}

// 4pm Logic
var fourPmTextAreaEl = document.getElementById("four-pm-text");

if (now < 16) {
	fourPmTextAreaEl.classList.remove("past");
	fourPmTextAreaEl.classList.remove("present");
	fourPmTextAreaEl.classList.add("future");
} else if (now == 16) {
	fourPmTextAreaEl.classList.remove("future");
	fourPmTextAreaEl.classList.remove("past");
	fourPmTextAreaEl.classList.add("present");
} else if (now > 16) {
	fourPmTextAreaEl.classList.remove("future");
	fourPmTextAreaEl.classList.remove("present");
	fourPmTextAreaEl.classList.add("past");
}

// 5pm Logic
var fivePmTextAreaEl = document.getElementById("five-pm-text");

if (now < 17) {
	fivePmTextAreaEl.classList.remove("past");
	fivePmTextAreaEl.classList.remove("present");
	fivePmTextAreaEl.classList.add("future");
} else if (now == 17) {
	fivePmTextAreaEl.classList.remove("future");
	fivePmTextAreaEl.classList.remove("past");
	fivePmTextAreaEl.classList.add("present");
} else if (now > 17) {
	fivePmTextAreaEl.classList.remove("future");
	fivePmTextAreaEl.classList.remove("present");
	fivePmTextAreaEl.classList.add("past");
}
