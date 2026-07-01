import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const EventsDisplay = () => {
  const events = [
    { id: 1, title: "शिवजयंती उत्सव सोहळा", image: "https://images.unsplash.com/photo-1604132781294-2afa7a0c4b8b?w=800" },
    { id: 2, title: "वृक्षारोपण", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800" },
    { id: 3, title: "गडदर्शन (पुरुष-महिला)", image: "https://images.unsplash.com/photo-1532264523420-881a47db012d?w=800" },
    { id: 4, title: "अंध बांधवांना सहाय्य", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" },
    { id: 5, title: "ग्रंथालय", image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800" },
    { id: 6, title: "दिवाळी फराळ", image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800" },
    { id: 7, title: "सामाजिक बांधिलकी", image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800" }
  ];

  const [active, setActive] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const prev = () => setActive((prev) => (prev - 1 + events.length) % events.length);
  const next = () => setActive((prev) => (prev + 1) % events.length);

  // Calculate positions for infinite carousel
  const getCardPosition = (index) => {
    const totalCards = events.length;
    let adjustedIndex = index - active;
    
    // Adjust for circular positioning
    if (adjustedIndex < -Math.floor(totalCards / 2)) {
      adjustedIndex += totalCards;
    } else if (adjustedIndex > Math.floor(totalCards / 2)) {
      adjustedIndex -= totalCards;
    }
    
    return adjustedIndex;
  };

  return (
    <section className="events-carousel">
      <button className="nav left" onClick={prev}><ArrowLeft /></button>

      <div className="carousel-track">
        {events.map((event, index) => {
          const position = getCardPosition(index);
          const distance = Math.abs(position);
          const isHovered = hoveredIndex === index;
          
          return (
            <div
              key={event.id}
              className={`carousel-card ${position === 0 ? "active" : ""}`}
              style={{
                transform: `
                  translateX(${position * 280}px)
                  scale(${1 - distance * 0.08})
                  rotateY(${position * 5}deg)
                `,
                opacity: distance > 3 ? 0 : 1,
                zIndex: isHovered ? 1000 : 500 - distance,
                filter: distance > 2 ? `blur(${distance - 2}px)` : 'none'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setActive(index)}
            >
              <img src={event.image} alt={event.title} />
              <div className="card-overlay">
                <h3>{event.title}</h3>
                <span>VIEW DETAILS →</span>
              </div>
            </div>
          );
        })}
      </div>

      <button className="nav right" onClick={next}><ArrowRight /></button>

      <div className="dots">
        {events.map((_, i) => (
          <button 
            key={i} 
            className={i === active ? "dot active" : "dot"}
            onClick={() => setActive(i)}
          />
        ))}
      </div>

      <style>{`
        .events-carousel {
          position: relative;
          height: 480px;
          background: linear-gradient(135deg,#c56a0a,#e07b12);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* TRACK - Infinite carousel */
        .carousel-track {
          position: relative;
          width: 100%;
          height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
        }

        /* CARD - All cards in front */
        .carousel-card {
          position: absolute;
          width: 260px;
          height: 340px;
          border-radius: 22px;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          background: #000;
          cursor: pointer;
          transform-origin: center center;
          will-change: transform, z-index, opacity, filter;
        }

        /* Hover effect - brings card to front */
        .carousel-card:hover {
          transform: scale(1.1) translateX(${events.map((_, index) => {
            const pos = getCardPosition(index);
            return pos * 280;
          })}px) !important;
          z-index: 1000 !important;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          filter: blur(0) !important;
        }

        .carousel-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .carousel-card:hover img {
          transform: scale(1.08);
        }

        /* ACTIVE CARD */
        .carousel-card.active {
          box-shadow: 0 0 40px rgba(255, 215, 120, 0.8);
          filter: blur(0) !important;
        }

        /* OVERLAY */
        .card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.5rem;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
          color: white;
          transform: translateY(10px);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .carousel-card:hover .card-overlay {
          transform: translateY(0);
          opacity: 1;
        }

        .card-overlay h3 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .card-overlay span {
          font-size: 0.85rem;
          opacity: 0.9;
          display: block;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .carousel-card:hover .card-overlay span {
          transform: translateX(5px);
        }

        /* NAV BUTTONS */
        .nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          z-index: 1100;
        }

        .nav:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-50%) scale(1.1);
        }

        .nav.left { left: 30px; }
        .nav.right { right: 30px; }

        /* DOTS */
        .dots {
          position: absolute;
          bottom: 20px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: 10px;
          z-index: 1100;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s ease;
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.7);
          transform: scale(1.2);
        }

        .dot.active {
          width: 32px;
          border-radius: 8px;
          background: white;
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 768px) {
          .events-carousel {
            height: 420px;
          }
          
          .carousel-track {
            height: 320px;
            perspective: 800px;
          }
          
          .carousel-card {
            width: 200px;
            height: 280px;
          }
          
          .carousel-card:hover {
            transform: scale(1.05) !important;
          }
          
          .nav {
            width: 40px;
            height: 40px;
          }
          
          .nav.left { left: 15px; }
          .nav.right { right: 15px; }
        }

        @media (max-width: 480px) {
          .events-carousel {
            height: 380px;
          }
          
          .carousel-track {
            height: 280px;
          }
          
          .carousel-card {
            width: 180px;
            height: 240px;
          }
          
          .dots {
            bottom: 10px;
          }
          
          .nav {
            width: 35px;
            height: 35px;
          }
          
          .nav.left { left: 10px; }
          .nav.right { right: 10px; }
        }

        /* Very small screens */
        @media (max-width: 360px) {
          .events-carousel {
            height: 340px;
          }
          
          .carousel-track {
            height: 240px;
          }
          
          .carousel-card {
            width: 160px;
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
};

export default EventsDisplay;