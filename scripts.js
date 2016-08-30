var secondsPerMin = 60;
var minPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;

var secondsPerDay = secondsPerMin * minPerHour * hoursPerDay;
document.write('There are ' + secondsPerDay + ' seconds in a day');

var yearsAlive = 39;
var secondsAlive = yearsAlive * secondsPerDay;
document.write(" I've been alive for more than " + secondsAlive + " seconds");
