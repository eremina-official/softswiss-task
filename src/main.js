import telegramLogo from '/assets/telegram.svg';
import arrowRight from '/assets/arrow-right-2.svg';
import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

document.querySelector('#cards-section-one').innerHTML = /* html */ `
  <article class="card card-1">
    <div class="card__content">
      <div class="card__content__icon-social">
        <img class="card__image" src=${telegramLogo} alt="card-image" />
      </div>
    </div>
    <div class="card__content">
      <span class="card__content__bottom-text text-normal">Telegram Channel</span>
      <button class="button button--ghost" aria-label="More">
        <img class="card__image" src=${arrowRight} alt="card-image" />
      </button>
    </div>
  </article>
  <article class="card card-2">
    <div class="card__content">
      <div class="card__content__icon-social">
        <img class="card__image" src=${telegramLogo} alt="card-image" />
      </div>
    </div>
    <div class="card__content">
      <span class="card__content__bottom-text text-normal">Telegram Channel</span>
      <button class="button button--ghost" aria-label="More">
        <img class="card__image" src=${arrowRight} alt="card-image" />
      </button>
    </div>
  </article>
  <article class="card card-3">
    <div class="card__content">
      <div class="card__content__icon-social">
        <img class="card__image" src=${telegramLogo} alt="card-image" />
      </div>
    </div>
    <div class="card__content">
      <span class="card__content__bottom-text text-normal">Telegram Channel</span>
      <button class="button button--ghost" aria-label="More">
        <img class="card__image" src=${arrowRight} alt="card-image" />
      </button>
    </div>
  </article>
  <article class="card card-4">
    <div class="card__content">
      <div class="card__content__icon-social">
        <img class="card__image" src=${telegramLogo} alt="card-image" />
      </div>
    </div>
    <div class="card__content">
      <span class="card__content__bottom-text text-normal">Telegram Channel</span>
      <button class="button button--ghost" aria-label="More">
        <img class="card__image" src=${arrowRight} alt="card-image" />
      </button>
    </div>
  </article>
`;

document.querySelector('#cards-section-two').innerHTML = /* html */ `
  <article class="card card-5">
    <div class="card__content">
      <div class="card__content__icon-social">
        <img class="card__image" src=${telegramLogo} alt="card-image" />
      </div>
    </div>
    <div class="card__content">
      <span class="card__content__bottom-text text-normal">Telegram Channel</span>
      <button class="button button--ghost" aria-label="More">
        <img class="card__image" src=${arrowRight} alt="card-image" />
      </button>
    </div>
  </article>
  <article class="card card-6">
    <div class="card__content">
      <div class="card__content__icon-social">
        <img class="card__image" src=${telegramLogo} alt="card-image" />
      </div>
    </div>
    <div class="card__content">
      <span class="card__content__bottom-text text-normal">Telegram Channel</span>
      <button class="button button--ghost" aria-label="More">
        <img class="card__image" src=${arrowRight} alt="card-image" />
      </button>
    </div>
  </article>
  <article class="card card-7">
    <div class="card__content">
      <div class="card__content__icon-social">
        <img class="card__image" src=${telegramLogo} alt="card-image" />
      </div>
    </div>
    <div class="card__content">
      <span class="card__content__bottom-text text-normal">Telegram Channel</span>
      <button class="button button--ghost" aria-label="More">
        <img class="card__image" src=${arrowRight} alt="card-image" />
      </button>
    </div>
  </article>
  <article class="card card-8">
    <div class="card__content">
      <div class="card__content__icon-social">
        <img class="card__image" src=${telegramLogo} alt="card-image" />
      </div>
    </div>
    <div class="card__content">
      <span class="card__content__bottom-text text-normal">Telegram Channel</span>
      <button class="button button--ghost" aria-label="More">
        <img class="card__image" src=${arrowRight} alt="card-image" />
      </button>
    </div>
  </article>
`;

document.querySelector('#footer__privacy').innerHTML = /* html */ `
  <span>
    © 2008-${new Date().getFullYear()} SOFTSWISS
  </span>
`;

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Scrollbar],
  direction: 'horizontal',
  // loop: true,
  slidesPerView: 1,
  centeredSlides: false,
  loop: false,
  breakpoints: {
    // when window width is >= 600px
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true,
    // Snaps slider position to slides when you release Scrollbar
    snapOnRelease: true,
    // Size (Length) of Scrollbar Draggable Element in px
    dragSize: '20px',
  },
});

// Burger menu
const buttonBurgerMenu = document.querySelector('#button-burger-menu');
const nav = document.querySelector('nav');
let menuIsOpen = false;

buttonBurgerMenu.addEventListener('click', () => {
  menuIsOpen = !menuIsOpen;
  nav.style.transform = menuIsOpen
    ? 'translateY(0) rotateX(0)'
    : 'translateY(-500%) rotateX(90deg)';
});

// Close the menu when resizing the window
window.addEventListener('resize', () => {
  if (window.innerWidth > 1200) {
    menuIsOpen = false;
    nav.style.transform = 'none';
  } else {
    nav.style.transform = 'translateY(-500%) rotateX(90deg)';
  }

  if (window.innerWidth > 1199) {
    nav.classList.remove('nav-transition');
  } else {
    nav.classList.add('nav-transition');
  }
});

// add dark theme toggle functionality
const toggleThemeButton = document.querySelector('#button-dark-mode');
const body = document.body;
let isDarkTheme = false;

toggleThemeButton.addEventListener('click', () => {
  isDarkTheme = !isDarkTheme;
  body.classList.toggle('theme-dark', isDarkTheme);
});

// add go to top button functionality
const goToTopButton = document.querySelector('#button-to-top');
goToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
