import './Card.scss';
import React from "react";
import Animated from '../Animated/Animated';



function Card(props) {
const { linkSmall, linkLarge,  backgroundStyle } = props;
const [isSmallScreen, setIsSmallScreen] = React.useState(
  window.matchMedia("(max-width: 960px)").matches
);
// window.matchMedia("(max-width: 960px)") возвращает объект MediaQueryList, который представляет состояние соответствия медиазапроса, а свойство matches возвращает текущее состояние соответствия медиазапроса

React.useEffect(() => {
  const mediaQuery = window.matchMedia("(max-width: 960px)");
  const handleScreenChange = (event) => {
    setIsSmallScreen(event.matches);
  };
  mediaQuery.addEventListener("change", handleScreenChange);
  return () => {
    mediaQuery.removeEventListener("change", handleScreenChange);
  };
}, []);
    return (

    <div className={`project-card ${backgroundStyle}`}>
      <Animated>
        <div className='project-card__content'>
          <ul className="project-card__items">{props.item}</ul>
          <h3 className='project-card__title'>{props.name}</h3>
          <p className='project-card__text'>{props.text}</p>
          <div className='project-card__image'>
          {isSmallScreen ?(<img  src={linkSmall} alt="project" />) : (<img  src={linkLarge} alt="project" />)}
          </div>
          <button className="project-card__link" onClick={() => window.location.href = props.link}>Перейти на сайт</button>
        </div>
        </Animated>
    </div>

    );
  }
  
  export default Card;
  