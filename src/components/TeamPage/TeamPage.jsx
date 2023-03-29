import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import './TeamPage.scss';



function ServicesPage() {
    return (
    <div>
    <Header />
        <div id={"top"}></div>
        <div className="team">
            <div className='team__left-banner'></div>
                <div className='team__content'>
                    <div className="team__subheader">
                    <Breadcrumbs
                            items={[
                                {label: 'Цифровые решения', url: '#!' },
                                {label: 'Услуги', url: '#!' },
                                ]}/>
                        <div className="team_container">
                            <h2 className='team__title'>Услуги</h2>
                            <p className='team__text'>Мы оказываем полный цикл цифровизации для бизнеса любого уровня.</p>
                        </div>
                    </div>
                </div>
            <div className='servic__right-banner'></div>
        </div>
       
    <Footer 
    text="Расскажите о вашем проекте"
    subtext="Опишите свою задачу и мы свяжемся с вами в кратчайшие сроки." 
    btn="Написать"
    key="services"
    />
    </div>
    );
  }
  
  export default ServicesPage;
  