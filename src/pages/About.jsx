import Navbar from "./components/Navbar";
export default function AboutUs() {
  return (
    <>
     <Navbar />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&display=swap');

        /* ===== PAGE BASE ===== */
        .about-container {
          font-family: 'Tiro Devanagari Marathi', 'Kokila', 'Mangal', Georgia, serif;
          min-height: 100vh;
          background: linear-gradient(135deg, #ff6600 0%, #ff8800 100%);
          padding: 40px 20px;
          position: relative;
        }

        .about-container::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 4px 4px;
          pointer-events: none;
        }

        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ===== VIDEO SECTION ===== */
        .video-section {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
          margin-bottom: 50px;
        }

        .video-title {
          text-align: center;
          font-size: 28px;
          color: #8B0000;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }

        .video-divider {
          width: 120px;
          height: 4px;
          margin: 0 auto 25px;
          background: linear-gradient(to right, transparent, #8B4513, transparent);
        }

        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          border: 5px solid #8B4513;
          border-radius: 12px;
        }

        .video-wrapper iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .video-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 60px rgba(0,0,0,0.35);
          pointer-events: none;
        }

        /* ===== SCROLL CONTAINER ===== */
        .scroll-container {
          perspective: 1000px;
          opacity: 0;
          transform: translateY(40px);
          animation: reveal 1.2s ease forwards;
        }

        @keyframes reveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scroll {
          background: linear-gradient(to bottom,
            #d4a574 0%,
            #a67c51 50%,
            #d4a574 100%);
          border-radius: 16px;
          padding: 55px;
          position: relative;
          border: 2px solid #8B4513;
          animation: scrollFloat 6s ease-in-out infinite;
          box-shadow:
            0 10px 40px rgba(0,0,0,0.4),
            inset 0 0 80px rgba(0,0,0,0.2);
        }

        @keyframes scrollFloat {
          0%, 100% {
            transform: rotateX(2deg) translateY(0);
          }
          50% {
            transform: rotateX(2deg) translateY(-6px);
          }
        }

        .scroll-rod {
          position: absolute;
          left: -15px;
          right: -15px;
          height: 18px;
          background: linear-gradient(to right, #5c2c0c, #a0522d, #5c2c0c);
          border-radius: 20px;
          box-shadow: 0 3px 6px rgba(0,0,0,0.4);
        }

        .scroll-rod-top { top: -10px; }
        .scroll-rod-bottom { bottom: -10px; }

        .scroll-content {
          background: rgba(235, 220, 195, 0.95);
          padding: 40px;
          border-radius: 10px;
          border: 3px double #8B4513;
          position: relative;
        }

        .texture-overlay {
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(139,69,19,0.03) 2px,
            rgba(139,69,19,0.03) 4px
          );
          pointer-events: none;
        }

        /* ===== VERSE ===== */
        .verse {
          text-align: center;
          font-size: 22px;
          color: #8B0000;
          margin-bottom: 30px;
          font-style: italic;
          animation: verseGlow 4s ease-in-out infinite;
        }

        @keyframes verseGlow {
          0%,100% { text-shadow: 0 0 5px rgba(139,0,0,0.3); }
          50% { text-shadow: 0 0 12px rgba(139,0,0,0.6); }
        }

        .decorative-line {
          height: 3px;
          background: linear-gradient(to right, transparent, #8B4513, transparent);
          margin: 30px 0;
        }

        /* ===== TEXT ===== */
        .about-text {
          color: #2c1810;
          font-size: 18px;
          line-height: 2;
          text-align: justify;
        }

        .about-text p {
          margin-bottom: 35px;
          text-indent: 30px;
        }

        .about-text p:first-child::first-letter {
          font-size: 60px;
          float: left;
          margin-right: 8px;
          color: #8B0000;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .about-text { font-size: 16px; }
          .verse { font-size: 18px; }
          .scroll { padding: 30px 20px; }
        }
      `}</style>

      <div className="about-container">
        <div className="content-wrapper">

          {/* VIDEO */}
          <div className="video-section">
            <h2 className="video-title">शिवछत्रपतींचा प्रेरणादायी प्रवास</h2>
            <div className="video-divider"></div>
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Shivaji Maharaj"
                allowFullScreen
              />
            </div>
          </div>

          {/* SCROLL */}
          <div className="scroll-container">
            <div className="scroll">
              <div className="scroll-rod scroll-rod-top"></div>
              <div className="scroll-rod scroll-rod-bottom"></div>

              <div className="scroll-content">
                <div className="texture-overlay"></div>

                <div className="verse">
                  निश्चयाला गहमतेरु, बहुत ननांसी आधारू |
                  <br />
                  असर्वैव स्थितीला निश्चित, श्रीगीता शोभां ||
                </div>

                <div className="decorative-line"></div>

                <div className="about-text">
                  {/* YOUR ORIGINAL PARAGRAPHS — UNCHANGED */}
                  <p>  "छत्रपति शिवाजी महाराजां"चा अकल्पस अक्षरी मंत्राचे नारूरू घारेक मासरींग मगातर पहटेलो आहे. सुलणापोश छत्रपति शिवाजीं मांराजू म्हणाजे सहाड्लीला पहलेलो एक पोहाट-!</p>
                  <p>शेकडो वर्षाच्या गुलामगिरीत, परस्वाव सत्ताच्या आक्रमणांने गालिल्याग्र ड्ग्रातेल्या महाराष्ट्रात अल्पसगळ जादियाच्या स्पयेला पिघवलेल्या गलमलात छत्रपति शिवाजी महाराजांनी आलाविद्याशाय आणि स्वत्व किहूदी राजयाच्या स्थारीपेच्या "काडु" घातले आणि चास्चा घास्चा आहियार्थी आणि वलान्तु घातळ सोलेच्या छास्ताड्वर पाऊ शेबळू हिंदवी रसाजच्यारी सगारया कैती. अवद्वच्या ५० वर्षाच्या आयुष्याला छत्रपति शिवाजी महाराजांनी जो असामान्य पराक्रम गागजवला त्याला न्याल्या इतिहासात तोड नाही. राजकराजाची संकल्पना प्रस्थभित आणपाडा असा आक्रस्वांनी शिडकणार राजा जातारीत कोणत्यारी देश्यात संपाड्जार नाही.</p>
                  <p> अशा अजय्या भारताखांरीच्या...</p>
                  <p> शिवराय्चो रजरोडी इतिहास...</p>
                  <p> विधागातीत शिवरोगांनी अधिकारीं...</p>

                 


अशा अजय्या भारताखांरीच्या म्हादिदु अराणाच्या छत्रपति शिवाजीं महाराजाच्या परिदचातळु मेरुजा मेरुजा तत्कालीन शिकोडकार विधागातीत वद्धुर शिराधुगी डी. राजाक्षमेश शाणे ग्यांनी सर्वांशी प्रकाशे शोधली, डॉ. ढगोंदर उंजालेकर, के. तहूकंत जोशी आणि के.तास्लस माफकर याच्या संसंकार्यांत डि. १५ मे. १९८७ तेजां शिळजंसिकार शिधागात "शिवजयंती उत्सव समिती" ची स्थापना केली.

शिवराय्चो रजरोडी इतिहास सर्व अधिकारीं कर्मचारीं वांचपायत पोहोचनुळ त्यांमुळ शिकणाच्या वैरोज करिंदहरी समाजरदोरी शुरिकारीं तमर झाल्यास एक वर्षाधी शिधाग आणि पत्यानीतो वदाडाची बचूंजार बदनु धूकेन असा प्रांफीनिक विचारा या शिवजयंती उत्सव समितीला रुपाजात होता.

विधागातीत शिवरोगांनी अधिकारीं कर्मचारीं यांग्या महाराष्ट्र्या या आदराने देताचे हेलिट्ट दहर्श्य ट्टधैं, वासालीं विधागाच्या माड्ग्रगात शैरांहदर सुसख्यावत छत्रपति शिवाजीं महाराजांचा पुताग स्थापन करण्याचे संकल्प समितीच्या संस्थापक प्रतीध्यकांरी-साहरस्त्यांगी किंत्ला व त्याला विधागातीत शिवरोगांचीं राइकग्राउंड उवहीकार दिल्यो.
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
