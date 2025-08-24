import './style.css';
import telegramLogo from '/assets/telegram.svg';
import arrowRight from '/assets/arrow-right-2.svg';

// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

document.querySelector('#cards-section').innerHTML = /* html */ `
  <article class="card">
    <div class="card__content">
      <div class="card__content__icon-social">
        <img class="card__image" src=${telegramLogo} alt="card-image" />
      </div>
    </div>
    <div class="card__content">
      <span class="card__content__bottom-text text-normal">Telegram Channel</span>
      <button class="button button--ghost" aria-label="More">
        <img class="card__image" src="/assets/arrow-right-2.svg" alt="card-image" />
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
    // when window width is >= 480px
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
