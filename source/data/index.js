import html from '../js/utils/html.js';

export const getFormContent = (id, buttonText = 'Отправить') => html`<form
  action="https://echo.htmlacademy.ru"
>
  <input
    id="${id}-name"
    name="name"
    type="text"
    placeholder="Имя"
    pattern="^[A-Za-zА-Яа-яЁё\\- ]+$"
    required
  />
  <label class="visually-hidden" for="${id}-name">Имя</label>

  <input
    id="${id}-phone"
    name="phone"
    type="tel"
    placeholder="Телефон"
    pattern="^\\+7\\(\\d{3}\\)\\d{7}$"
    required
  />
  <label class="visually-hidden" for="${id}-phone">Телефон</label>

  <textarea
    id="${id}-message"
    name="message"
    placeholder="Ваш вопрос"
  ></textarea>
  <label class="visually-hidden" for="${id}-message">Ваш вопрос</label>

  <button type="submit">${buttonText}</button>

  <label>
    <input name="agree" type="checkbox" checked required />
    Я согласен на обработку персональных данных
  </label>
</form>`;

export default {
  about: {
    content: html`<h2>О компании</h2>
      <p>
        Мы поставляем электронные комплектующие, производим печатные платы и
        предоставляем мировые технологии с 1997 года. Выполняем срочные заказы и
        пилотные образцы до 10 дней.
      </p>
      <p>
        Наши поставщики - мировые производители электронных компонентов: OSRAM,
        CREE, HOLGLITRONIC, REFOND.
        <span class="mobile-hide">
          Печатные платы и комплектующие Service Devices применяются на
          предприятиях Российских Железных Дорог (РЖД), РоссАвтоПрома (ВАЗ,
          АвтоГАЗ), МинАтома, СпецМедТехники. Среди наших клиентов крупнейшие
          Производители светотехники России.
        </span>
      </p>
      <p>
        Smart Device - это команда профессионалов. Через нас прошло более 1 000
        000 клиентов, 70% из которых продолжают сотрудничество по сей день. На
        данный момент насчитывается более 14 офисов по всей стране и 20 городов
        присутствия.
      </p>
      <p>
        Мы стремимся к постоянному развитию и повышению уровня качества
        продукции, производимой внутри компании. Использование инновационных
        технологий помогает экономить деньги и время наших клиентов
      </p>`,
    image: {
      default: 'img/about.png',
      default2x: 'img/about@2x.png',
      webp: 'img/about.webp',
      webp2x: 'img/about@2x.webp',
    },
  },
  advantages: [
    html`<img src="img/svg/stopwatch.svg" alt width="35" height="35" />
      <h3>Оперативные сроки</h3>
      <p>
        Усовершенствованная логистическая система позволяет нам просчитывать
        стоимость, производить и доставлять заказы плат и комплектующих в самые
        короткие сроки
      </p>`,
    html`<img src="img/svg/hired.svg" alt width="35" height="35" />
      <h3>Крупные поставщики</h3>
      <p>
        Нашими поставщиками являются такие крупные мировые компании как: OSRAM,
        CREE, HOLGLITRONIC, REFOND. Сотрудничество с такими компаниями
        обеспечивает хорошее качество нашей продукции.
      </p>`,
    html`<img src="img/svg/detective.svg" alt width="35" height="35" />
      <h3>Полная конфиденциальность</h3>
      <p>По желанию клиента мы обеспечиваем полную конфиденциальность.</p>`,
    html`<img src="img/svg/tag.svg" alt width="35" height="35" />
      <h3>Персонализация стоимости</h3>
      <p>
        Мы подбираем определенную фабрику, поставщиков, вид доставки, чтобы
        установить ту цену, которая Вас устраивает.
      </p>`,
  ],
  advantagesHeading: 'Преимущества.',
  callback: {
    content: html`<h2>Закажите звонок</h2>
      <p>
        Оставьте контакты, мы проконсультируем вас бесплатно в удобное время
      </p>
      ${getFormContent('callback')}`,
    modalId: 'callback',
  },
  feedback: {
    content: html`<h2>Остались вопросы? Задайте их нам!</h2>
      <p>Мы проконсультируем Вас бесплатно</p>
      ${getFormContent('feedback', 'Задать вопрос')}`,
    id: 'feedback',
    image: {
      default: 'img/plane.png',
      default2x: 'img/plane@2x.png',
      webp: 'img/plane.webp',
      webp2x: 'img/plane@2x.webp',
    },
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
  services: {
    heading: 'Smart Device предлагает следующие товары и услуги',
    list: [
      {
        image: {
          default: 'img/service-1.jpg',
          default2x: 'img/service-1@2x.jpg',
          defaultMobile: 'img/service-1-mobile.jpg',
          defaultMobile2x: 'img/service-1-mobile@2x.jpg',
          defaultTablet: 'img/service-1-tablet.jpg',
          defaultTablet2x: 'img/service-1-tablet@2x.jpg',
          webp: 'img/service-1.webp',
          webp2x: 'img/service-1@2x.webp',
          webpMobile: 'img/service-1-mobile.webp',
          webpMobile2x: 'img/service-1-mobile@2x.webp',
          webpTablet: 'img/service-1-tablet.webp',
          webpTablet2x: 'img/service-1-tablet@2x.webp',
        },
        link: {
          title: 'Производство печатных плат',
          url: '#!',
        },
      },
      {
        image: {
          default: 'img/service-2.jpg',
          default2x: 'img/service-2@2x.jpg',
          defaultMobile: 'img/service-2-mobile.jpg',
          defaultMobile2x: 'img/service-2-mobile@2x.jpg',
          defaultTablet: 'img/service-2-tablet.jpg',
          defaultTablet2x: 'img/service-2-tablet@2x.jpg',
          webp: 'img/service-2.webp',
          webp2x: 'img/service-2@2x.webp',
          webpMobile: 'img/service-2-mobile.webp',
          webpMobile2x: 'img/service-2-mobile@2x.webp',
          webpTablet: 'img/service-2-tablet.webp',
          webpTablet2x: 'img/service-2-tablet@2x.webp',
        },
        link: {
          title: 'Монтаж печатных плат',
          url: '#!',
        },
      },
      {
        image: {
          default: 'img/service-3.jpg',
          default2x: 'img/service-3@2x.jpg',
          defaultMobile: 'img/service-3-mobile.jpg',
          defaultMobile2x: 'img/service-3-mobile@2x.jpg',
          defaultTablet: 'img/service-3-tablet.jpg',
          defaultTablet2x: 'img/service-3-tablet@2x.jpg',
          webp: 'img/service-3.webp',
          webp2x: 'img/service-3@2x.webp',
          webpMobile: 'img/service-3-mobile.webp',
          webpMobile2x: 'img/service-3-mobile@2x.webp',
          webpTablet: 'img/service-3-tablet.webp',
          webpTablet2x: 'img/service-3-tablet@2x.webp',
        },
        link: {
          title: 'Комплектующие для светотехники',
          url: '#!',
        },
      },
    ],
    mobileHeading: 'Товары и услуги Smart Device',
  },
};
