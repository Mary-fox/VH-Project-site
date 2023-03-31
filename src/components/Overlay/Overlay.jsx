import './Overlay.scss';
import LinkItem from '../LinkItem/LinkItem';
import {Link} from "react-router-dom";
function Overlay(props) {
    const { isMenuOpen } = props;
    return (
    <div className={`overlay ${isMenuOpen ? 'overlay--open' : ''}`} >
        <div className='overlay__left-banner'></div>
        <div className="overlay__container">
            <nav className="overlay__nav">
                <ul className="overlay__list">
                    <li className="overlay__list-item"><Link to="/">ГЛАВНАЯ</Link></li>
                    <li className="overlay__list-item"><Link to="/projects">ПРОЕКТЫ</Link></li>
                    <li className="overlay__list-item"><Link to="/services">УСЛУГИ</Link></li>
                    <li className="overlay__list-item"><Link to="/team">КОМАНДА</Link></li>
                    <li className="overlay__list-item"><Link to="/career">КАРЬЕРА</Link></li>
                </ul>
            </nav>
            <div className="contacts">
                <div className="contacts__block">
                    <LinkItem className='contacts__phone' href="tel:79270030100" text='8 927 003 01 00'/>
                    <LinkItem  className='contacts__email' href="mailto:info@visualhearts.ru" text='info@visualhearts.ru'/>
                </div>
                <div className="contacts__links">
                    <h1 className='contacts__title'>Мы в социальных сетях:</h1>
                        <nav className='contacts__items'>
                            <ul>                            
                                <li className='contacts__item'><a href="#!">telegram</a></li>
                                <li className='contacts__item'><a href="#!">vkontakte</a></li>
                            </ul>
                            <ul>                            
                                <li className='contacts__item'><a href="#!">Behance</a></li>
                                <li className='contacts__item'><a href="#!">Dribble</a></li>
                            </ul>
                        </nav>
                </div>
            </div>
        </div>
        <div className='overlay__right-banner'></div>
    </div>

    );
  }
  
  export default Overlay;
  

