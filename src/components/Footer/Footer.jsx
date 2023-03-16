import './Footer.scss';
import { HashLink as Link } from 'react-router-hash-link';

function Footer() {

  return (
    <footer className='footer' > 
      <div className='footer__left-banner'></div>
      <div className="footer__container">
        <div className="footer__content">
          <div>
            <h2 className='footer__text'>Расскажите о вашем проекте</h2>
            <p className='footer__subtext'>Опишите свою задачу и мы свяжемся с вами в кратчайшие сроки.</p>
          </div>
          <button className='footer__btn' type="button"></button>
        </div>  
        <nav className='footer__menu'>
          <ul className='footer__items'>
            <li><h3>Меню</h3></li>
            <li className='footer__item'>О команде</li>
            <li className='footer__item'>Портфолио</li>
            <li className='footer__item'>Магазин</li>
            <li className='footer__item'>Цели</li>
          </ul>
          <ul className='footer__items'>
            <li><h3>Специализации</h3></li>
            <li className='footer__item'>Веб-сайты</li>
            <li className='footer__item'>Приложения</li>
            <li className='footer__item'>Иллюстрации</li>
            <li className='footer__item'>Мультфильмы</li>
          </ul>
          <ul className='footer__items'>
            <li><h3>Прочее</h3></li>
            <li className='footer__item'>Вакансии</li>
            <li className='footer__item'>Документация</li>
            <li className='footer__item'>Брифинг</li>
            <li className='footer__item'>Контакты</li>
          </ul>
        </nav>
        <div className="footer__info">
          <p className="footer__copyright">© 2023 Визуализируя сердцем все права защищены Индивидуальный Предприниматель Ходулев Владислав Алексеевич</p>
          <p className="footer__privacy">Политика конфиденциальности</p>
          <Link to='#top' title="Вернуться к началу"  className='footer__top'>В начало</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;