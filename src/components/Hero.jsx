import { motion } from 'framer-motion';
import heroBg from '../assets/hero1.png';

const Hero = () => {
  return (
    <div className="relative w-full min-h-[85vh] pt-28 pb-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden bg-ghibli-white/50">
      
      {/* LEFT: Image */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="w-full md:w-1/2 flex justify-center md:justify-start"
      >
        <div className="relative rounded-[2.5rem] p-3 bg-ghibli-pink/40 border-2 border-white/60 shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
          <img 
            src={heroBg} 
            alt="Home Meal Hero" 
            className="w-full max-w-lg h-auto object-cover rounded-[2rem] shadow-md"
          />
          {/* Decorative Glint/Shine */}
          <div className="absolute top-8 right-8 w-12 h-12 bg-white/20 rounded-full blur-xl pointer-events-none"></div>
        </div>
      </motion.div>

      {/* RIGHT: Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
        className="w-full md:w-1/2 flex flex-col items-start text-left"
      >
        <span className="inline-block px-4 py-1 mb-4 rounded-full bg-ghibli-teal/10 text-ghibli-teal font-semibold text-sm tracking-wide">
          🌿 Hand-Crafted with Love
        </span>

        <h1 className="text-5xl md:text-7xl font-bold text-ghibli-black mb-6 leading-tight drop-shadow-sm">
          Taste the <br/>
          <span className="text-ghibli-green/90">Warmth of Home</span>
        </h1>

        <p className="text-lg md:text-xl text-ghibli-black/70 font-medium max-w-lg mb-8 leading-relaxed">
        Authentic home-cooked meals, lovingly prepared with care by home chefs, & delivered hot to your doorstep.
        </p>

        <div className="flex flex-wrap gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 bg-ghibli-teal text-white rounded-full text-lg font-semibold hover:bg-ghibli-green transition-all shadow-lg hover:shadow-green-200/50"
          >
            Order Now
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: '#FFF5F8' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 bg-white border-2 border-ghibli-teal text-ghibli-teal rounded-full text-lg font-semibold hover:border-ghibli-green hover:text-ghibli-green transition-all shadow-sm"
          >
            Our Story
          </motion.button>
        </div>
      </motion.div>

    </div>
  );
};

export default Hero;
