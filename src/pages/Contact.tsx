import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Users, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us | Eternity Ventures';
  }, []);

  return (
    <div>

      {/* Hero Section */}
<section className="relative min-h-screen mt-6 overflow-hidden">
  {/* Enhanced Light Theme Background with Warm Colors */}
  <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-rose-50 to-violet-50">
    <div className="absolute inset-0">
      {/* Colorful Background Blobs */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 lg:w-[600px] lg:h-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(251, 146, 60, 0.25) 0%, rgba(236, 72, 153, 0.15) 50%, transparent 100%)'
        }}
      />
                     
      <div
        className="absolute -bottom-40 -left-40 w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full opacity-25 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, rgba(59, 130, 246, 0.12) 50%, transparent 100%)'
        }}
      />
       
      <div
        className="absolute top-1/3 right-1/4 w-64 h-64 lg:w-[400px] lg:h-[400px] rounded-full opacity-18 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.18) 0%, rgba(14, 165, 233, 0.1) 50%, transparent 100%)'
        }}
      />
    </div>
     
    {/* Enhanced Grid Pattern */}
    <div 
      className="absolute inset-0 opacity-8"
      style={{
        backgroundImage: 'linear-gradient(rgba(251, 146, 60, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 146, 60, 0.15) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}
    />
  </div>
   
  <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 mt-2 sm:mt-4 max-w-7xl pt-2 sm:pt-4 pb-12 sm:pb-16 lg:pb-24">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
      {/* Left Side - Heading */}
      <div className="space-y-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
          <div className="text-slate-800 mb-2">
            GET IN
          </div>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500">
            TOUCH
          </div>
        </h1>
        
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-2xl blur-lg"></div>
          <div className="relative bg-white/95 backdrop-blur-xl border border-orange-200/50 rounded-2xl p-6 shadow-xl">
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Get in touch with our team to discuss investment opportunities, 
              business partnerships, or learn more about our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 font-bold">
                services
              </span>.
            </p>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="group relative px-8 py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 group-hover:from-orange-600 group-hover:to-pink-600 transition-all duration-300"></div>
            <div className="relative flex items-center justify-center gap-2">
              Start Conversation
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
          </button>
          
          <button className="px-8 py-4 rounded-full font-semibold text-slate-700 bg-white/80 backdrop-blur-xl border border-orange-200/50 hover:bg-white/95 hover:border-orange-300/50 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Schedule Meeting
          </button>
        </div>
      </div>

      {/* Right Side - Why Connect */}
      <div className="relative space-y-6">
        {/* Why Connect Cards */}
        <div className="grid gap-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-white/90 backdrop-blur-xl border border-pink-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Collaborative Approach</h3>
                  <p className="text-sm text-slate-600">
                    Work directly with our diverse team for innovative solutions and fresh perspectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-blue-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-white/90 backdrop-blur-xl border border-violet-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Rapid Implementation</h3>
                  <p className="text-sm text-slate-600">
                    Fast-track your projects with our efficient processes and proven methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Response Time Card */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white/70 backdrop-blur-xl border border-emerald-200/30 rounded-3xl p-8 shadow-2xl">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Quick Response</h3>
              <p className="text-slate-600">
                We typically respond within 24 hours and are committed to addressing your inquiries promptly.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
 

      {/* Contact Info + Form */}
      <section className="relative py-24 overflow-hidden">
        {/* Fresh Light Theme Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
          <div className="absolute inset-0">
            {/* Colorful Background Blobs */}
            <div
              className="absolute -top-32 -right-32 w-96 h-96 lg:w-[600px] lg:h-[600px] rounded-full opacity-15 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 100%)'
              }}
            />
            
            <div
              className="absolute -bottom-40 -left-40 w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full opacity-18 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(16, 185, 129, 0.08) 50%, transparent 100%)'
              }}
            />

            <div
              className="absolute top-1/3 left-1/4 w-64 h-64 lg:w-[400px] lg:h-[400px] rounded-full opacity-12 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, rgba(59, 130, 246, 0.06) 50%, transparent 100%)'
              }}
            />
          </div>

          {/* Enhanced Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-6"
            style={{
              backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.12) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              {/* Content Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-teal-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
              
              {/* Content Glass Panel */}
              <div className="relative bg-white/95 backdrop-blur-2xl border border-cyan-200/50 rounded-2xl p-8 hover:border-cyan-300/50 transition-all duration-500 shadow-xl">
                <h2 className="text-3xl font-black mb-8 text-slate-800">Get in Touch</h2>
                
                <div className="space-y-8 mb-10">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-slate-800">Email Us</h3>
                      <a href="mailto:team@eternityventures.co.in" className="text-slate-600 hover:text-cyan-600 transition-colors">
                        team@eternityventures.co.in
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-slate-800">Call Us</h3>
                      <a href="tel:+919876543210" className="text-slate-600 hover:text-emerald-600 transition-colors">
                        +91 9876 543 210
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-3 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-slate-800">Visit Us</h3>
                      <address className="not-italic text-slate-600">
                        Eternity Ventures<br />
                        Sector 62, Noida<br />
                        Uttar Pradesh, India
                      </address>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-800">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="bg-cyan-100 hover:bg-cyan-200 border border-cyan-200 hover:border-cyan-300 p-3 rounded-full transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <svg className="h-5 w-5 text-cyan-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="bg-cyan-100 hover:bg-cyan-200 border border-cyan-200 hover:border-cyan-300 p-3 rounded-full transition-all duration-300"
                      aria-label="Twitter"
                    >
                      <svg className="h-5 w-5 text-cyan-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="bg-cyan-100 hover:bg-cyan-200 border border-cyan-200 hover:border-cyan-300 p-3 rounded-full transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <svg className="h-5 w-5 text-cyan-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.64c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.738-.9 10.126-5.864 10.126-11.854z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="bg-cyan-100 hover:bg-cyan-200 border border-cyan-200 hover:border-cyan-300 p-3 rounded-full transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <svg className="h-5 w-5 text-cyan-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              {/* Form Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-teal-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
              
              {/* Form Glass Panel */}
              <div className="relative bg-white/95 backdrop-blur-2xl border border-cyan-200/50 rounded-2xl p-8 hover:border-cyan-300/50 transition-all duration-500 shadow-xl">
                <h2 className="text-2xl font-black mb-6 text-slate-800">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 bg-white border border-cyan-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 placeholder-slate-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 bg-white border border-cyan-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 placeholder-slate-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-white border border-cyan-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 placeholder-slate-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-white border border-cyan-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 placeholder-slate-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-white border border-cyan-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900"
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
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-cyan-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 placeholder-slate-500"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300"
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
      <section className="relative py-24 overflow-hidden">
        {/* Fresh Light Theme Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
          <div className="absolute inset-0">
            {/* Colorful Background Blobs */}
            <div
              className="absolute -top-32 -right-32 w-96 h-96 lg:w-[600px] lg:h-[600px] rounded-full opacity-15 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 100%)'
              }}
            />
            
            <div
              className="absolute -bottom-40 -left-40 w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full opacity-18 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(16, 185, 129, 0.08) 50%, transparent 100%)'
              }}
            />
          </div>

          {/* Enhanced Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-6"
            style={{
              backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.12) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-2xl blur-lg"></div>
            <div className="relative bg-white/95 backdrop-blur-2xl border border-cyan-200/50 rounded-2xl overflow-hidden shadow-xl hover:border-cyan-300/50 transition-all duration-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4946223997254!2d77.37230339999999!3d28.614934299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce530107cb2bd%3A0x281520d74e9827e1!2sCODE%20ETERNITY!5e0!3m2!1sen!2sin!4v1747777545298!5m2!1sen!2sin" 
                width="100%" 
                height="400"
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                title="Eternity Ventures Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Fresh Light Theme Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
          <div className="absolute inset-0">
            {/* Colorful Background Blobs */}
            <div
              className="absolute -top-32 -right-32 w-96 h-96 lg:w-[600px] lg:h-[600px] rounded-full opacity-15 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 100%)'
              }}
            />
            
            <div
              className="absolute -bottom-40 -left-40 w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full opacity-18 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(16, 185, 129, 0.08) 50%, transparent 100%)'
              }}
            />

            <div
              className="absolute top-1/3 left-1/4 w-64 h-64 lg:w-[400px] lg:h-[400px] rounded-full opacity-12 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, rgba(59, 130, 246, 0.06) 50%, transparent 100%)'
              }}
            />
          </div>

          {/* Enhanced Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-6"
            style={{
              backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.12) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
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
              className="group relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-teal-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-2xl border border-cyan-200/50 p-6 rounded-2xl hover:border-cyan-300/50 transition-all duration-500 shadow-xl">
                <h3 className="text-lg font-bold mb-3 text-slate-800">What types of businesses do you invest in?</h3>
                <p className="text-slate-600">
                  We primarily invest in early-stage technology startups across sectors like EdTech, 
                  FinTech, HealthTech, and SaaS. We look for innovative solutions with strong growth potential.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="group relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-teal-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-2xl border border-cyan-200/50 p-6 rounded-2xl hover:border-cyan-300/50 transition-all duration-500 shadow-xl">
                <h3 className="text-lg font-bold mb-3 text-slate-800">What is your typical investment size?</h3>
                <p className="text-slate-600">
                  Our investments typically range from ₹25 lakhs to ₹2 crores, depending on the 
                  stage, industry, and specific needs of the business.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="group relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-teal-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-2xl border border-cyan-200/50 p-6 rounded-2xl hover:border-cyan-300/50 transition-all duration-500 shadow-xl">
                <h3 className="text-lg font-bold mb-3 text-slate-800">How long does the investment process take?</h3>
                <p className="text-slate-600">
                  From initial contact to funding, the process typically takes 8-12 weeks, including 
                  due diligence, term sheet negotiation, and legal documentation.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="group relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-teal-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-2xl border border-cyan-200/50 p-6 rounded-2xl hover:border-cyan-300/50 transition-all duration-500 shadow-xl">
                <h3 className="text-lg font-bold mb-3 text-slate-800">Do you provide support beyond funding?</h3>
                <p className="text-slate-600">
                  Yes, we offer strategic guidance, operational expertise, mentorship, and access to our 
                  network of industry connections to help our portfolio companies grow.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-24 overflow-hidden">
        {/* Fresh Light Theme Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
          <div className="absolute inset-0">
            {/* Colorful Background Blobs */}
            <div
              className="absolute -top-32 -right-32 w-96 h-96 lg:w-[600px] lg:h-[600px] rounded-full opacity-15 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 100%)'
              }}
            />
            
            <div
              className="absolute -bottom-40 -left-40 w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full opacity-18 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(16, 185, 129, 0.08) 50%, transparent 100%)'
              }}
            />
          </div>

          {/* Enhanced Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-6"
            style={{
              backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.12) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-teal-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-2xl border border-cyan-200/50 rounded-2xl p-6 flex flex-col items-center text-center hover:border-cyan-300/50 transition-all duration-500 shadow-xl">
                <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-3 rounded-full mb-4">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Investment Inquiry</h3>
                <p className="text-slate-600 mb-4">
                  Looking for funding for your startup? Get in touch to discuss potential opportunities.
                </p>
                <a
                  href="/contact?subject=investment"
                  className="mt-auto inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
                >
                  Start a Conversation
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="group relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/20 to-cyan-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-2xl border border-emerald-200/50 rounded-2xl p-6 flex flex-col items-center text-center hover:border-emerald-300/50 transition-all duration-500 shadow-xl">
                <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 p-3 rounded-full mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Business Partnership</h3>
                <p className="text-slate-600 mb-4">
                  Explore strategic collaboration opportunities to accelerate your business growth.
                </p>
                <a
                  href="/contact?subject=partnership"
                  className="mt-auto inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                >
                  Discuss Partnership
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="group relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 to-pink-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-2xl border border-orange-200/50 rounded-2xl p-6 flex flex-col items-center text-center hover:border-orange-300/50 transition-all duration-500 shadow-xl">
                <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-3 rounded-full mb-4">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">General Inquiry</h3>
                <p className="text-slate-600 mb-4">
                  Have questions about our services or want to learn more about what we do?
                </p>
                <a
                  href="/contact?subject=general"
                  className="mt-auto inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors"
                >
                  Get in Touch
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .contact-title {
            font-size: 4rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .contact-title {
            font-size: 3rem !important;
          }
          
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .contact-title {
            font-size: 2.5rem !important;
          }
          
          .contact-card {
            padding: 1rem !important;
          }
        }

        /* Focus states for accessibility */
        .contact-card:focus-within {
          outline: 2px solid rgba(6, 182, 212, 0.5);
          outline-offset: 4px;
        }

        /* Enhanced hover effects */
        .contact-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(6, 182, 212, 0.1);
        }

        /* Smooth transitions */
        .contact-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default Contact;