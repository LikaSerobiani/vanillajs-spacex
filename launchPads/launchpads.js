// function to get launchpads api
const getLaunchPads = async () => {
  try {
    const data = await fetch("https://api.spacexdata.com/v4/launchpads", {
      method: "GET",
    });

    const response = await data.json();
    console.log(response);
    showLaunchPads(response);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
(async function () {
  await getLaunchPads();
})();
// function to show launchpads
const showLaunchPads = (response) => {
  const launchPadsBox = document.getElementById("cards-container");

  response.forEach((launchpad) => {
    const card = document.createElement("div");
    card.className = "card";
    launchPadsBox.appendChild(card);

    const image = document.createElement("img");
    image.src = launchpad.images.large;
    image.className = "image";
    image.src = "https://via.placeholder.com/400x232";
    image.alt = "No Image Available";
    card.appendChild(image);

    const launchpadsDescription = document.createElement("div");
    launchpadsDescription.className = "card-description";
    card.appendChild(launchpadsDescription);

    const title = document.createElement("h1");
    title.textContent = `${launchpad.name}`;
    title.className = "card-title";
    launchpadsDescription.appendChild(title);

    const description = document.createElement("p");
    description.textContent = `${launchpad.details}`;
    description.className = "description";
    launchpadsDescription.appendChild(description);

    const button = document.createElement("button");
    button.textContent = "Learn more";
    button.type = "button";
    button.className = "btn";

    launchpadsDescription.appendChild(button);
  });
};
