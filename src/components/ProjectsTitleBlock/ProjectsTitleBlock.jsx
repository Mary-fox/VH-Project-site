import './ProjectsTitleBlock.scss';

function ProjectTitleBlock(props) {
    return (
        <div className='projects__main'>
            <h3 className='projects__title'>{props.title}</h3>
            <p className='projects__text'>{props.text}</p>
            {props.children}
        </div>

    );
  }
  
  export default ProjectTitleBlock;
  