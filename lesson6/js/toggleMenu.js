const menuButton = document.querySelector(".menuButton");
menuButton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
    document.querySelector(".primaryNav").classList.toggle("respond");
}

