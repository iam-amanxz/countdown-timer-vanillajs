const monthsEl = document.getElementById("months");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const formEl = document.getElementById("form");
const eNameEl = document.getElementById("event-name");
const eDateEl = document.getElementById("event-date");
const titleEl = document.getElementById("title");
const submitBtn = document.getElementById("submit");

let event = "1 Jan 2021";

function countdown() {
  const eventDate = new Date(event);
  const currentDate = new Date();

  const totalSeconds = (eventDate - currentDate) / 1000;

  const months = Math.floor(totalSeconds / 2629746);
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  monthsEl.innerHTML = months;
  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

// Format date to prepend '0' if value is < 10
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

// call every 1 second
setInterval(countdown, 1000);

// Custom value fom user
function handleFormSubmit(e) {
  e.preventDefault();
  if (eNameEl.value === "") {
    titleEl.innerHTML = `Until New Year 2021`;
  } else {
    titleEl.innerHTML = `Until ${eNameEl.value}`;
  }

  const newDate = new Date(eDateEl.value);

  if (isNaN(newDate.getMonth())) {
    alert("Not a valid date, Please exactly follow the example format");
    return;
  } else if (newDate.getMonth() > 0) {
    alert("Please enter a date in future");
    return;
  } else {
    event = newDate;
  }
}

formEl.addEventListener("submit", handleFormSubmit);
