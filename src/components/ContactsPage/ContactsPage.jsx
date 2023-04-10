import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './ContactsPage.scss';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import LinkItem from '../LinkItem/LinkItem';



function ContactsPage() {
    const [isOfferOpen, setIsOfferOpen] = useState(false);
    return (
    <div className='page-wrapper'>
        <Header  isOfferOpen={isOfferOpen} setIsOfferOpen={setIsOfferOpen}/>
        <section className="contacts-page">
            <div className='contacts-page__left-banner'>
                <h3>Контакты</h3>
            </div>
            <div className="contacts-page__container">
                <Breadcrumbs
                                items={[
                                    {label: 'Главная', url: '/' },
                                    {label: 'Контакты', url: '/contacts' },
                                    ]}/>
                <div className="contacts-page__content">
                    <div className="contacts-page__left-block">
                        <h1 className='contacts-page__title'>Контакты</h1>
                    </div>
                    <div className="contacts-page__right-block">
                        <div className="contacts-page__phone">
                            <h3 className='contacts-page__subtitle'>Номер телефона для связи:</h3>
                            <LinkItem className='contacts-page__phone' href="tel:79270030100" text='8 927 003 01 00'/>
                        </div>
                        <div className="contacts-page__email">
                            <h3 className='contacts-page__subtitle'>Предложения и сотрудничество:</h3>
                            <LinkItem  className='contacts-page__email' href="mailto:info@visualhearts.ru" text='info@visualhearts.ru'/>
                        </div>
                        <div className="contacts-page__links">
                            <h3 className='contacts-page__subtitle'>Мы в социальных сетях:</h3>
                                <nav className='contacts-page__items'>
                                    <ul>                            
                                        <li className='contacts-page__item'><a href="https://t.me/anyera"  target="_blank" rel="noopener noreferrer">telegram</a></li>
                                        <li className='contacts-page__item'><a href="https://vk.com/anyera"  target="_blank" rel="noopener noreferrer">vkontakte</a></li>
                                    </ul>
                                    <ul>                            
                                        <li className='contacts-page__item'><a href="#!">Behance</a></li>
                                        <li className='contacts-page__item'><a href="#!">Dribble</a></li>
                                    </ul>
                                </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contacts__right-banner"></div>
        </section>
        <Footer  isOfferOpen={isOfferOpen} setIsOfferOpen={setIsOfferOpen}
        text="Расскажите о вашем проекте"
        subtext="Опишите свою задачу и мы свяжемся с вами в кратчайшие сроки." 
        btn="Написать"
        />
    </div>
    
    
    );
  }
  
  export default ContactsPage;




                // <div className="contacts__block">
                //     <LinkItem className='contacts__phone' href="tel:79270030100" text='8 927 003 01 00'/>
                //     <LinkItem  className='contacts__email' href="mailto:info@visualhearts.ru" text='info@visualhearts.ru'/>
                // </div>
