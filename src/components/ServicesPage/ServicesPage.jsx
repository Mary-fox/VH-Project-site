import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import './ServicesPage.scss';
import ServicesCard from '../ServicesCard/ServicesCard';

// import Main from '../Main/Main';

function ServicesPage() {
    return (
    <div>
        {/* <Main /> */}
    <Header />
        <div id={"top"}></div>
        <div className="servic">
        <div className='servic__left-banner'></div>
            <div className='servic__content'>
                <div className="servic__subheader">
                <Breadcrumbs/>
                    <div className="servic__container">
                        <h2 className='servic__title'>Услуги</h2>
                        <p className='servic__text'>Мы оказываем полный цикл цифровизации для бизнеса любого уровня.</p>
                    </div>
                </div>
            </div>
        <div className='servic__right-banner'></div>
        </div>
        <ServicesCard
            title="Аналитика"
            text="Изучаем бизнес клиента и его конкурентов, подбираем инструменты и способы продвижения."
            menu1={<>
                    <li><a href="#!">Продуктовая аналитика</a></li>
                    <li><a href="#!">Маркетинговая аналитика</a></li>
                    <li><a href="#!">Анализ конкуренции</a></li></>
                }
            menu2={<>
                    <li><a href="#!">Работа с ЦА</a></li>
                    <li><a href="#!">UX - Исследования</a></li>
                    <li><a href="#!">Аналитика метрик</a></li>
                    </>}
            />
        <ServicesCard
            title="Дизайн"
            text="Сервисный дизайн на основе аналитики, метрик и пользовательского опыта — продуктовый подход для создания привлекательных и эффективных решений."
            menu1={<>
                    <li><a href="#!">UX/UI дизайн</a></li>
                    <li><a href="#!">Дизайн системы</a></li>
                    <li><a href="#!">Брендинг</a></li>
                    <li><a href="#!">Логотипы</a></li>
                    <li><a href="#!">Обложки</a></li>
                    </>}
            menu2={<>
                    <li><a href="#!">Иллюстрации</a></li>
                    <li><a href="#!">Цифровые арты</a></li>
                    <li><a href="#!">Баннеры</a></li>
                    <li><a href="#!">NFT</a></li>
                    </>}
        />
        <ServicesCard
            title="Веб-сайты"
            text="Создаем удобные и эффективные сайты, которые нравятся пользователям и хорошо продвигаются в поисковых системах."
            menu1={<>
                <li><a href="#!">Одностраничные</a></li>
                <li><a href="#!">Корпоративные сайты</a></li>
                <li><a href="#!">Интернет-магазины</a></li>
                <li><a href="#!">Каталоги и витрины</a></li>
                <li><a href="#!">No-code решения</a></li>
                </>}
            menu2={<>
                <li><a href="#!">1С Битрикс</a></li>
                <li><a href="#!">Wordpress</a></li>
                <li><a href="#!">Tilda</a></li>
                </>}
        />
        <ServicesCard
            title="Поддержка и развитие"
            text="Обеспечиваем работу сайта 24/7."
            menu1={<>
                    <li><a href="#!">Техническая поддержка</a></li>
                    <li><a href="#!">Дизайн поддержка</a></li>
                    <li><a href="#!">Контент поддержка</a></li>
                </>}
        />
        <ServicesCard
            title="Маркетинг"
            text="Развиваем ваш бизнес с помощью веб-продвижения"
            menu1={<>
                    <li><a href="#!">Настройка и ведение Яндекс директ</a></li>
                    <li><a href="#!">Настройка и ведение Яндекс бизнес</a></li>
                    <li><a href="#!">Таргетинг в социальных сетях</a></li>
                    <li><a href="#!">Семантика и базовая SEO оптимизация</a></li>
            </>}
        />
    <Footer />
    </div>
    );
  }
  
  export default ServicesPage;
  