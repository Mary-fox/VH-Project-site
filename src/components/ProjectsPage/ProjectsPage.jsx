import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './ProjectsPage.scss';
import Card from '../Card/Card';
import { HashLink as Link } from 'react-router-hash-link';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { data } from '../../data';
import IndustryFilter from './IndustryFilter/IndustryFilter';
import WebsiteTypeFilter from './WebsiteTypeFilter/WebsiteTypeFilter';
import ServiceFilter from './ServiceFilter/ServiceFilter';

function ProjectsPage(props) {
    return (
    <>
    <Header/>
    <div className='wrapper'>
    <div className="projects-page">
        <div className="projects-page__left-banner">
        <h3>Проекты</h3>
        </div>
                <div className='projects-page__container'>
                    <div className='projects-page__left-block'>
                    <div className='projects-page__title-block'>
                        <Breadcrumbs
                            items={[
                                {label: 'Главная', url: '#!' },
                                {label: 'Проекты', url: '#!' },
                                ]}/>
                        <h3 className='projects-page__name'>Наши проекты</h3>
                        <p className='projects-page__text'>Лучшие работы, которыми мы по-настоящему гордимся</p>
                        <div className="filtres">
                            <IndustryFilter data={data} />
                            <WebsiteTypeFilter data={data} />
                            <ServiceFilter data={data} />
                        </div>
                </div>
                <Card 
                    item={<>
                        <li>UI/UX</li>
                        <li>1CBITRIX</li>
                        <li>ПРОЕКТИРОВАНИЕ</li>
                        <li>БАЗОВОЕ SEO</li></>
                    }
                    name="Интернет-магазин ювелирных изделий Виктора Блуда"
                    linkLarge={require("../../assets/images/project-1.png")}
                    linkSmall={require("../../assets/images/project-1-small.png")}/>
               <Card 
                    item={<>
                        <li>UI/UX</li>
                        <li>1CBITRIX</li></>
                    }
                    name="Лендинг актерского курса для актрисы театра и кино Дарьи Пицик"
                    linkLarge={require("../../assets/images/project-2.png")}
                    linkSmall={require("../../assets/images/project-2-small.png")}/>
               <Card 
                    item={<>
                        <li>АНАЛИТИКА</li>
                        <li>UI/UX</li>
                        <li>ПРОЕКТИРОВАНИЕ</li>
                        <li>БРЕНДИНГ</li></>
                    }
                    name="Финансовый трекер FIN FINE"
                    linkLarge={require("../../assets/images/project-3.png")}
                    linkSmall={require("../../assets/images/project-3-small.png")}/>
            </div>
            <div className='projects__right-block'>
                <Card 
                    item={<>
                        <li>UI/UX</li>
                        <li>TILDA</li>
                        <li>АНИМАЦИЯ</li></>
                    }
                    name="Лендинг мотоподбора для Егора Михеева"
                    linkLarge={require("../../assets/images/project-4.png")}
                    linkSmall={require("../../assets/images/project-4-small.png")}/>
                <Card 
                    item={<>
                        <li>UI/UX</li>
                        <li>1CBITRIX</li></>
                    }
                    name="Сайт в стиле “Советский леттеринг” для компании Континент"
                    linkLarge={require("../../assets/images/project-5.png")}
                    linkSmall={require("../../assets/images/project-5-small.png")}/>
                <Card 
                    item={<>
                        <li>Иллюстрации</li>
                        <li>Верстка</li></>
                    }
                    name="Детская книга для ФГУП СПбНИИВС ФМБА России"
                    linkLarge={require("../../assets/images/project-6.png")}
                    linkSmall={require("../../assets/images/project-6-small.png")}/>
                    <div className="projects-page__all-cases">
                        <Link to='#!' className='btn projects-page__btn'>Все кейсы</Link>
                    </div>
                    
            </div>
        </div>
        <div className="projects-page__right-banner"></div>
        </div>
    </div>    
    <Footer 
        text="Расскажите о вашем проекте"
        subtext="Опишите свою задачу и мы свяжемся с вами в кратчайшие сроки." 
        btn="Написать"/>
    </>

    );
  }
  
  export default ProjectsPage;