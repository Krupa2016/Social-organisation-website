import React from 'react';
import '../styles/Events.css';

import EventHero from '../components/EventHero';
import EventMainCarousel from '../components/EventMainCarousel';
import EventUpcomingSection from '../components/EventUpcomingSection';
import EventsDisplay from '../components/EventsDisplay';

const EventPage = () => {
  return (
    <div className="events-page">
      <EventHero />
      <EventsDisplay />
      {/* <EventMainCarousel /> */}
      <EventUpcomingSection />
    </div>
  );
};

export default EventPage;
