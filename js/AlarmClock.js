/* StartGame.js
 * JavaScript file to arrange the alarm clock
 * Made on 04-11-2015
 * by GeOdin
 *
 *=========================================================
 * This JavaScript file includes the following functions: *
 *=========================================================
 * alarmClock()
 * startAlarmClock()
 * 
 *========
 * To do =
 *========
 * Add something on the screen to make it visible that the alarm has been set
 * Add reset button
 * Make the #title blink each second when the alarm is running
 */

//////////////////
// alarmClock() //
//////////////////

// Function to start the alarm clock and get the needed variables
function alarmClock() {
	var alarm;

	if (confirm("Ready to start the Alarm Clock? ") == true) {
		alarm = startAlarmClock();
		checkAlarmClock(alarm);
	}
}

///////////////////////
// startAlarmClock() //
///////////////////////

// Function to get the starting variables for the alarm clock

function startAlarmClock() {
	// Set the variables
	var alarm = new Object();
	var alarmHour = 25;
	var alarmMinutes = 61;
	var alarmSong = "";

	// Get the alarm clock time
	// Get the alarm hour
	while (alarmHour > 24) {

		// Get the alarm hour
		alarmHour = prompt("Which hour to set the alarm? (<25) ", "7");

		// Add the alarmHour to the alarm
		alarm.Hour = alarmHour;
	}
	// Get the alarm minutes
	while (alarmMinutes > 60) {

		// Get the alarm minutes
		alarmMinutes = prompt("How many minutes to set the alarm after the hour? (<61)", "00");
		if (alarmMinutes < 10) {
			alarmMinutes = "0" + alarmMinutes;
		}

		// Add the alarmMinutes to the alarm
		alarm.Minutes = alarmMinutes;
	}
	// Get the alarm song
	while (alarmSong.length < 1) {

		// Get the alarm song
		alarmSong = prompt("Which youtube song do you want to hear? \n Enter a webpage here. ", "https://youtu.be/K2FdarxQjw4");

		// Add the alarmSong to the alarm
		alarm.Song = alarmSong;
	}
	// Alarm is not yet running
	alarm.Running = false;

	// Return the alarm
	return alarm;
}

/////////////////////
// checkAlarmClock //
/////////////////////

// Function to check the time for the alarm clock

function checkAlarmClock(alarm) {
	// Set the variables
    var today = new Date();
    var currentHour = today.getHours();
    var currentMinutes = today.getMinutes();

	// Check to see whether the hour matches between the time and alarm clock
	if (alarm.Hour == currentHour) {
		// Check to see whether the minutes matches between the time and alarm clock
		if (alarm.Minutes == currentMinutes) {
			if (alarm.Running == false) {
				// Change the colors of the webpage and background
				document.body.style.backgroundColor = "red";
				document.getElementById("wholePage").style.backgroundColor = "#FFFF19";
				document.getElementById("mainTitle").style.color = "#FF1919";
				document.getElementById("dateTime").style.color = "#FF1919";
				// Open a new window with the song
				window.open(alarm.Song); //, "_self"
				// Adjust the alarm to running
				alarm.Running = true;
			}
		}
	}
    var t = setTimeout(function(){ checkAlarmClock(alarm) }, 1000); //1000 is 1 second, 60000 is 1 minute
}

/////////////////
// startTime() //
/////////////////

// Function to start showing the current time
//// from http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout_clock

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    var month = today.getMonth();
    if (month == 0) {
    	month = "January";
    } else if (month == 1) {
    	month = "February";
    } else if (month == 2) {
    	month = "March";
    } else if (month == 3) {
    	month = "April";
    } else if (month == 4) {
    	month = "May";
    } else if (month == 5) {
    	month = "June";
    } else if (month == 6) {
    	month = "July";
    } else if (month == 7) {
    	month = "August";
    } else if (month == 8) {
    	month = "September";
    } else if (month == 9) {
    	month = "October";
    } else if (month == 10) {
    	month = "November";
    } else if (month == 11) {
    	month = "December";
    }
    var day = today.getDay();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("dateTime").innerHTML = month + " " + day + " - " + h + ":" + m + ":" + s;

    // Show the time
    var t = setTimeout(function(){ startTime() }, 500);
}

//////////////////
// checkTime(i) //
//////////////////

// Function to check whether a 0 has to be put in front of the minutes or seconds of the time
//// from http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout_clock

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
