const menu = document.querySelector(".navbar_links");
const menu_1 = document.querySelector(".custom_input")
const menubutton = document.querySelector(".navbar_icons");
menubutton.addEventListener("click", () => {
  menu_1.classList.toggle("navbar_open");
  menu.classList.toggle("navbar_open");
  menubutton.classList.toggle("open");
});
