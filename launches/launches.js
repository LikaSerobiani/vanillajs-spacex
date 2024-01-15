// Function to get launches API
const getLaunches = async () => {
  try {
    const data = await fetch("https://api.spacexdata.com/v4/launches", {
      method: "GET",
    });

    const response = await data.json();
    console.log(response);
    showLaunches(response);
  } catch (error) {
    console.error(`error: ${error}`);
  }
};
(async function () {
  await getLaunches();
})();
// Function to show launches
const showLaunches = (response) => {
  const launchesBox = document.getElementById("cards-container");

  response.forEach((launche) => {
    const card = document.createElement("div");
    card.className = "card";
    launchesBox.appendChild(card);

    const image = document.createElement("img");
    image.className = "card-image";
    image.src = launche.links.patch.small;

    if (launche.links.patch.small !== null) {
      image.src = launche.links.patch.small;
    } else {
      image.src = "https://via.placeholder.com/400x232";
      image.style.width = "250px";
      image.style.height = "250px";
    }

    card.appendChild(image);

    const title = document.createElement("h1");
    title.textContent = `${launche.name}`;
    title.className = "card-title";
    card.appendChild(title);

    if (launche.details !== null) {
      const details = document.createElement("p");
      details.className = "card-details";
      details.textContent = `${launche.details}`;
      card.appendChild(details);
    }
  });
};
