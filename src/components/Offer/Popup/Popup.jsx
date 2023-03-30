import React from 'react';
import './Popup.scss';
import close from '../../../assets/images/icon-close.svg';
import successfully from '../../../assets/images/icon-successfully.svg';

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <button className='popup__close'onClick={onClose}><img src={close} alt="close-icon"/></button>
      <img className='popup__successfully' src={successfully} alt="successfully-icon" />
      <h2 className='popup__text'>Спасибо! Данные успешно отправлены.</h2>

    </div>
  );
};

export default Popup;