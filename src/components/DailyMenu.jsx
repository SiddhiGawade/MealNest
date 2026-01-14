import { motion } from 'framer-motion';
import foodBento from '../assets/food-bento.png';
import foodRamen from '../assets/food-ramen.png';
import foodCurry from '../assets/food-curry.png';

const menuItems = [
  {
    id: 1,
    name: "Grandma's Bento Box",
    price: "₹350",
    chef: "Grandma Yoshiko",
    image: foodBento,
    tags: ["Balanced", "Traditional"],
    description: "A lovely assortment of tempura, pickled veggies, and fluffy rice."
  },
  {
    id: 2,
    name: "Midnight Ramen",
    price: "₹280",
    chef: "Chef Kenji",
    image: foodRamen,
    tags: ["Spicy", "Pork", "Hot"],
    description: "Rich tonkotsu broth simmered for 12 hours. Perfect for late nights."
  },
  {
    id: 3,
    name: "Cozy Vegetable Curry",
    price: "₹220",
    chef: "Mama Sarah",
    image: foodCurry,
    tags: ["Vegetarian", "Comfort"],
    description: "Heartwarming mild curry with seasonal vegetables."
  }
];

const DailyMenu = () => {
  return (
    <section className="py-20 bg-ghibli-hero/20 px-6" id="daily-menu">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-ghibli-teal mb-4"
          >
            Today's Menu
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-ghibli-black/70 max-w-2xl mx-auto"
          >
            Freshly prepared dishes from our neighborhood chefs. Order now for lunch or dinner!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-ghibli-peach/50 group"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-ghibli-teal font-bold shadow-sm">
                  {item.price}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold bg-ghibli-sky/20 text-ghibli-teal px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-ghibli-black mb-1">{item.name}</h3>
                <p className="text-sm text-ghibli-teal font-medium mb-3">by {item.chef}</p>
                <p className="text-gray-600 mb-6 text-sm">{item.description}</p>
                
                <button className="w-full py-3 bg-ghibli-teal text-white rounded-xl font-bold hover:bg-ghibli-green transition-colors flex items-center justify-center gap-2 group-hover:gap-3">
                  <span>Add to Cart</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyMenu;
