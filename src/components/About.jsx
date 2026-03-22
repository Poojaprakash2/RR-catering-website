import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <h2>Our Story</h2>
            <div className="underline"></div>
            <p>Welcome to RR Catering, where culinary passion meets exceptional service. For over 25 years, we have been crafting unforgettable dining experiences for weddings, corporate events, and private parties.</p>
            <p>Our commitment to quality, authentic flavors, and stunning presentation has made us one of the most trusted names in the catering industry. We source the freshest ingredients and employ master chefs who pour their heart into every dish.</p>
            
            <ul className="about-features">
              <li><CheckCircle className="feature-icon" size={20} /> Premium Quality Ingredients</li>
              <li><CheckCircle className="feature-icon" size={20} /> Master Chefs</li>
              <li><CheckCircle className="feature-icon" size={20} /> Customizable Menus</li>
              <li><CheckCircle className="feature-icon" size={20} /> Exceptional Service</li>
            </ul>
          </div>
          <div className="about-image-standin">
            <div className="experience-badge">
              <span className="years">25+</span>
              <span className="text">Years of Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
