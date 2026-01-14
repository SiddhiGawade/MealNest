import { motion } from 'framer-motion';
import mailboxImg from '../assets/illustration-mailbox.png';

const Newsletter = () => {
  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto bg-ghibli-peach/20 rounded-[3rem] p-8 md:p-12 overflow-hidden relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-ghibli-teal mb-6 font-heading">
              Join the Valley
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Smell the fresh bread? Get notified when our neighbors are cooking something special. No spam, just warm meals and stories.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 relative z-10">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-1 px-6 py-4 rounded-xl border-2 border-ghibli-peach focus:border-ghibli-teal focus:outline-none bg-white/80 backdrop-blur-sm shadow-sm text-ghibli-black placeholder-gray-400 transition-colors"
                required
              />
              <button 
                type="submit"
                className="px-8 py-4 bg-ghibli-teal text-white font-bold rounded-xl shadow-md hover:bg-ghibli-green hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                Subscribe
              </button>
            </form>
            
            <p className="mt-4 text-sm text-ghibli-teal/60 font-medium">
              Join 1,200+ neighbors in the loop! 🍃
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-full bg-white/50 p-6 shadow-inner">
               <img 
                 src={mailboxImg} 
                 alt="Mailbox" 
                 className="w-full h-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
               />
            </div>
          </motion.div>

        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-ghibli-sky/20 to-transparent rounded-full blur-3xl -z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-ghibli-pink/20 to-transparent rounded-full blur-3xl -z-0"></div>
      </div>
    </section>
  );
};

export default Newsletter;
