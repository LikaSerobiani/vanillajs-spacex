"use strict";
// Function to get payloads API
const getPayloads = async () => {
  try {
    const data = await fetch("https://api.spacexdata.com/v4/payloads", {
      method: "GET",
    });

    const response = await data.json();
    console.log(response);
    showPayloads(response);
  } catch (error) {
    console.error(`error: ${error}`);
  }
};
(async function () {
  await getPayloads();
})();
// Function to show payloads
const showPayloads = (response) => {
  const payLoadsBox = document.getElementById("cards-container");
  response.forEach((payload) => {
    const card = document.createElement("div");
    card.className = "card";
    payLoadsBox.appendChild(card);

    const detailsElement = document.createElement("ul");
    detailsElement.className = "description";

    if (payload.name !== null && payload.type !== null) {
      const title = document.createElement("h1");
      title.textContent = `${payload.name}, ${payload.type}`;
      title.className = "card-title";
      detailsElement.appendChild(title);
    }

    if (payload.orbit !== null) {
      const orbitLi = document.createElement("li");
      orbitLi.textContent = `Orbit: ${payload.orbit} `;
      detailsElement.appendChild(orbitLi);
    }

    if (payload.reference_system !== null) {
      const referenceSystemLi = document.createElement("li");
      referenceSystemLi.textContent = `Reference system: ${payload.reference_system} `;
      detailsElement.appendChild(referenceSystemLi);
    }

    const customers = document.createElement("h1");
    customers.textContent = "Customers:";
    customers.className = "card-title";
    detailsElement.appendChild(customers);

    if (payload.customers !== null) {
      const customersLi = document.createElement("li");
      customersLi.textContent = `${payload.customers} `;
      detailsElement.appendChild(customersLi);
    }
    const manufacturers = document.createElement("h1");
    manufacturers.textContent = "Manufacturers:";
    manufacturers.className = "card-title";
    detailsElement.appendChild(manufacturers);

    if (payload.manufacturers !== null) {
      const manufacturersLi = document.createElement("li");
      manufacturersLi.textContent = `${payload.manufacturers} `;
      detailsElement.appendChild(manufacturersLi);
    }

    const countries = document.createElement("h1");
    countries.textContent = "Countries:";
    countries.className = "card-title";
    detailsElement.appendChild(countries);

    if (payload.nationalities !== null) {
      const nationalitiesLi = document.createElement("li");
      nationalitiesLi.textContent = `${payload.nationalities} `;
      detailsElement.appendChild(nationalitiesLi);
    }

    card.appendChild(detailsElement);
  });
};
