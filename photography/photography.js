const menu = document.querySelector(".nav-bar");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
let open;

function openMenu() {
    if (open) {
        menu.style.display = "none";
        main.style.display = "block";
        footer.style.display = "block";
        open = false;
    }
    else if (!open) {
        menu.style.display = "block";
        main.style.display = "none";
        footer.style.display = "none";
        open = true;
    }
}