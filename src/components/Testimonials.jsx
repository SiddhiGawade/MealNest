import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    text: "Best Dal Makhani ever! Reminds me of my mom's cooking back in Delhi.",
    author: "Priya",
    location: "Block C",
    color: "bg-yellow-50",
    tilt: "-rotate-2"
  },
  {
    id: 2,
    text: "My kids absolutely love the Bento Box. It's healthy and fun!",
    author: "Neha",
    location: "Block A",
    color: "bg-blue-50",
    tilt: "rotate-3"
  },
  {
    id: 3,
    text: "The midnight ramen is a savior during my late-night study sessions. So good!",
    author: "Arjun",
    location: "Block D",
    color: "bg-pink-50",
    tilt: "-rotate-1"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 overflow-hidden bg-gradient-to-b from-white to-ghibli-hero/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-ghibli-teal mb-4"
          >
            Neighborhood Love
          </motion.h2>
          <div className="w-24 h-1 bg-ghibli-peach mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: parseInt(review.tilt.replace(/[^0-9-]/g, '')) }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              className={`relative p-8 rounded-lg shadow-md border border-gray-100 ${review.color} transform ${review.tilt} transition-all duration-300`}
              style={{ minHeight: '240px' }}
            >
              {/* Pin or Tape effect */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-white/40 rotate-1 shadow-sm backdrop-blur-sm pointer-events-none"></div>

              <div className="flex flex-col h-full justify-between">
                <p className="text-lg text-gray-700 font-heading leading-relaxed mb-6">
                  "{review.text}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ghibli-teal/20 flex items-center justify-center text-ghibli-teal font-bold text-xl">
                    {review.author[0]}
                  </div>
                  <div>
                    <p className="font-bold text-ghibli-black">{review.author}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">{review.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
