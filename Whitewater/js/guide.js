const requestURL = "./JSON/guide.json";
fetch(requestURL)
  .then(function(response) {
    //console.log(response);
    return response.json();
  })

  .then(function(jsonObject) {
    //console.table(jsonObject);

    const guides = jsonObject["guides"];
    const threeGuides = guides.filter(
      guide =>
        guide.name == "Adam" ||
        guide.name == "Graham" ||
        guide.name == "Connor"
    );

    //console.log(threeGuides);

    threeGuides.forEach(guide => {
      let card = document.createElement("section");
      let name = document.createElement("h2");
      let email = document.createElement("h3");
      let experience = document.createElement("p");
      let bio = document.createElement("p");
      let cert = document.createElement("p");
      let image = document.createElement("img");

      name.textContent = guide.name;
      email.textContent = guide.email;
      experience.textContent = `Years Experience: ${guide.experience}`;
      bio.textContent = `Biography: ${guide.bio}`;
      cert.textContent = `Certifications: ${guide.certification}`;
      image.setAttribute("src", `images/${guide.photo}`);
      image.setAttribute("alt", `Photo of ${guide.name}`);

      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(email);
      card.appendChild(experience);
      card.appendChild(bio);
      card.appendChild(cert);

      document.querySelector(".cards").appendChild(card);
    });
  });
