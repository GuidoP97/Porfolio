const hamburger = document.getElementById("hamburger");
const checkbox = document.getElementById("check");
const menu = document.getElementById("navbar__menu");

hamburger.addEventListener("click", () => {
  if (checkbox.hasAttribute("checked")) {
    checkbox.removeAttribute("checked");
    menu.classList.remove("open");
  } else {
    checkbox.setAttribute("checked", "");
    menu.classList.add("open");
  }
});
