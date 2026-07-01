import React from 'react';
import { Clock, MapPin, Download, Share2 } from 'lucide-react';

const EventUpcomingItem = ({ icon, title, subtitle, details, color, date }) => {
  return (
    <div className="upcoming-event-item">
      <div className="event-item-icon" style={{ background: color }}>
        <img src={icon} alt={title} className="icon-image" />
      </div>

      <div className="event-item-content">
        <div className="event-item-header">
          <h3 className="event-item-title">{title}</h3>
          <span className="event-item-date">
            <Clock size={16} /> {date}
          </span>
        </div>

        <p className="event-item-subtitle">
          <MapPin size={16} /> {subtitle}
        </p>

        <p className="event-item-details">{details}</p>
      </div>

      <div className="event-item-actions">
        <button className="event-action-btn"><Download size={18} /></button>
        <button className="event-action-btn"><Share2 size={18} /></button>
      </div>
    </div>
  );
};

export default EventUpcomingItem;
