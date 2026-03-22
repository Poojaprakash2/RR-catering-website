import MenuSection from '../components/MenuSection';
import InteractiveMenu from '../components/InteractiveMenu';

const Menu = () => {
  return (
    <div className="page menu-page">
      <div className="page-header" style={{ paddingTop: '120px', paddingBottom: '40px', backgroundColor: 'var(--off-white)', textAlign: 'center' }}>
        <div className="container">
          <h1 className="animate-fade-up">Catering Menu Packages</h1>
          <p className="animate-fade-up" style={{ animationDelay: '0.1s', maxWidth: '600px', margin: '15px auto 0' }}>
            Choose from our curated Breakfast, Lunch, and Dinner packages, or explore our complete culinary range below.
          </p>
        </div>
      </div>
      
      <InteractiveMenu />
      
      <section className="section bg-white" style={{ paddingTop: '20px' }}>
        <div className="container">
          <MenuSection />
        </div>
      </section>
    </div>
  );
};

export default Menu;
