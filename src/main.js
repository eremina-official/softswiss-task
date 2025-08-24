import './style.css';
import telegramLogo from '/assets/telegram.svg';
import arrowRight from '/assets/arrow-right-2.svg';

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
