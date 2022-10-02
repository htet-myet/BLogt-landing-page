const ataps = document.querySelectorAll("a");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-btn");
const dropdown = document.querySelector(".head-dropdown-mobile");
const logo = document.querySelector(".logo");
const body = document.querySelector("body");

menu.addEventListener("click", () => {
  if (!menu.classList.contains("unactive")) {
    dropdown.classList.add("active");
    menu.classList.add("unactive");
    closeBtn.classList.add("visible");
  }
});

closeBtn.addEventListener("click", () => {
  console.log("gg");
  if (menu.classList.contains("unactive")) {
    dropdown.classList.remove("active");
    menu.classList.remove("unactive");
    closeBtn.classList.remove("visible");
  }
});

ataps.forEach((a) =>
  a.addEventListener("click", (e) => {
    e.preventDefault();
  })
);
