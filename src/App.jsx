import { useState } from 'react'
import Slideshow from './Slideshow'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <span>DINH KONG RADIO</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            DINH KONG <span className="gradient-text">RADIO</span>
          </h1>
          <p className="hero-subtitle">
            Electronic Music • Openformat • From Định Công with Passion
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">2500+</span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Plays</span>
            </div>
          </div>
          <a href="#gallery" className="cta-button">
            Explore Our Sound
          </a>
        </div>
        <div className="hero-decoration">
          <div className="floating-orb orb-1"></div>
          <div className="floating-orb orb-2"></div>
          <div className="floating-orb orb-3"></div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <div className="container">
          <h2 className="section-title">
            Visual <span className="gradient-text">Gallery</span>
          </h2>
          <p className="section-subtitle">
            Những khoảnh khắc đáng nhớ từ các sự kiện và buổi biểu diễn
          </p>
          <Slideshow />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="story-intro">
                <p className="highlight-text">
                  Từ tầng 18 Định Công đến những sân khấu lớn nhất Hà Nội
                </p>
              </div>
              <p>
                Tổ đội xuất thân từ tầng 18 Định Công cùng với niềm đam mê âm nhạc điện tử.
                Chuyên genre <strong>Openformat</strong> với phong cách độc đáo và sáng tạo.
              </p>
              <p>
                Đạt <strong>2500 followers</strong> trên kênh SoundCloud với các pack mashup đạt  
                <strong> 10.000 lượt nghe</strong>. Chúng tôi tự hào về những thành tựu âm nhạc 
                và sự ủng hộ từ cộng đồng.
              </p>
              <div className="achievements-grid">
                <div className="achievement-card">
                  <h3>Collaborations</h3>
                  <p>Gaztik, JAWBREAKERS, Kydz</p>
                </div>
                <div className="achievement-card">
                  <h3>Major Events</h3>
                  <p>EDMUNIVERSE, COMPLEX FEST 2024, RAVE PLANNET 2025</p>
                </div>
                <div className="achievement-card">
                  <h3>Artist Support</h3>
                  <p>Gaztik, Sao Bomb, Lethimcook Radio, Dng, DAMIAN, ptt</p>
                </div>
              </div>
              <div className="skills">
                <span className="skill-tag">Openformat</span>
                <span className="skill-tag">Electronic Music</span>
                <span className="skill-tag">Mashup Production</span>
                <span className="skill-tag">DJ Performance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Hãy kết nối và cùng nhau tạo ra điều gì đó tuyệt vời
          </p>
          <div className="contact-links">
            <a href="https://soundcloud.com/dinkongradio" className="contact-link" target="_blank" rel="noopener noreferrer">
              <span>SoundCloud</span>
            </a>
            <a href="https://www.facebook.com/DinkKongKuking" className="contact-link" target="_blank" rel="noopener noreferrer">
              <span>Facebook</span>
            </a>
          </div>
          <div className="email-section">
            <a href="mailto:dinhkongradio@gmail.com" className="email-contact" target="_blank" rel="noopener noreferrer">
              <span className="email-label">Email</span>
              <span className="email-address">dinhkongradio@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Dinh Kong Radio. All rights reserved. Dev by BANG!</p>
        </div>
      </footer>
    </div>
  )
}

export default App
