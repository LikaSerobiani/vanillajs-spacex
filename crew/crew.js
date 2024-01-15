// Function to get crews API
const getCrews = async () => {
  try {
    const data = await fetch("https://api.spacexdata.com/v4/crew", {
      method: "GET",
    });

    const response = await data.json();
    console.log(response);
    showCrews(response);
  } catch (error) {
    console.error(`error: ${error}`);
  }
};
(async function () {
  await getCrews();
})();
// Function to show crews

const showCrews = (response) => {
  const coresBox = document.getElementById("cards-container");

  response.forEach((crew) => {
    const card = document.createElement("div");
    card.className = "card";
    coresBox.appendChild(card);

    const image = document.createElement("img");
    image.className = "card-image";
    image.src = "https://via.placeholder.com/400x232";
    image.alt = "No Image Available";
    console.log("Image Source:", image.src);
    card.appendChild(image);

    const title = document.createElement("h1");
    title.textContent = `${crew.name}`;
    title.className = "card-title";
    card.appendChild(title);
  });
};
