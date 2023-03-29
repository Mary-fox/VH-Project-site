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
                    <div className="projects__all-cases">
                        <Link to='/projects' className='btn projects__btn'>Все кейсы</Link>
                    </div>
                    
            </div>
        </div>
        <div className="projects__right-banner"></div>
            
    </div>
    );
  }
  
  export default Projects;