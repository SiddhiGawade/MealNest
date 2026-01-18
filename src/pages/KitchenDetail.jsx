import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import foodBento from '../assets/food-bento.png';
import foodRamen from '../assets/food-ramen.png';
import foodCurry from '../assets/food-curry.png';
import chefGrandma from '../assets/chef-grandma.png';
import chefMom from '../assets/chef-mom.png';
import chefBoy from '../assets/chef-boy.png';

// Mock Data matching DailyMeals.jsx
const kitchens = {
  1: { name: "Grandma Yoshiko's Kitchen", chef: "Grandma Yoshiko", image: chefGrandma, cuisine: "Traditional Japanese" },
  2: { name: "Sarah's Comfort Food", chef: "Mama Sarah", image: chefMom, cuisine: "Home Comforts" },
  3: { name: "Kenji's Late Night Eats", chef: "Chef Kenji", image: chefBoy, cuisine: "Modern Fusion" }
};

const menus = {
  1: [
    { id: 101, name: "Grandma's Bento Box", price: "₹350", image: foodBento, description: "Assorted tempura, pickled veggies, and rice." },
    { id: 102, name: "Miso Soup", price: "₹120", image: foodCurry, description: "Warm fermented soy bean soup with tofu." }
  ],
  2: [
    { id: 201, name: "Cozy Vegetable Curry", price: "₹220", image: foodCurry, description: "Mild curry with seasonal vegetables." },
    { id: 202, name: "Apple Pie", price: "₹180", image: foodBento, description: "Homemade pie with fresh apples." }
  ],
  3: [
    { id: 301, name: "Midnight Ramen", price: "₹280", image: foodRamen, description: "Rich tonkotsu broth simmered for 12 hours." },
    { id: 302, name: "Spicy Edamame", price: "₹150", image: foodBento, description: "Stir-fried edamame with chillies and garlic." }
  ]
};

const KitchenDetail = () => {
  const { id } = useParams();
  const kitchen = kitchens[id];
  const menu = menus[id] || [];

  if (!kitchen) return <div className="pt-32 text-center">Kitchen not found</div>;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      {/* Kitchen Header */}
      <div className="bg-ghibli-teal text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src={kitchen.image} className="w-full h-full object-cover blur-sm" alt="Background" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-8">
          <img src={kitchen.image} alt={kitchen.name} className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white shadow-xl object-cover" />
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2">{kitchen.name}</h1>
            <p className="text-xl text-ghibli-green mb-4">{kitchen.cuisine}</p>
            <div className="flex gap-4 justify-center md:justify-start">
                <span className="bg-white/20 px-4 py-1 rounded-full text-sm">4.9 ★ Rating</span>
                <span className="bg-white/20 px-4 py-1 rounded-full text-sm">Pre-order available</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link to="/daily-meals" className="inline-block mb-8 text-ghibli-teal hover:underline font-medium">
          &larr; Back to Kitchens
        </Link>
        
        <h2 className="text-3xl font-bold text-ghibli-black mb-8 border-b pb-4">Full Menu</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu.map(item => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all p-4 border border-gray-100 flex flex-col"
            >
              <div className="h-48 rounded-lg overflow-hidden mb-4">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform" />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                <span className="bg-ghibli-peach/50 text-ghibli-deep-blue px-2 py-1 rounded text-sm font-bold">{item.price}</span>
              </div>
              <p className="text-gray-600 text-sm mb-6 flex-grow">{item.description}</p>
              <button className="w-full py-2 bg-ghibli-teal text-white rounded-lg hover:bg-ghibli-deep-blue transition-colors font-semibold">
                Add to Order
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KitchenDetail;
