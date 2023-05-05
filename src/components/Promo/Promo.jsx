import './Promo.scss';
import Animated from '../Animated/Animated';
function Promo() {

  return (
    <section className="promo">
        <div className="promo__left-banner">
          <h3>Anyera Digital & Design</h3>
        </div>
          <div className="promo__container">
            <Animated>
            <div className="promo__titles">
              <h1 className="promo__title">DIGITAL & DESIGN PRODUCTION</h1>
              <p className="promo__subtitle">Команда цифровых специалистов полного цикла, разрабатываем функциональные продукты широкого круга от идеи до реализации.</p>
              <div className="promo__showreel">SHOWREEL</div>
            </div>
            </Animated>
          </div>
        <div className="promo__right-banner"></div>
    </section>
  )
}

export default Promo;