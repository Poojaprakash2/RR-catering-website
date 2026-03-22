import React from 'react';
import southIndianImg from '../assets/images/south-indian-meals.png';
import tiffinImg from '../assets/images/tiffin-varieties.png';

const Gallery = () => {
  const images = [
    { title: 'Exquisite Plating', type: 'Wedding', src: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800' },
    { title: 'Fresh Ingredients', type: 'Prep', src: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80&w=800' },
    { title: 'Grand Buffets', type: 'Corporate', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800' },
    { title: 'Traditional South Indian', type: 'Wedding', src: southIndianImg },
    { title: 'Tiffin Varieties', type: 'Breakfast', src: tiffinImg },
    { title: 'Desserts', type: 'Sweets', src: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <section id="gallery" className="section bg-gray">
      <div className="container">
        <h2 className="section-title">Our Culinary Gallery</h2>
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div className="gallery-item" key={index}>
              <div className="gallery-img-wrapper">
                <img src={img.src} alt={img.title} className="gallery-image" />
                <span className="gallery-overlay-text">{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
