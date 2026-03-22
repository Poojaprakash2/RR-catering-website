import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={logo} alt="RR Catering" />
        </Link>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <Link to="/menu" onClick={() => setIsMenuOpen(false)}>Menu</Link>
          <a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <a href="tel:+919894557740" className="call-now-btn">Call Now</a>
        </div>
        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
