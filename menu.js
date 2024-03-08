var menu = document.querySelector(".header__menu");
var navbar = document.querySelector(".header__navbar");
menu.addEventListener("click", function () {
  if (menu.classList.contains("header__menu__active")) {
    menu.classList.remove("header__menu__active");
    navbar.classList.remove("header__navbar__active")
  } else {
    menu.classList.add("header__menu__active");
    navbar.classList.add("header__navbar__active");
  }
});
