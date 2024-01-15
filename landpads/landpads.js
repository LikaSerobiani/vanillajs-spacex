// function to get landpads api
const getLandPads = async () => {
  try {
    const data = await fetch("https://api.spacexdata.com/v4/landpads", {
      method: "GET",
    });

    const response = await data.json();
    console.log(response);
    showLandPads(response);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
(async function () {
  await getLandPads();
})();
// function to show landpads
const showLandPads = (response) => {
  const landPadsBox = document.getElementById("cards-container");

  response.forEach((landpad) => {
    const card = document.createElement("div");
    card.className = "card";
    landPadsBox.appendChild(card);

    const image = document.createElement("img");
    image.src = landpad.images.large;
    image.className = "image";
    image.src = "https://via.placeholder.com/400x232";
    image.alt = "No Image Available";
    card.appendChild(image);

    const landPadsDescription = document.createElement("div");
    landPadsDescription.className = "card-description";
    card.appendChild(landPadsDescription);

    const title = document.createElement("h1");
    title.textContent = `${landpad.type},${landpad.full_name}`;
    title.className = "card-title";
    landPadsDescription.appendChild(title);

    const description = document.createElement("p");
    description.textContent = `${landpad.details}`;
    description.className = "description";
    landPadsDescription.appendChild(description);

    const button = document.createElement("button");
    button.textContent = "Read More";
    button.type = "button";
    button.className = "btn";

    landPadsDescription.appendChild(button);
  });
};
