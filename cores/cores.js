// Function to get cores API
const getCores = async () => {
  try {
    const data = await fetch("https://api.spacexdata.com/v4/cores", {
      method: "GET",
    });

    const response = await data.json();
    console.log(response);
    showCores(response);
  } catch (error) {
    console.error(`error: ${error}`);
  }
};
(async function () {
  await getCores();
})();
// Function to show cores
const showCores = (response) => {
  const coresBox = document.getElementById("cards-container");

  response.forEach((core) => {
    const card = document.createElement("div");
    card.className = "card";
    coresBox.appendChild(card);

    const title = document.createElement("h1");
    title.textContent = `${core.serial}`;
    title.className = "card-title";
    card.appendChild(title);

    const detailsElement = document.createElement("ul");
    detailsElement.className = "description";

    if (core.reuse_count !== null) {
      const reuseCountLi = document.createElement("li");
      reuseCountLi.textContent = `Reused ${core.reuse_count} times`;
      detailsElement.appendChild(reuseCountLi);
    }

    if (core.rtls_landings !== null) {
      const rtlsLandingsLi = document.createElement("li");
      rtlsLandingsLi.textContent = `${core.rtls_landings} RTLS landings`;
      detailsElement.appendChild(rtlsLandingsLi);
    }

    if (core.asds_landings !== null) {
      const asdsLandingsLi = document.createElement("li");
      asdsLandingsLi.textContent = `${core.asds_landings} ASDS landings`;
      detailsElement.appendChild(asdsLandingsLi);
    }

    const statusLi = document.createElement("li");
    statusLi.textContent = `Status: ${core.status}`;

    if (
      core.status === "inactive" ||
      core.status === "lost" ||
      core.status === "expended"
    ) {
      statusLi.style.color = "red";
    } else {
      statusLi.style.color = "green";
    }

    detailsElement.appendChild(statusLi);

    if (core.last_update !== null) {
      const lastUpdateLi = document.createElement("li");
      lastUpdateLi.textContent = `${core.last_update}`;
      detailsElement.appendChild(lastUpdateLi);
    }

    card.appendChild(detailsElement);
  });
};
