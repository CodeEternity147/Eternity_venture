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
  }, [location]);

  return (
    <>
      {/* Navbar Container - Fixed positioning with proper z-index */}
      <header className="fixed top-0 w-full z-[9999]" style={{ isolation: 'isolate' }}>
        {/* Floating Navigation Container */}
        <div className="w-full px-4 sm:px-6 lg:px-8 pt-4">
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              {/* Background Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-cyan-500/15 rounded-3xl blur-lg" />

              {/* Main Navigation Glass Panel */}
              <div 
                className={`relative backdrop-blur-2xl border border-white/10 rounded-2xl transition-all duration-500 ${
                  scrolled 
                    ? 'bg-slate-950/80 shadow-2xl shadow-blue-500/10' 
                    : 'bg-slate-950/60 shadow-xl shadow-purple-500/5'
                }`}
              >
                {/* Liquid Background Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-2xl" />
                  <motion.div
                    animate={{
                      x: -mousePos.x * 0.005,
                      y: -mousePos.y * 0.005,
                      scale: [1, 0.9, 1.05, 1]
                    }}
                    transition={{
                      x: { duration: 0.6 },
                      y: { duration: 0.6 },
                      scale: { duration: 12, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-br from-cyan-500/15 to-pink-500/15 rounded-full blur-2xl"
                  />
                </div>

                {/* Navigation Content */}
                <div className="relative px-6 py-4">
                  <div className="flex justify-between items-center">
                    
                    {/* Enhanced Logo */}
                    <Link to="/" className="flex items-center gap-4 group relative z-10">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotateY: 10 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-0.5 shadow-lg">
                          <div className="w-full h-full rounded-2xl bg-slate-950 flex items-center justify-center relative overflow-hidden">
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                              className="absolute inset-0 bg-gradient-to-br from-blue-400/15 to-purple-400/15"
                            />
                            <Zap className="w-6 h-6 text-blue-400 relative z-10" />
                          </div>
                        </div>
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.5, 0.3]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20"
                        />
                      </motion.div>
                      
                      <div className="hidden sm:flex flex-col">
                        <motion.span 
                          className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                          animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "linear"
                          }}
            style={{
                            backgroundSize: '200% 200%'
                          }}
                        >
                          ETERNITY
                        </motion.span>
                        <span className="text-sm text-slate-400 font-medium tracking-wider">VENTURES</span>
                      </div>
        </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8 relative z-10">
                      {navLinks.map((link, idx) => (
                        <Link
                          key={idx}
                          to={link.path}
                          className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 group ${
                            location.pathname === link.path 
                              ? 'text-white bg-white/10' 
                              : 'text-slate-300 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <span className="relative z-10">{link.name}</span>
                          
                          {/* Active indicator */}
                          {location.pathname === link.path && (
                            <motion.div
                              layoutId="activeNavItem"
                              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                          
                          {/* Hover glow */}
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileHover={{ scale: 1, opacity: 0.8 }}
                            className="absolute -inset-1 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-xl blur-md -z-10"
                          />
                        </Link>
                      ))}
                    </nav>

                    {/* Enhanced CTA Button */}
                    <div className="hidden lg:block relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group"
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition-all duration-300" />
                        <Link
                          to="/contact"
                          className="relative inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-2xl font-bold transition-all duration-300 overflow-hidden"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <Sparkles className="w-4 h-4" />
                          </motion.div>
                          <span>Get Started</span>
                          
                          {/* Button shimmer effect */}
                          <motion.div
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                          />
                        </Link>
                      </motion.div>
        </div>

                    {/* Enhanced Mobile Menu Button */}
                    <motion.button
                      onClick={() => setIsOpen(!isOpen)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="lg:hidden p-3 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 relative overflow-hidden group"
                    >
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                      </motion.div>
                      
                      {/* Button glow */}
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-md -z-10"
                      />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

        {/* Mobile Navigation Panel - Separate container to avoid overlap */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="lg:hidden mt-4 mx-4 relative z-[9998]"
            >
              <div className="relative">
                {/* Mobile menu glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl blur-xl opacity-60" />
                
                {/* Mobile menu content */}
                <div className="relative bg-slate-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-6">
                  <div className="space-y-2">
                    {navLinks.map((link, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                      >
                        <Link
                          to={link.path}
                          className={`group relative block py-3 px-4 rounded-xl transition-all duration-200 ${
                            location.pathname === link.path
                              ? 'text-white bg-white/10'
                              : 'text-slate-300 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <span className="font-medium relative z-10">{link.name}</span>
                          
                          {/* Mobile active indicator */}
                          {location.pathname === link.path && (
                            <motion.div
                              layoutId="activeMobileNavItem"
                              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                          
                          {/* Mobile hover glow */}
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileHover={{ scale: 1, opacity: 1 }}
                            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl"
                          />
                        </Link>
                      </motion.div>
                    ))}
                    
                    {/* Mobile CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.3 }}
                      className="pt-4 mt-4 border-t border-white/10"
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative group"
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition-all duration-300" />
                        <Link
                          to="/contact"
                          className="relative inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-white text-slate-900 rounded-2xl font-bold transition-all duration-300 overflow-hidden"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <Sparkles className="w-5 h-5" />
                          </motion.div>
                          <span>Get Started</span>
                          
                          {/* Mobile button shimmer */}
                          <motion.div
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.6 }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                          />
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
          </motion.div>
        )}
      </AnimatePresence>
              </header>

      {/* Spacer to prevent content overlap */}
      <div className="h-20 lg:h-24"></div>
    </>
  );
};

export default Navbar;