import React, {useState} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './IllustrationsPage.scss';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';



function IllustrationsPage( ) {
    const [isOfferOpen, setIsOfferOpen] = useState(false);

    return (
    <>
    <Header isOfferOpen={isOfferOpen} setIsOfferOpen={setIsOfferOpen}/>
    <div className='wrapper'>
    <section className="illustrations">
        <div className="illustrationst__left-banner"></div>
            <div className='illustrations__title-block'>
                <Breadcrumbs
                    items={[
                        {label: 'Главная', url: '/' },
                        {label: 'Иллюстрации', url: '/illustrations' },
                        ]}/>
                <h1 className='illustrations__name'>Наши иллюстрации</h1>
                <p className='illustrations__text'>Здесь несколько наших проектов из последних, лучшие работы, которыми мы по-настоящему гордимся</p>
            </div>
        <div className="illustrations__right-banner"></div>
        <div className="illustrations__left-banner"></div>
            <div className="illustrations__container">
                
            </div>
            <div className="illustrations__right-banner"></div>
    </section>


    </div>    
    <Footer isOfferOpen={isOfferOpen} setIsOfferOpen={setIsOfferOpen}
        text="Расскажите о вашем проекте"
        subtext="Опишите свою задачу и мы свяжемся с вами в кратчайшие сроки." 
        btn="Написать"/>
    </>

    );
  }
  
  export default IllustrationsPage;