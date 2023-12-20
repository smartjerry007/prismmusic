import React, { useState, useEffect } from 'react';
import './SlidingOverlayImage.css';

const SlidingOverlayImage = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Adjust the delay (in milliseconds) before switching to the next image

    return () => clearTimeout(timer);
  }, [currentIndex, images.length]);

  return (
    <div className="sliding-overlay-image-container">
      {images.map((src, index) => (
        <div
          key={index}
          className={`image-slide ${
            index === currentIndex ? 'active' : 'inactive'
          }`}
        >
          <img src={src} alt={alt} className="slide-image" />
          <div className="overlay"></div>
        </div>
      ))}
    </div>
  );
};

export default SlidingOverlayImage;