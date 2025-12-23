import React from 'react';
import EventCard from './EventCard';
import '../styles/MainEventsSection.css';

const MainEventsSection = () => {
  const events = [
    { id: 1, title: 'शिवजयंती उत्सव सोहळा', image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=600&h=400&fit=crop' },
    { id: 2, title: 'वृक्षारोपण', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=400&fit=crop' },
    { id: 3, title: 'गडरक्षण (पुणे-माहिम)', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop' },
    { id: 4, title: 'अंश बांधवांना रक्तदान', image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600&h=400&fit=crop' },
    { id: 5, title: 'ग्रंथालय', image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop' },
    { id: 6, title: 'इतर उपक्रम', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop' }
  ];

  return (
    <section id="events" className="main-events-section">
      <h2 className="main-events-title">आगमे मुख्य उपक्रम</h2>
      <div className="main-events-grid">
        {events.map(e => (
          <EventCard key={e.id} {...e} />
        ))}
      </div>
    </section>
  );
};

export default MainEventsSection;
