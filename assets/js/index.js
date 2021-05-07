const hamburger = document.getElementById("hamburger");
const checkbox = document.getElementById("check");
const menu = document.getElementById("navbar__menu");

hamburger.addEventListener("click", () => {
  if (menu.hasAttribute("name")) {
    menu.removeAttribute("name");
    checkbox.removeAttribute("checked");
  } else {
    menu.setAttribute("name", "hamburger");
    checkbox.setAttribute("checked", "");
  }
});
