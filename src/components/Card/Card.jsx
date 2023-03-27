import './Card.scss';
import React from "react";




function Card(props) {
    const { linkSmall, linkLarge } = props;
const [isSmallScreen, setIsSmallScreen] = React.useState(
  window.matchMedia("(max-width: 960px)").matches
);

React.useEffect(() => {
  const mediaQuery = window.matchMedia("(max-width: 960px)");
  const handleScreenChange = (event) => {
    setIsSmallScreen(event.matches);
  };
  mediaQuery.addListener(handleScreenChange);
  return () => {
    mediaQuery.removeListener(handleScreenChange);
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
  