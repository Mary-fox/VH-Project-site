import Overlay from '../Overlay/Overlay';
import './Header.scss';
import { useState } from 'react';
import {Link} from "react-router-dom";
import Offer from '../Offer/Offer';
import MyContext from "../../context"


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOfferOpen, setIsOfferOpen] = useState(false);

  function handleMenuClick() {
    if (isMenuOpen || isOfferOpen){
      setIsMenuOpen(false); 
      setIsOfferOpen(false);
    } else {
      setIsMenuOpen(true); 
    }
  }
  function handleOfferClick() {
    setIsOfferOpen(!isOfferOpen);
    console.log("bla")
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }  
  }


  return (<>
    <MyContext.Provider value={{isOfferOpen, setIsOfferOpen}}>
    <header className="header">
          <button className={`header__burger-button ${isMenuOpen || isOfferOpen ? 'header__burger-button--active' : ''}`}   onClick={() => {handleMenuClick()}}/>
          <div className="header__container">
            <nav className="header__nav">
              <ul className="header__list">
                <li className="header__list-item"><Link to="/projects">ПРОЕКТЫ</Link></li>
                <li className="header__list-item"><Link to="/team">КОМАНДА</Link></li>
                <li className="header__list-item"><Link to="#!">МЫ</Link></li>
                <li className="header__list-item"><Link to="/services">УСЛУГИ</Link></li>
              </ul>
            </nav>
            <button className="header__get-project-button"  onClick={handleOfferClick}>Обсудить проект</button>
          </div>
          <button className="header__lng-button">ENG</button>
      </header>

      {/* <div className={`black-layer ${isMenuOpen ? 'black-layer--active' : ''}`}  onClick={handleCloseClick}></div> */}
      <Overlay isMenuOpen={isMenuOpen}  />
      <Offer isOfferOpen={isOfferOpen} /> 
    </MyContext.Provider>
 
</>
  )
}

export default Header;
