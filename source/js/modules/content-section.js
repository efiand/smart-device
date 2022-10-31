import html from '../utils/html.js';

const ButtonText = {
  CLOSED: 'Подробнее',
  OPENED: 'Свернуть',
};
const BODY_SELECTOR = '.content-section__body';
const BTN_SELECTOR = '.content-section__btn';
const CLOSED_CLASS_NAME = 'content-section__body--closed';

const buttonTemplate = html`<button class="content-section__btn btn">
  ${ButtonText.CLOSED}
</button>`;

export default (sectionElement) => {
  let isOpened = false;

  const bodyElement = sectionElement.querySelector(BODY_SELECTOR);
  bodyElement.classList.add(CLOSED_CLASS_NAME);
  bodyElement.insertAdjacentHTML('beforeend', buttonTemplate);

  const buttonElement = bodyElement.querySelector(BTN_SELECTOR);
  buttonElement.addEventListener('click', () => {
    isOpened = !isOpened;
    bodyElement.classList.toggle(CLOSED_CLASS_NAME);

    buttonElement.textContent = isOpened
      ? ButtonText.OPENED
      : ButtonText.CLOSED;
  });
};
