// Function to get Roadster API
const getRoadster = async () => {
  try {
    const data = await fetch("https://api.spacexdata.com/v4/roadster", {
      method: "GET",
    });

    const response = await data.json();
    console.log(response);
    showRoadster(response);
  } catch (error) {
    console.error(`error: ${error}`);
  }
};

// Function to show roadster
const showRoadster = (roadster) => {
  const roadsterBox = document.getElementById("cards-container");

  const card = document.createElement("div");
  card.className = "card";
  roadsterBox.appendChild(card);

  const image = document.createElement("img");

  if (roadster.flickr_images && roadster.flickr_images.length > 0) {
    image.src = roadster.flickr_images[0];
  } else {
    image.src = "https://via.placeholder.com/400x232";
    image.style.width = "250px";
    image.style.height = "250px";
  }
  card.appendChild(image);

  const details = document.createElement("p");
  details.textContent = roadster.details;
  details.className = "card-details";
  card.appendChild(details);

  const listsContainer = document.createElement("div");
  listsContainer.className = "lists-container";
  card.appendChild(listsContainer);

  const dateListsContainer = document.createElement("div");
  dateListsContainer.className = "date-lists";
  listsContainer.appendChild(dateListsContainer);

  const linksContainer = document.createElement("div");
  linksContainer.className = "links";
  listsContainer.appendChild(linksContainer);

  const datesList = document.createElement("ul");

  const launchDateLi = document.createElement("li");
  launchDateLi.textContent = `Launch Date: ${roadster.launch_date_utc}`;
  datesList.appendChild(launchDateLi);

  const massLi = document.createElement("li");
  massLi.textContent = `Launch Mass: ${roadster.launch_mass_kg} kg (${roadster.launch_mass_lbs} lbs)`;
  datesList.appendChild(massLi);

  const daySince = document.createElement("li");
  daySince.textContent = `Days Since Launch: 557 days`;
  datesList.appendChild(daySince);

  const speed = document.createElement("li");
  speed.textContent = `Speed: 9520 kph`;
  datesList.appendChild(speed);

  dateListsContainer.appendChild(datesList);

  const links = document.createElement("ul");

  const distanceLi = document.createElement("li");
  distanceLi.textContent = `Distance From The Earth: ${roadster.earth_distance_km} km`;
  links.appendChild(distanceLi);
  // wikipedia page link
  const linkForWikipedia = document.createElement("li");
  linkForWikipedia.textContent = `Wikipedia`;
  links.appendChild(linkForWikipedia);

  const wikipediaLink = document.createElement("a");
  wikipediaLink.href =
    "https://en.wikipedia.org/wiki/Elon_Musk%27s_Tesla_Roadster";
  wikipediaLink.textContent = "Link to Wikipedia";
  linkForWikipedia.appendChild(wikipediaLink);

  wikipediaLink.addEventListener("click", function (event) {
    event.preventDefault();
    const url = "https://en.wikipedia.org/wiki/Elon_Musk%27s_Tesla_Roadster";
    window.location.href = url;
  });

  // youtube video link
  const linkForYoutube = document.createElement("li");
  linkForYoutube.textContent = `Youtube video`;
  links.appendChild(linkForYoutube);

  const youtubeLink = document.createElement("a");
  youtubeLink.href = "https://youtu.be/wbSwFU6tY1c";
  youtubeLink.textContent = "Link to Youtube";
  linkForYoutube.appendChild(youtubeLink);

  youtubeLink.addEventListener("click", function (event) {
    event.preventDefault();
    const url = "https://youtu.be/wbSwFU6tY1c";
    window.location.href = url;
  });

  linksContainer.appendChild(links);
};

(async function () {
  await getRoadster();
})();
