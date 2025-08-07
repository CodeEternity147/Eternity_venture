import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/', icon: Star },
    { name: 'About Us', href: '/about', icon: Target },
    { name: 'Our Services', href: '/services', icon: Zap },
    { name: 'Our Ventures', href: '/ventures', icon: Rocket },
    { name: 'Blog', href: '/blog', icon: Globe },
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
    <footer className="bg-black py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-4 bg-gray-900/50 border border-gray-700 px-8 py-4 rounded-full">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
                  ETERNITY
                </div>
                <div className="text-white font-medium">
                  Ventures
                </div>
              </div>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              </div>
            </div>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for{' '}
            <span className="text-blue-400 font-semibold">strategic investments</span> and{' '}
            <span className="text-purple-400 font-semibold">business growth</span>. We turn visions into successful ventures with innovative solutions.
          </p>
        </div>

        {/* Main Footer Content - Equal Size Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          
          {/* Company Info Section */}
          <div className="bg-gray-900/30 border border-gray-700 rounded-2xl p-6 h-full">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-lg">EV</span>
                </div>
                <div>
                  <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Eternity
                  </div>
                  <div className="text-gray-400 font-medium">
                    Ventures
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Building tomorrow's success stories through{' '}
              <span className="text-blue-400 font-semibold">strategic partnerships</span> and{' '}
              <span className="text-purple-400 font-semibold">innovative solutions</span>.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-gray-900/30 border border-gray-700 rounded-2xl p-6 h-full">
            <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
              <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-3 h-3 text-white" />
              </div>
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <div className="w-5 h-5 bg-gray-800 rounded-lg flex items-center justify-center">
                      <link.icon className="w-3 h-3 text-cyan-400" />
                    </div>
                    <span className="font-medium">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Ventures */}
          <div className="bg-gray-900/30 border border-gray-700 rounded-2xl p-6 h-full">
            <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                <Rocket className="w-3 h-3 text-white" />
              </div>
              Our Ventures
            </h4>

            <ul className="space-y-3">
              {ventures.map((venture, index) => (
                <li key={index}>
                  <Link 
                    to={venture.href} 
                    className="flex items-center justify-between text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gray-800 rounded-lg flex items-center justify-center">
                        <Star className="w-3 h-3 text-purple-400" />
                      </div>
                      <span className="font-medium">
                        {venture.name}
                      </span>
                    </div>
                    <div className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      venture.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                      venture.status === 'Growing' ? 'bg-blue-500/20 text-blue-400' :
                      venture.status === 'Active' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-orange-500/20 text-orange-400'
                    }`}>
                      {venture.status}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-900/30 border border-gray-700 rounded-2xl p-6 h-full">
            <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
              <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                <Send className="w-3 h-3 text-white" />
              </div>
              Contact
            </h4>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center mt-1">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Location</div>
                  <span className="text-gray-300 text-sm leading-relaxed">
                    Sector 62, Noida,<br />
                    Uttar Pradesh, India
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center mt-1">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Phone</div>
                  <a 
                    href="tel:+919876543210" 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium text-sm"
                  >
                    +91 9876 543 210
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center mt-1">
                  <Mail className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Email</div>
                  <a
                    href="mailto:team@eternityventures.co.in"
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium text-sm"
                  >
                    team@eternityventures.co.in
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto bg-gray-900/30 border border-gray-700 rounded-2xl p-8 text-center">
            <div className="mb-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">
                  Stay Connected
                </h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Get the latest updates on our ventures, insights, and{' '}
                <span className="text-blue-400 font-semibold">exclusive opportunities</span> delivered to your inbox.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all duration-300"
                />
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 flex items-center gap-2">
                <Send className="w-4 h-4" />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-gray-900/30 border border-gray-700 rounded-2xl p-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Heart className="w-4 h-4 text-red-400" />
                <span>&copy; {year} Eternity Ventures.</span>
              </div>
              <div className="text-gray-400">All rights reserved.</div>
            </div>

            {/* Legal Links & Scroll to Top */}
            <div className="flex items-center gap-6">
              <div className="flex gap-6">
                <Link 
                  to="/privacy-policy" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm font-medium flex items-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  Privacy Policy
                </Link>
                <Link 
                  to="/terms-of-service" 
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm font-medium flex items-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  Terms of Service
                </Link>
              </div>

              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center text-blue-400 hover:text-white hover:border-gray-500 transition-all duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8 pt-8 border-t border-gray-700">
            {[
              { icon: Star, value: '127', label: 'Happy Clients', color: 'text-yellow-400' },
              { icon: Rocket, value: '55+', label: 'Active Ventures', color: 'text-blue-400' },
              { icon: Globe, value: '15+', label: 'Countries', color: 'text-green-400' },
              { icon: Award, value: '98%', label: 'Success Rate', color: 'text-purple-400' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                  <div className={`text-xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;