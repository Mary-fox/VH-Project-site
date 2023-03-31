import React, {useState} from 'react';
import './CareerPage.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Accordion from '../Accordion/Accordion';

// import Main from '../Main/Main';



function CareerPage() {
    const [isOfferOpen, setIsOfferOpen] = useState(false);
    return (
    <div>
    <Header  isOfferOpen={isOfferOpen} setIsOfferOpen={setIsOfferOpen}/>
        <div id={"top"}></div>
        <section className="career">
        <div className='career__left-banner'>
            <h3>Вакансии</h3>
        </div>
            <div className='career__content'>
                <div className="career__subheader">
                <Breadcrumbs
                          items={[
                            {label: 'Главная', url: '/' },
                            {label: 'Карьера', url: '#!' },
                             ]}/>
                </div>
                <div className="career__container">
                    <h1 className='career__title'>Карьера</h1>
                    <p className="career__slogan">Работа для лучших</p>
                </div>
                <p className="career__text">Digital-агентство Visual Hearts объединяет сильных специалистов, чтобы делать сложные веб-проекты.
                 Мы разрабатываем крутые сайты и приложения для бизнеса, которые нужны в России и на международных рынках. Наши клиенты — крупные международные компании, а также стартапы и начинающие предприниматели.</p>
                 <h3 className='career__subtitle'>Актуальные вакансии</h3>
                <Accordion 
                    title="Frontend-разработчик"
                    info={["Приглашаем в нашу команду backend-разработчика. Если ты — внимательный к мелочам и любящий своё дело бэкендер, не читай дальше, просто звони! Или отправляй резюме на почту:", <a href='mailto:info@visualhearts.ru'  target="_blank" rel="noreferrer" key="mail-info"> info@visualhearts.ru</a> ]}
                    subtitle1="Обязанности:"
                    item1={<>
                        <li>Полноценное участие в создании веб-сайтов и сервисов (как на основе MVC-фреймворков, так и на чистом PHP), интеграции с сторонними сервисами;</li>
                        <li>Рефакторинг и оптимизация кода;</li>
                        <li>Участие в проектировании архитектуры веб-сайтов и сервисов;</li>
                        <li>Натяжка верстки на CMS (Преимущественно 1CBITRIX / Wordpress, но могут быть и другие).</li>
                        </>}
                    subtitle2="Требования:"
                    item2={<>
                        <li>Уверенное знание PHP и 1CBITRIX;</li>
                        <li>Уверенный уровень знания MySQL;</li>
                        <li>Поддерживать чистоту кода;</li>
                        <li>Работать с GIt.</li>
                        </>}
                    subtitle3="Условия:"
                    item3={<>
                        <li>Первый месяц испытательный срок/стажировка 20тыс далее 40 тыс оклад + KPI, потолка нет;</li>
                        <li>Хорошая перспектива карьерного роста;</li>
                        <li>Молодая и дружная команда;</li>
                        <li>Полностью удаленная работа.</li>
                        </>}
                    href="https://obninsk.hh.ru/vacancy/77739277?from=vacancy_search_list"
                    link="Вакансия на HeadHunter"
                />
                <Accordion 
                    title="PHP-разработчик"
                    info={["Приглашаем в нашу команду backend-разработчика. Если ты — внимательный к мелочам и любящий своё дело бэкендер, не читай дальше, просто звони! Или отправляй резюме на почту:", <a href='mailto:info@visualhearts.ru'  target="_blank" rel="noreferrer" key="mail-info"> info@visualhearts.ru</a> ]}
                    subtitle1="Обязанности:"
                    item1={<>
                        <li>Полноценное участие в создании веб-сайтов и сервисов (как на основе MVC-фреймворков, так и на чистом PHP), интеграции с сторонними сервисами;</li>
                        <li>Рефакторинг и оптимизация кода;</li>
                        <li>Участие в проектировании архитектуры веб-сайтов и сервисов;</li>
                        <li>Натяжка верстки на CMS (Преимущественно 1CBITRIX / Wordpress, но могут быть и другие).</li>
                        </>}
                    subtitle2="Требования:"
                    item2={<>
                        <li>Уверенное знание PHP и 1CBITRIX;</li>
                        <li>Уверенный уровень знания MySQL;</li>
                        <li>Поддерживать чистоту кода;</li>
                        <li>Работать с GIt.</li>
                        </>}
                    subtitle3="Условия:"
                    item3={<>
                        <li>Первый месяц испытательный срок/стажировка 20тыс далее 40 тыс оклад + KPI, потолка нет;</li>
                        <li>Хорошая перспектива карьерного роста;</li>
                        <li>Молодая и дружная команда;</li>
                        <li>Полностью удаленная работа.</li>
                        </>}
                    href="https://obninsk.hh.ru/vacancy/77739277?from=vacancy_search_list"
                    link="Вакансия на HeadHunter"
                />
                <Accordion 
                    title="Бизнес-аналитик"
                    info={["Приглашаем в нашу команду backend-разработчика. Если ты — внимательный к мелочам и любящий своё дело бэкендер, не читай дальше, просто звони! Или отправляй резюме на почту:", <a href='mailto:info@visualhearts.ru'  target="_blank" rel="noreferrer" key="mail-info"> info@visualhearts.ru</a> ]}
                    subtitle1="Обязанности:"
                    item1={<>
                        <li>Полноценное участие в создании веб-сайтов и сервисов (как на основе MVC-фреймворков, так и на чистом PHP), интеграции с сторонними сервисами;</li>
                        <li>Рефакторинг и оптимизация кода;</li>
                        <li>Участие в проектировании архитектуры веб-сайтов и сервисов;</li>
                        <li>Натяжка верстки на CMS (Преимущественно 1CBITRIX / Wordpress, но могут быть и другие).</li>
                        </>}
                    subtitle2="Требования:"
                    item2={<>
                        <li>Уверенное знание PHP и 1CBITRIX;</li>
                        <li>Уверенный уровень знания MySQL;</li>
                        <li>Поддерживать чистоту кода;</li>
                        <li>Работать с GIt.</li>
                        </>}
                    subtitle3="Условия:"    
                    item3={<>
                        <li>Первый месяц испытательный срок/стажировка 20тыс далее 40 тыс оклад + KPI, потолка нет;</li>
                        <li>Хорошая перспектива карьерного роста;</li>
                        <li>Молодая и дружная команда;</li>
                        <li>Полностью удаленная работа.</li>
                        </>}
                        href="https://obninsk.hh.ru/vacancy/77739277?from=vacancy_search_list"
                        link="Вакансия на HeadHunter"
                />
                <Accordion 
                    title="Digital-маркетолог"
                    info={["Приглашаем в нашу команду backend-разработчика. Если ты — внимательный к мелочам и любящий своё дело бэкендер, не читай дальше, просто звони! Или отправляй резюме на почту:", <a href='mailto:info@visualhearts.ru'  target="_blank" rel="noreferrer" key="mail-info"> info@visualhearts.ru</a> ]}
                    subtitle1="Обязанности:"
                    item1={<>
                        <li>Полноценное участие в создании веб-сайтов и сервисов (как на основе MVC-фреймворков, так и на чистом PHP), интеграции с сторонними сервисами;</li>
                        <li>Рефакторинг и оптимизация кода;</li>
                        <li>Участие в проектировании архитектуры веб-сайтов и сервисов;</li>
                        <li>Натяжка верстки на CMS (Преимущественно 1CBITRIX / Wordpress, но могут быть и другие).</li>
                        </>}
                    subtitle2="Требования:"
                    item2={<>
                        <li>Уверенное знание PHP и 1CBITRIX;</li>
                        <li>Уверенный уровень знания MySQL;</li>
                        <li>Поддерживать чистоту кода;</li>
                        <li>Работать с GIt.</li>
                        </>}
                    subtitle3="Условия:"    
                    item3={<>
                        <li>Первый месяц испытательный срок/стажировка 20тыс далее 40 тыс оклад + KPI, потолка нет;</li>
                        <li>Хорошая перспектива карьерного роста;</li>
                        <li>Молодая и дружная команда;</li>
                        <li>Полностью удаленная работа.</li>
                        </>}
                    href="https://obninsk.hh.ru/vacancy/77739277?from=vacancy_search_list"
                    link="Вакансия на HeadHunter"
                />
            </div>
            <div className='servic__right-banner'></div>
        </section>

    <Footer isOfferOpen={isOfferOpen} setIsOfferOpen={setIsOfferOpen}
        text={["Если вы не нашли интересующую вакансию — пишите нам на ", <a href='mailto:info@visualhearts.ru' key="mail-link">почту</a>,  " или в ", <a href='#!!' key="vk-link">vk.</a>]}
        btn="Откликнуться"
    />
    
    </div>
    );
  }
  
  export default CareerPage;
  