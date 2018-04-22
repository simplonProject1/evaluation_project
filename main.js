// 			DECLARING GLOBAL VARIABLES

// pseudo data base

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

// information about the months
var months = [ { name: "Janvier", days: 31 }, { name: "Février", days: 28 }, { name: "Mars", days: 31 }, { name: "Avril", days: 30 }, { name: "Mai", days: 31 }, { name: "Juin", days: 30 }, { name: "Juillet", days: 31 }, { name: "Août", days: 31 }, { name: "Septembre", days: 30 }, { name: "Octobre", days: 31 }, { name: "Novembre", days: 30 }, { name: "Décembre", days: 31 }]; 

var currentDate = new Date(); // current date save as a variable
var day = currentDate.getDate(); // date: number of the current day
var month = currentDate.getMonth(); // date: current month
var year = currentDate.getFullYear(); // date: current year
var dayName = currentDate.getDay(); // date: day of a week
var daysInMonth; // how many days are in a current month
var eventIndex; // index of an event saved in "eventsToDisplay" variable
var weekToDisplay; // week to be displayd
var numberOfWeeks; // number of weeks in a month
var view = "week" // current view (week/month)	

// 			FUNCTION & METHODS CALLED ONLOAD

window.onload = function () {
	document.getElementById("currentMonth").innerHTML = months[month].name; // finding the current month in the pseudo data base; displaing the month name

	findEventIndex(day); // checking if there is an event at current day
	getEventDetails(); // finding event details in the pseudo data base; displaying the details
	createCalendar(); // creating a calendar for a current month

// 			 ADDING EVENT LISTENERS

// to buttons:
	document.getElementById("prvMonth").addEventListener("click", previousMonth);
	document.getElementById("nxtMonth").addEventListener("click", nextMonth);
	document.getElementById("prvWeek").addEventListener("click", previousWeek);
	document.getElementById("nxtWeek").addEventListener("click", nextWeek);

// to created HTML elements:
	document.getElementById("currentMonth").addEventListener("click", changeView);
	addDayClickEvent();
	addWeekClickEvent();
};


// 			 FUNCTION DEFINITIONS

// 		"major" function

// displaying a previous week

function previousWeek () {
	if(day < 7) { // if current day is less than 7
		var previousMonthNumberOfDays = months[month-1].days; // number of days of previous month
		day = previousMonthNumberOfDays; // changing day to a last day of previous month
		previousMonth(); // calling a "previous month" function to change the month
	} else { // if currant day is not less than 7
		weekToDisplay[4]--; // show previous week
		day-=7; // substract 7 from current day
	}
	removeWeeks(); // remove calendar elements
	createCalendar(); // create new calendar elements
}

// displaying a next week

function nextWeek () {
	if(day > daysInMonth-6) { // if there is less than 6 days to the end of the month
		day = 1; // change the day to first day of month
		nextMonth(); // calling a "next month" funtion to change the month
	} else { // if there is more than 6 days to the end of the month
		weekToDisplay[4]++; // show next week
		day+=7; // add 7 to current day
	}
	removeWeeks(); // remove calendar elements
	createCalendar(); // create new calendar elements
}

// displaying a previous month

function previousMonth () {
	month = month - 1; // substract one from current month
	removeWeeks(); // remove calendar elements
	createCalendar(); // create new calendar elements
	changeWeeksDisplay("flex"); // show all weeks except model one (= view: month) 
	document.getElementById("currentMonth").innerHTML = months[month].name; // change displayed month name
	addDayClickEvent(); // add "click" event to new calendar days elements
	addWeekClickEvent(); // add "click" event to new calendar weeks elements
}

// displaying a next month

function nextMonth () {
	month = month + 1; // add one to current month
	removeWeeks(); // remove calendar elements
	createCalendar(); // create new calendar elements
	changeWeeksDisplay("flex"); // show all weeks except model one (= view: month) 
	document.getElementById("currentMonth").innerHTML = months[month].name; // change displayed month name
	addDayClickEvent(); // add "click" event to new calendar days elements
	addWeekClickEvent(); // add "click" event to new calendar weeks elements
}

// creating a calendar for a current month

function createCalendar () {
	showDays(); // works when days were previously hidden
	findDaysInMonth(); // find how many days are in a current month
	findWeeksInMonth(); // find how many weeks are in the current month
	var firstDayOfMonthName = findFirstDayOfMonthName(); // find day of week of the first day of a month 
	createWeeks(numberOfWeeks); // creating and displaying weeks depending on how many weeks are in a month ("numberOfWeeks")
	addDayNumbersAndCurrentId(numberOfWeeks, firstDayOfMonthName, daysInMonth); // adding a number of a day in a calendar elements; adding id to a current day
	hideEmptyDays(); // hiding days elements of a calendar which don't contain a number of a day; adding a pointer to the one that are visible
	changeWeeksDisplay("none"); // hide all weeks (= view: week) 
	document.getElementById(weekToDisplay).style.display = "flex"; // display a current week
	addDayClickEvent(); // add "click" event to new calendar days elements
	addWeekClickEvent(); // add "click" event to new calendar weeks elements
}

// changing current view (week/month)

function changeView () { 
	if (view === "week"){ // if current view is a week view => change to month view
		changeWeeksDisplay("flex"); // show all weeks except model one (= view: month) 
		document.getElementById("details").style.display = "none"; // hide event details
		document.getElementById("prvMonth").style.display = "block"; // show "previous month" button
		document.getElementById("nxtMonth").style.display = "block"; // show "next month" button
		document.getElementById("prvWeek").style.display = "none"; // hide "previous week" button
		document.getElementById("nxtWeek").style.display = "none"; // hide "previous week" button
		view = "month"; // change view status to month
	} else { // if current view is a month view => change to week view
		changeWeeksDisplay("none"); // hide all week elements
		document.getElementById(weekToDisplay).style.display = "flex"; // show current week
		document.getElementById("details").style.display = "flex"; // show event details
		document.getElementById("prvMonth").style.display = "none"; // hide "previous month" button
		document.getElementById("nxtMonth").style.display = "none"; // hide "next month" button
		document.getElementById("prvWeek").style.display = "block"; // show "previous week" button
		document.getElementById("nxtWeek").style.display = "block"; // show "next week" button
		view = "week"; // change view status to week
	}
}

// 		"supporting" function

// removing the element calendar while changing the month

function removeWeeks () {
	var parent = document.getElementById("month"); // find a parent element
	var children = document.getElementById("month").children; // find children of the partent
	var numberOfChildren = children.length; // save a children number
	for (var i = 0; i < numberOfChildren; i++) { // repeate as many times as there were children
		parent.removeChild(children[0]); // remove first child
	}
}

// hiding days elements of a calendar which don't contain a number of a day; adding a pointer to the one that are visible

function hideEmptyDays() {
	var emptyDays = document.getElementsByClassName("dayNumber"); // find all day elements
	for (var i = 0; i < emptyDays.length; i++) { // iterate through day elements array
		if(emptyDays[i].innerHTML == "") { // if array element's inner HTML is empty
			emptyDays[i].parentNode.style.visibility = "hidden"; // hide empty element
		} else { // if array element's inner HTML is not empty
			emptyDays[i].style.cursor="pointer"; // change a cursor style to pointer
		}
	}
}

// displaying the calendar days element after the visibility was change to hidden

function showDays () {
	var emptyDays = document.getElementsByClassName("dayNumber"); // find all day elements
	for (var i = 0; i < emptyDays.length; i++) { // iterate through day elements array
		emptyDays[i].parentNode.style.visibility = "visible"; // show all elements
	}
}

// displaying the calendar weeks element after the visibility was change to hidden

function changeWeeksDisplay (display) { // take a paramenter ("flex" or "none")
	var showWeeks = document.getElementsByClassName("week"); // find all week elements
	for (var i = 0; i < showWeeks.length; i++) { // iterate trough week elements array
		showWeeks[i].style.display = display; // change week display style depending on the parameter ("flex" or "none")
	}
	document.getElementById("currentWeek").style.display = "none"; // hide the model week // wrong Id; should be: #modelweek; // it'll be good to change here and in HTML
}

// checking if there is an event at current day

function findEventIndex (dayToCompare) { // take a day parameter
	for (var i = 0; i < eventsToDisplay.length; i++) { // iterate through events array
		if (eventsToDisplay[i].day == dayToCompare && eventsToDisplay[i].month == month) { // if key: value pair matches...
			eventIndex = i; // save an index of an event
			return true; // retrun that index was found
		}
	}
	eventIndex = undefined; // if index not found set an event as not found
}

// finding event details in the pseudo data base based on the "event index"; displaying the details of the index

function getEventDetails () { 
	if (eventIndex == undefined) { // displayed when there is no event at current day
		document.getElementById("description").style.visibility = "hidden"; // hide the HTML details
		document.getElementById("currentPhoto").setAttribute("src", "NoEvent.jpg"); // display "no event" picture
	} else { // finding details about event and displaying it
		document.getElementById("description").style.visibility = "visible"; // show HTML details
		// set displayed details based on the information in the pseudo data base
		document.getElementById("startingTime").innerHTML = eventsToDisplay[eventIndex].startingTime;
		document.getElementById("endingTime").innerHTML = eventsToDisplay[eventIndex].endingTime;
		document.getElementById("title").innerHTML = eventsToDisplay[eventIndex].title;
		document.getElementById("eventDescription").innerHTML = eventsToDisplay[eventIndex].eventDescription;
		document.getElementById("place").innerHTML = eventsToDisplay[eventIndex].place;
		document.getElementById("currentPhoto").setAttribute("src", eventsToDisplay[eventIndex].imgSource);
	}
}

// finding how many days are in a current month

function findDaysInMonth () {
	daysInMonth = months[month].days; // find number of days in month in the pseudo data base
}

// finding a day of a week of the first day in a month

function findFirstDayOfMonthName () {
	var firstDayOfMonthName = new Date(year,month,1).getDay(); // find day of the week of the first day of the current month
	return firstDayOfMonthName; // return day name (as a 0-6 value)
}

// finding how many weeks are in a current month

function findWeeksInMonth () {
	var startingDay = 1; // setting a first day of the month 
	var daysInStartingWeek = 7 - startingDay; // count days in the first week
	var daysLeft = daysInMonth - daysInStartingWeek; // substracting 1 week
	var weeksLeft = Math.floor(daysLeft/7); // count how many full weeks left in a month
	weeksLeft++; // 1 week added for the first week
	if(daysLeft%7 !== 0) { // if there is something left from the full weeks...
	  numberOfWeeks = ++weeksLeft; // add 1 to weeks number and save it in a variable
	} else { // if there is nothing left but the full weeks...
	  numberOfWeeks = weeksLeft; // save a result in a variable
	}
}

// creating and displaying weeks depending on how many weeks are in a month ("numberOfWeeks")

function createWeeks (numberOfWeeks) {
	for(var i = 0; i < numberOfWeeks; i++) { // repete as many times as there is weeks in a month
		var element = document.getElementsByClassName("weekToCopy")[0]; // find a model week // better to use a specific, already existing id (currentWeek/modelWeek)
	    var clone = element.cloneNode(true); // copy found element
	    idValue = "week" + i; // increase Id by 1 every time it's done
	    clone.setAttribute("id", idValue); // add id to a copied element
	    document.getElementById("month").appendChild(clone); // add copied element to HTML
	}
}

// adding a number of a day in a calendar elements; adding Id to a current day to use it later

function addDayNumbersAndCurrentId (numberOfWeeks, firstDayOfMonthName, daysInMonth) {
	var daysCounter = daysInMonth; // set daysCounter to a number of days in month
	var currentDayNumber = 1; // start counting days from 1
	for (var i = 0; i < numberOfWeeks; i++) { // repete as many times as there is weeks in a month
		for(var j = firstDayOfMonthName ; j < 7; j++) { // repete up to 7 times starting from the particular day
			if(daysCounter == 0) { // if there is no more days...
				return; // break the loop
			}
			var currentSelector = "#week" + i + " " + ".day" + j + " .dayNumber"; // set a selector
			if(currentDayNumber === day) { // if currently day number is equal to a current day...
				document.querySelector(currentSelector).setAttribute("id", "currentDay"); // add an Id to found element // not necessary anymore; better to remove if Maeli doesn't use it
				weekToDisplay = "week" + i; // save a currenty used week's number
				document.querySelector(currentSelector).parentNode.setAttribute("id", "divCurrentDay") // add an Id to found element
			}
			document.querySelector(currentSelector).innerHTML = (currentDayNumber); // add HTML content to a selected element
			if(findEventIndex(currentDayNumber)) { // if there is an event connected to currently use day ...
				document.querySelector(currentSelector).style.fontWeight = "bold"; // change style of the used element to bold
				document.querySelector(currentSelector).style.color = "black"; // change style of the used element to black
			}
			currentDayNumber++ // increase used day number
			daysCounter--; // decrease day counter
		}
		firstDayOfMonthName = 0; // after inner loop finish to run change day of the week to Sunday
	}
}

// adding a "click" event to created calendar day elements

function addDayClickEvent () {
	var days = document.getElementsByClassName("dayNumber"); // find all elements with class "dayNumber"
	for (var i = 0; i < days.length; i++) { // repeate as many times as number of the "dayNumber" elements
		if (days[i].innerHTML != "") { // if the element HTML content is not empty ...
			days[i].addEventListener("click", dayClicked); // add a "click" event listener to an element trigging "dayClicked" function
		}
	}
}

// adding a "click" event to created calendar week elements

function addWeekClickEvent () { 
	var days = document.getElementsByClassName("dayNumber"); // find all elements with class "dayNumber"
	for (var i = 0; i < days.length; i++) { // repeate as many times as number of the "dayNumber" elements
		if (days[i].innerHTML != "") { // if the element HTML content is not empty ...
			days[i].addEventListener("click", weekClicked); // add a "click" event listener to an element "weekClicked" function
		}
	}
}

// function called when day element clicked; saves a clicked day as a variable

function dayClicked (event) { // pass an informaton about the element clicked into the function
	var element = event.target; // save information about the element as a variable
	document.getElementById("divCurrentDay").removeAttribute("id"); // remove clicked element's Id
	element.parentNode.setAttribute("id", "divCurrentDay"); // add a new Id to the element
	day = parseInt(event.target.innerHTML); // save the HTML content as a day variable
	findEventIndex(day); // check if there is an event connected to that day
	getEventDetails(); // display informations about an event (or lack of it)
}

// function called when week element clicked; saves a clicked week as a variable

function weekClicked (event) { // pass an informaton about the element clicked into the function
	weekToDisplay = event.target.parentNode.parentNode.getAttribute('id'); // save Id of clicked grandparent element
	view = "month"; // change view status to month
	changeView(); // change view to week (because it was set to month before)
}