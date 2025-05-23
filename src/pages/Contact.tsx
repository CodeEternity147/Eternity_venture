import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Users, MessageSquare, ArrowRight } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us | Eternity Ventures';
  }, []);

  return (
    <div className="pt-20">
      {/* Banner */}
      <section className="relative bg-gradient-to-r from-primary-900 to-secondary-900 py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Get in touch with our team to discuss investment opportunities, 
            business partnerships, or learn more about our services.
          </motion.p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-8 mb-10">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                    <a href="mailto:team@eternityventures.co.in" className="text-gray-600 hover:text-primary-600 transition-colors">
                      team@eternityventures.co.in
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary-100 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                    <a href="tel:+919876543210" className="text-gray-600 hover:text-primary-600 transition-colors">
                      +91 9876 543 210
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent-100 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                    <address className="not-italic text-gray-600">
                      Eternity Ventures<br />
                      Sector 62, Noida<br />
                      Uttar Pradesh, India
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.64c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.738-.9 10.126-5.864 10.126-11.854z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="investment">Investment Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="services">Services Information</option>
                      <option value="careers">Careers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4946223997254!2d77.37230339999999!3d28.614934299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce530107cb2bd%3A0x281520d74e9827e1!2sCODE%20ETERNITY!5e0!3m2!1sen!2sin!4v1747777545298!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              title="Eternity Ventures Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our investment process, 
              services, and partnership opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-lg font-bold mb-3">What types of businesses do you invest in?</h3>
              <p className="text-gray-600">
                We primarily invest in early-stage technology startups across sectors like EdTech, 
                FinTech, HealthTech, and SaaS. We look for innovative solutions with strong growth potential.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-lg font-bold mb-3">What is your typical investment size?</h3>
              <p className="text-gray-600">
                Our investments typically range from ₹25 lakhs to ₹2 crores, depending on the 
                stage, industry, and specific needs of the business.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-lg font-bold mb-3">How long does the investment process take?</h3>
              <p className="text-gray-600">
                From initial contact to funding, the process typically takes 8-12 weeks, including 
                due diligence, term sheet negotiation, and legal documentation.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-lg font-bold mb-3">Do you provide support beyond funding?</h3>
              <p className="text-gray-600">
                Yes, we offer strategic guidance, operational expertise, mentorship, and access to our 
                network of industry connections to help our portfolio companies grow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center"
            >
              <div className="bg-white p-3 rounded-full mb-4">
                <MessageSquare className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Investment Inquiry</h3>
              <p className="text-gray-200 mb-4">
                Looking for funding for your startup? Get in touch to discuss potential opportunities.
              </p>
              <a
                href="/contact?subject=investment"
                className="mt-auto inline-flex items-center text-accent-400 hover:text-accent-300 font-medium"
              >
                Start a Conversation
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center"
            >
              <div className="bg-white p-3 rounded-full mb-4">
                <Users className="h-6 w-6 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Business Partnership</h3>
              <p className="text-gray-200 mb-4">
                Explore strategic collaboration opportunities to accelerate your business growth.
              </p>
              <a
                href="/contact?subject=partnership"
                className="mt-auto inline-flex items-center text-accent-400 hover:text-accent-300 font-medium"
              >
                Discuss Partnership
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center"
            >
              <div className="bg-white p-3 rounded-full mb-4">
                <MessageSquare className="h-6 w-6 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">General Inquiry</h3>
              <p className="text-gray-200 mb-4">
                Have questions about our services or want to learn more about what we do?
              </p>
              <a
                href="/contact?subject=general"
                className="mt-auto inline-flex items-center text-accent-400 hover:text-accent-300 font-medium"
              >
                Get in Touch
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;