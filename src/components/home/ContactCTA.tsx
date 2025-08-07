import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  MessageCircle, 
  Send, 
  Sparkles,
  Zap,
  Globe,
  CheckCircle,
  User,
  AtSign
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    value: '+91 9876 543 210',
    href: 'tel:+919876543210',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-500/20 to-cyan-500/20',
    description: 'Available Mon-Fri, 9AM-6PM IST'
  },
  {
    icon: Mail,
    title: 'Email Us',
    value: 'team@eternityventures.co.in',
    href: 'mailto:team@eternityventures.co.in',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-500/20 to-pink-500/20',
    description: 'We reply within 24 hours'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Sector 62, Noida, UP, India',
    href: '#',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-500/20 to-emerald-500/20',
    description: 'Schedule an appointment first'
  },
];

const ContactCTA = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);

    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Static Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
        <div className="absolute inset-0">
          {/* Static Background Blobs */}
          <div
            className="absolute -top-40 -right-40 w-96 h-96 lg:w-[600px] lg:h-[600px] rounded-full opacity-15 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.15) 50%, transparent 100%)'
            }}
          />
          
          <div
            className="absolute -bottom-32 -left-32 w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full opacity-20 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(236, 72, 153, 0.15) 50%, transparent 100%)'
            }}
          />

          <div
            className="absolute top-1/3 right-1/3 w-64 h-64 lg:w-[400px] lg:h-[400px] rounded-full opacity-12 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(59, 130, 246, 0.15) 50%, transparent 100%)'
            }}
          />
        </div>

        {/* Static Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Static Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full blur-sm"
            style={{
              left: `${(i * 200) % 1200}px`,
              top: `${(i * 100) % 800}px`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block mb-6">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-50 blur-lg group-hover:opacity-75 transition-all duration-300"></div>
              <div className="relative flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-medium">Let's Connect</span>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="text-white">Ready to </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
              Transform
            </span>
            <br />
            <span className="text-white">Your Vision?</span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Connect with our team of experts to discuss your business idea, 
            explore investment opportunities, and accelerate your growth.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact Information Panel */}
          <div className="lg:col-span-5 space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="group relative">
                  {/* Card Glow */}
                  <div className={`absolute -inset-4 bg-gradient-to-r ${contact.bgColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                  
                  {/* Card Content */}
                  <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 lg:p-8 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}
                      >
                        <contact.icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{contact.title}</h3>
                        <a 
                          href={contact.href}
                          className={`text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r ${contact.color} hover:scale-105 transition-transform duration-300 block mb-2`}
                        >
                          {contact.value}
                        </a>
                        <p className="text-gray-400 text-sm">{contact.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="group relative flex-1 hover:scale-105 transition-transform duration-300">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition-all duration-300"></div>
                <a
                  href="/contact"
                  className="relative flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden"
                >
                  <Zap className="w-5 h-5" />
                  <span>Schedule a Call</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <div className="group flex-1 hover:scale-105 transition-transform duration-300">
                <a
                  href="/services"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
                >
                  <Globe className="w-5 h-5" />
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Panel */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Form Glow Effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 rounded-3xl blur-2xl" />

              {/* Form Container */}
              <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 lg:p-10">
                {/* Form Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">Let's Build Together</h3>
                    <p className="text-gray-400">We'll get back to you within 24 hours</p>
                  </div>
                </div>

                {/* Form */}
                <div className="space-y-6">
                  {/* Name Field */}
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="w-5 h-5 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 backdrop-blur-xl transition-all duration-300"
                        placeholder="Enter your full name"
                        required
                      />
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      </div>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <AtSign className="w-5 h-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 backdrop-blur-xl transition-all duration-300"
                        placeholder="Enter your email address"
                        required
                      />
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                      Your Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 backdrop-blur-xl transition-all duration-300 resize-none"
                        placeholder="Tell us about your project, ideas, or how we can help you..."
                        required
                      ></textarea>
                      <div className="absolute top-4 right-4">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      onClick={(e) => { e.preventDefault(); handleSubmit(e as any); }}
                      disabled={isSubmitting}
                      className="group relative w-full overflow-hidden hover:scale-102 transition-transform duration-300"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition-all duration-300"></div>
                      <div className="relative flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg transition-all duration-300">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            <span>Send Message</span>
                          </>
                        )}
                      </div>
                    </button>
                  </div>
                </div>

                {/* Form Footer */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-center text-sm text-gray-400">
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy" className="text-blue-400 hover:text-blue-300 underline">
                      Privacy Policy
                    </a>
                    {' '}and{' '}
                    <a href="/terms" className="text-blue-400 hover:text-blue-300 underline">
                      Terms of Service
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '⚡',
              title: 'Quick Response',
              description: 'Get replies within 24 hours',
              color: 'from-yellow-500 to-orange-500'
            },
            {
              icon: '🔒',
              title: 'Secure & Private',
              description: 'Your data is fully protected',
              color: 'from-green-500 to-emerald-500'
            },
            {
              icon: '🚀',
              title: 'Expert Guidance',
              description: 'Connect with industry leaders',
              color: 'from-blue-500 to-purple-500'
            }
          ].map((feature, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-2 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-300`}></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Static Floating Action Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Static Geometric Shapes */}
          <div className="hidden lg:block absolute top-1/4 left-8 w-16 h-16 border-2 border-blue-400/30 rounded-lg backdrop-blur-sm opacity-50" />
          <div className="hidden lg:block absolute bottom-1/3 right-12 w-12 h-12 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-400/30 opacity-40" />
          <div className="hidden lg:block absolute top-2/3 left-1/4 w-8 h-8 bg-gradient-to-br from-pink-400/30 to-orange-400/30 transform rotate-45 backdrop-blur-sm opacity-30" />
        </div>
      </div>

      {/* Enhanced Mobile Responsiveness */}
      <style>{`
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .form-container {
            padding: 1.5rem !important;
          }
          
          .contact-card {
            padding: 1.5rem !important;
          }
          
          .section-title {
            font-size: 2.5rem !important;
            line-height: 1.1;
          }
        }
        
        @media (max-width: 480px) {
          .section-title {
            font-size: 2rem !important;
          }
          
          .cta-buttons {
            flex-direction: column;
            gap: 1rem;
          }
        }

        /* Form validation styles */
        .input-valid {
          border-color: rgba(34, 197, 94, 0.5);
          box-shadow: 0 0 0 1px rgba(34, 197, 94, 0.2);
        }
        
        .input-invalid {
          border-color: rgba(239, 68, 68, 0.5);
          box-shadow: 0 0 0 1px rgba(239, 68, 68, 0.2);
        }

        /* Scale utility classes */
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default ContactCTA;