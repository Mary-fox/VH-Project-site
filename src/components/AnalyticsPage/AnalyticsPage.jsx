import React, {useState} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './AnalyticsPage.scss';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Subheader from '../Subheader/Subheader';
import InfoCard from '../InfoCard/InfoCard';
import Projects from '../Projects/Projects';


function AnalyticsPage( ) {
    const [isOfferOpen, setIsOfferOpen] = useState(false);
    function handleOfferOpen() {
        setIsOfferOpen(!isOfferOpen);
      }
    return (
    <>
    <Header isOfferOpen={isOfferOpen} setIsOfferOpen={setIsOfferOpen}/>
    <div className='wrapper'>
    <section className="analytics">
        <div className="analytics__left-banner"></div>
            <div className='analytics__title-block'>
                <Breadcrumbs
                    items={[
                        {label: 'Главная', url: '/' },
                        {label: 'Аналитика', url: '/analytics' },
                        ]}/>
                <Subheader isOfferOpen={isOfferOpen} setIsOfferOpen={setIsOfferOpen}
                    title="Аналитика"
                    subtitle="В аналитический этап входит подбор референсов и проектирование проекта (карта/архитектура/пользовательский путь) что помогает нам более явно понимать все детали и движения для команды."
                    btn="Стать клиентом"
                    click={handleOfferOpen}/>
            </div>
        <div className="analytics__right-banner"></div>
        <div className="analytics__left-banner"></div>
            <div className="analytics__container">
                <InfoCard 
                    title="Анализ конкурентов"
                    text="Исследование которое зависит от объёма задачи и позволяет изучить отрасль или специфику вашего бизнеса. Мы составляем таблицу конкурентов с учётом предоставленных клиентом, а потом собираем все в сравнительную таблицу, изучаем показатели и определяем основной характер целевой аудитории, а так же преимущества и недостатки конкурентов, чтобы использовать их во благо нашего проекта."/>
                <div className="analytics__empty-block"></div>

                <div className="analytics__empty-block"></div>
                <InfoCard 
                title="Аналитика метрик"
                text="Собираем данные из ваших метрик и проводим анализ работы вашего существующего проекта. На основе веб-визора, карт кликов и прочих данных из метрики можно делать выводы о вашей целевой аудитории и её пользовательскому опыту."/>
    
                <InfoCard 
                title="Продуктовая стратегия и аналитика"
                text="В нашей команде присутствует продукт менеджер который помогает грамотно составить стратегию развития проекта от начала и до запуска, а так же помогает в сопровождении проекта. На стадии зарождения продукта мы строим гипотезы по продукту и составляем Roadmap, с дедлайнами и спринтами, по которым будет видно продвижение команды к необходимому результату. В процессе аналитических работ мы утверждаем рабочие гипотезы и развиваем их. Продукт менеджер помогает улучшать взаимодействие между командой и заказчиком."/>
                <div className="analytics__empty-block"></div>

                <div className="analytics__empty-block"></div>
                <InfoCard 
                title="Проводим исследование пользовательского опыта (UX)"
                text="Собираем шаблон целевой аудитории (персоны) эмпатии и JTBD к ним, после на основе этих данных ведём поиск подходящих респондентов и проводим с ними тестирование на макетах, что позволяет заранее собрать обратную связь от потенциального пользователя/покупателя вашего продукта и быть уверенным, что наш дизайн работает."/>
                
                <InfoCard 
                title="Маркетинговая аналитика"
                text="В нашей команде присутствует продукт менеджер который помогает грамотно составить стратегию развития проекта от начала и до запуска, а так же помогает в сопровождении проекта. На стадии зарождения продукта мы строим гипотезы по продукту и составляем Roadmap, с дедлайнами и спринтами, по которым будет видно продвижение команды к необходимому результату. В процессе аналитических работ мы утверждаем рабочие гипотезы и развиваем их. Продукт менеджер помогает улучшать взаимодействие между командой и заказчиком."/>
                <div className="analytics__empty-block"></div>
            </div>
            <div className="analytics__right-banner"></div>
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
  
  export default AnalyticsPage;