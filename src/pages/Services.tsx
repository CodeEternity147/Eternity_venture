import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  TrendingUp, 
  Users, 
  GlobeIcon, 
  Coins, 
  CheckCircle, 
  Sparkles,
  ArrowRight,
  Zap,
  Target,
  Rocket,
  Brain,
  Shield,
  ChevronRight,
  Star,
  Award,
  Layers
} from 'lucide-react';

const Services = () => {
  useEffect(() => {
    document.title = 'Our Services | Eternity Ventures';
  }, []);

  const services = [
    {
      id: 'real-estate',
      title: 'Real Estate Intelligence',
      subtitle: 'Next-Gen Property Investment',
      description: 'AI-powered real estate analytics and strategic development for maximum ROI through data-driven investment decisions and smart market timing.',
      icon: Building2,
      gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
      glowColor: 'shadow-emerald-500/30',
      bgPattern: 'bg-gradient-to-br from-emerald-500/5 to-teal-500/10',
      features: [
        'Smart Analytics',
        'ROI Optimization', 
        'Market Intelligence',
        'Premium residential property development',
        'Commercial real estate acquisition',
        'Land banking and strategic investments',
        'Real estate portfolio management',
        'Property valuation and market analysis',
      ],
      stats: { value: '₹50Cr+', label: 'Assets Managed' },
      image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmVhbCUyMEVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 'business-transformation',
      title: 'Business Evolution',
      subtitle: 'Transform • Scale • Dominate',
      description: 'Complete business transformation using cutting-edge methodologies, AI automation, and strategic innovation frameworks.',
      icon: Rocket,
      gradient: 'from-rose-400 via-pink-500 to-purple-600',
      glowColor: 'shadow-rose-500/30',
      bgPattern: 'bg-gradient-to-br from-rose-500/5 to-pink-500/10',
      features: [
        'AI Integration',
        'Process Automation',
        'Growth Scaling',
        'Business model development and validation',
        'Growth strategy formulation',
        'Process optimization and scaling',
        'Technology stack selection and implementation',
        'Organizational design and talent acquisition',
      ],
      stats: { value: '300%', label: 'Avg Growth' },
      image: 'https://plus.unsplash.com/premium_photo-1661598804060-c8321e472092?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1c2luZXNzJTIwdHJhbnNmb3JtYXRpb258ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 'business-development-partnership',
      title: 'Strategic Alliances',
      subtitle: 'Power Through Partnership',
      description: 'Build unstoppable network effects through strategic partnerships, collaborative ecosystems, and shared intelligence platforms.',
      icon: Users,
      gradient: 'from-indigo-400 via-blue-500 to-cyan-600',
      glowColor: 'shadow-indigo-500/30',
      bgPattern: 'bg-gradient-to-br from-indigo-500/5 to-blue-500/10',
      features: [
        'Network Building',
        'Ecosystem Design',
        'Collaborative Growth',
        'Strategic alliance formation and management',
        'Channel partner identification and onboarding',
        'Joint venture structuring',
        'Co-marketing and co-development initiatives',
        'Revenue share partnerships',
      ],
      stats: { value: '500+', label: 'Partnerships' },
      image: 'https://plus.unsplash.com/premium_photo-1661288459621-fabc38863ee6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1c2luZXNzJTIwZGV2ZWxvcG1lbnQlMjBwYXJ0bmVyc2hpcHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 'market-expansion',
      title: 'Global Domination',
      subtitle: 'Worldwide Market Conquest',
      description: 'Advanced market penetration strategies with local intelligence, cultural adaptation, and global scaling frameworks.',
      icon: GlobeIcon,
      gradient: 'from-amber-400 via-orange-500 to-red-600',
      glowColor: 'shadow-amber-500/30',
      bgPattern: 'bg-gradient-to-br from-amber-500/5 to-orange-500/10',
      features: [
        'Market Analysis',
        'Cultural Intelligence',
        'Global Scaling',
        'Market entry strategy development',
        'Localization and adaptation planning',
        'Regulatory compliance guidance',
        'Local partner identification',
        'Go-to-market execution support',
      ],
      stats: { value: '25+', label: 'Countries' },
      image: 'https://images.unsplash.com/photo-1641327524708-0246aa928f16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGUlMjBtYXJrZXQlMjBleHBhbnNpb258ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 'capital-investment',
      title: 'Capital Acceleration',
      subtitle: 'Smart Money • Smart Growth',
      description: 'Intelligent capital deployment with AI-driven investment strategies, risk optimization, and exponential growth models.',
      icon: Coins,
      gradient: 'from-lime-400 via-green-500 to-emerald-600',
      glowColor: 'shadow-lime-500/30',
      bgPattern: 'bg-gradient-to-br from-lime-500/5 to-green-500/10',
      features: [
        'Smart Investment',
        'Risk Management',
        'Growth Capital',
        'Early-stage equity investment',
        'Growth capital funding',
        'Strategic M&A advisory',
        'Financial restructuring',
        'Investment portfolio management',
      ],
      stats: { value: '45%', label: 'Avg Returns' },
      image: 'https://plus.unsplash.com/premium_photo-1661725369804-898807815b52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FwaXRhbCUyMGludmVzdG1lbnR8ZW58MHx8MHx8fDA%3D',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen mt-6 overflow-hidden">
        {/* Enhanced Light Theme Background with Warm Colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-rose-50 to-violet-50">
          <div className="absolute inset-0">
            {/* Colorful Background Blobs */}
            <div
              className="absolute -top-32 -right-32 w-96 h-96 lg:w-[600px] lg:h-[600px] rounded-full opacity-20 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(251, 146, 60, 0.25) 0%, rgba(236, 72, 153, 0.15) 50%, transparent 100%)'
              }}
            />
            
            <div
              className="absolute -bottom-40 -left-40 w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full opacity-25 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, rgba(59, 130, 246, 0.12) 50%, transparent 100%)'
              }}
            />

            <div
              className="absolute top-1/3 right-1/4 w-64 h-64 lg:w-[400px] lg:h-[400px] rounded-full opacity-18 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.18) 0%, rgba(14, 165, 233, 0.1) 50%, transparent 100%)'
              }}
            />
          </div>

          {/* Enhanced Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-8"
            style={{
              backgroundImage: 'linear-gradient(rgba(251, 146, 60, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 146, 60, 0.15) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 mt-4 max-w-7xl pt-4 pb-24">
          <div className="text-center">
            {/* Enhanced Badge */}
            
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-black leading-none">
              <div className="text-slate-800 mb-4">
                STRATEGIC
              </div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500">
                SERVICES
              </div>
            </h1>
            
            <div className="relative max-w-4xl mx-auto mt-8">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-2xl blur-lg"></div>
              <div className="relative bg-white/95 backdrop-blur-xl border border-orange-200/50 rounded-2xl p-6 lg:p-8 shadow-xl">
                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
                  Comprehensive solutions designed to{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 font-bold">accelerate growth</span> and{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-bold">maximize returns</span> through innovative strategies and cutting-edge technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-24 overflow-hidden">
        {/* Fresh Light Theme Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
          <div className="absolute inset-0">
            {/* Colorful Background Blobs */}
            <div
              className="absolute -top-32 -right-32 w-96 h-96 lg:w-[600px] lg:h-[600px] rounded-full opacity-15 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 100%)'
              }}
            />
            
            <div
              className="absolute -bottom-40 -left-40 w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full opacity-18 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(16, 185, 129, 0.08) 50%, transparent 100%)'
              }}
            />

            <div
              className="absolute top-1/3 left-1/4 w-64 h-64 lg:w-[400px] lg:h-[400px] rounded-full opacity-12 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, rgba(59, 130, 246, 0.06) 50%, transparent 100%)'
              }}
            />
          </div>

          {/* Enhanced Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-6"
            style={{
              backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.12) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
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
                    <div className={`absolute -inset-2 bg-gradient-to-r ${service.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-25 transition-all duration-500`}></div>
                    
                    {/* Content Glass Panel */}
                    <div className="relative bg-white/95 backdrop-blur-2xl border border-cyan-200/50 rounded-2xl p-8 hover:border-cyan-300/50 transition-all duration-500 shadow-xl hover:shadow-2xl">
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 bg-gradient-to-r from-cyan-400 to-teal-500 text-white">
                        {index === 0 ? 'Featured Service' : 'Key Offering'}
                      </span>
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-800">{service.title}</h2>
                      <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8">
                        {service.description}
                      </p>
                      
                      <div className="mb-8">
                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-800">Key Features</h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-600 font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                            {service.stats.value}
                          </div>
                          <div className="text-slate-600 text-sm">{service.stats.label}</div>
                        </div>
                        <a 
                          href="/contact" 
                          className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white py-3 px-6 rounded-lg transition-all duration-300 font-medium group-hover:scale-105"
                        >
                          <span>Inquire About This Service</span>
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
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
                      <div className={`absolute -inset-2 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-25 transition-all duration-500`}></div>
                      <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-500/10 rounded-lg opacity-70"></div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-500/10 rounded-lg opacity-70"></div>
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="rounded-xl shadow-2xl relative z-10 w-full h-auto object-cover border border-cyan-200/50"
                          style={{ height: '400px' }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {index < services.length - 1 && (
                  <div className="mt-20 border-b border-cyan-200/50"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Fresh Light Theme Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
          <div className="absolute inset-0">
            {/* Colorful Background Blobs */}
            <div
              className="absolute -top-32 -right-32 w-96 h-96 lg:w-[600px] lg:h-[600px] rounded-full opacity-15 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 100%)'
              }}
            />
            
            <div
              className="absolute -bottom-40 -left-40 w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full opacity-18 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(16, 185, 129, 0.08) 50%, transparent 100%)'
              }}
            />
          </div>

          {/* Enhanced Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-6"
            style={{
              backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.12) 1px, transparent 1px)',
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
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-teal-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
            
            {/* CTA Glass Panel */}
            <div className="relative bg-white/95 backdrop-blur-2xl border border-cyan-200/50 rounded-3xl p-12 text-center hover:border-cyan-300/50 transition-all duration-500 shadow-2xl">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-6">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500">Transform</span> Your Business?
              </h2>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
                Contact us today to discuss how our services can help you achieve your business goals. 
                Our team of experts is ready to develop a customized solution for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-2xl opacity-40 blur-sm group-hover:opacity-60 transition-opacity duration-300"></div>
                  <a 
                    href="/contact" 
                    className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                  >
                    <Zap className="w-5 h-5" />
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>

                <div className="group">
                  <a
                    href="/about"
                    className="flex items-center justify-center gap-3 bg-white/90 backdrop-blur-xl border border-emerald-200 text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:scale-105 hover:border-emerald-300 transition-all duration-300 shadow-lg"
                  >
                    <Target className="w-5 h-5 text-emerald-500" />
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 text-emerald-500" />
                  </a>
                </div>
              </div>
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
          outline: 2px solid rgba(6, 182, 212, 0.5);
          outline-offset: 4px;
        }

        /* Enhanced hover animations */
        .group:hover .group-hover\\:scale-105 {
          transform: scale(1.05);
        }

        .group:hover .group-hover\\:translate-x-1 {
          transform: translateX(0.25rem);
        }

        .group:hover .group-hover\\:rotate-3 {
          transform: rotate(3deg);
        }

        /* Smooth transitions */
        * {
          transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }
      `}</style>
    </div>
  );
};

export default Services;