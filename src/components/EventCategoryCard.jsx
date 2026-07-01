import React, { useState } from 'react';
import '../styles/Events.css';
import { Heart } from 'lucide-react';

const EventCategoryCard = ({ title, image, count, onClick }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="event-category-card" onClick={onClick}>
      <div className="category-card-inner">
        <div className="category-badge">{count} कार्यक्रम</div>

        <button
          className={`category-like ${isLiked ? 'liked' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
        >
          <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
        </button>

        <div className="category-image-wrapper">
          <img src={image} alt={title} className="category-image" />
          <div className="category-overlay">
            {/* <span className="category-view-text">विस्तृत पहा</span> */}
          </div>
        </div>

        <div className="category-footer">
          <h3 className="category-title">{title}</h3>
        </div>
      </div>

      <div className="card-glow"></div>
    </div>
  );
};

export default EventCategoryCard;
