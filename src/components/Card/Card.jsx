import './Card.scss';
import React from "react";




function Card(props) {
    const { linkSmall, linkLarge } = props;
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
    <div className="project-card">
        <ul className="project-card__items">{props.item}</ul>
        <h3 className='project-card__title'>{props.name}</h3>
        <div className='project-card__image'>
        {isSmallScreen ?(<img  src={linkSmall} alt="project" />) : (<img  src={linkLarge} alt="project" />)}
        </div>
    </div>
    );
  }
  
  export default Card;
  