import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: "Arjun & Divya", event: "Wedding", text: "RR Catering made our wedding unforgettable! The food was divine." },
    { name: "Meera Krishnan", event: "Corporate Event", text: "Professional, punctual, and incredibly delicious. Highly recommend." },
    { name: "Karthik Raj", event: "Birthday Party", text: "The kids' menu was a hit, and the adults loved the traditional spread." }
  ];
  
  const [current, setCurrent] = useState(0);

  return (
    <section id="testimonials" className="section bg-gold-light">
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>
        <div className="testimonial-carousel">
          <button className="carousel-control" onClick={() => setCurrent(prev => prev === 0 ? reviews.length - 1 : prev - 1)}>
            <ChevronLeft />
          </button>
          <div className="testimonial-content">
            <p className="review-text">"{reviews[current].text}"</p>
            <h4 className="reviewer-name">{reviews[current].name}</h4>
            <span className="reviewer-event">{reviews[current].event}</span>
          </div>
          <button className="carousel-control" onClick={() => setCurrent(prev => prev === reviews.length - 1 ? 0 : prev + 1)}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
