import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Zap, Shield, Sparkles, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

const ventureLinks = [
  { name: 'CodeEternity', path: 'https://www.codeeternity.com/', description: 'Learning Platform', external: true },
  { name: 'Adhira SoftTech', path: 'https://www.aadirasofttech.com/', description: 'Software Solutions', external: true },
  { name: 'Flick Lifestyle', path: '/ventures/flick-lifestyle', description: 'Lifestyle Brand', external: false },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [ventureDropdownOpen, setVentureDropdownOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', onScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when path changes
    setIsOpen(false);
    setDropdownOpen(null);
    setVentureDropdownOpen(false);
    
    // Update active tab index based on current location
    const currentIndex = navLinks.findIndex(link => link.path === location.pathname);
    setActiveTabIndex(currentIndex >= 0 ? currentIndex : 0);
  }, [location.pathname]);

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleVentureClick = (venture: { path: string; external: boolean }) => {
    if (venture.external) {
      window.open(venture.path, '_blank', 'noopener,noreferrer');
    } else {
      navigate(venture.path);
    }
    setIsOpen(false);
    setVentureDropdownOpen(false);
  };

  return (
    <>
      {/* Navbar Container - Fixed positioning with proper z-index */}
      <header className="fixed top-1 sm:top-2 w-full z-[9999]" style={{ isolation: 'isolate' }}>
        {/* Floating Navigation Container */}
        <div className="w-full px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 pt-2 sm:pt-4">
          <div className="max-w-7xl shadow-xl shadow-blue-500/5 shadow-rounded-xl mx-auto">
            <div className="relative">
              {/* Background Glow Effect */}
              <div className="absolute -inset-2 xs:-inset-3 sm:-inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl xs:rounded-3xl blur-lg" />

              {/* Main Navigation Glass Panel */}
              <div 
                className={`relative backdrop-blur-2xl border border-gray-200 rounded-xl xs:rounded-2xl transition-all duration-500 ${
                  scrolled 
                    ? 'bg-white/90 shadow-2xl shadow-blue-500/10' 
                    : 'bg-white/80 shadow-xl shadow-purple-500/5'
                }`}
              >
                {/* Simplified Liquid Background Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-xl xs:rounded-2xl">
                  <div className="absolute -top-16 xs:-top-20 -right-16 xs:-right-20 w-32 xs:w-40 h-32 xs:h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />
                  <motion.div
                    animate={{
                      x: -mousePos.x * 0.003,
                      y: -mousePos.y * 0.003,
                      scale: [1, 0.95, 1.02, 1]
                    }}
                    transition={{
                      x: { duration: 0.6 },
                      y: { duration: 0.6 },
                      scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute -bottom-12 xs:-bottom-16 -left-12 xs:-left-16 w-24 xs:w-32 h-24 xs:h-32 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 rounded-full blur-2xl"
                  />
                </div>

                {/* Navigation Content */}
                <div className="relative px-2 xs:px-3 sm:px-4 md:px-6 py-2 xs:py-3 sm:py-4">
                  <div className="flex justify-between items-center">
                    
                    {/* Enhanced Logo */}
                    <button 
                      onClick={() => handleNavClick('/')}
                      className="flex items-center gap-2 xs:gap-3 sm:gap-4 group relative z-10"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1, rotateY: 10 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative"
                      >
                        <div className="w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 rounded-lg xs:rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-0.5 shadow-lg">
                          <div className="w-full h-full rounded-lg xs:rounded-xl sm:rounded-2xl bg-white flex items-center justify-center relative overflow-hidden">
                            <motion.div
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                              className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10"
                            />
                            <Zap className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 text-blue-600 relative z-10" />
                          </div>
                        </div>
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.2, 0.3, 0.2]
                          }}
                          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute -inset-1 xs:-inset-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl xs:rounded-2xl blur-lg"
                        />
                      </motion.div>
                      
                      <div className="hidden xs:block">
                        <div className="text-base xs:text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                          Eternity
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <div className="text-xs text-gray-600 font-medium">Ventures</div>
                          {location.pathname !== '/' && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3, type: "spring", stiffness: 500 }}
                              className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            />
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                      {navLinks.map((link, index) => (
                        <button
                          key={link.name}
                          onClick={() => handleNavClick(link.path)}
                          className={`relative group px-3 lg:px-4 xl:px-6 py-2 xl:py-3 rounded-xl xl:rounded-2xl font-semibold text-xs lg:text-sm xl:text-base transition-all duration-500 ${
                            location.pathname === link.path
                              ? 'text-slate-800'
                              : 'text-slate-700 hover:text-slate-900'
                          }`}
                        >
                          {/* Active Tab Background */}
                          {location.pathname === link.path && (
                            <motion.div
                              layoutId="activeTab"
                              className="absolute inset-0 bg-gradient-to-r from-blue-400/80 via-purple-400/80 to-cyan-400/80 rounded-2xl shadow-md"
                              initial={false}
                              transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                          )}
                          
                          {/* Hover Background */}
                          <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                            location.pathname === link.path
                              ? 'bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10'
                              : 'bg-gradient-to-r from-slate-100/50 to-slate-200/50 opacity-0 group-hover:opacity-100'
                          }`} />
                          
                          {/* Content */}
                          <span className="relative z-10 flex items-center gap-2">
                            {link.name}
                            {location.pathname === link.path && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
                                className="w-2 h-2 bg-blue-500 rounded-full"
                              />
                            )}
                          </span>
                          
                          {/* Bottom Border Indicator */}
                          <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 transition-all duration-300 ${
                            location.pathname === link.path
                              ? 'w-8 bg-blue-500'
                              : 'group-hover:w-6 bg-slate-400'
                          }`} />
                        </button>
                      ))}
                      
                      {/* Our Venture Dropdown */}
                      <div 
                        className="relative group"
                        onMouseEnter={() => setVentureDropdownOpen(true)}
                        onMouseLeave={() => setVentureDropdownOpen(false)}
                      >
                        <button className="relative group px-3 lg:px-4 xl:px-6 py-2 xl:py-3 rounded-xl xl:rounded-2xl font-semibold text-xs lg:text-sm xl:text-base transition-all duration-500 text-slate-700 hover:text-slate-900">
                          {/* Hover Background */}
                          <div className="absolute inset-0 rounded-2xl transition-all duration-300 bg-gradient-to-r from-slate-100/50 to-slate-200/50 opacity-0 group-hover:opacity-100" />
                          
                          {/* Content */}
                          <span className="relative z-10 flex items-center gap-2">
                            Our Venture
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${ventureDropdownOpen ? 'rotate-180' : ''}`} />
                          </span>
                          
                          {/* Bottom Border Indicator */}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-6 bg-slate-400" />
                        </button>
                        
                        {/* Dropdown Menu */}
                        <AnimatePresence>
                          {ventureDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl shadow-blue-500/10 overflow-hidden"
                            >
                              <div className="p-2">
                                {ventureLinks.map((venture, index) => (
                                  <motion.button
                                    key={venture.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ delay: index * 0.05, duration: 0.2 }}
                                    onClick={() => handleVentureClick(venture)}
                                    className="w-full text-left p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 group"
                                  >
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <div className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                                          {venture.name}
                                        </div>
                                        <div className="text-sm text-slate-600 group-hover:text-slate-700">
                                          {venture.description}
                                        </div>
                                      </div>
                                      {venture.external ? (
                                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                                      ) : (
                                        <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                      )}
                                    </div>
                                  </motion.button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group"
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg md:rounded-xl xl:rounded-2xl opacity-30 blur-sm group-hover:opacity-50 transition-opacity duration-300"></div>
                        <button
                          onClick={() => handleNavClick('/contact')}
                          className="relative flex items-center gap-2 bg-white text-gray-900 px-3 md:px-4 xl:px-6 py-1.5 md:py-2 xl:py-3 rounded-lg md:rounded-xl xl:rounded-2xl font-bold text-xs md:text-sm transition-all duration-300 shadow-lg"
                        >
                          <Sparkles className="w-3 h-3 xl:w-4 xl:h-4" />
                          <span className="hidden sm:inline">Get Started</span>
                          <span className="sm:hidden">Start</span>
                        </button>
                      </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                      onClick={() => setIsOpen(!isOpen)}
                      className="lg:hidden relative z-10 p-1.5 xs:p-2 rounded-lg xs:rounded-xl bg-white/80 backdrop-blur-xl border border-gray-200 text-gray-700 hover:text-blue-600 transition-all duration-200"
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <AnimatePresence mode="wait">
                        {isOpen ? (
                          <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                            exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                          >
                            <X className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="menu"
                            initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                            exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                          >
                            <Menu className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>

                  {/* Mobile Menu - Improved Animation */}
                  <AnimatePresence mode="wait">
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, scaleY: 0 }}
                        animate={{ opacity: 1, height: 'auto', scaleY: 1 }}
                        exit={{ opacity: 0, height: 0, scaleY: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          ease: [0.4, 0, 0.2, 1],
                          height: { duration: 0.3 },
                          scaleY: { duration: 0.2 }
                        }}
                        className="lg:hidden mt-3 xs:mt-4 overflow-hidden origin-top"
                      >
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2, delay: 0.1 }}
                          className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-lg xs:rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 space-y-1"
                        >
                          {navLinks.map((link, index) => (
                            <motion.div
                              key={link.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ 
                                delay: index * 0.05, 
                                duration: 0.2,
                                ease: "easeOut"
                              }}
                            >
                              <button
                                onClick={() => handleNavClick(link.path)}
                                className={`relative group w-full text-left block px-2 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 rounded-lg xs:rounded-lg sm:rounded-xl font-semibold text-sm xs:text-sm sm:text-base transition-all duration-200 ${
                                  location.pathname === link.path
                                    ? 'text-slate-800'
                                    : 'text-slate-700 hover:text-slate-900'
                                }`}
                              >
                                {/* Active Background */}
                                {location.pathname === link.path && (
                                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/80 via-purple-400/80 to-cyan-400/80 rounded-lg xs:rounded-lg sm:rounded-xl" />
                                )}
                                
                                {/* Hover Background */}
                                <div className={`absolute inset-0 rounded-lg xs:rounded-lg sm:rounded-xl transition-all duration-200 ${
                                  location.pathname === link.path
                                    ? 'bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10'
                                    : 'bg-gradient-to-r from-slate-100/50 to-slate-200/50 opacity-0 group-hover:opacity-100'
                                }`} />
                                
                                {/* Content */}
                                <span className="relative z-10 flex items-center justify-between">
                                  <span>{link.name}</span>
                                  {location.pathname === link.path && (
                                    <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-blue-500 rounded-full" />
                                  )}
                                </span>
                              </button>
                            </motion.div>
                          ))}
                          
                          {/* Mobile Our Venture Section */}
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ 
                              delay: navLinks.length * 0.05, 
                              duration: 0.2,
                              ease: "easeOut"
                            }}
                          >
                            <div className="px-2 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3">
                              <div className="font-semibold text-sm xs:text-sm sm:text-base text-slate-700 mb-2">
                                Our Venture
                              </div>
                              <div className="space-y-1">
                                {ventureLinks.map((venture, index) => (
                                  <button
                                    key={venture.name}
                                    onClick={() => handleVentureClick(venture)}
                                    className="w-full text-left block px-3 xs:px-4 sm:px-5 py-2 xs:py-2.5 rounded-lg xs:rounded-lg sm:rounded-xl font-medium text-sm xs:text-sm sm:text-base text-slate-600 hover:text-slate-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200"
                                  >
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <div className="font-semibold">{venture.name}</div>
                                        <div className="text-xs text-slate-500">{venture.description}</div>
                                      </div>
                                      {venture.external ? (
                                        <ExternalLink className="w-4 h-4 text-slate-400" />
                                      ) : (
                                        <ChevronDown className="w-4 h-4 text-slate-400" />
                                      )}
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                          
                          {/* Mobile CTA */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ delay: 0.3, duration: 0.2 }}
                            className="pt-2 xs:pt-3 block md:hidden"
                          >
                            <button
                              onClick={() => handleNavClick('/contact')}
                              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg xs:rounded-xl sm:rounded-2xl font-bold text-xs xs:text-xs sm:text-sm transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                              <Sparkles className="w-3 xs:w-4 h-3 xs:h-4" />
                              <span>Get Started</span>
                            </button>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed navbar - Responsive */}
      <div className="h-16 xs:h-18 sm:h-20 md:h-22 lg:h-24 xl:h-28" />
    </>
  );
};

export default Navbar;