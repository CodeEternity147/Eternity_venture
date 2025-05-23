import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Gradient Background with Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-800 to-secondary-900">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]"></div>
      </div>

      {/* Animated Shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary-500 rounded-full filter blur-3xl opacity-20"></div>
      </motion.div>
      
      <div className="container-custom relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block"
            >
              <span className="inline-flex items-center bg-accent-500/90 backdrop-blur-sm text-primary-900 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-lg">
                <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-primary-900"></span>
                Venture Capital & Innovation
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              YOUR VISION,{" "}
              <span className="relative">
                <span className="relative z-10 text-accent-500">OUR VENTURE!</span>
                <motion.span
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-2 left-0 h-3 bg-accent-500/20 z-0"
                ></motion.span>
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-gray-200 text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              We partner with visionary entrepreneurs to transform innovative ideas into 
              market-leading companies through strategic investment and business expertise.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <a 
                href="/contact" 
                className="group inline-flex items-center bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Schedule Investment Call
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.span>
              </a>
              
              <a 
                href="/ventures" 
                className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 backdrop-blur-sm"
              >
                View Our Portfolio
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -top-6 -left-6 w-24 h-24 bg-accent-500/30 rounded-lg backdrop-blur-xl"
              ></motion.div>
              <motion.div
                animate={{ 
                  rotate: -360,
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-500/30 rounded-lg backdrop-blur-xl"
              ></motion.div>

              {/* Stats Card */}
              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl relative z-10 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-white">Investment Metrics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">Portfolio Companies</span>
                      <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="text-accent-400 font-bold"
                      >
                        55+
                      </motion.span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '75%' }}
                        transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-accent-500 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">Total Investment</span>
                      <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.5 }}
                        className="text-primary-400 font-bold"
                      >
                        ₹2.3 Crores
                      </motion.span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '60%' }}
                        transition={{ delay: 1.6, duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-primary-500 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">Average Return</span>
                      <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, duration: 0.5 }}
                        className="text-secondary-400 font-bold"
                      >
                        32%
                      </motion.span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-secondary-500 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </div>

                {/* Additional Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2.2, duration: 0.5, type: "spring" }}
                      className="text-2xl font-bold text-white mb-1"
                    >
                      15+
                    </motion.div>
                    <span className="text-gray-400 text-sm">Years Experience</span>
                  </div>
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2.4, duration: 0.5, type: "spring" }}
                      className="text-2xl font-bold text-white mb-1"
                    >
                      98%
                    </motion.div>
                    <span className="text-gray-400 text-sm">Success Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="h-6 w-6 text-accent-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;