// import { gsap } from "/node_modules/gsap";
import { ScrollTrigger } from "/node_modules/gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

const dataCol1 = [
    {
        id: '1',
        title: "Jeko",
        img: "/assets/images/jeko.jpeg",
        backgroundColor: "#d59e7c",
    },
    {
        id: '1',
        title: "Rocel",
        img: "/assets/images/rocel.jpeg",
        backgroundColor: "#d59e7c",
    },
    {
        id: '1',
        title: "Becca",
        img: "/assets/images/becca.JPG",
        backgroundColor: "#d59e7c",
    },
    {
        id: '1',
        title: "Mareisha",
        img: "/assets/images/mareisha.jpeg",
        backgroundColor: "#d59e7c",
    },
    {
        id: '1',
        title: "Jeko",
        img: "/assets/images/semaj.jpeg",
        backgroundColor: "#d59e7c",
    },
    {
        id: '1',
        title: "Jeko",
        img: "/assets/images/semaj.jpeg",
        backgroundColor: "#d59e7c",
    },
];

const dataCol2 = [
    {
        id: '1',
        title: "Ty",
        img: "/assets/images/ty.jpeg",
        backgroundColor: "#64733a",
    },
    {
        id: '1',
        title: "Semaj",
        img: "/assets/images/semaj.jpeg",
        backgroundColor: "#64733a",
    },
    {
        id: '1',
        title: "Brooke",
        img: "/assets/images/brooke.jpeg",
        backgroundColor: "#64733a",
    },
    {
        id: '1',
        title: "Jeko",
        img: "/assets/images/urban-car.JPG",
        backgroundColor: "#64733a",
    },
    {
        id: '1',
        title: "Jeko",
        img: "/assets/images/urban-car.JPG",
        backgroundColor: "#64733a",
    },
];

const dataCol3 = [
    {
        id: '1',
        title: "Wedding",
        img: "/assets/images/wedding.jpeg",
        backgroundColor: "#8f7353",
    },
    {
        id: '1',
        title: "Kent",
        img: "/assets/images/kent.jpeg",
        backgroundColor: "#8f7353",
    },
    {
        id: '1',
        title: "Jeko",
        img: "/assets/images/semaj.jpeg",
        backgroundColor: "#8f7353",
    },
    {
        id: '1',
        title: "Jeko",
        img: "/assets/images/semaj.jpeg",
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