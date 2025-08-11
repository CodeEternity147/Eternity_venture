import { useState, useEffect } from 'react';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  Sparkles,
  Globe,
  Rocket,
  Zap,
  Star,
  Send,
  Heart,
  Shield,
  Award,
  Target
} from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const phoneNumber = '8874700800';
    const message = 'Hello! I would like to know more about Eternity Ventures.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#', color: 'from-blue-500 to-blue-600' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'from-sky-500 to-sky-600' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'from-blue-600 to-indigo-600' },
    { icon: Instagram, label: 'Instagram', href: '#', color: 'from-pink-500 to-rose-600' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/', icon: Star },
    { name: 'About Us', href: '/about', icon: Target },
    { name: 'Our Services', href: '/services', icon: Zap },
    { name: 'Our Ventures', href: '/ventures', icon: Rocket },
    { name: 'Contact Us', href: '/contact', icon: Send },
  ];

  const ventures = [
    { name: 'CodeEternity', href: '/ventures/code-eternity', status: 'Live' },
    { name: 'Flick Lifestyle', href: '/ventures/flick-lifestyle', status: 'Growing' },
    { name: 'GreenRide', href: '/ventures/green-ride', status: 'Active' },
    { name: 'Swaroop.AI', href: '/ventures/swaroop-ai', status: 'Beta' },
    { name: 'Radhika Infra', href: '/ventures/radhika-infra', status: 'Live' },
  ];

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Enhanced Light Theme Background with Warm Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-rose-50 to-violet-50">
        <div className="absolute inset-0">
          {/* Colorful Background Blobs */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 lg:w-[500px] lg:h-[500px] rounded-full opacity-15 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(251, 146, 60, 0.2) 0%, rgba(236, 72, 153, 0.12) 50%, transparent 100%)'
            }}
          />
          
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 lg:w-[400px] lg:h-[400px] rounded-full opacity-20 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(34, 197, 94, 0.18) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)'
            }}
          />

          <div
            className="absolute top-1/3 right-1/4 w-64 h-64 lg:w-[350px] lg:h-[350px] rounded-full opacity-12 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(14, 165, 233, 0.08) 50%, transparent 100%)'
            }}
          />
        </div>

        {/* Enhanced Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-6"
          style={{
            backgroundImage: 'linear-gradient(rgba(251, 146, 60, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 146, 60, 0.12) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-30 blur-sm group-hover:opacity-50 transition-all duration-300"></div>
              <div className="relative flex items-center gap-2 sm:gap-3 lg:gap-4 bg-white/90 backdrop-blur-xl border border-orange-200 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full shadow-xl">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-lg sm:text-xl lg:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500">
                    ETERNITY
                  </div>
                  <div className="text-slate-800 font-medium text-sm sm:text-base">
                    Ventures
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-violet-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-base sm:text-lg lg:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed px-4">
            Your trusted partner for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 font-semibold">strategic investments</span> and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 font-semibold">business growth</span>. We turn visions into successful ventures with innovative solutions.
          </p>
        </div>

        {/* Main Footer Content - Equal Size Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          
          {/* Company Info Section */}
          <div className="group relative h-full">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-white/95 backdrop-blur-2xl border border-orange-200/50 rounded-2xl p-4 sm:p-6 h-full shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-sm sm:text-base lg:text-lg">EV</span>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                      Eternity
                    </div>
                    <div className="text-slate-700 font-medium text-sm sm:text-base">Ventures</div>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  Empowering the next generation of innovative startups with cutting-edge technology and strategic investment solutions.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3 text-slate-700 group/item">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-100 to-pink-100 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
                  </div>
                  <span className="text-xs sm:text-sm">hello@eternityventures.com</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-slate-700 group/item">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-violet-100 to-purple-100 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-violet-500" />
                  </div>
                  <span className="text-xs sm:text-sm">+91 8874 700 800</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-slate-700 group/item">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500" />
                  </div>
                  <span className="text-xs sm:text-sm">Noida, UP, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="group relative h-full">
            <div className="absolute -inset-2 bg-gradient-to-r from-violet-400/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-white/95 backdrop-blur-2xl border border-orange-200/50 rounded-2xl p-4 sm:p-6 h-full shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-violet-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                Quick Links
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center gap-2 sm:gap-3 text-slate-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-600 hover:to-pink-600 transition-all duration-300 group/link"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-100/60 to-pink-100/60 rounded-lg flex items-center justify-center group-hover/link:scale-110 transition-transform duration-300">
                      <link.icon className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 group-hover/link:text-pink-500 transition-colors duration-300" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Ventures Section */}
          <div className="group relative h-full">
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-white/95 backdrop-blur-2xl border border-orange-200/50 rounded-2xl p-4 sm:p-6 h-full shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Rocket className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                Our Ventures
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {ventures.map((venture, index) => (
                  <div key={index} className="flex items-center justify-between group/venture">
                    <a
                      href={venture.href}
                      className="text-slate-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 text-xs sm:text-sm font-medium"
                    >
                      {venture.name}
                    </a>
                    <span className={`text-xs px-2 sm:px-3 py-1 rounded-full font-medium shadow-sm group-hover/venture:scale-105 transition-transform duration-300 ${
                      venture.status === 'Live' ? 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 border border-emerald-200' :
                      venture.status === 'Growing' ? 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border border-blue-200' :
                      venture.status === 'Active' ? 'bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 border border-violet-200' :
                      'bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 border border-amber-200'
                    }`}>
                      {venture.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social & Newsletter Section */}
          <div className="group relative h-full">
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-400/20 to-rose-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-white/95 backdrop-blur-2xl border border-orange-200/50 rounded-2xl p-4 sm:p-6 h-full shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-pink-400 to-rose-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                Connect With Us
              </h3>
              
              {/* Social Links */}
              <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-slate-900 mb-2 sm:mb-3 flex items-center gap-2">
                  <Send className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
                  Stay Updated
                </h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm bg-gradient-to-r from-orange-50/50 to-pink-50/50 border border-orange-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400/50 backdrop-blur-xl transition-all duration-300 text-slate-800 placeholder-slate-500"
                  />
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 shadow-md">
                    <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-orange-200/50 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-around items-center gap-4">
            <div className="text-slate-600 text-xs sm:text-sm flex items-center gap-2">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500" />
              © {year} Eternity Ventures. All rights reserved.
            </div>
            
            <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm">
              <a href="/privacy" className="text-slate-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-600 hover:to-pink-600 transition-all duration-300 font-medium">
                Privacy Policy
              </a>
              <a href="/terms" className="text-slate-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-violet-600 hover:to-purple-600 transition-all duration-300 font-medium">
                Terms of Service
              </a>
              <a href="/cookies" className="text-slate-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 font-medium">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 sm:bottom-10 left-6 sm:left-10 group z-[9998]"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          left: '1.5rem',
          zIndex: 9998,
          transform: 'translateZ(0)'
        }}
        aria-label="Scroll to top"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-40 blur-sm group-hover:opacity-60 transition-opacity duration-300"></div>
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center">
          <ArrowUp className="w-6 h-6 sm:w-7 sm:h-7" />
        </div>
      </button>

      {/* WhatsApp Button - Fixed to Viewport */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 sm:bottom-10 right-6 sm:right-10 group z-[9998]"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 9998,
          transform: 'translateZ(0)'
        }}
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-500 rounded-full opacity-40 blur-sm group-hover:opacity-60 transition-opacity duration-300"></div>
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center">
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </div>
      </button>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden lg:block absolute top-1/4 left-8 w-12 h-12 border-2 border-orange-300/30 rounded-lg backdrop-blur-sm bg-orange-100/10 opacity-50" />
        <div className="hidden lg:block absolute bottom-1/3 right-12 w-8 h-8 bg-gradient-to-br from-violet-400/20 to-purple-400/20 rounded-full backdrop-blur-sm border border-violet-300/30 opacity-40" />
        <div className="hidden lg:block absolute top-2/3 left-1/4 w-6 h-6 bg-gradient-to-br from-pink-400/25 to-rose-400/25 transform rotate-45 backdrop-blur-sm opacity-35" />
      </div>
    </footer>
  );
};

export default Footer;