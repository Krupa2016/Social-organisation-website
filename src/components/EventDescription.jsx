import "./EventDescription.css";

const EventDescription = ({ title, image, description }) => {
  return (
    <section className="event-wrapper">
      
      {/* Centered heading */}
      <h2 className="event-title">{title}</h2>

      {/* Grid starts here */}
      <div className="event-desc">
        <div className="event-image">
          <img src={image} alt="event" />
        </div>

        <div className="event-content">
          <p>{description}</p>
        </div>
      </div>

    </section>
  );
};

export default EventDescription;
