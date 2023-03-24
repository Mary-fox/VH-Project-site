import Card from '../Card/Card';
import './Projects.scss';
import { HashLink as Link } from 'react-router-hash-link';
import ProjectTitleBlock from '../ProjectsTitleBlock/ProjectsTitleBlock';

function Projects(props) {
    return (
    <div className="projects">
        <div className="projects__left-banner">
        <h3>Проекты</h3>
        </div>
        <div className='projects__container'>
            <div className='projects__left-block'>
                <ProjectTitleBlock 
                    title="Свежие проекты"
                    text="Здесь несколько наших проектов проектов из последних, для удобства вы можете перейти на страницу проекты и воспользоваться фильтрами"/>
                <Card 
                    item={<>
                        <li>UI/UX</li>
                        <li>1CBITRIX</li>
                        <li>ПРОЕКТИРОВАНИЕ</li>
                        <li>БАЗОВОЕ SEO</li></>
                    }
                    title="Интернет-магазин ювелирных изделий Виктора Блуда"
                    link={require("../../assets/images/project-1.png")}/>
               <Card 
                    item={<>
                        <li>UI/UX</li>
                        <li>1CBITRIX</li></>
                    }
                    title="Лендинг актерского курса для актрисы театра и кино Дарьи Пицик"
                    link={require("../../assets/images/project-2.png")}/>
               <Card 
                    item={<>
                        <li>АНАЛИТИКА</li>
                        <li>UI/UX</li>
                        <li>ПРОЕКТИРОВАНИЕ</li>
                        <li>БРЕНДИНГ</li></>
                    }
                    title="Финансовый трекер FIN FINE"
                    link={require("../../assets/images/project-3.png")}/>
            </div>
            <div className='projects__right-block'>
                <Card 
                    item={<>
                        <li>UI/UX</li>
                        <li>TILDA</li>
                        <li>АНИМАЦИЯ</li></>
                    }
                    title="Лендинг мотоподбора для Егора Михеева"
                    link={require("../../assets/images/project-4.png")}/>
                <Card 
                    item={<>
                        <li>UI/UX</li>
                        <li>1CBITRIX</li></>
                    }
                    title="Сайт в стиле “Советский леттеринг” для компании Континент"
                    link={require("../../assets/images/project-5.png")}/>
                <Card 
                    item={<>
                        <li>Иллюстрации</li>
                        <li>Верстка</li></>
                    }
                    title="Детская книга для ФГУП СПбНИИВС ФМБА России"
                    link={require("../../assets/images/project-6.png")}/>
                    <div className="projects__all-cases">
                        <Link to='#!' title="Все проекты"  className='btn projects__btn'>Все кейсы</Link>
                    </div>
                    
            </div>
        </div>
        <div className="services__rigth-banner"></div>
            
    </div>
    );
  }
  
  export default Projects;