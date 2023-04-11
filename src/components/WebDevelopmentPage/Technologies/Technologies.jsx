import './Technologies.scss';


function Technologies( props) {
    const {isOfferOpen, setIsOfferOpen} = props;
  function handleOfferOpen() {
    setIsOfferOpen(!isOfferOpen);
  }
    return (
        <section className="technologies">
        <div className="technologies__left-banner"></div>
            <div className='technologies__container'>
                <div className="technologies__left-block">
                    <h1 className='technologies__title'>Наши технологии</h1>
                    <button className='btn technologies__btn'   onClick={handleOfferOpen} >Стать клиентом</button>
                </div>
                <div className="technologies__right-block">
                    <div className='technologies__icon technologies__technology1'></div>
                    <div className='technologies__icon technologies__technology2'></div>
                    <div className='technologies__icon technologies__technology3'></div>
                    <div className='technologies__icon technologies__technology4'></div>
                    <div className='technologies__icon technologies__technology5'></div>
                    <div className='technologies__icon technologies__technology6'></div>
                    <div className='technologies__icon technologies__technology7'></div>
                    <div className='technologies__icon technologies__technology8'></div>
                    <div className='technologies__icon technologies__technology9'></div>
                    <div className='technologies__icon technologies__technology10'></div>
                    <div className='technologies__icon technologies__technology11'></div>
                    <div className='technologies__icon technologies__technology12'></div>
                </div>
            </div>
            <div className="technologies__right-banner"></div>
        </section>
    )
}
    
export default Technologies;
