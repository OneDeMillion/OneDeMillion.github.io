const apiURL =
  "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=e2cbb136e5d205d1154dddf8d9c86021";

fetch(apiURL)
  .then(response => response.json())
  .then(jsObject => {
    //console.log(jsObject);

    document.getElementById("current-temp").textContent = jsObject.main.temp;
    const imagesrc =
      "http://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png";
    const desc = jsObject.weather[0].description;
    document.getElementById("imagesrc").textContent = imagesrc;
    document.getElementById("icon").setAttribute("src", imagesrc);
    document.getElementById("icon").setAttribute("alt", desc);
  });
