// function to get rockets api
const getRockets = async () => {
  try {
    const data = await fetch("https://api.spacexdata.com/v4/rockets", {
      method: "GET",
    });

    const response = await data.json();
    console.log(response);
    showRockets(response);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

(async function () {
  await getRockets();
})();

// Function to show rockets
const showRockets = (response) => {
  const rocketsBox = document.getElementById("cards-container");

  response.forEach((rocket) => {
    const card = document.createElement("div");
    card.className = "card";
    rocketsBox.appendChild(card);

    const image = document.createElement("img");

    if (rocket.flickr_images !== null) {
      image.src = rocket.flickr_images[1];
    } else {
      image.src = "https://via.placeholder.com/400x232";
      image.style.width = "250px";
      image.style.height = "250px";
    }

    image.className = "image";
    card.appendChild(image);

    const rocketsDescription = document.createElement("div");
    rocketsDescription.className = "card-description";
    card.appendChild(rocketsDescription);

    const title = document.createElement("h1");
    title.textContent = `${rocket.name}`;
    title.className = "card-title";
    rocketsDescription.appendChild(title);

    const description = document.createElement("p");
    description.textContent = `${rocket.description}`;
    description.className = "description";
    rocketsDescription.appendChild(description);

    const button = document.createElement("button");
    button.textContent = "Learn More";
    button.type = "button";
    button.className = "btn";

    rocketsDescription.appendChild(button);
  });
};
