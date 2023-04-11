import React, {useState} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './WebDevelopmentPage.scss';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Subheader from '../Subheader/Subheader';
import Projects from '../Projects/Projects';
import StageCard from './StageCard/StageCard';
import Prices from './Prices/Prices';
import Technologies from './Technologies/Technologies';


function WebDevelopmentPage( ) {
    const [isOfferOpen, setIsOfferOpen] = useState(false);
    function handleOfferOpen() {
        setIsOfferOpen(!isOfferOpen);
      }
    return (
    <>
    <Header isOfferOpen={isOfferOpen} setIsOfferOpen={setIsOfferOpen}/>
    <div className='wrapper'>
    <section className="web-development">
        <div className="web-development__left-banner"></div>
            <div className='web-development__title-block'>
                <Breadcrumbs
                    items={[
                        {label: 'Главная', url: '/' },
                        {label: 'Веб-разработка', url: '/webdevelopment' },
                        ]}/>
                <Subheader isOfferOpen={isOfferOpen} setIsOfferOpen={setIsOfferOpen}
                    title="Веб-разработка"
                    subtitle="Конечно, каждый проект уникален и имеет свой состав этапов которые мы прописываем в договорах, но мы решили все же показать основные, чтобы вы могли понимать, что входит в наши услуги и почему это необходимо."
                    btn="Стать клиентом"
                    click={handleOfferOpen}/>
            </div>
        <div className="web-development__right-banner"></div>
        <div className="web-development__left-banner"></div>
            <div className="web-development__container">
                <StageCard
                    subtitle="Этап 1:"
                    title="Аналитика"
                    text="Это основной и важный этап для создания работающего и конверсионного сайта, без этой документации дизайн делается в воздух, без опоры на данные."
                    subtext="Мы же проводим полный список всех необходимых анализов и исследований:"
                    items={<>
                        <li>Продуктовая и маркетинговая аналитика</li>
                        <li>Анализ конкуренции</li>
                        <li>Исследование пользовательского опыта (UX)</li>
                        <li>Полноценное тестирование респондентов</li>
                        <li>Персоны и боли</li>
                        </>}
                    />
                <div className="web-development__empty-block"></div>

                <div className="web-development__empty-block"></div>
                <StageCard
                    subtitle="Этап 2:"
                    title="Дизайн"
                    text="На основе данных аналитики мы создаём действительно подтверждённый, современный и работающий дизайн"
                    items={<>
                        <li>Карта проекта и путь пользователя</li>
                        <li>Доска референсов</li>
                        <li>Low-fi & High-fi прототипирование</li>
                        <li>Стилевая концепция</li>
                        <li>UI/UX дизайн макет</li>
                        <li>Дизайн</li>
                        </>}
                />

                <StageCard
                    subtitle="Этап 3:"
                    title="Разработка"
                    items={<>
                        <li>Подготавливаем дизайн макет к вёрстке</li>
                        <li>Верстаем на Тильда с триггерной анимацией и JS скриптами</li>
                        <li>Устанавливаем домен и сертификат защиты</li>
                        <li>Подключаем все необходимые сервисы и формы</li>
                        <li>Интегрируем с кассами, CRM и средствами доставки</li>
                        <li>Соединяем с Яндекс метрикой, веб-мастером</li>
                        <li>Проставляем базовые SEO настройки (Теги, Альт-теги)</li>
                        <li>Создаём базовое семантическое ядро</li>
                        <li>Индексируем сайт</li>
                        </>}
                />
                <div className="web-development__empty-block"></div>

                <div className="web-development__empty-block"></div>
                <StageCard
                    subtitle="Этап 4:"
                    title="Поддержка и продвижение"
                    text="Это основной и важный этап для создания работающего и конверсионного сайта, без этой документации дизайн делается в воздух, без опоры на данные."
                    subtext="Мы же проводим полный список всех необходимых анализов и исследований:"
                    items={<>
                        <li>Техническая поддержка </li>
                        <li>Контент менеджемент</li>
                        <li>Настройка яндекс бизнес</li>
                        <li>Продвижение контекстной рекламой</li>
                        <li>Таргетинг Вконтакте</li>
                        </>}
                />
            </div>
            <div className="web-development__right-banner"></div>
            </section>
            <Prices />
            <Technologies isOfferOpen={isOfferOpen} setIsOfferOpen={setIsOfferOpen}/>
            <Projects title="Кейсы" text="Здесь несколько наших проектов из последних, лучшие работы, которыми мы по-настоящему гордимся" />

    </div>    
    <Footer isOfferOpen={isOfferOpen} setIsOfferOpen={setIsOfferOpen}
        text="Расскажите о вашем проекте"
        subtext="Опишите свою задачу и мы свяжемся с вами в кратчайшие сроки." 
        btn="Написать"/>
    </>

    );
  }
  
  export default WebDevelopmentPage;