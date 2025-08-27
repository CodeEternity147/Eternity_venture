import { Mail, Phone, MapPin, ArrowUp, Sparkles, Heart, Globe, Rocket } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const phoneNumber = '+918874700800';
    const message = 'Hello! I would like to know more about Eternity Ventures.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 blur-3xl bg-gradient-to-br from-orange-400 to-pink-500"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-8 blur-3xl bg-gradient-to-br from-blue-400 to-purple-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-2xl mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                    Eternity Ventures
                  </div>
                  <div className="text-slate-600 font-medium">capital and innovation hub</div>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Your trusted partner for strategic investments and business growth. 
                We turn visions into successful ventures.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                <div className="text-center">
                  <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">₹50Cr+</div>
                  <div className="text-xs text-slate-500">Portfolio Value</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">25+</div>
                  <div className="text-xs text-slate-500">Startups Funded</div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-3 h-3 text-white" />
                </div>
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="group flex items-center gap-3 p-3 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl hover:from-orange-100 hover:to-pink-100 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-800">hello@eternityventures.com</div>
                    <div className="text-xs text-slate-500">Email us anytime</div>
                  </div>
                </div>
                
                <div className="group flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:from-blue-100 hover:to-purple-100 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-800">+91 8874 700 800</div>
                    <div className="text-xs text-slate-500">Call us now</div>
                  </div>
                </div>
                
                <div className="group flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl hover:from-green-100 hover:to-teal-100 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-800">Lucknow, UP, India</div>
                    <div className="text-xs text-slate-500">Visit our office</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Globe className="w-3 h-3 text-white" />
                </div>
                Quick Links
              </h3>
              <div className="space-y-3">
                {[
                  { href: '/', label: 'Home', desc: 'Back to homepage' },
                  { href: '/about', label: 'About Us', desc: 'Learn about us' },
                  { href: '/services', label: 'Services', desc: 'What we offer' },
                  { href: '/contact', label: 'Contact', desc: 'Get in touch' }
                ].map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    className="group block p-3 rounded-xl hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50 transition-all duration-300"
                  >
                    <div className="text-sm font-medium text-slate-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 transition-all">
                      {link.label}
                    </div>
                    <div className="text-xs text-slate-500">{link.desc}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Ventures */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg flex items-center justify-center">
                  <Rocket className="w-3 h-3 text-white" />
                </div>
                Our Ventures
              </h3>
              <div className="space-y-3">
                {[
                  { href: '/ventures/code-eternity', label: 'CodeEternity', status: 'Live' },
                  { href: '/ventures/flick-lifestyle', label: 'Flick Lifestyle', status: 'Growing' },
                  { href: '/ventures/green-ride', label: 'GreenRide', status: 'Active' },
                  { href: '/ventures/swaroop-ai', label: 'Swaroop.AI', status: 'Beta' }
                ].map((venture, index) => (
                  <a 
                    key={index}
                    href={venture.href}
                    className="group block p-3 rounded-xl hover:bg-gradient-to-r hover:from-slate-50 hover:to-green-50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-slate-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-teal-500 transition-all">
                        {venture.label}
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        venture.status === 'Live' ? 'bg-green-100 text-green-700' :
                        venture.status === 'Growing' ? 'bg-blue-100 text-blue-700' :
                        venture.status === 'Active' ? 'bg-purple-100 text-purple-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {venture.status}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-pink-500 animate-pulse" />
              <span>© {year} Eternity Ventures. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="/privacy" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition-all duration-300 font-medium">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 font-medium">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 z-50 group"
        aria-label="Scroll to top"
      >
        <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300"></div>
        <div className="relative w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center">
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </div>
      </button>

      {/* Enhanced WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300"></div>
        <div className="relative w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center">
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </div>
      </button>
    </footer>
  );
};

export default Footer;