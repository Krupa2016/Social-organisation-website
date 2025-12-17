import React from 'react';
import { Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">

          <div className="footer-section">
            <h3 className="footer-title">संपर्क</h3>

            <div className="footer-contact">
              <div className="footer-contact-item">
                <MapPin size={20} className="footer-icon" />
                <p>वसंत व सेवा कुंज असवल निर्मम माडगांव, मुंबई</p>
              </div>

              <div className="footer-contact-item">
                <Phone size={20} className="footer-icon" />
                <p>फोन: +०२८-२३४५०८७</p>
              </div>

              <div className="footer-contact-item">
                <Mail size={20} className="footer-icon" />
                <p>ई-मेल: susammun@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="footer-section footer-social-section">
            <h3 className="footer-title">माहचारी संलैत्यस्टई</h3>
            <div className="footer-social">
              <a href="#" className="footer-social-link footer-social-youtube">
                <Youtube size={24} />
              </a>
              <a href="#" className="footer-social-link footer-social-facebook">
                <Facebook size={24} />
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© २०२४ शिवजयंती उत्सव समिती. सर्व हक्क राखीव.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
