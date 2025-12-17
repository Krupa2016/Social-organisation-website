import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import '../styles/UpcomingEventCard.css';

const UpcomingEventCard = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const upcomingEvents = [
    {
      id: 1,
      title: 'वृक्षारोपण दिन',
      date: '१२ जून २०२४, सोमवार',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&h=600&fit=crop',
      description:
        'वृक्षारोपण महाराष्ट्र कृती पक्षाची वर्षा ऋतूची प्राणयाची सुरुवात करण्याची प्रयोजीने उद्योजिन ठरविलेले वृक्षारोपणवर असलेला पारणाऱ्या परिस्थिती काय विषयला उत्थपन्न करत आहे दिनांकाशी परिणाम झाली होते वृक्षारोपणाची आवश्यकता, काळमळिकेशी प्रयोग आणि वनसमृध्दी उद्देशपूर्ण महत्त्वशील वुध्दी करण्यात येवाहात...'
    },
    {
      id: 2,
      title: 'रक्तदान शिबीर',
      date: '२५ जुलै २०२४, गुरुवार',
      image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&h=600&fit=crop',
      description:
        'रक्तदान महादान या उद्देशाने आयोजित केलेल्या रक्तदान शिबिरामध्ये सर्व नागरिकांना सहभागी होण्याचे आवाहन करण्यात येत आहे. रक्तदानामुळे अनेक जीव वाचवता येतात आणि समाजसेवेचा उत्तम मार्ग आहे...'
    },
    {
      id: 3,
      title: 'सांस्कृतिक कार्यक्रम',
      date: '१५ ऑगस्ट २०२४, गुरुवार',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      description:
        'स्वातंत्र्य दिनानिमित्त आयोजित सांस्कृतिक कार्यक्रमात विविध सांस्कृतिक कार्यक्रम, देशभक्तीगीते, नाटक आणि इतर मनोरंजक कार्यक्रमांचे आयोजन केले जाईल. सर्वांचे स्वागत आहे...'
    },
    {
      id: 4,
      title: 'शैक्षणिक मार्गदर्शन',
      date: '१० सप्टेंबर २०२४, मंगळवार',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
      description:
        'विद्यार्थ्यांसाठी शैक्षणिक मार्गदर्शन सत्र आयोजित केले आहे. यामध्ये करिअर काउंसलिंग, परीक्षेची तयारी आणि भविष्यातील संधींबाबत माहिती दिली जाईल...'
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentEvent((prev) => (prev + 1) % upcomingEvents.length);
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [isPaused, upcomingEvents.length]);

  const nextEvent = () =>
    setCurrentEvent((prev) => (prev + 1) % upcomingEvents.length);

  const prevEvent = () =>
    setCurrentEvent(
      (prev) => (prev - 1 + upcomingEvents.length) % upcomingEvents.length
    );

  return (
    <section className="upcoming-event-section">
      <div className="upcoming-event-container">
        <h2 className="upcoming-event-title">
          आगामी उपक्रम
          <span className="upcoming-event-subtitle">
            (जानेवारी ते डिसेंबर २०२४)
          </span>
        </h2>

        <div
          className="upcoming-event-slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {upcomingEvents.map((event, index) => (
            <div
              key={event.id}
              className={`upcoming-event-card ${
                index === currentEvent
                  ? 'upcoming-event-card-active'
                  : ''
              }`}
            >
              <div className="upcoming-event-grid">
                <div className="upcoming-event-image-wrapper">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="upcoming-event-image"
                  />
                </div>

                <div className="upcoming-event-content">
                  <h3 className="upcoming-event-content-title">
                    {event.title}
                  </h3>

                  <div className="upcoming-event-details">
                    <p className="upcoming-event-date">
                      <Calendar
                        size={20}
                        className="upcoming-event-date-icon"
                      />
                      <span className="upcoming-event-date-label">
                        दिनांक:
                      </span>{' '}
                      {event.date}
                    </p>

                    <p className="upcoming-event-description">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={prevEvent}
            className="upcoming-event-nav-button upcoming-event-nav-button-prev"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextEvent}
            className="upcoming-event-nav-button upcoming-event-nav-button-next"
          >
            <ChevronRight size={24} />
          </button>

          <div className="upcoming-event-dots">
            {upcomingEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentEvent(index)}
                className={`upcoming-event-dot ${
                  index === currentEvent
                    ? 'upcoming-event-dot-active'
                    : ''
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventCard;
