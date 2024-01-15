// function to get dragons api
const getDragons = async () => {
  try {
    const data = await fetch("https://api.spacexdata.com/v4/dragons", {
      method: "GET",
    });

    const response = await data.json();
    console.log(response);
    showDragons(response);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
(async function () {
  await getDragons();
})();
// function to show dragons
const showDragons = (response) => {
  const dragonsBox = document.getElementById("cards-container");

  response.forEach((dragon) => {
    const card = document.createElement("div");
    card.className = "card";
    dragonsBox.appendChild(card);

    const image = document.createElement("img");
    image.src = dragon.flickr_images[2];
    image.className = "image";
    card.appendChild(image);

    const dragonsDescription = document.createElement("div");
    dragonsDescription.className = "card-description";
    card.appendChild(dragonsDescription);

    const title = document.createElement("h1");
    title.textContent = `${dragon.name}`;
    title.className = "card-title";
    dragonsDescription.appendChild(title);

    const description = document.createElement("p");
    description.textContent = `${dragon.description}`;
    description.className = "description";
    dragonsDescription.appendChild(description);

    const button = document.createElement("button");
    button.textContent = "Read More";
    button.type = "button";
    button.className = "btn";

    dragonsDescription.appendChild(button);
  });
};
