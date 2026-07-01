import React from 'react';
import './Council.css';

export default function Council() {
  return (
    <div className="council-page">
      <div className="council-frame"></div>
      
      <div className="council-content">
        
        {/* Hero Section */}
        <div className="council-header">
          <div className="council-emblem">❂</div>
          <div className="council-marathi-quote">॥ स्वराज्य हा माझा जन्मसिद्ध हक्क आहे ॥</div>
          <h1 className="council-title">THE COUNCIL</h1>
          <div className="council-subtitle">The strength behind our mission.<br/>United by purpose. Driven by service. Inspired by Chhatrapati Shivaji Maharaj.</div>
          <div className="gold-divider"></div>
        </div>

        {/* President Card */}
        <div className="ivory-plaque president-card">
          <div className="card-title-tag">PRESIDENT</div>
          <div className="plaque-inner-border"></div>
          <div className="member-photo">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          </div>
          <div className="member-name">Your Name</div>
          <div className="member-role">President</div>
        </div>

        {/* Executive Council */}
        <div className="executive-panel">
          <div className="panel-title">EXECUTIVE COUNCIL</div>
          <div className="executive-grid">
            
            <div className="ivory-plaque executive-card">
              <div className="plaque-inner-border"></div>
              <div className="member-photo">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
              <div className="member-name">Your Name</div>
              <div className="member-role">Vice President</div>
            </div>

            <div className="ivory-plaque executive-card">
              <div className="plaque-inner-border"></div>
              <div className="member-photo">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
              <div className="member-name">Your Name</div>
              <div className="member-role">Secretary</div>
            </div>

            <div className="ivory-plaque executive-card">
              <div className="plaque-inner-border"></div>
              <div className="member-photo">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
              <div className="member-name">Your Name</div>
              <div className="member-role">Treasurer</div>
            </div>

            <div className="ivory-plaque executive-card">
              <div className="plaque-inner-border"></div>
              <div className="member-photo">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
              <div className="member-name">Your Name</div>
              <div className="member-role">Joint Secretary</div>
            </div>

          </div>
        </div>

        {/* Committee Members */}
        <div className="committee-section">
          <div className="committee-title">COMMITTEE MEMBERS</div>
          <div className="committee-grid">
            
            <div className="ivory-plaque committee-card">
              <div className="plaque-inner-border"></div>
              <div className="member-photo">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
              <div className="member-name">Your Name</div>
              <div className="member-role">Committee Member</div>
            </div>

            <div className="ivory-plaque committee-card">
              <div className="plaque-inner-border"></div>
              <div className="member-photo">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
              <div className="member-name">Your Name</div>
              <div className="member-role">Committee Member</div>
            </div>

            <div className="ivory-plaque committee-card">
              <div className="plaque-inner-border"></div>
              <div className="member-photo">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
              <div className="member-name">Your Name</div>
              <div className="member-role">Committee Member</div>
            </div>

          </div>
        </div>

        {/* Past Members */}
        <div className="committee-section" style={{ animationDelay: '0.7s' }}>
          <div className="committee-title">PAST MEMBERS</div>
          <div className="committee-grid">
            
            <div className="ivory-plaque committee-card">
              <div className="plaque-inner-border"></div>
              <div className="member-photo">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
              <div className="member-name">Your Name</div>
              <div className="member-role">Past Member</div>
            </div>

            <div className="ivory-plaque committee-card">
              <div className="plaque-inner-border"></div>
              <div className="member-photo">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
              <div className="member-name">Your Name</div>
              <div className="member-role">Past Member</div>
            </div>

            <div className="ivory-plaque committee-card">
              <div className="plaque-inner-border"></div>
              <div className="member-photo">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
              <div className="member-name">Your Name</div>
              <div className="member-role">Past Member</div>
            </div>

          </div>
        </div>

        {/* Quote Section */}
        <div className="quote-section" style={{ animationDelay: '0.8s' }}>
          <img src="/src/assets/lion-statue.png" alt="Lion" className="lion-statue lion-left" />
          
          <div className="quote-plaque">
            <div className="quote-text">
              “ एकत्र येऊ, समाजासाठी काम करू,<br/>
              शिवरायांच्या विचारांची प्रेरीत होऊ. ”
            </div>
            <div className="quote-icon">श्री</div>
          </div>
          
          <img src="/src/assets/lion-statue.png" alt="Lion" className="lion-statue lion-right" />
        </div>

      </div>
    </div>
  );
}
