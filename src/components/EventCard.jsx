import React from 'react';
import '../styles/EventCard.css';

const EventCard = ({ title, image, onClick }) => (
  <div onClick={onClick} className="event-card" role="button" tabIndex={0}>
    <div className="event-card-image-wrapper">
      <img src={image} alt={title} className="event-card-image" />
    </div>
    <div className="event-card-overlay" />
    <div className="event-card-footer">
      <h3 className="event-card-title">{title}</h3>
    </div>
  </div>
);

export default EventCard;
