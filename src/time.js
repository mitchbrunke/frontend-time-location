/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
const timezone = document.querySelector("#timezone");
const time = document.getElementById("actualTime");
const container = document.getElementsByClassName("container")[0];

export async function locTime() {
  const response = await fetch("https://worldtimeapi.org/api/ip/");
  const locationTime = await response.json();
  timezone.innerText = locationTime.abbreviation;

  let hrTime = locationTime.datetime.split("T")[1];
  console.log(`this is 24hr time ${hrTime}`);

  console.log(hrTime.slice(0, 5));
  //const uiTime = updatedTime.split("PM").pop();
  const uiTime = hrTime.slice(0, 5);

  //check if it is night time or day time to update the UI background

  const isNightCheck = uiTime[1];
  console.log(isNightCheck);

  const isDay = (isNightCheck) => {
    if (isNightCheck > 8) {
      console.log(`It's night time`);
      container.classList.add("night");
    } else {
      console.log(`It's day time`);
      container.classList.add("day");
    }
  };

  //update UI
  //update time
  time.innerText = uiTime;
  //update background
  isDay();
}
