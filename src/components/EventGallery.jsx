import "../styles/EventGallery.css";

const EventGallery = ({
  years,
  images,
  selectedYear,
  setSelectedYear,
}) => {
  return (
    <section className="gallery-wrapper">

      <div className="year-selector">
        <label>झालेल्या कार्यक्रमांची छायाचित्रे</label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="gallery-grid">
        {images.map((img, i) => (
          <img key={i} src={img} alt="event" />
        ))}
      </div>

    </section>
  );
};

export default EventGallery;
