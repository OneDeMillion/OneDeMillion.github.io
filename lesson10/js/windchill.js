const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=e2cbb136e5d205d1154dddf8d9c86021';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

    document.getElementById('condition').textContent = jsObject.weather[0].description;
    document.getElementById('highTemp').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windSpd').textContent = jsObject.wind.speed;
    });


const apiURL2 = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=e2cbb136e5d205d1154dddf8d9c86021';

fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

    const fiveDayForecast=jsObject.list.filter(x => x.dt_txt.includes(`18:00:00`));
        console.log(jsObject);
        
    for (let i=0; i<fiveDayForecast.length; i++) {
        document.getElementById(`forecast${i+1}`).textContent = fiveDayForecast[i].main.temp;
        //var imagesrc = 'http://openweathermap.org/img/wn/' + jsObject.weather[0].icon + '.png';
        //var desc = jsObject.weather[0].description;
       // document.getElementById('imagesrc').textContent = imagesrc;
       // document.getElementById('icon').setAttribute('src', imagesrc);
       // document.getElementById('icon').setAttribute('alt', desc);
        
       // icon.setAttribute('src',jsObject.weather[0].icon + '.png');


    }

    }
    );





let t = parseFloat(document.getElementById("highTemp").innerText);
//console.log(t);
let s = parseFloat(document.getElementById("windSpd").innerText);
//console.log(s)
let f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * Math.pow(s,0.16));
//console.log(w)

if(t <= 50 && s > 3) {

document.getElementById("windChill").innerText=f.toFixed(0) 

}

else {
    document.getElementById("windChill").innerText="N/A";
}