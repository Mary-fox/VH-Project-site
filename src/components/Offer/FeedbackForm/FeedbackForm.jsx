import React, { useState } from "react";
import Popup from "../Popup/Popup";
import './FeedbackForm.scss';
import BlackLayer from "../../BlackLayer/BlackLayer";

function FeedbackForm(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  // const [errorName, setErrorName] = useState ('');
  const [errorPhone, setErrorPhone] = useState ('');
  const { showPopup, setShowPopup } = props;



  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
    <form  className="form" method="post" action="#!" onSubmit={handleSubmit}>
      <label className="form__input-name">
        <input  className="form__name" type="text" value={name} placeholder="Имя" onChange={(e) => setName(e.target.value)}/>
      </label>
      <br />
      <label>
        <input className="form__phone" value={phone}  onInput={(e) => {
                                setPhone(e.target.value)
                                setErrorPhone('')}}
                                type="tel" placeholder="Телефон"
                                pattern="^((8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$"
                                title={errorPhone ? errorPhone : 'Введите корректный номер телефона'}/>
      </label>
      <br />
      <div className="form__contacts">
        <label className="form__contact" htmlFor="contactMethod">Cпособ связи:</label>
          <select id="contactMethod" name="contactMethod">
              <option value="messengers">Telegram</option>
              <option value="vk">VKontakte</option>
              <option value="phone">Позвонить</option>
          </select>
      </div>
      <div className="form__budget">
        <label  className="form__money" htmlFor="contactMethod">Бюджет проекта</label>
          <select id="contactMethod" name="contactMethod">
              <option value="100">До 100 тыс</option>
              <option value="200">От 100 до 200 тыс</option>
              <option value="500">От 200 до 500 тыс</option>
              <option value="1">От 500 тыс до 1млн</option>
          </select>
      </div>
      <label >
        <textarea  className="form__message" value={message} placeholder="Опишите проект"  onChange={(e) => setMessage(e.target.value)} />
      </label>
      <br />
      <button className="form__btn" type="submit">Отправить</button>
      <p className="form__text">Нажимая на кнопку вы соглашаетесь с условиями <a href="#!">политики конфиденциальности</a>.</p>
    </form>

    {showPopup && <Popup  onClose={handleClosePopup}  showPopup={showPopup} setShowPopup={setShowPopup} />}
    {showPopup && <BlackLayer  showPopup={showPopup} onClose={handleClosePopup} />}
    </>
  );
}

export default FeedbackForm;