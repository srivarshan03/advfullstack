// Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Home.css';
import './Navbar';

const Home = () => {
  return (
    <div className='bg'>
      <header>
        <h1>Corporate Event Management</h1>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <section className="hero-section">
        <h2>Welcome to Our Event Management Services</h2>
        <p>We specialize in planning and executing seamless corporate events, conferences, and meetings that leave a lasting impression.</p>
        <Link to="/services" className="cta-button">Explore Our Services</Link>
      </section>

      <section className="about-section">
        <h2>About Us</h2>
        <p>At Corporate Event Management, we bring creativity and expertise to every event we organize. Our team of dedicated professionals ensures that every detail is meticulously planned and executed, delivering successful and memorable experiences.</p>
        <Link to="/about" className="cta-button">Learn More</Link>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <p>From concept development to on-site coordination, we offer a range of services to meet your event needs:</p>
        <ul>
          <li>Event Planning and Coordination</li>
          <li>Venue Selection and Management</li>
          <li>Catering and Hospitality</li>
          <li>Audio-Visual Production</li>
          <li>Entertainment Booking</li>
          <li>On-Site Staffing</li>
        </ul>
        <Link to="/services" className="cta-button">View All Services</Link>
      </section>

      <section className="portfolio-section">
        <h2>Our Portfolio</h2>
        <p>Explore some of the successful events we've organized for our clients. Each event is a testament to our commitment to excellence and creativity.</p>
        <Link to="/portfolio" className="cta-button">View Portfolio</Link>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Ready to plan your next corporate event? Contact us today to discuss your ideas and requirements. We look forward to creating an unforgettable experience for you and your guests.</p>
        <Link to="/contact" className="cta-button">Contact Now</Link>
      </section>

      <footer>
        <p>&copy; 2024 Corporate Event Management. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
