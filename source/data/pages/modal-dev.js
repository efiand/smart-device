import html from '../../js/utils/html.js';
import getFormData from '../modules/form.js';

export default {
  callback: {
    content: html`<h2>Закажите звонок</h2>
      <p>
        Оставьте контакты, мы проконсультируем вас бесплатно в удобное время
      </p>`,
    form: getFormData('callback'),
    modalId: 'callback',
  },
  promo: {
    content: html`<h2>Печатные платы</h2>
      <p>производство и монтаж, поставка комплектующих, блоков и модулей</p>`,
    image: {
      default: 'img/main-header.jpg',
      default2x: 'img/main-header@2x.jpg',
      immediately: true,
      webp: 'img/main-header.webp',
      webp2x: 'img/main-header@2x.webp',
    },
    link: {
      mobileTitle: 'бесплатная консультация',
      title: 'Получить бесплатную консультацию',
      url: '#feedback',
    },
  },
};
