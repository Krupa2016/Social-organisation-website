import React from 'react';
import HeroSlider from '../components/HeroSlider';
import MainEventsSection from '../components/MainEventsSection';
import UpcomingEventCard from '../components/UpcomingEventCard';
import BackToTop from '../components/BackToTop';
import '../styles/App.css';

const LandingPage = () => {
  return (
    <div className="app" lang="mr">
      <HeroSlider />
      <MainEventsSection />
      <UpcomingEventCard />
      <BackToTop />
    </div>
  );
};

export default LandingPage;
