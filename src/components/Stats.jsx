import React from 'react';

const Stats = () => {
  return (
    <section className="section stats-section">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-card">
            <h3 className="stat-number">25+</h3>
            <p className="stat-label">Years Experience</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">5000+</h3>
            <p className="stat-label">Events Catered</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">10000+</h3>
            <p className="stat-label">Happy Clients</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">50+</h3>
            <p className="stat-label">Expert Chefs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
