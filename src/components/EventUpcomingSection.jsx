import React, { useState } from 'react';
import '../styles/Events.css';
import EventUpcomingItem from './EventUpcomingItem';
import { ArrowRight } from 'lucide-react';

const EventUpcomingSection = () => {
  const [showAll, setShowAll] = useState(false);

  const events = [
    {
      id: 1,
      icon: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=100&h=100&fit=crop',
      title: 'मराठी राजभाषा दिन सोहळा',
      subtitle: 'शिवजयंती उत्सव समिती कार्यालय, माडगांव',
      details: 'मराठी भाषेचा गौरव आणि संस्कृती यांचा उत्कर्ष साधण्यासाठी',
      color: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
      date: '२७ फेब्रुवारी'
    },
    {
      id: 2,
      icon: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=100&h=100&fit=crop',
      title: 'शिवजयंतीनिमित्त दिन सोहळा',
      subtitle: 'शिवजयंती उत्सव समिती कार्यालय, माडगांव',
      details: 'छत्रपती शिवाजी महाराजांच्या स्मृती आणि कार्याचा गौरव',
      color: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
      date: '१९ फेब्रुवारी'
    },
    {
      id: 3,
      icon: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=100&h=100&fit=crop',
      title: 'वृक्षारोपण दिन',
      subtitle: 'जागे जागणारा!',
      details: 'पर्यावरण संवर्धन आणि हरितक्रांती',
      color: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
      date: '५ जून'
    },
    {
      id: 4,
      icon: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop',
      title: 'किल्ले पहाणखोल ते पनवेलचि',
      subtitle: 'पहाटेपसून ते अगदी संध्याकाळ या वेळात!',
      details: 'ऐतिहासिक किल्ल्यांचे संरक्षण आणि जागरूकता',
      color: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
      date: '१५ ऑगस्ट'
    },
    {
      id: 5,
      icon: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=100&h=100&fit=crop',
      title: 'दिवाली फराळ - विशेषोत्सव',
      subtitle: 'स्थानक स्थळी',
      details: 'पारंपरिक दिवाळी साजरी आणि फराळाचे वाटप',
      color: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
      date: '१ नोव्हेंबर'
    },
    {
      id: 6,
      icon: 'https://images.unsplash.com/photo-1582192730841-2a682d7375f9?w=100&h=100&fit=crop',
      title: 'महिला गृहस्थ दशोन चिकित्सक',
      subtitle: 'वो सीनिय आणि मोठ्यावयस्की शिक्षा',
      details: 'महिला सबलीकरण आणि आरोग्य जागरूकता',
      color: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
      date: '८ मार्च'
    }
  ];

  const visibleEvents = showAll ? events : events.slice(0, 3);

  return (
    <section className="upcoming-events-section">
      <div className="events-container">
        <div className="section-header">
          <h2 className="section-title">पुढील उपक्रम</h2>
          <p className="section-subtitle">आगामी कार्यक्रम</p>
        </div>

        <div className="upcoming-events-list">
          {visibleEvents.map(e => (
            <EventUpcomingItem key={e.id} {...e} />
          ))}
        </div>

        <div className="view-all-button-container">
          <button className="view-all-button" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'कमी दाखवा' : 'सर्व कार्यक्रम पहा'}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventUpcomingSection;
