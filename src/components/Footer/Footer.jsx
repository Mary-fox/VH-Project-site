import './Footer.scss';
import { HashLink as Link } from 'react-router-hash-link';

function Footer(props) {

  return (
    <footer className='footer' > 
      <div className='footer__left-banner'></div>
      <div className="footer__container">
        <div className="footer__content">
          <div className='footer__about'>
            <h2 className='footer__text' key="about-heading">{props.text}</h2>
            <p className='footer__subtext' key="about-subheading">{props.subtext}</p>
          </div>
          <a href='#!' className='footer__btn' type="button" key="footer-button">{props.btn}</a>
        </div>  
        <nav className='footer__menu'>
          <ul className='footer__items'>
            <li><h3>Меню</h3></li>
            <li className='footer__item'><a href="#!">О команде</a></li>
            <li className='footer__item'><a href="#!">Портфолио</a></li>
            <li className='footer__item'><a href="#!">Магазин</a></li>
            <li className='footer__item'><a href="#!">Цели</a></li>
          </ul>
          <ul className='footer__items'>
            <li><h3>Специализации</h3></li>
            <li className='footer__item'><a href="#!">Веб-сайты</a></li>
            <li className='footer__item'><a href="#!">Приложения</a></li>
            <li className='footer__item'><a href="#!">Иллюстрации</a></li>
            <li className='footer__item'><a href="#!">Мультфильмы</a></li>
          </ul>
          <ul className='footer__items'>
            <li><h3>Прочее</h3></li>
            <li className='footer__item'><a href="#!">Вакансии</a></li>
            <li className='footer__item'><a href="#!">Документация</a></li>
            <li className='footer__item'><a href="#!">Брифинг</a></li>
            <li className='footer__item'><a href="#!">Контакты</a></li>
          </ul>
        </nav>
        <div className="footer__info">
          <p className="footer__copyright">© 2023 Визуализируя сердцем все права защищены <br/> Индивидуальный Предприниматель Ходулев Владислав Алексеевич</p>
          <div className="footer__right-block">
            <p className="footer__privacy">Политика конфиденциальности</p>
            <Link to='#top' title="Вернуться к началу"  className='footer__top'>В начало</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;