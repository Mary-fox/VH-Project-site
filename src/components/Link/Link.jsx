import './Link.scss';

function Link(props) {
    const {className, href, text} = props;

    return (
        <a className={className} href={href}>{text}</a>
    );
}
export default Link;