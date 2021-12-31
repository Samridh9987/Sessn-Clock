let a;
let hour;
let minute;
let seconds;
let date;
let month;
let year;
let day;
let rday;
let sec;
let min;
let hours;
let dates;
let months;
let time;
let rdate;
let final;


setInterval(() => {
a = new Date();
hour = a.getHours();
minute = a.getMinutes();
seconds = a.getSeconds();
date = a.getDate();
month = a.getMonth();
year = a.getFullYear();
day = a.getDay();

if (day == 0) {
    rday = "Sunday";
} else if (day == 1) {
    rday = "Monday";
} else if (day == 2) {
    rday = "Tuesday";
} else if (day == 3){
    rday = "Wednesday";
} else if (day == 4){
    rday = "Thursday";
} else if (day == 5){
    rday = "Friday";
} else {
    rday = "Saturday";
}

if (seconds < 10) {
    sec = "0" + seconds;
} else {
    sec = seconds;
}

if (minute < 10) {
    min = "0" + minute;
} else {
    min = minute;
}

if (hour < 10) {
    hours = "0" + hour;
} else {
    hours = hour;
}

if (date < 10) {
    dates = "0" + date;
} else {
    dates = date;
}

if (month < 10) {
    months = "0" + month;
} else {
    months = month;
}    


time = hours + ":" + min + ":" + sec;
rdate = dates + "/" + months + "/" + year;
document.getElementById('here').innerHTML = time;
document.getElementById('here2').innerHTML = rdate;
document.getElementById('d').innerHTML = rday;
}, 1000);

function redirect(){
  window.location.replace("digital_index.html");
};

function redirect2(){
    window.location.replace("index.html");
};