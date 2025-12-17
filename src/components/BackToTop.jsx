import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import '../styles/App.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`back-to-top ${
        isVisible ? 'back-to-top-visible' : ''
      }`}
      aria-label="Back to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default BackToTop;
