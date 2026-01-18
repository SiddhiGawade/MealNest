import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import chefGrandma from '../assets/chef-grandma.png';
import chefMom from '../assets/chef-mom.png';
import chefBoy from '../assets/chef-boy.png';

const kitchens = [
  {
    id: 1,
    name: "Grandma Yoshiko's Kitchen",
    chef: "Grandma Yoshiko",
    image: chefGrandma,
    rating: 4.9,
    cuisine: "Traditional Japanese",
    description: "Authentic homemade recipes passed down for generations."
  },
  {
    id: 2,
    name: "Sarah's Comfort Food",
    chef: "Mama Sarah",
    image: chefMom,
    rating: 4.8,
    cuisine: "Home Comforts",
    description: "Heartwarming meals that feel like a hug in a bowl."
  },
  {
    id: 3,
    name: "Kenji's Late Night Eats",
    chef: "Chef Kenji",
    image: chefBoy,
    rating: 4.7,
    cuisine: "Modern Fusion",
    description: "Bold flavors and creative twists on classic dishes."
  }
];

const DailyMeals = () => {
  return (
    <div className="pt-32 pb-20 px-6 bg-ghibli-hero/20 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-ghibli-teal mb-4"
          >
            Explore Home Kitchens
          </motion.h1>
          <p className="text-xl text-ghibli-black/70 max-w-2xl mx-auto">
            Discover passionate home chefs in your neighborhood. Click on a kitchen to explore their daily menu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kitchens.map((kitchen, index) => (
            <motion.div
              key={kitchen.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-ghibli-peach/50 group"
            >
              <Link to={`/kitchen/${kitchen.id}`}>
                <div className="relative overflow-hidden h-72">
                  <img 
                    src={kitchen.image} 
                    alt={kitchen.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-ghibli-teal font-bold shadow-sm flex items-center">
                    <span className="text-yellow-400 mr-1">★</span> {kitchen.rating}
                  </div>
                </div>
                
                <div className="p-6">
                  <span className="text-xs font-semibold bg-ghibli-sky/20 text-ghibli-teal px-2 py-1 rounded-md mb-3 inline-block">
                    {kitchen.cuisine}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-ghibli-black mb-1 group-hover:text-ghibli-teal transition-colors">
                    {kitchen.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium mb-3">by {kitchen.chef}</p>
                  <p className="text-gray-600 mb-6 text-sm">{kitchen.description}</p>
                  
                  <div className="w-full py-3 bg-ghibli-teal/10 text-ghibli-teal rounded-xl font-bold group-hover:bg-ghibli-teal group-hover:text-white transition-colors flex items-center justify-center gap-2 text-center">
                    View Menu
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyMeals;
