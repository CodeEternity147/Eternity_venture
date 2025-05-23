import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Users, GlobeIcon, Coins, CheckCircle } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    document.title = 'Our Services | Eternity Ventures';
  }, []);

  const services = [
    {
      id: 'real-estate',
      title: 'Real Estate',
      description: 'Strategic investment and development in premium real estate assets for maximum value creation.',
      icon: <Building2 className="h-10 w-10" />,
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      features: [
        'Premium residential property development',
        'Commercial real estate acquisition',
        'Land banking and strategic investments',
        'Real estate portfolio management',
        'Property valuation and market analysis',
      ],
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'business-transformation',
      title: 'Business Transformation (0 to 100)',
      description: 'End-to-end guidance to transform your business from concept to thriving enterprise.',
      icon: <TrendingUp className="h-10 w-10" />,
      color: 'bg-purple-50 text-purple-600 border-purple-200',
      features: [
        'Business model development and validation',
        'Growth strategy formulation',
        'Process optimization and scaling',
        'Technology stack selection and implementation',
        'Organizational design and talent acquisition',
      ],
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'business-development-partnership',
      title: 'Business Development Partnership',
      description: 'Strategic partnerships to accelerate growth through complementary strengths and networks.',
      icon: <Users className="h-10 w-10" />,
      color: 'bg-green-50 text-green-600 border-green-200',
      features: [
        'Strategic alliance formation and management',
        'Channel partner identification and onboarding',
        'Joint venture structuring',
        'Co-marketing and co-development initiatives',
        'Revenue share partnerships',
      ],
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'market-expansion',
      title: 'Market Expansion',
      description: 'Expertise and resources to help your business enter new markets and scale globally.',
      icon: <GlobeIcon className="h-10 w-10" />,
      color: 'bg-red-50 text-red-600 border-red-200',
      features: [
        'Market entry strategy development',
        'Localization and adaptation planning',
        'Regulatory compliance guidance',
        'Local partner identification',
        'Go-to-market execution support',
      ],
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'capital-investment',
      title: 'Capital & Investment',
      description: 'Smart capital investment coupled with strategic guidance to fuel sustainable growth.',
      icon: <Coins className="h-10 w-10" />,
      color: 'bg-amber-50 text-amber-600 border-amber-200',
      features: [
        'Early-stage equity investment',
        'Growth capital funding',
        'Strategic M&A advisory',
        'Financial restructuring',
        'Investment portfolio management',
      ],
      image: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <div className="pt-20">
      {/* Banner */}
      <section className="relative bg-gradient-to-r from-primary-900 to-secondary-900 py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3876394/pexels-photo-3876394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Comprehensive business solutions designed to help your company grow, 
            transform, and achieve sustainable success in a competitive market.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className="scroll-mt-20"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${service.color}`}>
                      {index === 0 ? 'Featured Service' : 'Key Offering'}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
                    <p className="text-gray-600 text-lg mb-8">
                      {service.description}
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a 
                      href="/contact" 
                      className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg transition-colors"
                    >
                      Inquire About This Service
                    </a>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={index % 2 === 1 ? 'lg:order-first' : ''}
                  >
                    <div className="relative">
                      <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-lg opacity-70"></div>
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary-100 rounded-lg opacity-70"></div>
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="rounded-xl shadow-lg relative z-10 w-full h-auto object-cover"
                        style={{ height: '400px' }}
                      />
                    </div>
                  </motion.div>
                </div>
                
                {index < services.length - 1 && (
                  <div className="mt-20 border-b border-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-primary-800 to-secondary-800 rounded-2xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-200 text-lg mb-8 max-w-3xl mx-auto">
                Contact us today to discuss how our services can help you achieve your business goals. 
                Our team of experts is ready to develop a customized solution for your specific needs.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-primary-900 font-medium py-3 px-8 rounded-lg transition-colors text-lg"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;