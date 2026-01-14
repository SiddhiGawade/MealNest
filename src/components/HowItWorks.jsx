import { motion } from 'framer-motion';
import iconBrowse from '../assets/icon-browse-c.png';
import iconCook from '../assets/icon-cook-c.png';
import iconDelivery from '../assets/icon-delivery-c.png';
import iconEnjoy from '../assets/icon-enjoy-c.png';

const steps = [
  {
    title: "Browse Menu",
    desc: "Discover daily specials from neighbors.",
    icon: iconBrowse,
    delay: 0
  },
  {
    title: "Chef Cooks",
    desc: "Authentic meals prepared with love.",
    icon: iconCook,
    delay: 0.2
  },
  {
    title: "Eco Delivery",
    desc: "Delivered fresh to your door.",
    icon: iconDelivery,
    delay: 0.4
  },
  {
    title: "Enjoy Meal",
    desc: "Taste the warmth of home.",
    icon: iconEnjoy,
    delay: 0.6
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white/50">
      {/* Decorative dashed line path
      <div className="hidden md:block absolute top-[40%] left-0 right-0 h-1 border-t-4 border-dashed border-ghibli-peach/50 w-full z-0 transform -translate-y-1/2"></div>
       */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-ghibli-teal"
          >
            Journey of a Meal
          </motion.h2>
          <p className="text-ghibli-black/60 mt-4 max-w-xl mx-auto">
            From our kitchen to your table, every step is filled with care and magic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: step.delay, duration: 0.8 }}
              className="flex flex-col items-center text-center group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                className="w-40 h-40 mb-6 relative bg-white rounded-full p-4 shadow-xl border-4 border-ghibli-pink/50 z-10"
              >
                <img src={step.icon} alt={step.title} className="w-full h-full object-contain" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-ghibli-black mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm font-medium">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
