import React from 'react';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Users, GlobeIcon, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceItems = [
  {
    id: 1,
    title: 'Real Estate',
    description: 'Strategic investment and development in premium real estate assets for maximum value creation.',
    icon: <Building2 className="h-8 w-8" />,
    color: 'bg-blue-50 text-blue-600',
    delay: 0.1,
  },
  {
    id: 2,
    title: 'Business Transformation',
    description: 'End-to-end guidance to transform your business from concept to thriving enterprise.',
    icon: <TrendingUp className="h-8 w-8" />,
    color: 'bg-purple-50 text-purple-600',
    delay: 0.2,
  },
  {
    id: 3,
    title: 'Business Dev Partnership',
    description: 'Strategic partnerships to accelerate growth through complementary strengths and networks.',
    icon: <Users className="h-8 w-8" />,
    color: 'bg-green-50 text-green-600',
    delay: 0.3,
  },
  {
    id: 4,
    title: 'Market Expansion',
    description: 'Expertise and resources to help your business enter new markets and scale globally.',
    icon: <GlobeIcon className="h-8 w-8" />,
    color: 'bg-red-50 text-red-600',
    delay: 0.4,
  },
  {
    id: 5,
    title: 'Capital & Investment',
    description: 'Smart capital investment coupled with strategic guidance to fuel sustainable growth.',
    icon: <Coins className="h-8 w-8" />,
    color: 'bg-amber-50 text-amber-600',
    delay: 0.5,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  return (
    <section className="section bg-gray-50 py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Help Businesses Grow</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We offer comprehensive services designed to transform visionary ideas into
            thriving enterprises through strategic investments and partnership.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {serviceItems.map((service) => (
            <motion.div 
              key={service.id} 
              variants={item}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 h-full border border-gray-100">
                <div className={`${service.color} p-3 rounded-lg inline-block mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700"
                >
                  Learn more
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;