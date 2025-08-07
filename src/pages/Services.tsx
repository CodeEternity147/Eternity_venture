import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Users, GlobeIcon, Coins, CheckCircle, Sparkles } from 'lucide-react';

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
      image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmVhbCUyMEVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
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
      image: 'https://plus.unsplash.com/premium_photo-1661598804060-c8321e472092?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1c2luZXNzJTIwdHJhbnNmb3JtYXRpb258ZW58MHx8MHx8fDA%3D',
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
      image: 'https://plus.unsplash.com/premium_photo-1661288459621-fabc38863ee6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1c2luZXNzJTIwZGV2ZWxvcG1lbnQlMjBwYXJ0bmVyc2hpcHxlbnwwfHwwfHx8MA%3D%3D',
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
      image: 'https://images.unsplash.com/photo-1641327524708-0246aa928f16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGUlMjBtYXJrZXQlMjBleHBhbnNpb258ZW58MHx8MHx8fDA%3D',
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
      image: 'https://plus.unsplash.com/premium_photo-1661725369804-898807815b52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FwaXRhbCUyMGludmVzdG1lbnR8ZW58MHx8MHx8fDA%3D',
    },
  ];

  return (
    <div className="pt-6">
      {/* Banner */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Static Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
          <div className="absolute inset-0">
            {/* Static Background Blobs */}
            <div
              className="absolute -top-32 -right-32 w-96 h-96 lg:w-[600px] lg:h-[600px] rounded-full opacity-15 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 100%)'
              }}
            />
            
            <div
              className="absolute -bottom-40 -left-40 w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full opacity-20 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)'
              }}
            />

            <div
              className="absolute top-1/3 right-1/4 w-64 h-64 lg:w-[400px] lg:h-[400px] rounded-full opacity-10 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)'
              }}
            />
          </div>

          {/* Static Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            {/* Services Badge */}
            <div className="inline-block mb-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 blur-sm group-hover:opacity-50 transition-all duration-300"></div>
                <div className="relative flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium">Our Services</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 leading-none">
              <span className="text-white block mb-4">OUR</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
                SERVICES
              </span>
            </h1>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl blur-lg"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
                  Comprehensive business solutions designed to help your company grow, 
                  transform, and achieve sustainable success in a competitive market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Static Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950">
          <div className="absolute inset-0">
            {/* Static Background Blobs */}
            <div
              className="absolute -top-40 -left-40 w-96 h-96 lg:w-[550px] lg:h-[550px] rounded-full opacity-20 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)'
              }}
            />
            
            <div
              className="absolute -bottom-32 -right-32 w-80 h-80 lg:w-[450px] lg:h-[450px] rounded-full opacity-15 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(236, 72, 153, 0.25) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 100%)'
              }}
            />
          </div>

          {/* Static Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-8"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '80px 80px'
            }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
                    className="group relative"
                  >
                    {/* Content Glow Effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    {/* Content Glass Panel */}
                    <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 hover:border-white/30 transition-all duration-500">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${service.color}`}>
                        {index === 0 ? 'Featured Service' : 'Key Offering'}
                      </span>
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-white">{service.title}</h2>
                      <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light mb-8">
                        {service.description}
                      </p>
                      
                      <div className="mb-8">
                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">Key Features</h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5" />
                              <span className="text-gray-300 font-light">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <a 
                        href="/contact" 
                        className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-6 rounded-lg transition-all duration-300 font-medium"
                      >
                        Inquire About This Service
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={index % 2 === 1 ? 'lg:order-first' : ''}
                  >
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-lg opacity-70"></div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-lg opacity-70"></div>
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="rounded-xl shadow-2xl relative z-10 w-full h-auto object-cover border border-white/10"
                          style={{ height: '400px' }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {index < services.length - 1 && (
                  <div className="mt-20 border-b border-white/10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Static Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
          <div className="absolute inset-0">
            {/* Static Background Blobs */}
            <div
              className="absolute -top-32 -right-32 w-96 h-96 lg:w-[600px] lg:h-[600px] rounded-full opacity-15 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 100%)'
              }}
            />
            
            <div
              className="absolute -bottom-40 -left-40 w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full opacity-20 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)'
              }}
            />
          </div>

          {/* Static Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* CTA Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            {/* CTA Glass Panel */}
            <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 text-center hover:border-white/30 transition-all duration-500">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">Transform</span> Your Business?
              </h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light mb-8 max-w-3xl mx-auto">
                Contact us today to discuss how our services can help you achieve your business goals. 
                Our team of experts is ready to develop a customized solution for your specific needs.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 text-lg"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .services-title {
            font-size: 4rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .services-title {
            font-size: 3rem !important;
          }
          
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .services-title {
            font-size: 2.5rem !important;
          }
          
          .services-card {
            padding: 1rem !important;
          }
        }

        /* Focus states for accessibility */
        .services-card:focus-within {
          outline: 2px solid rgba(59, 130, 246, 0.5);
          outline-offset: 4px;
        }
      `}</style>
    </div>
  );
};

export default Services;