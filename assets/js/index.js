const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
  if (navUl.hasAttribute("name")) {
    navUl.removeAttribute("name");
  } else {
    navUl.setAttribute("name", "hamburger");
  }
});
