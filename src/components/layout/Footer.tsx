import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-white mr-1">Eternity</span>
                <span className="text-2xl font-bold text-accent-400">Ventures</span>
              </Link>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for strategic investments and business growth. We turn visions into
              successful ventures.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-accent-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-accent-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-accent-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-accent-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/ventures" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Our Ventures
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Ventures</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/ventures/code-eternity"
                  className="text-gray-300 hover:text-accent-400 transition-colors"
                >
                  CodeEternity
                </Link>
              </li>
              <li>
                <Link
                  to="/ventures/flick-lifestyle"
                  className="text-gray-300 hover:text-accent-400 transition-colors"
                >
                  Flick Lifestyle
                </Link>
              </li>
              <li>
                <Link
                  to="/ventures/green-ride"
                  className="text-gray-300 hover:text-accent-400 transition-colors"
                >
                  GreenRide
                </Link>
              </li>
              <li>
                <Link
                  to="/ventures/swaroop-ai"
                  className="text-gray-300 hover:text-accent-400 transition-colors"
                >
                  Swaroop.AI
                </Link>
              </li>
              <li>
                <Link
                  to="/ventures/radhika-infra"
                  className="text-gray-300 hover:text-accent-400 transition-colors"
                >
                  Radhika Infra
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="mr-2 h-5 w-5 text-accent-400 flex-shrink-0" />
                <span className="text-gray-300">
                  Noida, Uttar Pradesh, India
                </span>
              </li>
              <li className="flex">
                <Phone className="mr-2 h-5 w-5 text-accent-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-accent-400 transition-colors">
                  +91 9876 543 210
                </a>
              </li>
              <li className="flex">
                <Mail className="mr-2 h-5 w-5 text-accent-400 flex-shrink-0" />
                <a
                  href="mailto:team@eternityventures.co.in"
                  className="text-gray-300 hover:text-accent-400 transition-colors"
                >
                  team@eternityventures.co.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {year} Eternity Ventures. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-accent-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-accent-400 transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;