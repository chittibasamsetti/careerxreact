import React, { useState } from 'react';
import './ImageCarousal.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <button className="carousel__control carousel__control--prev" onClick={goToPrevious}>
        &lt;
      </button>
      <div className="carousel__images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`carousel__image ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
      <button className="carousel__control carousel__control--next" onClick={goToNext}>
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
