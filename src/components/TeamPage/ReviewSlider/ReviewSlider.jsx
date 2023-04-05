import React, { useState, useEffect } from 'react';
import './ReviewSlider.scss';
import btnLeft from '../../../assets/images/slide-left.svg';
import btnRight from '../../../assets/images/slide-rigth.svg';
import newPrevBtnImg from '../../../assets/images/slide-left-black.svg';
import newNextBtnImg from '../../../assets/images/slide-right-grey.svg';

const ReviewSlider = ({ reviews }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [prevBtnImg, setPrevBtnImg] = useState(btnLeft);
    const [nextBtnImg, setNextBtnImg] = useState(btnRight);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const slideWidth = windowWidth >= 1200 ? 100 / 3 : (windowWidth >= 640 ? 50 : 100);

    const handlePrevClick = () => {
        if (currentSlide === 0) {
            setPrevBtnImg(btnLeft)
            setNextBtnImg(btnRight)
            return;
        }
        setCurrentSlide((prev) => prev - 1);
        setNextBtnImg(btnRight)
    };

    const handleNextClick = () => {
        if (currentSlide === reviews.length - 3) {
            setNextBtnImg(newNextBtnImg)
            return;
        }
        setCurrentSlide((prev) => prev + 1);
        setPrevBtnImg(newPrevBtnImg)
        setNextBtnImg(btnRight)     
    };

  return (
    <div className="review-slider">
        <div className="review-slider__block">
        <div className="review-slider__content" style={{ transform: `translateX(-${currentSlide * slideWidth}%)` }}>
                {reviews.map((review) => (
                <div key={review.id} className="review-slider__slide">
                    <p className='review-slider__text'>{review.text}</p>    
                    <div>
                        <h2 className='review-slider__title'>{review.author}</h2>
                        <p className='review-slider__company'>{review.company}</p>
                    </div>       
                </div>
                ))}
            </div>
        </div>
<div className='review-slider__buttons'>
    <button className="prev-btn" onClick={handlePrevClick}>
       <img src={prevBtnImg} alt="left" /> 
    </button>
    <button className="next-btn" onClick={handleNextClick}>
        <img src={nextBtnImg} alt="right" /> 
    </button>
</div>

    </div>
  );
};

export default ReviewSlider;