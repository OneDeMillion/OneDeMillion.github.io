const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function(response) {
    //console.log(response);
    return response.json();
  })

  .then(function(jsonObject) {
    //console.table(jsonObject);

    const towns = jsonObject["towns"];
    const thisTown = towns.filter(town => town.name == "Preston");

    console.log(thisTown);

    thisTown.forEach(town => {
      let event = document.createElement("section");
      let title = document.createElement("h3");

      title.textContent = "Upcoming Events";
      event.appendChild(title);

      for (i in town.events) {
        let upcoming = document.createElement("p");
        let upcomingevent = "";
        upcomingevent += town.events[i];

        upcoming.textContent = upcomingevent;

        event.appendChild(upcoming);

        document.querySelector(".events").appendChild(event);
      }
    });
  });
