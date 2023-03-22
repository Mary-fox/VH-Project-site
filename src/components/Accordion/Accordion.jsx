import React, { useState } from 'react';
import './Accordion.scss';
import {Link} from "react-router-dom";

function Accordion(props) {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleAccordion = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div className="accordion">
        <div className={`accordion__header ${isExpanded ? 'accordion__header_active' : ''}`} onClick={toggleAccordion}>
            <h3>{props.title}</h3>
            <span>{isExpanded ? <svg width="32" height="17" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 16L15.85 0.999999L31 16" stroke="#262626"/></svg>
                                : <svg width="32" height="17" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31 1L16.15 16L0.999999 1" stroke="#262626"/></svg>
                                
            }</span>
        </div>
        <div className={"accordion__content" + (isExpanded ? " accordion__content--expanded" : "")}>
          <h3 className='accordion__info'>{props.info}</h3>
                  <nav className='accordion__items'>
                      <h3 className='accordion__subtitle'>{props.subtitle1}</h3>
                      <ul className='accordion__item'>{props.item1}</ul>
                      <h3 className='accordion__subtitle'>{props.subtitle2}</h3>
                      <ul className='accordion__item'>{props.item2}</ul>
                      <h3 className='accordion__subtitle'>{props.subtitle3}</h3>
                      <ul className='accordion__item'>{props.item3}</ul>

                  </nav>
                  <Link className="accordion__link" to={props.href} target="_blank">{props.link}</Link>
        </div>
      </div>
    );
  }
export default Accordion;