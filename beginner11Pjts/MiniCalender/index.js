const monthnameEl = document.getElementById("month-name");
const daynameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();

monthnameEl.innerText = date.toLocaleString("en",{
    month:"long"
})
daynameEl.innerText = date.toLocaleString("en",{
    weekday:"long"
})
dayNumEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();