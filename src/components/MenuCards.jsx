import { Link } from 'react-router-dom';
import menuData from '../data/menu.json';

const MenuCards = () => {
  return (
    <section className="section menu-cards-section">
      <div className="container">
        <h2 className="section-title animate-fade-up">Explore Our Menus</h2>
        <div className="menu-types-grid">
          {menuData.menuTypes.map((type, idx) => (
            <Link to={`/menu?type=${type.id}`} key={type.id} className="menu-type-card hover-card-effect animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="menu-type-image placeholder-bg">
                {/* Fallback pattern since we don't have real images */}
                <span className="type-title">{type.title}</span>
              </div>
              <div className="menu-type-content">
                <p>{type.description}</p>
                <span className="view-full-btn">View Full Menu &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuCards;
