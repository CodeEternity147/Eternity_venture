import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="section bg-gray-50 py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-primary-800 to-secondary-800 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business Vision into Reality?
              </h2>
              <p className="text-gray-200 text-lg mb-8 max-w-lg">
                Connect with our team of experts to discuss your business idea, 
                explore investment opportunities, or learn more about our services.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Phone className="mr-4 h-5 w-5 text-accent-400 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Call Us</h4>
                    <a href="tel:+919876543210" className="text-gray-300 hover:text-accent-400 transition-colors">
                      +91 9876 543 210
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mr-4 h-5 w-5 text-accent-400 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Email Us</h4>
                    <a href="mailto:team@eternityventures.co.in" className="text-gray-300 hover:text-accent-400 transition-colors">
                      team@eternityventures.co.in
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="mr-4 h-5 w-5 text-accent-400 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Visit Us</h4>
                    <address className="text-gray-300 not-italic">
                      Sector 62, Noida, Uttar Pradesh, India
                    </address>
                  </div>
                </div>
              </div>
              
              <Link
                to="/contact"
                className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-primary-900 font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Schedule a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 bg-white/5 border border-gray-300/30 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 bg-white/5 border border-gray-300/30 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent text-white"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-white/5 border border-gray-300/30 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent text-white"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-accent-500 hover:bg-accent-600 text-primary-900 font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;