import "../styles/Member.css";

const members = [
  { name: "श्री. सुनील जगताप", role: "अध्यक्ष", img: "/sunil.jpg" },
  { name: "श्री. उज्ज्वल जगताप", role: "उपाध्यक्ष", img: "/unmesh.jpg" },
  { name: "श्री. प्रमोद सावंत", role: "सचिव", img: "/mangesh.jpg" },
];

export default function Member() {
  return (
    <section className="gallery-wall">

      <div className="title-scroll">
        <img src="/scroll.png" alt="title scroll" />
        <div className="title-scroll-text">
          ॥ विद्यमान कार्यकारिणी ॥
        </div>
      </div>
      

      <div className="gallery-grid">
        {members.map((m, i) => (
          <div className="gallery-item" key={i}>
            
            {/* FRAME */}
            <div className="frame-wrapper">
              <img src="/frame.png" className="frame-img" alt="frame" />
              <img src={m.img} className="member-photo" alt={m.name} />
            </div>

            {/* SCROLL */}
            <div className="scroll-wrapper">
              <img src="/scroll.png" alt="scroll" />
              <div className="scroll-text">
                <p className="member-name">॥ {m.name} ॥</p>
                <p className="member-role">{m.role}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
