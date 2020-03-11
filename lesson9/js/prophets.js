const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
  .then(function(response) {
    //console.log(response);
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    prophets.forEach(prophet => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let image = document.createElement('img');
      let dob = document.createElement('p');
      let bplace = document.createElement('p');

  
      let fullname = `${prophet.name} ${prophet.lastname}`;

      h2.textContent = fullname;
      image.setAttribute('src',prophet.imageurl);
      image.setAttribute('alt',fullname);
      dob.textContent = "Date of Birth: " + `${prophet.birthdate}`;
      bplace.textContent = "Place of Birth: " + `${prophet.birthplace}`;

      card.appendChild(image);
      card.appendChild(h2);
      card.appendChild(dob);
      card.appendChild(bplace);

      document.querySelector('.cards').appendChild(card);
    });
  });



