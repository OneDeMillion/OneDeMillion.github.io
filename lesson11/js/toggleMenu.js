const buttonMenu = document.querySelector(".menuButton");
buttonMenu.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".primaryNav").classList.toggle("respond");
}
