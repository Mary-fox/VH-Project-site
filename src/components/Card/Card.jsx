import './Card.scss';


function Card(props) {
    return (
    <div className="project-card">
        <ul className="project-card__items">{props.item}</ul>
        <h3 className='project-card__title'>{props.title}</h3>
        <div className='project-card__image'>
            <img  src={props.link} alt="project" />
        </div>
    </div>
    );
  }
  
  export default Card;
  