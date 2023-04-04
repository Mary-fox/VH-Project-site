import Slider from "react-slick"
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import './SliderBlock.scss';
import img1 from '../../../assets/images/Vladislav.jpg';
import img2 from '../../../assets/images/Mary.jpg';
import img3 from '../../../assets/images/Yaroslav.jpg';
import img4 from '../../../assets/images/Mark.jpg';
import img5 from '../../../assets/images/Victoria.jpg';
import img6 from '../../../assets/images/Juliana.jpg';


  
  function SliderBlock() {
    
    
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      variableWidth: true,
      centerPadding: "60px",
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,

    };
    return (
      <div className="slide-block">
        <div className='slide-block__left-banner'></div>
      <div className="slide-block__container">
    <Slider {...settings}>
          <div>
            <img src={img1} alt="1" />
            <div className="slider__text">
              <h2 className="slider__title">Владислав</h2>
              <p className="slider__info">Founder / General manager / UI / UX</p>
            </div>
          </div>
          <div>
            <img src={img2} alt="2" />
            <div className="slider__text">
              <h2 className="slider__title">Мария</h2>
              <p className="slider__info">Art-director / Art-lead / Illustrator</p>
            </div>

          </div>
          <div>
            <img src={img3} alt="3" />
            <div className="slider__text">
              <h2 className="slider__title">Ярослав</h2>
              <p  className="slider__info">UI/UX Designer / Tilda Developer</p>
            </div>
          </div>
          <div>
            <img src={img4} alt="4" />
            <div className="slider__text">
              <h2 className="slider__title">Марк</h2>
              <p className="slider__info">Product manager</p>
            </div>
          </div>
          <div>
            <img src={img5} alt="5" />
            <div className="slider__text">
              <h2 className="slider__title">Виктория</h2>
              <p className="slider__info">Frontend Developer</p>
            </div>
          </div>
          <div>
            <img src={img6} alt="6" />
            <div className="slider__text">
              <h2 className="slider__title">Ульяна</h2>
              <p className="slider__info">UI/UX Designer / Tilda Developer</p>
            </div>
          </div>
      
    </Slider>
</div>
<div className='slide-block__right-banner'></div>
</div>
    
  
     
    );
  }
  
  export default SliderBlock;
  
