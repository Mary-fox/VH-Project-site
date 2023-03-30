import './Partners.scss';
import img1 from '../../assets/images/logo-09.svg';
import img2 from '../../assets/images/seller.svg';
import img3 from '../../assets/images/viraj.svg';
import img4 from '../../assets/images/logo-06.svg';
import img5 from '../../assets/images/logo-05.svg';
import img6 from '../../assets/images/logo-04.svg';
import img7 from '../../assets/images/feliksov.svg';
import img8 from '../../assets/images/dcut.svg';

function Partners( ) {
    return (
        <section className="partners">
        <div className="partners__left-banner"></div>
            <div className='partners__container'>
                <div className="partners__left-block">
                    <h1 className='partners__title'>Нам доверяют</h1>
                    <a href="#!" className='btn partners__btn'>Стать клиентом</a>
                </div>
                <div className="partners__right-block">
                    <div className='partners__icon'><img src={img1}alt="partners" /></div>
                    <div className='partners__icon'><img src={img2}alt="partners" /></div>
                    <div className='partners__icon'><img src={img3}alt="partners" /></div>
                    <div className='partners__icon'><img src={img4}alt="partners" /></div>
                    <div className='partners__icon'><img src={img5}alt="partners" /></div>
                    <div className='partners__icon'><img src={img6}alt="partners" /></div>
                    <div className='partners__icon'><img src={img7}alt="partners" /></div>
                    <div className='partners__icon'><img src={img8}alt="partners" /></div>
                </div>
            </div>
            <div className="partners__right-banner"></div>
        </section>
    )
}
    
export default Partners;
