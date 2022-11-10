const pages = [
  {
    id: 'index',
    title: 'Главная страница',
  },
  {
    id: 'backcall',
    title: 'Страница заказа звонка',
  },
  {
    id: '404',
    title: 'Страница ошибок',
  },
];

if (process.env.NODE_ENV === 'development') { // eslint-disable-line
  pages.push({
    id: 'modal-dev',
    title: 'Страница проверки модального окна',
  });
}

export default {
  pages,
};
