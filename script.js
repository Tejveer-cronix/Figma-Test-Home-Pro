// Responsive NavBar Menu
const nav = document.querySelector(".nav__list");
const menu__toggle = document.querySelector("#toggle");

menu__toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// change navbar background on scroll

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".header");

  if (window.scrollY > 0) {
    navbar.classList.add("nav-scroll");
  } else {
    navbar.classList.remove("nav-scroll");
  }
});
