import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DailyMeals from './pages/DailyMeals';
import KitchenDetail from './pages/KitchenDetail';
import ScrollToTop from './components/ScrollToTop'; // Placeholder or inline component

const ScrollToTopWrapper = () => {
    return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="min-h-screen bg-white selection:bg-ghibli-teal selection:text-white flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/daily-meals" element={<DailyMeals />} />
            <Route path="/kitchen/:id" element={<KitchenDetail />} />
          </Routes>
          <Footer />
      </main>
    </Router>
  );
}

export default App;
