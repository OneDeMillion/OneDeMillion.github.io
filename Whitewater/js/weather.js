const apiURL =
"https://api.openweathermap.org/data/2.5/weather?id=4092267&units=imperial&APPID=e2cbb136e5d205d1154dddf8d9c86021";
fetch(apiURL)
  .then(response => response.json())
  .then(jsObject => {
    document.getElementById("condition").textContent =
      jsObject.weather[0].description;
    document.getElementById("highTemp").textContent = jsObject.main.temp;
  }
  );
    
    //console.log(jsObject);


