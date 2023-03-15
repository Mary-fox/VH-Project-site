import './Header.scss';

function Header() {

  return (
    <header className="header">
      <button className="header__burger-button"/>
      <div className="header__container">
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__list-item">ПРОЕКТЫ</li>
            <li className="header__list-item">КОМАНДА</li>
            <li className="header__list-item">МЫ</li>
            <li className="header__list-item">УСЛУГИ</li>
          </ul>
        </nav>
        <button className="header__get-project-button">Обсудить проект</button>
      </div>
      <button className="header__lng-button">ENG</button>
    </header>
  )
}

export default Header;