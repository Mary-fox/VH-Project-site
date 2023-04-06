import './Partners.scss';


function Partners( props) {
    const {isOfferOpen, setIsOfferOpen} = props;
  function handleOfferOpen() {
    setIsOfferOpen(!isOfferOpen);
  }
    return (
        <section className="partners">
        <div className="partners__left-banner"></div>
            <div className='partners__container'>
                <div className="partners__left-block">
                    <h1 className='partners__title'>Нам доверяют</h1>
                    <button className='btn partners__btn'   onClick={handleOfferOpen} >Стать клиентом</button>
                </div>
                <div className="partners__right-block">
                    <div className='partners__icon partners__partner1'></div>
                    <div className='partners__icon partners__partner2'></div>
                    <div className='partners__icon partners__partner3'></div>
                    <div className='partners__icon partners__partner4'></div>
                    <div className='partners__icon partners__partner5'></div>
                    <div className='partners__icon partners__partner6'></div>
                    <div className='partners__icon partners__partner7'></div>
                    <div className='partners__icon partners__partner8'></div>
                </div>
            </div>
            <div className="partners__right-banner"></div>
        </section>
    )
}
    
export default Partners;
