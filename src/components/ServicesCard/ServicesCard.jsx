function ServicesCard(props) {
    return (
    <div className="card" >
        <div className="card__content">
            <h2 className="card__title">{props.title}</h2>
            <p className="card__text">{props.text}</p>
            <button className="card__btn">Подробнее</button>
        </div>
        <div className="card__menu">{props.menu}</div>
    </div>

    );
  }
  
  export default ServicesCard;
  