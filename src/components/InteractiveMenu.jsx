import React, { useState } from 'react';
import menuData from '../data/menu.json';

const InteractiveMenu = () => {
  const [activeTab, setActiveTab] = useState('breakfast');

  const packages = menuData.tabbedPackages[activeTab];

  return (
    <section className="interactive-menu-section animate-fade-up">
      <div className="container">
        <div className="menu-tabs-container">
          {['breakfast', 'lunch', 'dinner'].map((tab) => (
            <button
              key={tab}
              className={`menu-tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="menu-packages-grid">
          {packages.map((pkg, index) => (
            <div key={index} className="menu-package-card hover-card-effect">
              <div className="package-card-header">
                <h3>{pkg.name}</h3>
                <div className="header-line"></div>
              </div>
              <ul className="package-items-list">
                {pkg.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveMenu;
