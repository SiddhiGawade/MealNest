import { motion } from 'framer-motion';
import chefGrandma from '../assets/chef-grandma.png';
import chefMom from '../assets/chef-mom.png';
import chefBoy from '../assets/chef-boy.png';

const chefs = [
  {
    name: "Nani's Kitchen",
    chef: "Mrs. Sharma",
    role: "The Wise Grandma",
    image: chefGrandma,
    specialty: "Aloo Paratha & Kheer",
    desc: "Cooking with recipes passed down for 3 generations.",
    color: "bg-orange-100 border-orange-200"
  },
  {
    name: "Mom's Magic",
    chef: "Anjali Verma",
    role: "The Caring Mom",
    image: chefMom,
    specialty: "Dal Makhani & Rice",
    desc: "Wholesome meals that taste just like home.",
    color: "bg-rose-100 border-rose-200"
  },
  {
    name: "Street Bites",
    chef: "Rahul's Cafe",
    role: "The Creative Chef",
    image: chefBoy,
    specialty: "Spicy Paneer Wraps",
    desc: "Fusion flavors with a traditional twist.",
    color: "bg-blue-100 border-blue-200"
  }
];

const ChefCard = ({ chef, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.8 }}
    whileHover={{ y: -10 }}
    className={`relative p-6 rounded-[2rem] border-2 ${chef.color} shadow-lg hover:shadow-xl transition-all cursor-pointer bg-white/80 backdrop-blur-sm`}
  >
    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
      <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-white">
        <img src={chef.image} alt={chef.name} className="w-full h-full object-cover" />
      </div>
    </div>
    
    <div className="mt-12 text-center">
      <h3 className="text-xl font-bold text-ghibli-black mb-1 font-heading">{chef.name}</h3>
      <p className="text-sm text-ghibli-teal font-semibold mb-3">{chef.chef}</p>
      
      <div className="bg-white/60 rounded-xl p-3 mb-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Specialty</p>
        <p className="font-medium text-ghibli-green">{chef.specialty}</p>
      </div>

      <p className="text-gray-600 text-sm italic">"{chef.desc}"</p>
    </div>
  </motion.div>
);

const ChefSection = () => {
  return (
    <section id="chefs" className="py-20 px-6 w-full bg-[#FFE4E9]/60"> {/* Distinct distinct pink background */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-ghibli-teal font-semibold tracking-widest uppercase text-sm"
        >
          Meet the Neighbors
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-5xl font-bold text-ghibli-black mt-2 mb-6"
        >
          Cooked with <span className="text-ghibli-peach">Love</span>
        </motion.h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Our chefs aren't just cooks; they are grandmothers, mothers, and passionate foodies from your own neighborhood.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mt-12 text-left">
          {chefs.map((chef, index) => (
            <ChefCard key={index} chef={chef} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
