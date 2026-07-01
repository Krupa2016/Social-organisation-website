import React, { useState, useEffect } from 'react';
import '../styles/Events.css';

import {
  ChevronLeft,
  ChevronRight,
  Search
} from 'lucide-react';

import EventCategoryCard from './EventCategoryCard';

const EventMainCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

 const eventCategories = [
    { id: 1, title: 'शिवजयंती उत्सव सोहळा', image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=600&h=400&fit=crop', count: 12, category: 'cultural' },
    { id: 2, title: 'वृक्षारोपण', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=400&fit=crop', count: 8, category: 'social' },
    { id: 3, title: 'गडरक्षण (पुणे-माहिम)', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop', count: 15, category: 'heritage' },
    { id: 4, title: 'अंश बांधवांना रक्तदान', image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600&h=400&fit=crop', count: 6, category: 'health' },
    { id: 5, title: 'ग्रंथालय', image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop', count: 10, category: 'education' },
    { id: 6, title: 'दिवाळी फराळ', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&h=400&fit=crop', count: 5, category: 'festival' },
    { id: 7, title: 'सामाजिक बांधिलकी', image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop', count: 20, category: 'social' },
    { id: 8, title: 'इतर उपक्रम', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop', count: 18, category: 'other' }
  ];

  const filters = [
    { id: 'all', label: 'सर्व' },
    { id: 'cultural', label: 'सांस्कृतिक' },
    { id: 'social', label: 'सामाजिक' },
    { id: 'heritage', label: 'वारसा' },
    { id: 'education', label: 'शैक्षणिक' }
  ];


  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const filteredEvents = eventCategories.filter(e =>
    e.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedFilter === 'all' || e.category === selectedFilter)
  );

  const maxIndex = Math.max(0, filteredEvents.length - itemsPerView);

  return (
    <section className="main-events-carousel-section">
      <div className="events-container">
        <div className="section-header">
          <h2 className="section-title">आमचे मुख्य उपक्रम</h2>
          <p className="section-subtitle">सांस्कृतिक व सामाजिक कार्यक्रम</p>
        </div>

        <div className="events-controls">
          <div className="search-box">
            <Search size={20} />
            <input
              placeholder="कार्यक्रम शोधा..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="filter-buttons">
            {filters.map(f => (
              <button
                key={f.id}
                className={`filter-btn ${selectedFilter === f.id ? 'active' : ''}`}
                onClick={() => setSelectedFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="carousel-wrapper">
          <button
            className="carousel-nav carousel-nav-prev"
            onClick={() => setCurrentIndex(i => Math.max(i - 1, 0))}
            disabled={currentIndex === 0}
          >
            <ChevronLeft />
          </button>

          <div className="carousel-container">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {filteredEvents.map(item => (
                <div key={item.id} className="carousel-item" style={{ flex: `0 0 ${100 / itemsPerView}%` }}>
                  <EventCategoryCard {...item} />
                </div>
              ))}
            </div>
          </div>

          <button
            className="carousel-nav carousel-nav-next"
            onClick={() => setCurrentIndex(i => Math.min(i + 1, maxIndex))}
            disabled={currentIndex === maxIndex}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventMainCarousel;
