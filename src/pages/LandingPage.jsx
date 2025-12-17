import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import MainEventsSection from '../components/MainEventsSection';
import UpcomingEventCard from '../components/UpcomingEventCard';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import '../styles/App.css';

const LandingPage = () => {
  return (
    <div className="app" lang="mr">
      <Navbar />
      <HeroSlider />
      <MainEventsSection />
      <UpcomingEventCard />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default LandingPage;
