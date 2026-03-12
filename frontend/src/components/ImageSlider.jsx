import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ImageSlider = ({ images, autoPlayInterval = 2000, showText = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();
  const totalImages = images.length;

  // Auto-play functionality
  useEffect(() => {
    if (totalImages === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlayInterval, totalImages]);

  const goToPrevious = () => {
    setIsTransitioning(true);
    const newIndex = (currentIndex - 1 + totalImages) % totalImages;
    setCurrentIndex(newIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    const newIndex = (currentIndex + 1) % totalImages;
    setCurrentIndex(newIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleLearnMore = () => {
    const currentSlide = images[currentIndex];
    // If slide has a button link, use it; otherwise go to about page
    if (currentSlide?.buttonLink) {
      navigate(currentSlide.buttonLink);
    } else {
      navigate('/about');
    }
  };

  if (totalImages === 0) {
    return <div>No images available</div>;
  }

  const currentSlide = images[currentIndex];
  // Support both string URLs and object format
  const imageUrl = typeof currentSlide === 'string' ? currentSlide : currentSlide?.url;
  const title = currentSlide?.title || 'Discover Excellence';
  const subtitle = currentSlide?.subtitle || 'Professional Solutions for Your Success';
  const buttonText = currentSlide?.buttonText || 'Learn More';

  return (
    <div className="image-slider-container">
      <div className={`image-slider ${isTransitioning ? 'transitioning' : ''}`}>
        {/* Previous Button */}
        <button className="slider-button prev-button" onClick={goToPrevious} aria-label="Previous slide">
          &#10094;
        </button>

        {/* Slider Content */}
        <div className="slider-image-wrapper">
          <img 
            src={imageUrl} 
            alt={title || `Slide ${currentIndex + 1}`} 
            className="slider-image" 
          />
          
          {/* Overlay Text Animation */}
          {showText && (
            <div className="slider-overlay">
              <div className="overlay-content">
                <h2 className="overlay-title">{title}</h2>
                <p className="overlay-subtitle">{subtitle}</p>
                <button className="overlay-button" onClick={handleLearnMore}>{buttonText}</button>
              </div>
            </div>
          )}
        </div>

        {/* Next Button */}
        <button className="slider-button next-button" onClick={goToNext} aria-label="Next slide">
          &#10095;
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="slider-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};