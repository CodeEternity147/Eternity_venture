import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Shield, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const location = useLocation();

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
    setIsOpen(false);
    setDropdownOpen(null);
    
    // Update active tab index based on current location
    const currentIndex = navLinks.findIndex(link => link.path === location.pathname);
    setActiveTabIndex(currentIndex >= 0 ? currentIndex : 0);
  }, [location]);

  return (
    <>
      {/* Navbar Container - Fixed positioning with proper z-index */}
      <header className="fixed top-1 sm:top-2 w-full z-[9999]" style={{ isolation: 'isolate' }}>
        {/* Floating Navigation Container */}
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 pt-2 sm:pt-4">
          <div className="max-w-7xl shadow-xl shadow-blue-500/5 shadow-rounded-xl mx-auto">
            <div className="relative">
              {/* Background Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-lg" />

              {/* Main Navigation Glass Panel */}
              <div 
                className={`relative backdrop-blur-2xl border border-gray-200 rounded-2xl transition-all duration-500 ${
                  scrolled 
                    ? 'bg-white/90 shadow-2xl shadow-blue-500/10' 
                    : 'bg-white/80 shadow-xl shadow-purple-500/5'
                }`}
              >
                {/* Simplified Liquid Background Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />
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
                    className="absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 rounded-full blur-2xl"
                  />
                </div>

                {/* Navigation Content */}
                <div className="relative px-3 sm:px-4 md:px-6 py-3 sm:py-4">
                  <div className="flex justify-between items-center">
                    
                    {/* Enhanced Logo */}
                    <Link to="/" className="flex items-center gap-4 group relative z-10">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotateY: 10 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative"
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-0.5 shadow-lg">
                          <div className="w-full h-full rounded-xl sm:rounded-2xl bg-white flex items-center justify-center relative overflow-hidden">
                            <motion.div
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                              className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10"
                            />
                            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 relative z-10" />
                          </div>
                        </div>
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.2, 0.3, 0.2]
                          }}
                          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg"
                        />
                      </motion.div>
                      
                      <div className="hidden sm:block">
                        <div className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
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
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                      {navLinks.map((link, index) => (
                        <Link
                          key={link.name}
                          to={link.path}
                          className={`relative group px-4 xl:px-6 py-2 xl:py-3 rounded-xl xl:rounded-2xl font-semibold text-sm xl:text-base transition-all duration-500 ${
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
                        </Link>
                      ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group"
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl xl:rounded-2xl opacity-30 blur-sm group-hover:opacity-50 transition-opacity duration-300"></div>
                        <Link
                          to="/contact"
                          className="relative flex items-center gap-2 bg-white text-gray-900 px-4 xl:px-6 py-2 xl:py-3 rounded-xl xl:rounded-2xl font-bold text-xs xl:text-sm transition-all duration-300 shadow-lg"
                        >
                          <Sparkles className="w-3 h-3 xl:w-4 xl:h-4" />
                          <span>Get Started</span>
                        </Link>
                      </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="lg:hidden relative z-10 p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white/80 backdrop-blur-xl border border-gray-200 text-gray-700 hover:text-blue-600 transition-all duration-300"
                    >
                      {isOpen ? (
                        <X className="w-5 h-5 sm:w-6 sm:h-6" />
                      ) : (
                        <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                      )}
                    </button>
                  </div>

                  {/* Mobile Menu */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -20 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="lg:hidden mt-4 overflow-hidden"
                      >
                        <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-xl sm:rounded-2xl p-3 sm:p-4 space-y-1">
                          {navLinks.map((link, index) => (
                            <motion.div
                              key={link.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1, duration: 0.3 }}
                            >
                              <Link
                                to={link.path}
                                className={`relative group block px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                                  location.pathname === link.path
                                    ? 'text-slate-800'
                                    : 'text-slate-700 hover:text-slate-900'
                                }`}
                                onClick={() => setIsOpen(false)}
                              >
                                {/* Active Background */}
                                {location.pathname === link.path && (
                                  <motion.div
                                    layoutId="mobileActiveTab"
                                    className="absolute inset-0 bg-gradient-to-r from-blue-400/80 via-purple-400/80 to-cyan-400/80 rounded-xl"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                  />
                                )}
                                
                                {/* Hover Background */}
                                <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                                  location.pathname === link.path
                                    ? 'bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10'
                                    : 'bg-gradient-to-r from-slate-100/50 to-slate-200/50 opacity-0 group-hover:opacity-100'
                                }`} />
                                
                                {/* Content */}
                                <span className="relative z-10 flex items-center justify-between">
                                  <span>{link.name}</span>
                                                                     {location.pathname === link.path && (
                                     <motion.div
                                       initial={{ scale: 0 }}
                                       animate={{ scale: 1 }}
                                       transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
                                       className="w-2 h-2 bg-blue-500 rounded-full"
                                     />
                                   )}
                                </span>
                              </Link>
                            </motion.div>
                          ))}
                          
                          {/* Mobile CTA */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.3 }}
                            className="pt-3"
                          >
                            <Link
                              to="/contact"
                              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
                              onClick={() => setIsOpen(false)}
                            >
                              <Sparkles className="w-4 h-4" />
                              <span>Get Started</span>
                            </Link>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed navbar */}
      <div className="h-20 sm:h-24 lg:h-28" />
    </>
  );
};

export default Navbar;