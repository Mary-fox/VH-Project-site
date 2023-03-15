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
      <div className="servic">
      <div className='servic__left-banner'></div>
        <div className='servic__content'>
        <div className="service__subheader">
        <Breadcrumbs/>
        
            <div className="servic__container">
                <h2 className='servic__title'>Услуги</h2>
                <p className='servic__text'>Мы оказываем полный цикл цифровизации для бизнеса любого уровня.</p>
            </div>
        </div>

            <ServicesCard
        title="Аналитика"
        text="Изучаем бизнес клиента и его конкурентов, подбираем инструменты и способы продвижения."
        menu={
            <ul>
                <li><a href="#!">Продуктовая аналитика</a></li>
                <li><a href="#!">Маркетинговая аналитика</a></li>
                <li><a href="#!">Анализ конкуренции</a></li>
                <li><a href="#!">Работа с ЦА</a></li>
                <li><a href="#!">UX - Исследования</a></li>
                <li><a href="#!">Аналитика метрик</a></li>
            </ul>
        }
        />
        </div>

        <div className='servic__right-banner'></div>



      </div>
    <Footer />
    </div>

    );
  }
  
  export default ServicesPage;
  