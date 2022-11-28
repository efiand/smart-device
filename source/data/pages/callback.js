import html from '../../js/utils/html.js';
import getFormData from '../modules/form.js';

export default {
  callback: {
    content: html`<h2>Закажите звонок</h2>
      <p>
        Оставьте контакты, мы проконсультируем вас бесплатно в удобное время
      </p>`,
    form: getFormData('callback'),
    image: {
      default: 'img/plane.png',
      default2x: 'img/plane@2x.png',
      immediately: true,
      webp: 'img/plane.webp',
      webp2x: 'img/plane@2x.webp',
    },
  },
  callbackLink: null, // Переопределяем общие данные из _common.js
};
