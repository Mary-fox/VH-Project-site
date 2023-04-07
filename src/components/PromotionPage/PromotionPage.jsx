import React, {useState} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './PromotionPage.scss';
// import Card from '../Card/Card';
// import { HashLink as Link } from 'react-router-hash-link';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Subheader from '../Subheader/Subheader';
import InfoCard from '../InfoCard/InfoCard';
import Projects from '../Projects/Projects';


function PromotionPage( ) {
    const [isOfferOpen, setIsOfferOpen] = useState(false);
    function handleOfferOpen() {
        setIsOfferOpen(!isOfferOpen);
      }
    return (
    <>
    <Header isOfferOpen={isOfferOpen} setIsOfferOpen={setIsOfferOpen}/>
    <div className='wrapper'>
    <section className="promotion">
        <div className="promotion__left-banner"></div>
            <div className='promotion__title-block'>
                <Breadcrumbs
                    items={[
                        {label: 'Главная', url: '/' },
                        {label: 'Поддержка и продвижение', url: '/promotion' },
                        ]}/>
                <Subheader isOfferOpen={isOfferOpen} setIsOfferOpen={setIsOfferOpen}
                    title="Поддержка и продвижение"
                    subtitle="Конечно, каждый проект уникален и имеет свой состав этапов которые мы прописываем в договорах, но мы решили все же показать основные, чтобы вы могли понимать, что входит в наши услуги и почему это необходимо."
                    btn="Стать клиентом"
                    click={handleOfferOpen}/>
            </div>
        <div className="promotion__right-banner"></div>
        <div className="promotion__left-banner"></div>
            <div className="promotion__container">
                <InfoCard 
                    title="Аналитическая поддержка"
                    text="Анализируем ваши метрики и предоставляем еженедельные отчёты о работе вашего продукта с предложениями по улучшению и выводами."/>
                <div className="promotion__empty-block"></div>

                <div className="promotion__empty-block"></div>
                <InfoCard 
                title="Дизайн поддержка"
                text="Нарисуем для вас баннеры или посты для социальных сетей, будем поддерживать вас по всем дизайн направлениям. Услуга преимущественно для наших клиентов, такая поддержка намного выгоднее чем заказывать дизайн где-то отдельно."/>
    
                <InfoCard 
                title="Техническая поддержка"
                text="Постоянная поддержка созданных нами продуктов, мы не бросаем своих клиентов после завершения проекта, стараемся максимально учавствовать в их развитии, поэтому осуществляем поддержку как почасовую так и по фиксированной цене. Поддержка сайтов на тильде, битриксе, ларавель, джанго и других платформах."/>
                <div className="promotion__empty-block"></div>

                <div className="promotion__empty-block"></div>
                <InfoCard 
                title="Маркетинг и продвижение"
                text="Настройка базового SEO, Продвижение через Яндекс директ и бизнес."/>
            </div>
            <div className="promotion__right-banner"></div>
            </section>
            <Projects title="Кейсы" text="Здесь несколько наших проектов из последних, лучшие работы, которыми мы по-настоящему гордимся" />
    </div>    
    <Footer isOfferOpen={isOfferOpen} setIsOfferOpen={setIsOfferOpen}
        text="Расскажите о вашем проекте"
        subtext="Опишите свою задачу и мы свяжемся с вами в кратчайшие сроки." 
        btn="Написать"/>
    </>

    );
  }
  
  export default PromotionPage;