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

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)