var eventsToDisplay = [

	{day: 25, month: 4, startingTime: "15:00", endingTime: "26 mai", title: "ActInSpace", eventDescription: "La troisième édition d'ActInSpace se déroulera en simultané dans plusieurs villes de France (dont Cannes), d'Europe et du monde les 25 et 26 mai 2018. Le but : relever par équipe et en 24 heures un des défis proposés par le CNES, l'ESA et leurs partenaires.", place: "5 rue Mimont, Cannes", imgSource: "ActInSpace.jpg"},

	{day: 26, month: 4, startingTime: "25 mai", endingTime: "18:00", title: "ActInSpace", eventDescription: "La troisième édition d'ActInSpace se déroulera en simultané dans plusieurs villes de France (dont Cannes), d'Europe et du monde les 25 et 26 mai 2018. Le but : relever par équipe et en 24 heures un des défis proposés par le CNES, l'ESA et leurs partenaires.", place: "5 rue Mimont, Cannes", imgSource: "ActInSpace.jpg"},

	{day: 6, month: 3, startingTime: "15:30", endingTime: "7 avril", title: "﻿Hackathon for Tourism", eventDescription: "La CCI Nice Côte d’Azur, en partenariat avec Telecom Valley et le Business Pole, organise la 1ere édition du HOT Hackathon « Hackathon fOr Tourism ».", place: "Sophia Antipolis", imgSource: "HOT.jpg"},

	{day: 7, month: 3, startingTime: "6 avril", endingTime: "20:00", title: "﻿Hackathon for Tourism", eventDescription: "La CCI Nice Côte d’Azur, en partenariat avec Telecom Valley et le Business Pole, organise la 1ere édition du HOT Hackathon « Hackathon fOr Tourism ».", place: "Sophia Antipolis", imgSource: "HOT.jpg"},

	{day: 15, month: 4, startingTime: "19h00", endingTime: "Fin de soirée", title: "﻿Astrorama", eventDescription: "Guidés par les animateurs d'Astrorama, venez observer le Soleil, découvrir le ciel nocturne à travers lunettes et télescopes, explorer la galaxie sous le planétarium ou vous initier à l’astronautique.", place: "Eze", imgSource: "Astrorama.jpeg"},

	{day: 13, month: 3, startingTime: "9h00", endingTime: "12h30", title: "﻿Inauguration Simplon Cannes Frayère.", eventDescription: "Inauguration de l’école Simplon à Cannes, premier temps fort du projet Nouvelle Frayère !", place: "Cannes-la-Bocca", imgSource: "Simplon.jpg"},

	{day: 23, month: 3, startingTime: "15:00", endingTime: "24 Avril", title: "ActInSpace", eventDescription: "La troisième édition d'ActInSpace se déroulera en simultané dans plusieurs villes de France (dont Cannes), d'Europe et du monde les 25 et 26 mai 2018. Le but : relever par équipe et en 24 heures un des défis proposés par le CNES, l'ESA et leurs partenaires.", place: "5 rue Mimont, Cannes", imgSource: "ActInSpace.jpg"},

	{day: 24, month: 3, startingTime: "23 Avril", endingTime: "20:00", title: "ActInSpace", eventDescription: "La troisième édition d'ActInSpace se déroulera en simultané dans plusieurs villes de France (dont Cannes), d'Europe et du monde les 25 et 26 mai 2018. Le but : relever par équipe et en 24 heures un des défis proposés par le CNES, l'ESA et leurs partenaires.", place: "5 rue Mimont, Cannes", imgSource: "ActInSpace.jpg"},

	{day: 6, month: 2, startingTime: "15:30", endingTime: "7 Mars", title: "﻿Hackathon for Tourism", eventDescription: "La CCI Nice Côte d’Azur, en partenariat avec Telecom Valley et le Business Pole, organise la 1ere édition du HOT Hackathon « Hackathon fOr Tourism ».", place: "Sophia Antipolis", imgSource: "HOT.jpg"},

	{day: 7, month: 2, startingTime: "6 Mars", endingTime: "20:00", title: "﻿Hackathon for Tourism", eventDescription: "La CCI Nice Côte d’Azur, en partenariat avec Telecom Valley et le Business Pole, organise la 1ere édition du HOT Hackathon « Hackathon fOr Tourism ».", place: "Sophia Antipolis", imgSource: "HOT.jpg"},

	{day: 15, month: 4, startingTime: "19:00", endingTime: "Fin de soirée", title: "﻿Astrorama", eventDescription: "Guidés par les animateurs d'Astrorama, venez observer le Soleil, découvrir le ciel nocturne à travers lunettes et télescopes, explorer la galaxie sous le planétarium ou vous initier à l’astronautique.", place: "Eze", imgSource: "Astrorama.jpeg"},

	{day: 13, month: 3, startingTime: "9h00", endingTime: "12h30", title: "﻿Inauguration Simplon Cannes Frayère.", eventDescription: "Inauguration de l’école Simplon à Cannes, premier temps fort du projet Nouvelle Frayère !", place: "Cannes-la-Bocca", imgSource: "Simplon.jpg"}
];

var months = [ { name: "Janvier", days: 31 }, { name: "Février", days: 28 }, { name: "Mars", days: 31 }, { name: "Avril", days: 30 }, { name: "Mai", days: 31 }, { name: "Juin", days: 30 }, { name: "Juillet", days: 31 }, { name: "Août", days: 31 }, { name: "Septembre", days: 30 }, { name: "Octobre", days: 31 }, { name: "Novembre", days: 30 }, { name: "Décembre", days: 31 }]; // months information

var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();
var dayName = currentDate.getDay();
var daysInMonth;
var eventIndex;
var weekToDisplay;
var numberOfWeeks;
var view = "week"

window.onload = function () {
	document.getElementById("currentMonth").innerHTML = months[month].name;
	document.getElementById("prvMonth").addEventListener("click", previousMonth);
	document.getElementById("nxtMonth").addEventListener("click", nextMonth);
	document.getElementById("prvWeek").addEventListener("click", previousWeek);
	document.getElementById("nxtWeek").addEventListener("click", nextWeek);
	document.getElementById("currentMonth").addEventListener("click", changeView);
	findEventIndex(day);
	getEventDetails();
	createCalendar(); 
	addDayClickEvent();
	addWeekClickEvent();
};

function previousWeek () {
	if(day < 7) {
		var previousMonthNumberOfDays = months[month-1].days;
		day = previousMonthNumberOfDays;
		previousMonth();
	} else {
		weekToDisplay[4]--;
		day-=7;
	}
	removeWeeks();
	createCalendar();
}

function nextWeek () {
	if(day > daysInMonth-6) {
		day = 1;
		nextMonth();
	} else {
		weekToDisplay[4]++;
		day+=7;
	}
	removeWeeks();
	createCalendar();
}

function previousMonth () {
	month = month - 1;
	currentDate = new Date(year,month,day);
	dayName = currentDate.getDay();
	
	removeWeeks();
	createCalendar();
	changeWeeksDisplay("flex");
	document.getElementById("currentWeek").style.display = "none";
	document.getElementById("currentMonth").innerHTML = months[month].name;
	addDayClickEvent();
	addWeekClickEvent();
}

function nextMonth () {
	month = month + 1;
	currentDate = new Date(year,month,day);
	dayName = currentDate.getDay();
	
	removeWeeks();
	createCalendar();
	changeWeeksDisplay("flex");
	document.getElementById("currentWeek").style.display = "none";
	document.getElementById("currentMonth").innerHTML = months[month].name;
	addDayClickEvent();
	addWeekClickEvent();
}

function createCalendar () {
	showDays();
	findDaysInMonth();
	findWeeksInMonth();
	var firstDayOfMonthName = findFirstDayOfMonthName(); // wywalić to do create weeks
	createWeeks(numberOfWeeks);
	addDayNumbersAndCurrentId(numberOfWeeks, firstDayOfMonthName, daysInMonth);
	hideEmptyDays();
	changeWeeksDisplay("none");
	document.getElementById(weekToDisplay).style.display = "flex";
	addDayClickEvent();
	addWeekClickEvent();
}

function hideEmptyDays() {
	var emptyDays = document.getElementsByClassName("dayNumber");
	for (var i = 0; i < emptyDays.length; i++) {
		if(emptyDays[i].innerHTML == "") {
			emptyDays[i].parentNode.style.visibility = "hidden";
		}
	}
}

function showDays () {
	var emptyDays = document.getElementsByClassName("dayNumber");
	for (var i = 0; i < emptyDays.length; i++) {
		emptyDays[i].parentNode.style.visibility = "visible";
	}
}

function findEventIndex (dayToCompare) {
	for (var i = 0; i < eventsToDisplay.length; i++) {
		if (eventsToDisplay[i].day == dayToCompare && eventsToDisplay[i].month == month) {
			eventIndex = i;
			return true;
		}
	}
	eventIndex = undefined;
}

function getEventDetails () {
	if (eventIndex == undefined) { // displayed when there is no event at current day
		document.getElementById("descrtiption").style.visibility = "hidden";
		document.getElementById("currentPhoto").setAttribute("src", "NoEvent.jpg");
	} else { // finding details about event and displaying it
		document.getElementById("descrtiption").style.visibility = "visible";
		document.getElementById("startingTime").innerHTML = eventsToDisplay[eventIndex].startingTime;
		document.getElementById("endingTime").innerHTML = eventsToDisplay[eventIndex].endingTime;
		document.getElementById("title").innerHTML = eventsToDisplay[eventIndex].title;
		document.getElementById("eventDescription").innerHTML = eventsToDisplay[eventIndex].eventDescription;
		document.getElementById("place").innerHTML = eventsToDisplay[eventIndex].place;
		document.getElementById("currentPhoto").setAttribute("src", eventsToDisplay[eventIndex].imgSource);
	}
}

function changeView () { 
	if (view === "week"){
		changeWeeksDisplay("flex");
		document.getElementById("details").style.display = "none";
		document.getElementById("prvMonth").style.display = "block";
		document.getElementById("nxtMonth").style.display = "block";
		document.getElementById("prvWeek").style.display = "none";
		document.getElementById("nxtWeek").style.display = "none";
		view = "month";
	} else {
		changeWeeksDisplay("none");
		document.getElementById("details").style.display = "flex";
		document.getElementById(weekToDisplay).style.display = "flex";
		document.getElementById("prvMonth").style.display = "none";
		document.getElementById("nxtMonth").style.display = "none";
		document.getElementById("prvWeek").style.display = "block";
		document.getElementById("nxtWeek").style.display = "block";
		view = "week";
	}
}

function findDaysInMonth () {
	daysInMonth = months[month].days;
}

function findFirstDayOfMonthName () {
	var firstDayOfMonthName = new Date(year,month,1).getDay(); 
	return firstDayOfMonthName; 
}

function createWeeks (numberOfWeeks) {
	for(var i = 0; i < numberOfWeeks; i++) {
		var element = document.getElementsByClassName("weekToCopy")[0];
	    var clone = element.cloneNode(true);
	    idValue = "week" + i;
	    clone.setAttribute("id", idValue);
	    document.getElementById("month").appendChild(clone);
	}
}

function addDayNumbersAndCurrentId (numberOfWeeks, firstDayOfMonthName, daysInMonth) {
	var daysCounter = daysInMonth;
	var currentDayNumber = 1;
	for (var i = 0; i < numberOfWeeks; i++) {
		for(var j = firstDayOfMonthName ; j < 7; j++) {
			if(daysCounter == 0) {
				return 0;
			}
			var currentSelector = "#week" + i + " " + ".day" + j + " .dayNumber";
			if(currentDayNumber === day) {
				document.querySelector(currentSelector).setAttribute("id", "currentDay");
				weekToDisplay = "week" + i;
				document.querySelector(currentSelector).parentNode.setAttribute("id", "divCurrentDay")
			}
			document.querySelector(currentSelector).innerHTML = (currentDayNumber);
			if(findEventIndex(currentDayNumber)) {
				document.querySelector(currentSelector).style.fontWeight = "bold";
			}
			currentDayNumber++
			daysCounter--;
		}
		firstDayOfMonthName = 0;
	}
}

function findWeeksInMonth () {
	var startingDay = 1;
	var daysInStartingWeek = 7 - startingDay;
	var daysLeft = daysInMonth - daysInStartingWeek;
	var weeksLeft = Math.floor(daysLeft/7);
	weeksLeft++;
	if(daysLeft%7 !== 0) {
	  numberOfWeeks = ++weeksLeft;
	} else {
	  numberOfWeeks = weeksLeft;
	}
}

function removeWeeks () {
	var parent = document.getElementById("month");
	var children = document.getElementById("month").children;
	var numberOfChildren = children.length;
	for (var i = 0; i < numberOfChildren; i++) {
		parent.removeChild(children[0]);
	}
}

function changeWeeksDisplay (display) {
	var showWeeks = document.getElementsByClassName("week");
	for (var i = 0; i < showWeeks.length; i++) {
		showWeeks[i].style.display = display;
	}
	document.getElementById("currentWeek").style.display = "none";
}

function addDayClickEvent () {
	var days = document.getElementsByClassName("dayNumber");
	for (var i = 0; i < days.length; i++) {
		console.log(days[i].innerHTML);
		if (days[i].innerHTML != "") {
			days[i].addEventListener("click", dayClicked);
		}
	}
}

function addWeekClickEvent () {
	var days = document.getElementsByClassName("dayNumber");
	for (var i = 0; i < days.length; i++) {
		if (days[i].innerHTML != "") {
			days[i].addEventListener("click", weekClicked);
		}
	}
}

function dayClicked (event) {
	var element = event.target;
		document.getElementById("divCurrentDay").removeAttribute("id");
		element.parentNode.setAttribute("id", "divCurrentDay");
		day = parseInt(event.target.innerHTML);
		findEventIndex(day);
		getEventDetails();
}

function weekClicked (event) {
	weekToDisplay = event.target.parentNode.parentNode.getAttribute('id');
	view = "month";
	changeView();
}
