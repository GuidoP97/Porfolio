const hamburger = document.getElementById("hamburger");
const checkbox = document.getElementById("check");
const menu = document.getElementById("navbar__menu");
const icon = hamburger.children[0];

hamburger.addEventListener("click", () => {
  if (checkbox.hasAttribute("checked")) {
    checkbox.removeAttribute("checked");
    menu.classList.remove("open");
    icon.setAttribute("src", "assets/images/icon-hamburger.svg");
  } else {
    checkbox.setAttribute("checked", "");
    menu.classList.add("open");
    icon.setAttribute("src", "assets/images/icon_cross.svg");
  }
});
