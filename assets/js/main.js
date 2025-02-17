/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 10 ? header.classList.add('scroll-header') 
                    : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor:true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

/*=============== MIXITUP FILTER FEATURED ===============*/

let mixerFeatured = mixitup('.featured__content', {
    selectors: {
        target: '.featured__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active featured */ 

const linkFeatured = document.querySelectorAll('.featured__item')
function activeFeatured() {
    linkFeatured.forEach(l => l.classList.remove('active-featured'))
    this.classList.add('active-featured')
}
linkFeatured.forEach(l => l.addEventListener('click', activeFeatured))
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id'),
			sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
// sr.reveal('.home')
sr.reveal('.home__title, .popular__container, .features__img, .featured__filters')
sr.reveal('.home__subttile', { delay: 500 })
sr.reveal('.home__me', { delay: 600 })
sr.reveal('.home__img', { delay: 700 })
sr.reveal('.home__eng-data', { delay: 900, interval: 100, origin: 'bottom' })
sr.reveal('.home__button', { delay: 800, interval: 1000, origin: 'bottom' })
sr.reveal('.about__group, .offer__data', { origin: 'right' })
sr.reveal('.about__data, .offer__img', { origin: 'left' })
sr.reveal('.features__map', { delay: 600, origin: 'right' })
sr.reveal('.features__card', { interval: 100 })
sr.reveal('.featured__card, .logos__content, .footer__content', { interval: 300 })


// People can help
// let cards = document.querySelectorAll(".offer__img");

// function rotateCards(){
//     let angle = 0;
//     cards.forEach((offer__img, index) =>{
//         offer__img.style.transform = `
//         rotate(${angle}deg)`;
//         angle -= 10;
//         // offer__img.style.zIndex = cards.lenght - index;
//     });
// }


//show cards
function showCardsLoop() {
            let cards = document.querySelectorAll(".card_con");
            let delay = 3000; // Time between each card appearance

            cards.forEach((card_con, index) => {
                setTimeout(() => {
                    card_con.style.opacity = "1";
                }, index * delay);
            });

            // Hide all cards and restart loop
            setTimeout(() => {
                cards.forEach(card_con => {
                    card_con.style.opacity = "0";
                });
                setTimeout(showCardsLoop, delay); // Restart loop
            }, cards.length * delay + 1000); // Reset after last card
        }

        showCardsLoop(); // Start the loop when the page loads