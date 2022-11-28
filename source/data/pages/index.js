import html from '../../js/utils/html.js';
import getFormData from '../modules/form.js';

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
      </p>`,
    form: getFormData('callback'),
    modalId: 'callback',
  },
  feedback: {
    content: html`<h2>Остались вопросы? Задайте их нам!</h2>
      <p>Мы проконсультируем Вас бесплатно</p>`,
    form: getFormData('feedback', 'Задать вопрос'),
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
      webpMobile: 'img/main-header-mobile.webp',
      webpMobile2x: 'img/main-header-mobile@2x.webp'
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
      'Производство печатных плат',
      'Монтаж печатных плат',
      'Комплектующие для светотехники',
    ].map((title, i) => {
      const index = i + 1;

      return {
        image: {
          default: `img/service-${index}.jpg`,
          default2x: `img/service-${index}@2x.jpg`,
          webp: `img/service-${index}.webp`,
          webp2x: `img/service-${index}@2x.webp`,
          webpMobile: `img/service-${index}-mobile.webp`,
          webpMobile2x: `img/service-${index}-mobile@2x.webp`,
          webpTablet: `img/service-${index}-tablet.webp`,
          webpTablet2x: `img/service-${index}-tablet@2x.webp`,
        },
        link: {
          title,
          url: '#!',
        },
      };
    }),
    mobileHeading: 'Товары и услуги Smart Device',
  },
};
