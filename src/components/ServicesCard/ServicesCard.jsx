import './ServicesCard.scss';

function ServicesCard(props) {
    return (
    <div className="card" >
        <div className='card__left-banner'></div>
        <div className="card__container">
            <div className="card__content">
                <h2 className="card__title">{props.title}</h2>
                <p className="card__text">{props.text}</p>
                <button className="card__btn">Подробнее</button>
            </div>
            <div className="card__menu">
                <nav className='card__items'>
                    <ul className='card__item'>{props.menu1}</ul>
                    <ul className='card__item'>{props.menu2}</ul>
                </nav></div>
        </div>
        <div className='card__right-banner'></div>
    </div>

    );
  }
  
  export default ServicesCard;
  