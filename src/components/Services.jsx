import React from 'react';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const servicesData = [
    {
      title: 'Wedding Catering',
      desc: 'Make your special day truly memorable with our exquisite wedding catering packages tailored to your tastes.',
      img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Corporate Events',
      desc: 'Impress your clients and colleagues with our professional catering services for meetings and conferences.',
      img: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Birthday Parties',
      desc: 'Celebrate milestones with vibrant and delicious food that guests of all ages will love.',
      img: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Private Gatherings',
      desc: 'Intimate dinners or family get-togethers, we bring the premium restaurant experience to your home.',
      img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title">Our Premium Services</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card hover-card-effect" key={index}>
              <div className="service-img-wrapper">
                <img src={service.img} alt={service.title} className="service-image" />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <a href="#contact" className="service-link">Learn More <ArrowRight size={16} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
