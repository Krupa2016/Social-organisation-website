import { useNavigate } from "react-router-dom";
import eventsData from "../components/eventsData.js";
import "./Events.css";

const Events = () => {
  const navigate = useNavigate();

  return (
    <section className="events-list">
      {Object.entries(eventsData).map(([key, event]) => (
        <div
          key={key}
          className="event-card"
          onClick={() => navigate(`/events/${key}`)}
        >
          <img src={event.coverImage} alt={event.title} />
          <h3>{event.title}</h3>
        </div>
      ))}
    </section>
  );
};

export default Events;
