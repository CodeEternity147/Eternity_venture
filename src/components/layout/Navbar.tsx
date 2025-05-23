import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  {
    name: 'Our Ventures',
    path: '/ventures',
    dropdown: [
      { name: 'CodeEternity', path: '/ventures/code-eternity' },
      { name: 'Flick Lifestyle', path: '/ventures/flick-lifestyle' },
      { name: 'GreenRide', path: '/ventures/green-ride' },
      { name: 'Swaroop.AI', path: '/ventures/swaroop-ai' },
      { name: 'Radhika Infra', path: '/ventures/radhika-infra' },
    ],
  },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(null);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 backdrop-blur-xl shadow-md ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="px-6 lg:px-16 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/nav-re.png"
            alt="Logo"
            className="h-12 w-12 rounded-full object-cover shadow-lg"
            style={{
              filter:
                'sepia(100%) saturate(300%) brightness(90%) hue-rotate(5deg)',
            }}
          />
          <span className="text-2xl font-extrabold bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400 text-transparent bg-clip-text">
            Eternity Ventures
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link, idx) =>
            link.dropdown ? (
              <div
                key={idx}
                onMouseEnter={() => setDropdownOpen(idx)}
                onMouseLeave={() => setDropdownOpen(null)}
                className="relative group"
              >
                <button className="flex items-center gap-1 text-white hover:text-lime-300 font-medium transition duration-300">
                  {link.name}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {dropdownOpen === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute top-full mt-2 bg-white text-black shadow-xl rounded-lg overflow-hidden w-48"
                    >
                      {link.dropdown.map((item, idy) => (
                        <Link
                          key={idy}
                          to={item.path}
                          className="block px-4 py-3 hover:bg-gray-100 text-sm"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={idx}
                to={link.path}
                className="text-white hover:text-lime-300 font-medium transition duration-300"
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden px-6 pt-4 pb-6 bg-white text-black"
          >
            {navLinks.map((link, idx) =>
              link.dropdown ? (
                <div key={idx}>
                  <button
                    onClick={() =>
                      setDropdownOpen(dropdownOpen === idx ? null : idx)
                    }
                    className="w-full text-left py-2 font-semibold"
                  >
                    {link.name}
                  </button>
                  <AnimatePresence>
                    {dropdownOpen === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4"
                      >
                        {link.dropdown.map((item, idy) => (
                          <Link
                            key={idy}
                            to={item.path}
                            className="block py-1 text-sm hover:text-primary-600"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={idx}
                  to={link.path}
                  className="block py-2 text-sm hover:text-primary-600"
                >
                  {link.name}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gradient BG */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-900 via-blue-700 to-cyan-800
 opacity-90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
    </motion.header>
  );
};

export default Navbar;
