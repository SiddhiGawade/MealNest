import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-white/70 backdrop-blur-md shadow-sm border-b border-ghibli-pink/30"
    >
      <div className="text-2xl font-bold text-ghibli-teal cursor-pointer hover:text-ghibli-green transition-colors">
        HomeMeal
      </div>
      
      <ul className="hidden md:flex space-x-8 text-ghibli-black font-medium">
        {[
          { name: 'Home', href: '#' },
          { name: 'Daily Meals', href: '#daily-menu' },
          { name: 'Our Chefs', href: '#chefs' },
          { name: 'Story', href: '#story' }
        ].map((item) => (
          <li key={item.name}>
            <a href={item.href} className="hover:text-ghibli-green hover:underline decoration-wavy decoration-ghibli-peach underline-offset-4 transition-all">
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      <button className="px-5 py-2 bg-ghibli-teal text-white rounded-full hover:bg-ghibli-green transition-colors shadow-md">
        Sign In
      </button>
    </motion.nav>
  );
};

export default Navbar;
