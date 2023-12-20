import React, { useState, useEffect } from 'react';
import './SlidingOverlayText.css';

const SlidingOverlayText = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Adjust the delay (in milliseconds) before switching to the next text

    return () => clearTimeout(timer);
  }, [currentIndex, texts.length]);

  return (
    <div className="sliding-overlay-text-container">
      {texts.map((text, index) => (
        <p
          key={index}
          className={`text-slide ${
            index === currentIndex ? 'active' : 'inactive'
          }`}
        >
          {text}
        </p>
      ))}
    </div>
  );
};

export default SlidingOverlayText;