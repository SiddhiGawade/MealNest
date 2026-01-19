import logo from '../assets/HomeMeal_LOGO_MAIN.png';

const Footer = () => {
  return (
    <footer className="bg-ghibli-teal text-ghibli-pink py-12 px-6 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="HomeMeal Logo" className="w-20 h-20 rounded-[160px] object-cover bg-white" />
            <h3 className="text-2xl font-bold text-white">HomeMeal</h3>
          </div>
          <p className="text-ghibli-sky/80">Bringing the warmth of home cooking to your doorstep.</p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Explore</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-pink-200 hover:text-white transition-colors">Find Meals</a></li>
            <li><a href="#" className="text-pink-200 hover:text-white transition-colors">Meet Chefs</a></li>
            <li><a href="#" className="text-pink-200 hover:text-white transition-colors">Stories</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-pink-200 hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="text-pink-200 hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="text-pink-200 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Newsletter</h4>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-4 py-2 rounded-l-lg bg-white/10 text-white placeholder-ghibli-sky/50 focus:outline-none focus:ring-2 focus:ring-ghibli-green"
            />
            <button className="px-4 py-2 bg-ghibli-green text-white rounded-r-lg hover:bg-ghibli-peach hover:text-ghibli-teal transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-sm text-ghibli-sky/60">
        © 2026 HomeMeal. Crafted with magic.
      </div>
    </footer>
  );
};

export default Footer;
