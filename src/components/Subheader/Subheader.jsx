import React from 'react';

import './Subheader.scss';


function Subheader(props) {
    return (
        <div className="subheader">
            <h1 className='subheader__title'>{props.title}</h1>
            <p className='subheader__subtext'>{props.subtitle}</p>
            <button onClick={props.click} className="subheader__btn">{props.btn}</button>    
        </div>
    );
  }
  
  export default Subheader;
  