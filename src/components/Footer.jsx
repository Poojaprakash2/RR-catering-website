import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <img src={logo} alt="RR Catering" className="footer-logo-img" />
          <p className="footer-desc">
            Premium catering services in Coimbatore. We bring the rich flavors and luxurious presentation to make your moments unforgettable.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><Facebook /></a>
            <a href="#" aria-label="Instagram"><Instagram /></a>
            <a href="#" aria-label="Twitter"><Twitter /></a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/#about">About Us</a></li>
            <li><a href="/menu">Our Menu</a></li>
            <li><a href="/#gallery">Gallery</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Our Services</h3>
          <ul>
            <li><a href="/#services">Wedding Catering</a></li>
            <li><a href="/#services">Corporate Events</a></li>
            <li><a href="/#services">Birthday Parties</a></li>
            <li><a href="/#services">Private Gatherings</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li>
              <MapPin size={20} className="contact-icon" />
              <span>170, Kothari Nagar, Behind Radharani Theatre, Singanallur, Coimbatore - 641 005.</span>
            </li>
            <li>
              <Phone size={20} className="contact-icon" />
              <div className="phone-numbers">
                <a href="tel:+919894557740">+91 98945 57740</a>
                <a href="tel:+918012612590">+91 80126 12590</a>
              </div>
            </li>
            <li>
              <Mail size={20} className="contact-icon" />
              <a href="mailto:info@rrcatering.com">info@rrcatering.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} RR Catering. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
