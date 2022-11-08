import html from '../../js/utils/html.js';

export default (id, submitText = 'Отправить') => ({
  action: 'https://echo.htmlacademy.ru',
  fields: [
    html`<input
        id="${id}-name"
        name="name"
        type="text"
        placeholder="Имя"
        pattern="^[A-Za-zА-Яа-яЁё\\- ]+$"
        required
      />
      <label class="visually-hidden" for="${id}-name">Имя</label>`,
    html`<input
        id="${id}-phone"
        name="phone"
        type="tel"
        placeholder="Телефон"
        pattern="^\\+7\\(\\d{3}\\)\\d{7}$"
        required
      />
      <label class="visually-hidden" for="${id}-phone">Телефон</label>`,
    html`<textarea
        id="${id}-message"
        name="message"
        placeholder="Ваш вопрос"
      ></textarea>
      <label class="visually-hidden" for="${id}-message">Ваш вопрос</label>`,
    html`<label>
      <input name="agree" type="checkbox" checked required />
      Я согласен на обработку персональных данных
    </label>`,
  ],
  submitText,
});
