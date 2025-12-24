import "../styles/Member.css";

const members = [
  { name: "श्री. सुनील जगदाळे", role: "अध्यक्ष", img: "/public/samiti members/sunil jagdale_.jpg" },
  { name: "श्री. उन्मेष जाधव", role: "कार्याध्यक्ष", img: "/public/samiti members/unmesh.jpg" },
  { name: "श्री. मंगेश साईल", role: "सचिव", img: "/public/samiti members/mangesh sahil s.jpg" },
   { name: "श्री. हेमंत केदारी", role: "खजिनदार", img: "/public/samiti members/hemant kedari k.jpg" },
  { name: "श्री. आशुतोष घोरपडे", role: "उपाध्यक्ष", img: "/public/samiti members/ashotosh u.jpg" },
   { name: "श्री. संतोष कोरे", role: "उपाध्यक्ष", img: "/public/samiti members/santosh kore.jpg" },
  { name: "श्री. संजय सावंत", role: "सह सचिव", img: "/public/samiti members/sanjay sawant_.jpg" },
   { name: "श्री. महेश कळसकर", role: "सह सचिव", img: "/public/samiti members/mahesh kalaskar.jpg" },
  { name: "श्रीमती. रश्मी जाधव", role: "महिला सदस्य", img: "/public/samiti members/rashmi jadhav_.jpg" },
   { name: "श्रीमती सायली भोसले", role: "महिला सदस्य", img: "/public/samiti members/sayali bhosale.jpg" },
  { name: "श्री. विनोद देसाई", role: "सदस्य", img: "/public/samiti members/vinod desai.jpg" },
  { name: "श्री. सुधाकर नलावडे", role: "सदस्य", img: "/public/samiti members/sudhakar nalawade_.jpg" },
  { name: "श्री. संजय मंडले", role: "सदस्य", img: "/public/samiti members/sanjay mandale_.jpg" },
{ name: "श्री. हेमेंद्रसिंग शिंदे", role: "सदस्य", img: "/public/samiti members/hemandrasingh shinde.jpg" },
{ name: "श्री. भगवान खोपकर", role: "सदस्य", img: "/public/samiti members/bhagwan khopkar_.jpg" },
{ name: "श्री. लक्ष्मण पाटील", role: "सदस्य", img: "/public/samiti members/laxman patil_.jpg" },
{ name: "श्री. कृष्णा आंभोरे पाटील", role: "सदस्य", img: "/public/samiti members/krushna abhor patil.jpg" },
{ name: "श्री. रविंद्र बुलबुले", role: "सदस्य", img: "/public/samiti members/ravindra bulbule.jpg" },
{ name: "श्री. निखिल तळेकर", role: "सदस्य", img: "/public/samiti members/nikhil talekar.jpg" },
{ name: "श्री. निखिल घुगे", role: "सदस्य", img: "/public/samiti members/nikhil ghughe.jpg" },
];


const oldmembers = [
  { name: "श्री. प्रकाश साळवी", role: "माजी अध्यक्ष", img: "/public/samiti members/prakash salvi.jpg" },
  { name: "श्री. ज्ञानेश्वर थोरात", role: "माजी अध्यक्ष", img: "/public/samiti members/dnyaneshwar thorat_.jpg" },
  { name: "श्री. रविंद्र पाटील", role: "माजी अध्यक्ष", img: "/public/samiti members/ravindra patil_.jpg" },
   { name: "श्री.अविनाश भामरे-पाटील", role: "माजी कार्याध्यक्ष", img: "/public/samiti members/avinash bhamrae-patil s.jpg" },
  { name: "श्री.चंद्रशेखर पाटकर", role: "माजी कार्याध्यक्ष", img: "/public/samiti members/chandrashekhar patkar s.jpg" },
  { name: "श्री. रोहिदास तरे", role: "माजी सचिव", img: "/public/samiti members/rahidas tare_.jpg" },
   { name: "श्री. रामकृष्ण राणे", role: "माजी सचिव", img: "/public/samiti members/ramkrushna rane_1.jpg" },
  { name: "श्री. दत्तात्रय महाबरे", role: "माजी खजिनदार", img: "/public/samiti members/dattray mahabray k.jpg" },
   { name: "श्री. अभिजित बडवे", role: "माजी खजिनदार", img: "/public/samiti members/abhijet badwe k.jpg" },
  { name: "श्री. मकरंद सावंत", role: "माजी खजिनदार", img: "/public/samiti members/makrand sawant k.jpg" },
  { name: "श्री. सुबोध किर्लोस्कर", role: "माजी उपाध्यक्ष", img: "/public/samiti members/subodh kirloskar.jpg" },
  { name: "श्री. मधुकर मराठे", role: "माजी सहखजिनदार", img: "/public/samiti members/madukar marathe.jpg" },
{ name: "श्री. विनोद देसाई", role: "माजी उपाध्यक्ष", img: "/public/samiti members/vinod desai.jpg" },

];












export default function Member() {
  return (
    <section className="gallery-wall">
      {/* current members section */}
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


      {/* old members section */}
            <div className="title-scroll">
        <img src="/scroll.png" alt="title scroll" />
        <div className="title-scroll-text">
          ॥ माजी पदाधिकारी ॥
        </div>
      </div>
      

      <div className="ogallery-grid">
        {oldmembers.map((om, i) => (
          <div className="gallery-item" key={i}>
            
            {/* FRAME */}
            <div className="frame-wrapper">
              <img src="/frame.png" className="frame-img" alt="frame" />
              <img src={om.img} className="member-photo" alt={om.name} />
            </div>

            {/* SCROLL */}
            <div className="scroll-wrapper">
              <img src="/scroll.png" alt="scroll" />
              <div className="scroll-text">
                <p className="member-name">॥ {om.name} ॥</p>
                <p className="member-role">{om.role}</p>
              </div>
            </div>

          </div>
        ))}
      </div>



    </section>
  );
}
