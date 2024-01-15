"use strict";
// Function to get capsules API
const getCapsules = async () => {
  try {
    const data = await fetch("https://api.spacexdata.com/v4/capsules", {
      method: "GET",
    });

    const response = await data.json();
    console.log(response);
    showCapsules(response);
  } catch (error) {
    console.error(`error: ${error}`);
  }
};
(async function () {
  await getCapsules();
})();

const showCapsules = (response) => {
  const capsulesBox = document.getElementById("cards-container");

  response.forEach((capsule) => {
    const card = document.createElement("div");
    card.className = "card";
    capsulesBox.appendChild(card);

    const title = document.createElement("h1");
    title.textContent = `${capsule.type},${capsule.serial}`;
    title.className = "card-title";
    card.appendChild(title);

    const detailsElement = document.createElement("ul");
    detailsElement.className = "description";

    if (capsule.reuse_count !== null) {
      const reuseCountLi = document.createElement("li");
      reuseCountLi.textContent = `Reused ${capsule.reuse_count} times`;
      detailsElement.appendChild(reuseCountLi);
    }

    if (capsule.water_landings !== null) {
      const waterLandingsLi = document.createElement("li");
      waterLandingsLi.textContent = `${capsule.water_landings} water landings`;
      detailsElement.appendChild(waterLandingsLi);
    }

    if (capsule.land_landings !== null) {
      const landLandingsLi = document.createElement("li");
      landLandingsLi.textContent = `${capsule.land_landings} land landings`;
      detailsElement.appendChild(landLandingsLi);
    }

    const statusLi = document.createElement("li");
    statusLi.textContent = `Status: ${capsule.status}`;

    if (
      capsule.status === "retired" ||
      capsule.status === "unknown" ||
      capsule.status === "destroyed"
    ) {
      statusLi.style.color = "red";
    } else {
      statusLi.style.color = "green";
    }

    detailsElement.appendChild(statusLi);

    if (capsule.last_update !== null) {
      const lastUpdateLi = document.createElement("li");
      lastUpdateLi.textContent = `${capsule.last_update}`;
      detailsElement.appendChild(lastUpdateLi);
    }

    card.appendChild(detailsElement);
  });
};
