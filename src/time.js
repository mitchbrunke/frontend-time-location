const timezone = document.querySelector("#timezone");
const time = document.getElementById("actualTime");

export async function locTime() {
  const response = await fetch("http://worldtimeapi.org/api/ip/");
  const locationTime = await response.json();
  timezone.innerText = locationTime.abbreviation;

  let hrTime = locationTime.datetime.split("T")[1];
  console.log(`this is 24hr time ${hrTime}`);

  console.log(hrTime.slice(0, 5));
  //const uiTime = updatedTime.split("PM").pop();
  const uiTime = hrTime.slice(0, 5);

  time.innerText = uiTime;
}
