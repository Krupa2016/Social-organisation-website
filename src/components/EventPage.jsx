import { useParams } from "react-router-dom";
import { useState } from "react";
import eventsData from "./eventsData";
import EventDescription from "./EventDescription";
import EventGallery from "./EventGallery";

const EventPage = () => {
  const { eventKey } = useParams();
  const event = eventsData[eventKey];

  if (!event) return <h2>Event not found</h2>;

  const years = Object.keys(event.gallery).sort((a, b) => b - a);
  const [selectedYear, setSelectedYear] = useState(years[0]);

  return (
    <>
      {/* 👇 TITLE COMES FROM DATA */}
      <EventDescription
        title={event.title}
        image={event.coverImage}
        description={event.description}
      />

      <EventGallery
        years={years}
        images={event.gallery[selectedYear]}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
    </>
  );
};

export default EventPage;
