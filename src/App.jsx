import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChefSection from './components/ChefSection';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import DailyMenu from './components/DailyMenu';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <main className="min-h-screen bg-white selection:bg-ghibli-teal selection:text-white flex flex-col cursor-none">
      <CustomCursor />
      <Navbar />
      <Hero />
      
      <ChefSection />
      <HowItWorks />
      <DailyMenu />
      <Testimonials />
      <Newsletter />

      <Footer />
    </main>
  );
}

export default App;
