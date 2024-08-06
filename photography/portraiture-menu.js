const menu = document.querySelector(".nav-bar");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const header = document.querySelector("header");
const mobileHeader = header.querySelector(".mobileHeader");
const homeLink = mobileHeader.querySelector(".home-link");
let open;

function openMenu() {
    if (open) {
        menu.style.display = "none";
        main.style.display = "block";
        footer.style.display = "block";
        homeLink.style.color = "black !important";
        open = false;
    }
    else if (!open) {
        menu.style.display = "block";
        main.style.display = "none";
        footer.style.display = "none";
        open = true;
    }
}