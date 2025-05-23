import React from 'react';
import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <section className="section bg-gradient-to-r from-primary-900 to-secondary-900 py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-10 bg-cover bg-center"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-3 py-1 bg-accent-500 text-primary-900 rounded-full text-sm font-medium mb-4">
            Vision 2030
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Building Tomorrow's <br /> Success Stories Today
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8">
              By 2030, we aim to empower 500+ entrepreneurs, create 10,000+ jobs, 
              and establish a ₹100 Crore investment fund that drives sustainable innovation 
              across India's emerging markets.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg flex-1 max-w-xs"
              >
                <h3 className="font-bold text-2xl text-accent-400 mb-2">Innovate</h3>
                <p className="text-gray-300">Supporting groundbreaking ideas that solve real-world problems</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg flex-1 max-w-xs"
              >
                <h3 className="font-bold text-2xl text-accent-400 mb-2">Nurture</h3>
                <p className="text-gray-300">Providing expertise, resources, and mentorship for sustainable growth</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg flex-1 max-w-xs"
              >
                <h3 className="font-bold text-2xl text-accent-400 mb-2">Scale</h3>
                <p className="text-gray-300">Accelerating expansion through strategic investment and partnerships</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;