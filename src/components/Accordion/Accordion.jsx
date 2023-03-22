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
            <span>{isExpanded ? <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 21L15.85 1L31 21" stroke="#2B2B2B"/></svg>
                                : <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31 1L16.15 21L0.999999 1" stroke="#2B2B2B"/></svg>
            }</span>
        </div>
        <div className={"accordion__content" + (isExpanded ? " accordion__content--expanded" : "")}>
          <h3 className='accordion__info' key="about-info">{props.info}</h3>
                  <nav className='accordion__items'>
                      <h3 className='accordion__subtitle' key="about-subtitle1">{props.subtitle1}</h3>
                      <ul className='accordion__item' key="about-item1">{props.item1}
                      {colors.map((color) => (
                <ColorButton key={color.image} color={color} setCurrentColorId={setCurrentColorId} currentColorId={currentColorId} />
                    )
                )}
                      </ul>
                      <h3 className='accordion__subtitle' key="about-subtitle2">{props.subtitle2}</h3>
                      <ul className='accordion__item' key="about-item2">{props.item2}</ul>
                      <h3 className='accordion__subtitle' key="about-item3">{props.subtitle3}</h3>
                      <ul className='accordion__item' key="about-subtitle3">{props.item3}</ul>

                  </nav>
                  <Link className="accordion__link" to={props.href} target="_blank" key="about-link">{props.link}</Link>
        </div>
      </div>
    );
  }
export default Accordion;