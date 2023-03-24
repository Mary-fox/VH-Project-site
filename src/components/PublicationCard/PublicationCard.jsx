import './PublicationCard.scss';


function PublicationCard(props) {
    return (
        <div className="publication-card">
            <ul className="publication-card__items">{props.item}</ul>
            <h3 className='publication-card__title'>{props.title}</h3>
            <div className='publication-card__date'>{props.date}</div>
        </div>
    )
}
    
export default PublicationCard;
