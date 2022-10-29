const [mainPhone, ...additionalPhones] = [
  '+7 (495) 000 52 52',
  '+7 (495) 589-40-50',
  '+7 (925) 389-58-29',
  '+7 (925) 364-78-13',
].map((phone) => ({
  phone,
  shortPhone: `+${phone.replace(/\D/g, '')}`,
}));

export default {
  additionalPhones,
  callBack: {
    title: 'Заказать звонок',
    url: '#!',
  },
  contacts: [
    {
      id: 'mailto',
      value: 'info@sd.ru',
    },
    {
      id: 'tel',
      title: mainPhone.phone,
      value: mainPhone.shortPhone,
    },
  ],
  promo: {
    content:
      '<h2>Печатные платы</h2><p>производство и монтаж, поставка комплектующих, блоков и модулей</p>',
    image: {
      default: 'img/main-header.jpg',
      default2x: 'img/main-header@2x.jpg',
      webp: 'img/main-header.webp',
      webp2x: 'img/main-header@2x.webp',
    },
  },
  slogan: 'умные технологии',
};
