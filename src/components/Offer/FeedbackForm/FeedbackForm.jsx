import React, { useState } from "react";
import Popup from "../Popup/Popup";
import './FeedbackForm.scss';
import BlackLayer from "../../BlackLayer/BlackLayer";
import offerIcon from '../../../assets/images/offer-icon.svg';

function FeedbackForm( ) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errorName, setErrorName] = useState ('');
  const [errorPhone, setErrorPhone] = useState ('');
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState ('');
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBudget, setIsOpenBudget] = useState(false);
  const [contact, setContact] = useState("");
  const [budget, setBudget] = useState("");
  const contacts = [
    { label: "Telegram" },
    { label: "VKontakte"},
    { label: "Позвонить"}
  ];
  const budgets = [
    { label: "До 100 тыс" },
    { label: "От 100 до 200 тыс"},
    { label: "От 200 до 500 тыс"},
    { label: "От 500 тыс до 1млн"}
  ];


  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || name === null ) {
      setErrorName('Обязательное поле');
      return false;
    } 
    if (phone === "" || phone === null ) {
      setErrorPhone('Обязательное поле');
      return false;
    }  
  //   if (!/^\d+$/.test(phone))
  //  {
  //   setErrorPhone("Номер телефона введен некорректно");
  //   return false;
  //   }
    if (message === "" || message === null ) {
      setErrorMessage('Обязательное поле');
      return false;
    }

    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handlePhoneChange = (e) => {
    const re = /^[0-9+]*$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setPhone(e.target.value);
      setErrorPhone("");
    }
  };
  const handleOptionClick = (option) => {
    setContact(option.label);
    setIsOpen(false);
  };//клик для открытия выпадающего меню в выборе контакта
  const handleBudgetClick = (option) => {
    setBudget(option.label);
    setIsOpenBudget(false);
  };//клик для открытия выпадающего меню в выборе бюджета
  return (
    <>
    <form  className="form" method="post" action="#!" onSubmit={handleSubmit}>
      <label className="form__input-name">
        {/* <input  className="form__name" type="text" value={name} placeholder="Имя" onChange={(e) => setName(e.target.value)}/> */}
        <input type="text" name="name" placeholder="Имя" onInput={(evt) => {
                                setName(evt.target.value) 
                                setErrorName('')}}
                                className={`form__name ${errorName ? "form__name_error" : ""}`}  value={name} />
                            <div className={`error ${errorName ? "error_active" : ""}`}>{errorName}</div> 
      </label>
      <br />
      <label>
        <input value={phone}   onChange={handlePhoneChange}
                                className={`form__phone ${errorPhone ? "form__phone_error" : ""}`}
                                type="tel" placeholder="Телефон"/>
                                <div className={`error ${errorPhone ? "error_active" : ""}`}>{errorPhone}</div> 
      </label>
      <br />
      <div className="form__contacts">
      <label className="form__contact" htmlFor="contactMethod">Cпособ связи:</label>
                  <div className="form-dropdown__selected" onClick={() => setIsOpen(!isOpen)}>
                    {contact ? budgets.find(option => option.label === contact).label : "Telegram"}
                    <img className="form-dropdown__icon" src={offerIcon} alt="icon" />
                  </div>
                    {isOpen && (
                      <div className="contact-dropdown__options">
                        {contacts.map((option) => (
                          <div
                            key={option.label}
                            className={
                              "contact-dropdown__option " +
                              (contact === option.label
                                ? "contact-dropdown__option--selected"
                                : "")
                            }
                            onClick={() => handleOptionClick(option)}
                          >
                            {option.label}
                          </div>
                        ))}
                      </div>
                    )}
      </div>
      <div className="form__budget">
      <label className="form__money" htmlFor="contactMethod">Бюджет проекта</label>
                  <div className="form-dropdown__selected" onClick={() => setIsOpenBudget(!isOpenBudget)}>
                    {budget ? budgets.find(option => option.label === budget).label : "До 100 тыс"}
                    <img className="form-dropdown__icon" src={offerIcon} alt="icon" />
                  </div>
                    {isOpenBudget && (
                      <div className="contact-dropdown__options">
                        {budgets.map((option) => (
                          <div
                            key={option.label}
                            className={
                              "contact-dropdown__option " +
                              (budget === option.label
                                ? "contact-dropdown__option--selected"
                                : "")
                            }
                            onClick={() => handleBudgetClick(option)}
                          >
                            {option.label}
                          </div>
                        ))}
                      </div>
                    )}
      </div>
      <label >
        <textarea  placeholder="Опишите проект"  onInput={(evt) => {
                                setMessage(evt.target.value)
                                setErrorMessage('')}}
                                className={`form__message ${errorMessage ? "form__message_error" : ""}`}  value={message}  />
                            <div className={`error ${errorMessage ? "error_active" : ""}`}>{errorMessage}</div> 
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