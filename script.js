const menu = document.querySelector('.menu');

const menuClose = document.querySelector('.menu-close');

const menuOpen = document.querySelector('.menu-open');

const header = document.querySelector('.header');

let clicked = true;

let tl = gsap.timeline();

menu.addEventListener('click', function () {

    if (clicked) {

        menu.style.gap = '0vh';

        document.querySelector('.hero').style.backdropFilter = 'blur(20px)'

        gsap.to(menuOpen, {
            rotate: '45deg',
        });

        gsap.to(menuClose, {
            rotate: '-45deg'
        });

        gsap.to(header, {
            transform: 'translate(0%)'
        });


        tl.from('.header > .nav-logo h1', {
            y: -50,
            opacity: 0,
            delay: 0.5,
            duration: 0.3
        });

        tl.from('.nav li', {
            transform: 'translate(50px)',
            stagger: 0.3,
            opacity: 0
        });

        clicked = false;

    } else {

        menu.style.gap = '0.7vh';

        gsap.to(menuOpen, {
            rotate: '0deg'
        });

        gsap.to(menuClose, {
            rotate: '-0deg'
        });

        gsap.to(header, {
            transform: 'translate(100%)'
        });

        clicked = true;
    }

});

const navDiv = document.querySelector('.nav');

const anchorTags = navDiv.querySelectorAll('a');

let listTags = navDiv.querySelectorAll('li')

    listTags.forEach(function (listTag) {

        listTag.addEventListener('mouseover', function () {
            listTag.style.transition = 'all 0.2s ease-in-out';
            listTag.style.scale = '1.5';
        });
    });

    listTags.forEach(function (listTag) {

        listTag.addEventListener('mouseout', function () {

            listTag.style.scale = '1';
        });
    });