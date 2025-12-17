import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/HeroSlider.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=1600&h=900&fit=crop',
      title: 'शिवजयंती उत्सव समिती',
      subtitle: 'सांस्कृतिक आणि सामाजिक उपक्रम'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1533230408708-8f9f91d1235a?w=1600&h=900&fit=crop',
      title: 'समाज सेवा',
      subtitle: 'समाजासाठी समर्पित'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1582192730841-2a682d7375f9?w=1600&h=900&fit=crop',
      title: 'सांस्कृतिक कार्यक्रम',
      subtitle: 'परंपरा आणि आधुनिकता'
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused, slides.length]);

  return (
    <div
      id="home"
      className="hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentSlide ? 'hero-slide-active' : ''}`}
        >
          <img src={slide.image} alt={slide.title} className="hero-slide-image" />
          <div className="hero-slide-overlay" />
          <div className="hero-slide-content">
            <h1 className="hero-slide-title">{slide.title}</h1>
            <p className="hero-slide-subtitle">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      <button className="hero-nav-button hero-nav-button-prev" onClick={() =>
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)
      }>
        <ChevronLeft size={28} />
      </button>

      <button className="hero-nav-button hero-nav-button-next" onClick={() =>
        setCurrentSlide((currentSlide + 1) % slides.length)
      }>
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

export default HeroSlider;
