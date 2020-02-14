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
    if (weekday==5){
        var text = "Saturday = Preston Pancakes in the Park! 9am Saturday at the city park pavillion.";
        document.getElementById('pancakes').innerHTML=text;
        document.getElementById('pancakes').style.backgroundColor="#0fb4e7";
        document.getElementById('pancakes').style.textAlign="center";
        document.getElementById('pancakes').style.fontSize="14px";
        document.getElementById('pancakes').style.padding="12px";
        document.getElementById('pancakes').style.display="block";
    
    }