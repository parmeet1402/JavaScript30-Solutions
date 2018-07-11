var curDate = new Date(Date.now());
hour = (curDate.getHours())*30;
minute = (curDate.getMinutes())*6;
second = (curDate.getSeconds())*6;

var hourDOM = document.getElementById("hourHand")
var minuteDOM = document.getElementById("minuteHand")
var secondDOM = document.getElementById("secondHand")

hourDOM.style.transform = "rotate(" + hour + "deg)";
minuteDOM.style.transform = "rotate(" + minute + "deg)";
secondDOM.style.transform = "rotate(" + second + "deg)";


setTimeout (function(){
    window.location.reload(1);
}, 1000);