const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function(response) {
        //console.log(response);
        return response.json();
    })

    .then(function (jsonObject) {
        //console.table(jsonObject);
       
        
        
           
        const towns = jsonObject['towns'];
        
            
        towns.forEach(town => {
            let card = document.createElement('section');
            let name = document.createElement('h2');
            let slogan = document.createElement('h3');
            let founded = document.createElement('p');
            let popNum = document.createElement('p');
            let rainFall = document.createElement('p');
            let image = document.createElement('img');

            name.textContent = `${town.name}`;
            slogan.textContent = `${town.motto}`;
            founded.textContent = "Year Founded: " + `${town.yearFounded}`;
            popNum.textContent = "Population: " + `${town.currentPopulation}`;
            rainFall.textContent = "Annual Rainfall: " + `${town.averageRainfall}`;
            image.setAttribute('src', town.photo);
            image.setAttribute('alt', town.name);

            card.appendChild(name);
            card.appendChild(slogan);
            card.appendChild(founded);
            card.appendChild(popNum);
            card.appendChild(rainFall);
            card.appendChild(image);

            document.querySelector('.cards').appendChild(card);
        
        });
        

    });
