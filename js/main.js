const menu = document.querySelector(".navbar_header");
const menubutton = document.querySelector(".navbar_icons");
menubutton.addEventListener("click", () => {
  menu.classList.toggle("navbar_open");
  menubutton.classList.toggle("open");
});
