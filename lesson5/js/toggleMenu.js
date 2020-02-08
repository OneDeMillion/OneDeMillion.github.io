const menuButton = document.querySelector(".menuButton");
menuButton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
    document.querySelector("*.primaryNav").classList.toggle("respond");
}

let d = new Date();
let currentYear = d.getFullYear();
document.getElementById('currentYear').textContent=currentYear;


    let currDate = new Date();
    var weekday = new Array(7);
    weekday[0]="Sunday";
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="Thursday";
    weekday[5]="Friday";
    weekday[6]="Saturday";

    var month = new Array(12);
    month[0]="January";
    month[1]="February";
    month[2]="March";
    month[3]="April";
    month[4]="May";
    month[5]="June";
    month[6]="July";
    month[7]="August";
    month[8]="September";
    month[9]="October";
    month[10]="November";
    month[11]="December";
    var currMonth=month[currDate.getMonth()];
 var currDay=weekday[currDate.getDay()];
let stringDate=currDay+", "+currDate.getDate()+" "+currMonth+" "+currentYear;
document.getElementById("todayDate").textContent=stringDate;

function Banner() {
    let currDate = new Date();
    let today = currDate.getDay();
    if(today==5) {
        document.getElementById("pancakes").style.display="block";
    }
}