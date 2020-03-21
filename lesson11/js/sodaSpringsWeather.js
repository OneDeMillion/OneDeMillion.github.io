const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=e2cbb136e5d205d1154dddf8d9c86021';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      document.getElementById('condition').textContent = jsObject.weather[0].description;
      document.getElementById('highTemp').textContent = jsObject.main.temp;
      document.getElementById('humidity').textContent = jsObject.main.humidity;
      document.getElementById('windSpd').textContent = jsObject.wind.speed;
      document.getElementById('windChill').textContent = windChill(jsObject.main.temp, jsObject.wind.speed);
    });



const apiURL2 = 'http://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=e2cbb136e5d205d1154dddf8d9c86021';

fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObject) => {
      //console.log(jsObject);
      let days = ['Sun', 'Mon', 'Tues', 'Weds', 'Thur', 'Fri', 'Sat'];
      let fiveDayForecast=jsObject.list.filter(x => x.dt_txt.includes(`18:00:00`));
      //console.log(jsObject);
      let today = new Date();
      let d = today.getDay();
        
      for (let i=0; i<fiveDayForecast.length; i++) {
        document.getElementById(`forecast${i+1}`).textContent = fiveDayForecast[i].main.temp;
        var imagesrc = `https://openweathermap.org/img/w/${fiveDayForecast[i].weather[0].icon}.png`;
        var desc = fiveDayForecast[i].weather[0].description;
        //document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById(`icon${i+1}`).setAttribute("src", imagesrc);
        document.getElementById(`icon${i+1}`).setAttribute('alt', desc);
        
        let day;
        switch (d+i+1) {
            case 7: day = 0;
            break;
            case 8: day = 1;
            break;
            case 9: day = 2;
            break;
            case 10: day = 3;
            break;
            case 11: day = 4;
            break;
            default:
              day = d+i+1;
        }
    
        document.getElementById(`fiveday${i+1}`).textContent = days[day];
      }
    });



function windChill(t, s) {
    if (t <= 50 && s > 3) {
      return (35.74 + (0.6215 * t) - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * Math.pow(s,0.16))).toFixed(1);
    } else {
      return "N/A";
    }
}