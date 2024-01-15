"use strict";
// Function to get starLink API
const getStarLinks = async () => {
  try {
    const data = await fetch("https://api.spacexdata.com/v4/starlink", {
      method: "GET",
    });

    const response = await data.json();
    console.log(response);
    showStarLinks(response);
  } catch (error) {
    console.error(`error: ${error}`);
  }
};

(async function () {
  await getStarLinks();
})();

// Function to show starlink
const showStarLinks = (response) => {
  const starLinkBox = document.getElementById("cards-container");

  response.forEach((starlink) => {
    const card = document.createElement("div");
    card.className = "card";
    starLinkBox.appendChild(card);

    const title = document.createElement("h1");
    title.className = "card-title";
    title.textContent = `${starlink.spaceTrack.OBJECT_NAME}, ${starlink.version}`;
    card.appendChild(title);

    const date = document.createElement("p");
    date.textContent = `Launch Date: ${starlink.spaceTrack.LAUNCH_DATE}`;
    card.appendChild(date);

    const site = document.createElement("p");
    site.textContent = `Launch Site: ${starlink.spaceTrack.SITE}`;
    card.appendChild(site);

    const comment = document.createElement("p");
    comment.textContent = `${starlink.spaceTrack.COMMENT}`;
    card.appendChild(comment);
  });
};
