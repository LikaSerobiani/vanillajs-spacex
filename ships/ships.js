// function to get ships api
const getShips = async () => {
  try {
    const data = await fetch("https://api.spacexdata.com/v4/ships", {
      method: "GET",
    });

    const response = await data.json();
    console.log(response);
    showShips(response);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

(async function () {
  await getShips();
})();
// Function to show ships
const showShips = (response) => {
  const shipsBox = document.getElementById("cards-container");

  response.forEach((ship) => {
    const card = document.createElement("div");
    card.className = "card";
    shipsBox.appendChild(card);

    const image = document.createElement("img");
    image.className = "card-image";
    image.src = "https://via.placeholder.com/400x232";
    image.alt = "No Image Available";
    console.log("Image Source:", image.src);
    card.appendChild(image);

    const shipDescription = document.createElement("div");
    shipDescription.className = "card-description";
    card.appendChild(shipDescription);

    const title = document.createElement("h1");
    title.textContent = `${ship.name}`;
    title.className = "card-title";
    shipDescription.appendChild(title);

    const description = document.createElement("p");
    description.textContent = `Home port: ${ship.home_port}`;
    description.className = "description";
    shipDescription.appendChild(description);

    const button = document.createElement("button");
    button.textContent = "Learn More";
    button.type = "button";
    button.className = "btn";

    shipDescription.appendChild(button);
  });
};
