const menu = document.querySelector(".nav-bar");
let open;

function openMenu() {
    if (open) {
        menu.style.display = "none";
        open = false;
    }
    else if (!open) {
        menu.style.display = "block";
        open = true;
    }
}