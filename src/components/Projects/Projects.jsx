import Card from '../Card/Card';
import './Projects.scss';
import { HashLink as Link } from 'react-router-hash-link';


function Projects(props) {
    return (
    <div className="projects">
        <div className="projects__left-banner">
        <h3>Проекты</h3>
        </div>
        <div className='projects__container'>
            <div className='projects__left-block'>
            <div className='projects__main'>
                <h3 className='projects__title'>{props.title}</h3>
                <p className='projects__text'>{props.text}</p>
            </div>
                <Card 
                    item={<>
                        <li>UI/UX</li>
                        <li>1CBITRIX</li>
                        <li>ПРОЕКТИРОВАНИЕ</li>
                        <li>БАЗОВОЕ SEO</li></>
                    }
                    text="pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque"
                    name="Интернет-магазин ювелирных изделий Виктора Блуда"
                    linkLarge={require("../../assets/images/project-1.png")}
                    linkSmall={require("../../assets/images/project-1-small.png")}
                    backgroundStyle="blueshade-background"/>
               <Card 
                    item={<>
                        <li>UI/UX</li>
                        <li>1CBITRIX</li></>
                    }
                    text="pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque"
                    name="Лендинг актерского курса для актрисы театра и кино Дарьи Пицик"
                    linkLarge={require("../../assets/images/project-2.png")}
                    linkSmall={require("../../assets/images/project-2-small.png")}
                    backgroundStyle="gray-background"/>
               <Card 
                    item={<>
                        <li>АНАЛИТИКА</li>
                        <li>UI/UX</li>
                        <li>ПРОЕКТИРОВАНИЕ</li>
                        <li>БРЕНДИНГ</li></>
                    }
                    text="pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque"
                    name="Финансовый трекер FIN FINE"
                    linkLarge={require("../../assets/images/project-3.png")}
                    linkSmall={require("../../assets/images/project-3-small.png")}
                    backgroundStyle="blue-background"/>
            </div>
            <div className='projects__right-block'>
                <Card 
                    item={<>
                        <li>UI/UX</li>
                        <li>TILDA</li>
                        <li>АНИМАЦИЯ</li></>
                    }
                    name="Лендинг мотоподбора для Егора Михеева"
                    text="pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque"
                    linkLarge={require("../../assets/images/project-4.png")}
                    linkSmall={require("../../assets/images/project-4-small.png")}
                    link="https://motolife.pro/"
                    backgroundStyle="red-background"/>
                <Card 
                    item={<>
                        <li>UI/UX</li>
                        <li>1CBITRIX</li></>
                    }
                    name="Сайт в стиле “Советский леттеринг” для компании Континент"
                    text="pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque"
                    linkLarge={require("../../assets/images/project-5.png")}
                    linkSmall={require("../../assets/images/project-5-small.png")}
                    backgroundStyle="darkred-background"/>
                <Card 
                    item={<>
                        <li>Иллюстрации</li>
                        <li>Верстка</li></>
                    }
                    name="Детская книга для ФГУП СПбНИИВС ФМБА России"
                    text="pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque"
                    linkLarge={require("../../assets/images/project-6.png")}
                    linkSmall={require("../../assets/images/project-6-small.png")}
                    backgroundStyle="darkblue-background"/>
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