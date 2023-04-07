import React, {useState} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import './ServicesPage.scss';
import ServicesCard from '../ServicesCard/ServicesCard';



function ServicesPage() {
    const [isOfferOpen, setIsOfferOpen] = useState(false);
    return (
    <div>
    <Header  isOfferOpen={isOfferOpen} setIsOfferOpen={setIsOfferOpen}/>
        <div id={"top"}></div>
        <section className="servic">
        <div className='servic__left-banner'></div>
            <div className='servic__content'>
                <div className="servic__subheader">
                <Breadcrumbs
                          items={[
                            {label: 'Цифровые решения', url: '#!' },
                            {label: 'Услуги', url: '#!' },
                             ]}/>
                    <div className="servic__container">
                        <h1 className='servic__title'>Услуги</h1>
                        <p className='servic__text'>Мы оказываем полный цикл цифровизации для бизнеса любого уровня.</p>
                    </div>
                </div>
            </div>
        <div className='servic__right-banner'></div>
        </section>
        <ServicesCard
            title="Аналитика"
            text="Изучаем бизнес клиента и его конкурентов, подбираем инструменты и способы продвижения."
            menu1={<>
                    <li>Продуктовая аналитика</li>
                    <li>Маркетинговая аналитика</li>
                    <li>Анализ конкуренции</li></>
                }
            menu2={<>
                    <li>Работа с ЦА</li>
                    <li>UX - Исследования</li>
                    <li>Аналитика метрик</li>
                    </>}
            />
        <ServicesCard
            title="Дизайн"
            text="Сервисный дизайн на основе аналитики, метрик и пользовательского опыта — продуктовый подход для создания привлекательных и эффективных решений."
            menu1={<>
                    <li>UX/UI дизайн</li>
                    <li>Дизайн системы</li>
                    <li>Брендинг</li>
                    <li>Логотипы</li>
                    <li>Обложки</li>
                    </>}
            menu2={<>
                    <li>Иллюстрации</li>
                    <li>Цифровые арты</li>
                    <li>Баннеры</li>
                    <li>NFT</li>
                    </>}
        />
        <ServicesCard
            title="Веб-сайты"
            text="Создаем удобные и эффективные сайты, которые нравятся пользователям и хорошо продвигаются в поисковых системах."
            menu1={<>
                <li>Одностраничные</li>
                <li>Корпоративные сайты</li>
                <li>Интернет-магазины</li>
                <li>Каталоги и витрины</li>
                <li>No-code решения</li>
                </>}
            menu2={<>
                <li>1С Битрикс</li>
                <li>Wordpress</li>
                <li>Tilda</li>
                </>}
        />
        <ServicesCard
            title="Поддержка и развитие"
            text="Обеспечиваем работу сайта 24/7."
            menu1={<>
                    <li>Техническая поддержка</li>
                    <li>Дизайн поддержка</li>
                    <li>Контент поддержка</li>
                </>}
            link="/promotion"
        />
        <ServicesCard
            title="Маркетинг"
            text="Развиваем ваш бизнес с помощью веб-продвижения"
            menu1={<>
                    <li>Настройка и ведение Яндекс директ</li>
                    <li>Настройка и ведение Яндекс бизнес</li>
                    <li>Таргетинг в социальных сетях</li>
                    <li>Семантика и базовая SEO оптимизация</li>
            </>}
        />
     <Footer  isOfferOpen={isOfferOpen} setIsOfferOpen={setIsOfferOpen}
    text="Расскажите о вашем проекте"
    subtext="Опишите свою задачу и мы свяжемся с вами в кратчайшие сроки." 
    btn="Написать"
    key="services"
    />
    </div>
    );
  }
  
  export default ServicesPage;
  