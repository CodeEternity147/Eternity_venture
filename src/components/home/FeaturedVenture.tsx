import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const FeaturedVenture = () => {
  return (
    <section className="section bg-white py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium mb-4">
              Featured Venture
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">CodeEternity</h2>
            <p className="text-gray-600 mb-8 text-lg">
              A revolutionary coding education platform that makes learning programming accessible to everyone 
              through interactive, project-based curriculum and AI-powered guidance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="block text-primary-800 font-bold text-xl mb-1">50,000+</span>
                <span className="text-gray-600">Active Students</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="block text-primary-800 font-bold text-xl mb-1">100+</span>
                <span className="text-gray-600">Interactive Courses</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="block text-primary-800 font-bold text-xl mb-1">92%</span>
                <span className="text-gray-600">Completion Rate</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="block text-primary-800 font-bold text-xl mb-1">₹1.2 Cr</span>
                <span className="text-gray-600">Annual Revenue</span>
              </div>
            </div>
            
            <a 
              href="https://codeeternity.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-secondary-600 hover:bg-secondary-700 text-white py-3 px-6 rounded-lg transition-colors"
            >
              Visit CodeEternity
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-secondary-200 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary-200 rounded-full"></div>
            
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="CodeEternity platform interface showing programming course" 
                className="w-full h-auto"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                <div className="p-6">
                  <span className="text-accent-400 font-semibold mb-2 block">Success Story</span>
                  <p className="text-white text-lg">
                    "From a small startup to India's leading coding education platform in just 3 years."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVenture;