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
    bgColor: 'from-blue-100/60 to-cyan-100/60',
    description: 'Available Mon-Fri, 9AM-6PM IST'
  },
  {
    icon: Mail,
    title: 'Email Us',
    value: 'team@eternityventures.co.in',
    href: 'mailto:team@eternityventures.co.in',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-100/60 to-pink-100/60',
    description: 'We reply within 24 hours'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Sector 62, Noida, UP, India',
    href: '#',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'from-emerald-100/60 to-teal-100/60',
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
      {/* Enhanced Light Theme Background with Warm Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-rose-50 to-violet-50">
        <div className="absolute inset-0">
          {/* Colorful Background Blobs */}
          <div
            className="absolute -top-40 -right-40 w-96 h-96 lg:w-[600px] lg:h-[600px] rounded-full opacity-20 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(251, 146, 60, 0.25) 0%, rgba(236, 72, 153, 0.15) 50%, transparent 100%)'
            }}
          />
          
          <div
            className="absolute -bottom-32 -left-32 w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full opacity-25 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, rgba(59, 130, 246, 0.12) 50%, transparent 100%)'
            }}
          />

          <div
            className="absolute top-1/3 right-1/3 w-64 h-64 lg:w-[400px] lg:h-[400px] rounded-full opacity-18 blur-3xl"
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

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/30 rounded-full blur-sm"
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
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-30 blur-sm group-hover:opacity-50 transition-all duration-300"></div>
              <div className="relative flex items-center gap-3 bg-white/90 backdrop-blur-xl border border-orange-200 px-6 py-3 rounded-full shadow-xl">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-700 font-bold">Let's Connect</span>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="text-slate-800">Ready to </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500">
              Transform
            </span>
            <br />
            <span className="text-slate-800">Your Vision?</span>
          </h2>

          <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
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
                  <div className={`absolute -inset-4 bg-gradient-to-r ${contact.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                  
                  {/* Card Content */}
                  <div className={`relative bg-gradient-to-r ${contact.bgColor} backdrop-blur-2xl border border-orange-200/50 rounded-2xl p-6 lg:p-8 hover:border-orange-300/70 hover:shadow-xl transition-all duration-300 shadow-lg`}>
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}
                      >
                        <contact.icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{contact.title}</h3>
                        <a 
                          href={contact.href}
                          className={`text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r ${contact.color} hover:scale-105 transition-transform duration-300 block mb-2`}
                        >
                          {contact.value}
                        </a>
                        <p className="text-slate-600 text-sm">{contact.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="group relative flex-1 hover:scale-105 transition-transform duration-300">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl opacity-40 blur-sm group-hover:opacity-60 transition-all duration-300"></div>
                <a
                  href="/contact"
                  className="relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl"
                >
                  <Zap className="w-5 h-5" />
                  <span>Schedule a Call</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <div className="group flex-1 hover:scale-105 transition-transform duration-300">
                <a
                  href="/services"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-white/90 backdrop-blur-xl border border-violet-200 text-slate-700 rounded-2xl font-bold text-lg hover:bg-white hover:border-violet-300 transition-all duration-300 shadow-lg"
                >
                  <Globe className="w-5 h-5 text-violet-500" />
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-violet-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Panel */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Form Glow Effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-violet-400/20 via-pink-400/20 to-orange-400/20 rounded-3xl blur-2xl" />

              {/* Form Container */}
              <div className="relative bg-white/95 backdrop-blur-2xl border border-orange-200/50 rounded-3xl p-8 lg:p-10 shadow-2xl">
                {/* Form Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-800">Let's Build Together</h3>
                    <p className="text-slate-600">We'll get back to you within 24 hours</p>
                  </div>
                </div>

                {/* Form */}
                <div className="space-y-6">
                  {/* Name Field */}
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-3">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="w-5 h-5 text-slate-500 group-focus-within:text-orange-500 transition-colors" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-gradient-to-r from-orange-50/50 to-pink-50/50 border border-orange-200/50 rounded-2xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400/50 backdrop-blur-xl transition-all duration-300 shadow-sm hover:shadow-md"
                        placeholder="Enter your full name"
                        required
                      />
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                      </div>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-3">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <AtSign className="w-5 h-5 text-slate-500 group-focus-within:text-violet-500 transition-colors" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-gradient-to-r from-violet-50/50 to-purple-50/50 border border-violet-200/50 rounded-2xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-400/50 focus:border-violet-400/50 backdrop-blur-xl transition-all duration-300 shadow-sm hover:shadow-md"
                        placeholder="Enter your email address"
                        required
                      />
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-3">
                      Your Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full p-4 bg-gradient-to-r from-pink-50/50 to-rose-50/50 border border-pink-200/50 rounded-2xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-400/50 focus:border-pink-400/50 backdrop-blur-xl transition-all duration-300 resize-none shadow-sm hover:shadow-md"
                        placeholder="Tell us about your project, ideas, or how we can help you..."
                        required
                      ></textarea>
                      <div className="absolute top-4 right-4">
                        <CheckCircle className="w-5 h-5 text-emerald-500" />
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
                      <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl opacity-40 blur-sm group-hover:opacity-60 transition-all duration-300"></div>
                      <div className="relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
                <div className="mt-6 pt-6 border-t border-orange-200/50">
                  <p className="text-center text-sm text-slate-600">
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy" className="text-orange-600 hover:text-orange-500 underline font-medium">
                      Privacy Policy
                    </a>
                    {' '}and{' '}
                    <a href="/terms" className="text-orange-600 hover:text-orange-500 underline font-medium">
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
              color: 'from-amber-400 to-orange-500',
              bgColor: 'from-amber-100/60 to-orange-100/60'
            },
            {
              icon: '🔒',
              title: 'Secure & Private',
              description: 'Your data is fully protected',
              color: 'from-emerald-400 to-teal-500',
              bgColor: 'from-emerald-100/60 to-teal-100/60'
            },
            {
              icon: '🚀',
              title: 'Expert Guidance',
              description: 'Connect with industry leaders',
              color: 'from-violet-400 to-purple-500',
              bgColor: 'from-violet-100/60 to-purple-100/60'
            }
          ].map((feature, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-2 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300`}></div>
              <div className={`relative bg-gradient-to-r ${feature.bgColor} backdrop-blur-xl border border-orange-200/50 rounded-2xl p-6 text-center hover:border-orange-300/70 hover:shadow-xl transition-all duration-300 shadow-lg`}>
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Action Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Colorful Geometric Shapes */}
          <div className="hidden lg:block absolute top-1/4 left-8 w-16 h-16 border-2 border-orange-300/40 rounded-lg backdrop-blur-sm bg-orange-100/20 opacity-60" />
          <div className="hidden lg:block absolute bottom-1/3 right-12 w-12 h-12 bg-gradient-to-br from-violet-400/20 to-purple-400/20 rounded-full backdrop-blur-sm border border-violet-300/40 opacity-50" />
          <div className="hidden lg:block absolute top-2/3 left-1/4 w-8 h-8 bg-gradient-to-br from-pink-400/30 to-rose-400/30 transform rotate-45 backdrop-blur-sm opacity-40" />
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