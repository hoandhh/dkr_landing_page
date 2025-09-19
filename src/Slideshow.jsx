import { useState, useEffect } from 'react';
import './Slideshow.css';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Danh sách các ảnh trong thư mục public
  const images = [
    '/1.png',
    '/2.png', 
    '/3.png',
    '/4.png',
    '/5.png',
    '/6.png',
    '/7.png'
  ];

  // Auto-play slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="slideshow-container">
      {/* Navigation arrows */}
      <button className="nav-btn prev-btn" onClick={prevSlide}>
        ❮
      </button>
      
      <div className="slideshow-content">
        <div className="slideshow-wrapper">
          <div className="slideshow-inner">
            <div className="slideshow-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {images.map((image, index) => (
                <div key={index} className="slide">
                  <img src={image} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Dots indicator */}
        <div className="dots-container">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
      
      <button className="nav-btn next-btn" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default Slideshow;