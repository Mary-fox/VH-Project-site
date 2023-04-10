import React from 'react';
import './StageCard.scss';


function StageCard (props) {
  return (
    <div className="stage-card">
        <p className='stage-card__subtitle'>{props.subtitle}</p>
        <h2 className='stage-card__title'>{props.title}</h2>
        <p className='stage-card__text'>{props.text}</p>
        <p className='stage-card__subtext'>{props.subtext}</p>
        <nav className='stage-card__items'>
                    <ul className='stage-card__item'>{props.items}</ul>
        </nav>            
    </div>
  );
};

export default StageCard;