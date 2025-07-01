const sunTheme = document.querySelector(".fa-sun-o");
const moonTheme = document.querySelector(".fa-moon-o");

function checkState() {
  if (sunTheme.classList.contains("active")) {
    sunTheme.style.cursor = "none";
    sunTheme.removeEventListener("click", toggleDay);
    if (moonTheme.classList.contains("active")) {
      moonTheme.style.cursor = "none";
      moonTheme.removeEventListener("click", toggleNight);
      return;
    } else {
      moonTheme.addEventListener("click", toggleNight);
    }
    return;
  } else {
    sunTheme.addEventListener("click", toggleDay);
    sunTheme.style.cursor = "pointer";
  }
}

function toggleNight() {
  document.body.style.background = "#333";
  document.body.style.color = "#fff";
  moonTheme.classList.add("active");
  sunTheme.classList.remove("active");
  moonTheme.style.cursor = "pointer";
}

function toggleDay() {
  document.body.style.background = "#fff";
  document.body.style.color = "#333";
  sunTheme.classList.add("active");
  moonTheme.classList.remove("active");
}

function verifyDOM() {
  sunTheme.addEventListener("mouseover", checkState);
  moonTheme.addEventListener("mouseover", checkState);
}

verifyDOM();
