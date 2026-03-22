import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-layout-wrapper">
        <div className="hero-content animate-fade-up">
          <p className="hero-presenter">KOVAI A.R. RAMESH PRESENTS</p>
          <h1 className="hero-title">RR Catering</h1>
          
          <div className="kural-wrapper">
            <blockquote className="kural-quote-elegant">
              "அற்றால் அளவறிந்து உண்க<br />
              அஃதுடம்பு<br />
              பெற்றான் நெடிதுய்க்கும் ஆறு"
            </blockquote>
          </div>
          
          <div className="hero-btns">
            <a href="#contact" className="btn btn-primary">Book Now</a>
            <Link to="/menu" className="btn btn-outline">View Menu</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
