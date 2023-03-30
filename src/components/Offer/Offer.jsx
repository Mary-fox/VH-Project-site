import './Offer.scss';
import LinkItem from '../LinkItem/LinkItem';
import FeedbackForm from './FeedbackForm/FeedbackForm';
import { useState } from 'react';


function Offer(props) {
    const { isOfferOpen} = props;
    const [showPopup, setShowPopup] = useState(false);




    return (
    <div className={`offer ${isOfferOpen ? 'offer--open' : ''}`} >
        
        <div className='offer__left-banner'></div>
        <div className="offer__container">
            <div className='offer__content'>
                <h2 className='offer__title'>Расскажите о вашем проекте</h2>
                <p className='offer__text'>Опишите свою задачу и мы свяжемся с вами в кратчайшие сроки.</p>
                <div className="contact">
                    <div className="contact__block">
                        <LinkItem className='contact__phone' href="tel:79270030100" text='8 927 003 01 00'/>
                        <LinkItem  className='contact__email' href="mailto:info@visualhearts.ru" text='info@visualhearts.ru'/>
                    </div>
                </div>
            </div>

            <FeedbackForm showPopup={showPopup} setShowPopup={setShowPopup} />
        </div>
        <div className="offer__right-banner"></div>

    </div>

    );
  }
  
  export default Offer;
  

