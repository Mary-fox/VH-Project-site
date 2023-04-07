import React from 'react';
import './InfoCard.scss';


function InfoCard (props) {
  return (
    <div className="info-card">
        <h2 className='info-card__title'>{props.title}</h2>
        <p className='info-card__text'>{props.text}</p>
    </div>
  );
};

export default InfoCard;