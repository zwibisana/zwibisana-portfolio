// import { gsap } from "/node_modules/gsap";
import { ScrollTrigger } from 'https://zwibisana.github.io/zwibisana-portfolio/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

const dataCol1 = [
    {
        id: '1',
        title: "Japan",
        img: "https://zwibisana.github.io/zwibisana-portfolio/assets/images/urban/japan6.jpg",
        backgroundColor: "#d59e7c",
    },
    {
        id: '1',
        title: "Becca",
        img: "https://zwibisana.github.io/zwibisana-portfolio/assets/acorn.jpg",
        backgroundColor: "#d59e7c",
    },
    {
        id: '1',
        title: "Japan",
        img: "https://zwibisana.github.io/zwibisana-portfolio/assets/japan5.jpg",
        backgroundColor: "#d59e7c",
    },
    {
        id: '1',
        title: "Japan",
        img: "https://zwibisana.github.io/zwibisana-portfolio/assets/japan13.jpg",
        backgroundColor: "#d59e7c",
    },
    // {
    //     id: '1',
    //     title: "Japan",
    //     img: "/assets/images/urban/japan2.JPG",
    //     backgroundColor: "#d59e7c",
    // },
    // {
    //     id: '1',
    //     title: "Japan",
    //     img: "/assets/images/urban/japan9.JPG",
    //     backgroundColor: "#d59e7c",
    // },
    // {
    //     id: '1',
    //     title: "Beacon Street",
    //     img: "/assets/images/urban/beacon.JPG",
    //     backgroundColor: "#64733a",
    // },
];

const dataCol2 = [
    {
        id: '1',
        title: "Beacon Street",
        img: "https://zwibisana.github.io/zwibisana-portfolio/assets/beacon.jpg",
        backgroundColor: "#64733a",
    },
    {
        id: '1',
        title: "Japan",
        img: "https://zwibisana.github.io/zwibisana-portfolio/assets/japan1.jpg",
        backgroundColor: "#64733a",
    },
    {
        id: '1',
        title: "Japan",
        img: "https://zwibisana.github.io/zwibisana-portfolio/assets/images/urban/japan7.jpg",
        backgroundColor: "#64733a",
    },
    // {
    //     id: '1',
    //     title: "Japan",
    //     img: "/assets/images/urban/japan3.JPG",
    //     backgroundColor: "#64733a",
    // },
    // {
    //     id: '1',
    //     title: "South End",
    //     img: "/assets/images/urban/southie.JPG",
    //     backgroundColor: "#64733a",
    // },
    // {
    //     id: '1',
    //     title: "Japan",
    //     img: "/assets/images/urban/japan11.JPG",
    //     backgroundColor: "#64733a",
    // },
    // {
    //     id: '1',
    //     title: "Japan",
    //     img: "/assets/images/urban/japan9.JPG",
    //     backgroundColor: "#d59e7c",
    // },
];

const dataCol3 = [
    {
        id: '1',
        title: "Brattle Book Shop",
        img: "https://zwibisana.github.io/zwibisana-portfolio/assets/brattle.jpg",
        backgroundColor: "#8f7353",
    },
    {
        id: '1',
        title: "Japan",
        img: "https://zwibisana.github.io/zwibisana-portfolio/assets/japan10.jpg",
        backgroundColor: "#8f7353",
    },
    {
        id: '1',
        title: "Japan",
        img: "https://zwibisana.github.io/zwibisana-portfolio/assets/images/urban/japan8.jpg",
        backgroundColor: "#64733a",
    },
    {
        id: '1',
        title: "Urban Car in Japan",
        img: "https://zwibisana.github.io/zwibisana-portfolio/assets/urban-car.jpg",
        backgroundColor: "#8f7353",
    },
    // {
    //     id: '1',
    //     title: "South End",
    //     img: "/assets/images/urban/southiecouple.JPG",
    //     backgroundColor: "#8f7353",
    // },
    // {
    //     id: '1',
    //     title: "Vending Machine in Japan",
    //     img: "/assets/images/urban/vendingmachine.JPG",
    //     backgroundColor: "#64733a",
    // },
    // {
    //     id: '1',
    //     title: "Japan",
    //     img: "/assets/images/urban/japan4.JPG",
    //     backgroundColor: "#8f7353",
    // },
];

const projectsSelector = {
    element: document.querySelector('.projects'),
    wrapper: document.querySelector('.projects_wrapper'),
    outro: document.querySelector('.projects_outro'),
};

const isMobile = window.matchMedia('(max-width: 800px)').matches;

const createContents = () => {
    const datasets = [dataCol1, dataCol2, dataCol3];

    datasets.forEach((data)=> {
        const projectCol = document.createElement('div');
        projectCol.classList.add('projects_col');
        projectsSelector.wrapper.appendChild(projectCol);

        data.forEach((item)=> {
            const projectsItem = document.createElement('div');
            projectsItem.classList.add('projects_col_item');
            projectsItem.style.backgroundColor = item.backgroundColor;

            projectsItem.innerHTML = `
            <div class="projects_col_item_img">
                <img src="${item.img}" alt=""/>
            </div>
            `;

            projectCol.appendChild(projectsItem);
        });
    });

    if (!isMobile) calcFilledSpace();
};

const initLenis = ()=> {
    const lenis = new Lenis({
        lerp: 0.064,
        smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
};

const animateHero = ()=> {
    const heroTitles = document.querySelectorAll('.hero_title');

    gsap.timeline({
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
        },
    })
        .to(heroTitles[0], { yPercent: 120 })
        .to(heroTitles[1], { yPercent: 60 }, 0);
};

const calcFilledSpace = () => {
    const projectCols = document.querySelectorAll('.projects_col');
    const projectColSecond = projectCols[1].getBoundingClientRect().height;
    const projectColThird = projectCols[2].getBoundingClientRect().height;

    const difference = projectColThird - projectColSecond;

    if (!isMobile) animateMedia(projectCols, difference);
};

const animateMedia = (projectCols, difference) => {
    gsap.set(projectCols[1], { y: 0 });

    gsap.timeline({
        scrollTrigger: {
            trigger: projectsSelector.element,
            start: 'top top',
            end: () => `${projectsSelector.element.offsetHeight}px bottom`,
            scrub: true,
        },
    }).to(projectCols[1], {
        duration: 2,
        y: difference,
        ease: 'none',
    });
};

const animateOutro = () => {
    gsap.set('.outro_wrapper', { yPercent: -150 });

    gsap.timeline({
        scrollTrigger: {
            trigger: '.outro',
            start: '-50% bottom',
            end: 'bottom bottom',
            scrub: true,
        },
    }).to('.outro_wrapper', { yPercent: 0 });
}

window.addEventListener('DOMContentLoaded', () => {
    createContents();

    if (!isMobile) initLenis();
    if (!isMobile) animateHero();
    if (!isMobile) animateOutro();
});

if (!isMobile) window.addEventListener('resize', calcFilledSpace);
