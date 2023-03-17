import Overlay from '../Overlay/Overlay';
import './Header.scss';
import { useState } from 'react';
import {Link} from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }
  // function handleCloseClick() {
  //   setIsMenuOpen(false);
  // }

  return (<>
      <header className="header">
        <button className={`header__burger-button ${isMenuOpen ? 'header__burger-button--active' : ''}`}  onClick={handleMenuClick}/>
        <div className="header__container">
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__list-item"><Link to="#!">ПРОЕКТЫ</Link></li>
              <li className="header__list-item"><Link to="#!">КОМАНДА</Link></li>
              <li className="header__list-item"><Link to="#!">МЫ</Link></li>
              <li className="header__list-item"><Link to="/services">УСЛУГИ</Link></li>
            </ul>
          </nav>
          <button className="header__get-project-button">Обсудить проект</button>
        </div>
        <button className="header__lng-button">ENG</button>
    </header>

    {/* <div className={`black-layer ${isMenuOpen ? 'black-layer--active' : ''}`}  onClick={handleCloseClick}></div> */}
    <Overlay isMenuOpen={isMenuOpen}  />
</>
  )
}

export default Header;
