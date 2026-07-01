import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const EventHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=1600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=1600&h=600&fit=crop'
  ];

  /* Auto slide (NO dependency warning) */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="event-hero">
      <div className="event-hero-content">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`event-hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="event-hero-overlay"></div>
          </div>
        ))}

        <div className="event-hero-text">
          <h1 className="event-hero-title">आमचे उपक्रम</h1>
          <p className="event-hero-subtitle">सांस्कृतिक व सामाजिक कार्यक्रम</p>

          <div className="hero-decoration">
            <Sparkles className="sparkle-icon" />
            <div className="decoration-line"></div>
            <Sparkles className="sparkle-icon" />
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">कार्यक्रम</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">200+</span>
              <span className="stat-label">सदस्य</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">वर्षे</span>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="slider-dots">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHero;
