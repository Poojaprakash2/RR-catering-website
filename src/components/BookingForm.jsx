import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', date: '', guests: '', eventType: 'Wedding', message: ''
  });

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for choosing RR Catering! Your inquiry has been submitted.');
    setFormData({name: '', phone: '', email: '', date: '', guests: '', eventType: 'Wedding', message: ''});
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        
        <div className="booking-wrapper">
          <div className="booking-info" style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
            <h2>Contact Us</h2>
            <p>We'd love to hear from you. Reach out for catering inquiries and bookings.</p>
            
            <div style={{ marginTop: '30px' }}>
              <div style={{ marginBottom: '20px' }}>
                <h4>Contact Details</h4>
                <p>+91 98945 57740 | info@rrcatering.com</p>
                <p>170, Kothari Nagar, Singanallur, Coimbatore - 641 005</p>
              </div>
            </div>

            <div className="map-container" style={{ width: '100%', flexGrow: 1, minHeight: '300px', marginTop: '10px' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.486221564344!2d77.0267272!3d11.0020722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8570b79339e91%3A0xc3191d926343588f!2sKothari%20Nagar%2C%20Singanallur%2C%20Coimbatore%2C%20Tamil%20Nadu%20641005!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', minHeight: '300px' }} 
                allowFullScreen="" 
                loading="lazy" 
                title="RR Catering Location"
              ></iframe>
            </div>
          </div>
          <div className="booking-form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Event Date</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Expected Guests</label>
                  <input type="number" name="guests" value={formData.guests} onChange={handleChange} required min="50" />
                </div>
              </div>
              <div className="form-group">
                <label>Event Type</label>
                <select name="eventType" value={formData.eventType} onChange={handleChange}>
                  <option value="Wedding">Wedding</option>
                  <option value="Corporate">Corporate Event</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Private">Private Party</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">Send Request</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
