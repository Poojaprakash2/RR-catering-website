import Hero from '../components/Hero';
import About from '../components/About';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import BookingForm from '../components/BookingForm';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Stats />
      <Services />
      <Gallery />
      <Testimonials />
      <BookingForm />
    </div>
  );
};

export default Home;
