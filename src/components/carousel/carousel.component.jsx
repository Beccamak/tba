import { useState, useRef, useEffect } from 'react';
import './carousel.styles.css';
import Hed from '../../assets/images/hed.jpg';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const images = [
    Hed,
    Hed,
    Hed,
    Hed,
    Hed

]
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide === images.length - 1 ? 0 : currentSlide + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleSlideChange = (event) => {
    const deltaX = event.changedTouches[0].clientX - event.touches[0].clientX;

    if (deltaX > 50) {
      setCurrentSlide(
        currentSlide === images.length - 1 ? 0 : currentSlide + 1
      );
    } else if (deltaX < -50) {
      setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }
  };

  return (
    
    <div
      className="carousel-container"
      onTouchStart={(event) => {
        event.preventDefault();
        slideRef.current.removeEventListener('touchmove', handleSlideChange);
      }}
      onTouchEnd={(event) => {
        event.preventDefault();
        slideRef.current.addEventListener('touchmove', handleSlideChange);
      }}
    >

      <div className="carousel-slide" ref={slideRef}>
        {images.map((image, index) => (
          <div
            className={`carousel-image ${
              index === currentSlide ? 'active' : ''
            }`}
            key={index}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    
    </div>
     
  );
};

export default Carousel;
