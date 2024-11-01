// import { gsap } from "/node_modules/gsap";
import { ScrollTrigger } from 'https://zwibisana.github.io/zwibisana-portfolio/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

const dataCol1 = [
    {
        id: '1',
        title: "Fushimi",
        img: "https://zwibisana.github.io/zwibisana-portfolio/assets/fushimi.jpg",
        backgroundColor: "#d59e7c",
    },
    {
        id: '1',
        title: "Brattle",
        img: "https://zwibisana.github.io/zwibisana-portfolio/assets/brattle2.jpg",
        backgroundColor: "#d59e7c",
    },
    {
        id: '1',
        title: "Cat",
        img: "https://zwibisana.github.io/zwibisana-portfolio/assets/cat.jpg",
        backgroundColor: "#d59e7c",
    },
    {
        id: '1',
        title: "Barber",
        img: "https://zwibisana.github.io/zwibisana-portfolio/assets/barber.jpg",
        backgroundColor: "#d59e7c",
    },
    {
        id: '1',
        title: "Dyeing",
        img: "https://zwibisana.github.io/zwibisana-portfolio/assets/dyeing2.jpg",
        backgroundColor: "#8f7353",
    },
];

const dataCol2 = [
    {
        id: '1',
        title: "Brattle",
        img: "https://zwibisana.github.io/zwibisana-portfolio/assets/brattle3.jpg",
        backgroundColor: "#64733a",
    },
    {
        id: '1',
        title: "Dyeing",
        img: "https://zwibisana.github.io/zwibisana-portfolio/assets/dyeing3.jpg",
        backgroundColor: "#64733a",
    },
    {
        id: '1',
        title: "Temple",
        img: "https://zwibisana.github.io/zwibisana-portfolio/assets/temple4.jpg",
        backgroundColor: "#64733a",
    },
    {
        id: '1',
        title: "Herb",
        img: "https://zwibisana.github.io/zwibisana-portfolio/assets/herb.jpg",
        backgroundColor: "#64733a",
    },
    {
        id: '1',
        title: "Temple",
        img: "https://zwibisana.github.io/zwibisana-portfolio/assets/temple5.jpg",
        backgroundColor: "#d59e7c",
    },
];

const dataCol3 = [
    {
        id: '1',
        title: "Temple",
        img: "https://zwibisana.github.io/zwibisana-portfolio/assets/temple3.jpg",
        backgroundColor: "#8f7353",
    },
    {
        id: '1',
        title: "Dyeing",
        img: "https://zwibisana.github.io/zwibisana-portfolio/assets/dyeing1.jpg",
        backgroundColor: "#8f7353",
    },
    {
        id: '1',
        title: "Woodwork",
        img: "https://zwibisana.github.io/zwibisana-portfolio/assets/woodwork.jpg",
        backgroundColor: "#64733a",
    },
    {
        id: '1',
        title: "Peaches in NYC",
        img: "https://zwibisana.github.io/zwibisana-portfolio/assets/peaches.jpg",
        backgroundColor: "#8f7353",
    },
    {
        id: '1',
        title: "Japan",
        img: "https://zwibisana.github.io/zwibisana-portfolio/assets/images/urban/japan8.jpg",
        backgroundColor: "#8f7353",
    },
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
