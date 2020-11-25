/* eslint-disable prettier/prettier */

const city = document.querySelector("#city");

export async function place() {
  const response = await fetch("https://freegeoip.app/json/");
  const locationData = await response.json();
  city.innerText = `${
    "in " + `${locationData.city},`
  } ${`${locationData.country_name}`}`;
}
