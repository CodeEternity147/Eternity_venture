import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  TrendingUp, 
  Users, 
  GlobeIcon, 
  Coins, 
  CheckCircle, 
  Sparkles,
  ArrowRight,
  ArrowLeft,
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
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Services = () => {
  const [currentService, setCurrentService] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    document.title = 'Our Services | Eternity Ventures';
  }, []);

  const services = [
    {
      id: 'startup-mentorship',
      title: 'Startup Mentorship',
      subtitle: 'Expert Guidance & Strategy',
      description: 'Comprehensive mentorship programs providing strategic guidance, business planning, and growth strategies to help startups navigate their journey from ideation to market success.',
      icon: Target,
      gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
      glowColor: 'shadow-emerald-500/30',
      bgPattern: 'bg-gradient-to-br from-emerald-500/5 to-teal-500/10',
      features: [
        'Strategic Planning',
        'Business Development', 
        'Market Entry',
        'Business model validation and refinement',
        'Growth strategy formulation',
        'Team building and leadership development',
        'Product-market fit optimization',
        'Scaling strategy and execution',
      ],
      stats: { value: '100+', label: 'Startups Mentored' },
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVudG9yc2hpcHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 'funding-support',
      title: 'Funding Support',
      subtitle: 'Capital • Connections • Growth',
      description: 'End-to-end funding assistance including investor connections, pitch deck preparation, financial modeling, and strategic fundraising support for startups at every stage.',
      icon: TrendingUp,
      gradient: 'from-rose-400 via-pink-500 to-purple-600',
      glowColor: 'shadow-rose-500/30',
      bgPattern: 'bg-gradient-to-br from-rose-500/5 to-pink-500/10',
      features: [
        'Investor Network',
        'Pitch Preparation',
        'Financial Planning',
        'Seed funding and angel investment connections',
        'Venture capital fundraising support',
        'Financial modeling and projections',
        'Due diligence preparation',
        'Investment term sheet negotiation',
      ],
      stats: { value: '₹25Cr+', label: 'Funds Raised' },
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVuZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 'legal-compliance',
      title: 'Legal & Compliance',
      subtitle: 'Regulatory Excellence',
      description: 'Comprehensive legal support including company registration, compliance management, intellectual property protection, and regulatory guidance to ensure startups operate within legal frameworks.',
      icon: Shield,
      gradient: 'from-indigo-400 via-blue-500 to-cyan-600',
      glowColor: 'shadow-indigo-500/30',
      bgPattern: 'bg-gradient-to-br from-indigo-500/5 to-blue-500/10',
      features: [
        'Company Registration',
        'IP Protection',
        'Compliance Management',
        'Business entity formation and structuring',
        'Intellectual property strategy and protection',
        'Regulatory compliance and licensing',
        'Contract drafting and negotiation',
        'Employment law and HR compliance',
      ],
      stats: { value: '50+', label: 'Legal Cases' },
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVnYWwlMjBjb21wbGlhbmNlfGVufDB8fDB8fHww',
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting',
      subtitle: 'Technology Solutions',
      description: 'Comprehensive technology solutions for startups including digital transformation, software development, cloud infrastructure, and cybersecurity to build scalable tech foundations.',
      icon: Layers,
      gradient: 'from-amber-400 via-orange-500 to-red-600',
      glowColor: 'shadow-amber-500/30',
      bgPattern: 'bg-gradient-to-br from-amber-500/5 to-orange-500/10',
      features: [
        'Digital Transformation',
        'Software Development',
        'Cloud Infrastructure',
        'Technology stack selection and implementation',
        'Custom software development',
        'Cloud migration and optimization',
        'Cybersecurity and data protection',
        'DevOps and infrastructure management',
      ],
      stats: { value: '75+', label: 'Tech Projects' },
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXQlMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 'real-estate',
      title: 'Real Estate Solutions',
      subtitle: 'Strategic Property Support',
      description: 'Strategic real estate solutions for startups including office space acquisition, property development consulting, and investment opportunities to support business growth.',
      icon: Building2,
      gradient: 'from-lime-400 via-green-500 to-emerald-600',
      glowColor: 'shadow-lime-500/30',
      bgPattern: 'bg-gradient-to-br from-lime-500/5 to-green-500/10',
      features: [
        'Office Space Acquisition',
        'Property Development',
        'Investment Opportunities',
        'Commercial property sourcing and leasing',
        'Real estate investment strategy',
        'Property development consulting',
        'Location analysis and site selection',
        'Real estate portfolio management',
      ],
      stats: { value: '₹50Cr+', label: 'Assets Managed' },
      image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmVhbCUyMEVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 'collaboration-support',
      title: 'Collaboration Support',
      subtitle: 'Partnership & Networking',
      description: 'Strategic partnership and collaboration services including business development, networking opportunities, joint venture facilitation, and ecosystem building for startups.',
      icon: Users,
      gradient: 'from-violet-400 via-purple-500 to-indigo-600',
      glowColor: 'shadow-violet-500/30',
      bgPattern: 'bg-gradient-to-br from-violet-500/5 to-purple-500/10',
      features: [
        'Strategic Partnerships',
        'Networking Opportunities',
        'Joint Ventures',
        'Business development and partnership building',
        'Industry networking and connections',
        'Joint venture structuring and facilitation',
        'Ecosystem building and community development',
        'Collaborative project management',
      ],
      stats: { value: '200+', label: 'Partnerships' },
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGFib3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    },
  ];

  const nextService = () => {
    setDirection(1);
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setDirection(-1);
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToService = (index: number) => {
    setDirection(index > currentService ? 1 : -1);
    setCurrentService(index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen mt-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-rose-50 to-violet-50">
          <div className="absolute inset-0">
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
          <div 
            className="absolute inset-0 opacity-8"
            style={{
              backgroundImage: 'linear-gradient(rgba(251, 146, 60, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 146, 60, 0.15) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 mt-2 sm:mt-4 max-w-7xl pt-2 sm:pt-4 pb-12 sm:pb-16 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh] pt-8 sm:pt-12 lg:pt-16">
            {/* Left Side - Heading */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
                <div className="text-slate-800 mb-2">
                  COMPREHENSIVE
                </div>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500">
                  STARTUP SUPPORT
                </div>
              </h1>
              
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-2xl blur-lg"></div>
                <div className="relative bg-white/95 backdrop-blur-xl border border-orange-200/50 rounded-2xl p-4 sm:p-6 shadow-xl">
                  <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
                    Holistic startup support designed to{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 font-bold">accelerate growth</span> and{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-bold">ensure success</span> through expert guidance and comprehensive assistance.
                  </p>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <button className="group relative px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 group-hover:from-orange-600 group-hover:to-pink-600 transition-all duration-300"></div>
                  <div className="relative flex items-center justify-center gap-2">
                    View All Services
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </button>
                
                <button className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-semibold text-slate-700 bg-white/80 backdrop-blur-xl border border-orange-200/50 hover:bg-white/95 hover:border-orange-300/50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Consultation
                </button>
              </div>
            </div>

            {/* Right Side - Hero Animation */}
            <div className="relative order-2 lg:order-2">
              {/* Floating Elements - Hidden on mobile */}
              <div className="hidden lg:block absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-orange-400/15 to-pink-500/15 rounded-3xl backdrop-blur-xl border border-orange-200/50 z-10 opacity-80"></div>
              
              <div className="hidden lg:block absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-emerald-400/15 to-cyan-500/15 rounded-3xl backdrop-blur-xl border border-emerald-200/50 z-10 opacity-60"></div>
              
              <div className="hidden lg:block absolute top-1/4 -left-4 w-16 h-16 bg-gradient-to-br from-violet-400/15 to-purple-500/15 rounded-2xl backdrop-blur-xl border border-violet-200/50 z-10 opacity-70"></div>

              {/* Main Animation Container */}
              <div className="relative z-20 flex justify-center lg:justify-end">
                {/* Enhanced Glow Effect */}
                <div className="absolute -inset-6 bg-gradient-to-r from-orange-400/20 via-pink-500/20 to-violet-500/20 rounded-3xl blur-2xl opacity-40"></div>
                <DotLottieReact
                  src="https://lottie.host/77c4e7ec-03ed-40b1-a7d7-40c32ba88085/QomWGTrSwg.lottie"
                  loop
                  autoplay
                  className='h-[250px] w-[400px] sm:h-[300px] sm:w-[500px] md:h-[350px] md:w-[600px] lg:h-[400px] lg:w-[700px]'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
          <div className="absolute inset-0">
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
          <div 
            className="absolute inset-0 opacity-6"
            style={{
              backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.12) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Carousel Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6">
              <span className="text-slate-800">Our </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500">
                Services
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our comprehensive range of startup support services designed to accelerate your business growth and success
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={prevService}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-xl border border-cyan-200/50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
            >
              <ArrowLeft className="w-4 h-4 sm:w-6 sm:h-6 text-slate-700 group-hover:text-cyan-600 transition-colors" />
            </button>
            
            <button
              onClick={nextService}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-xl border border-cyan-200/50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
            >
              <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 text-slate-700 group-hover:text-cyan-600 transition-colors" />
            </button>

            {/* Carousel Content */}
            <div className="relative overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentService}
                  custom={direction}
                  initial={{ 
                    opacity: 0,
                    x: direction > 0 ? 300 : -300,
                    scale: 0.8
                  }}
                  animate={{ 
                    opacity: 1,
                    x: 0,
                    scale: 1
                  }}
                  exit={{ 
                    opacity: 0,
                    x: direction > 0 ? -300 : 300,
                    scale: 0.8
                  }}
                  transition={{ 
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                  className="bg-white/95 backdrop-blur-2xl border border-cyan-200/50 rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-6 sm:space-y-8">
                      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${services[currentService].gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                          {React.createElement(services[currentService].icon, { className: "w-6 h-6 sm:w-8 sm:h-8 text-white" })}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-medium text-slate-600">{services[currentService].subtitle}</div>
                          <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-slate-800">{services[currentService].title}</div>
                        </div>
                      </div>
                      
                      <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
                        {services[currentService].description}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="space-y-2 sm:space-y-3">
                          <h4 className="font-semibold text-slate-800 text-sm sm:text-base">Key Features</h4>
                          <ul className="space-y-1 sm:space-y-2">
                            {services[currentService].features.slice(0, 4).map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-xs sm:text-sm text-slate-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="space-y-2 sm:space-y-3">
                          <h4 className="font-semibold text-slate-800 text-sm sm:text-base">Performance</h4>
                          <div className={`text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${services[currentService].gradient}`}>
                            {services[currentService].stats.value}
                          </div>
                          <div className="text-xs sm:text-sm text-slate-600">{services[currentService].stats.label}</div>
                        </div>
                      </div>
                      
                     
                    </div>
                    
                    {/* Image */}
                    <div className="relative">
                      <div className={`absolute -inset-2 sm:-inset-4 bg-gradient-to-r ${services[currentService].gradient} rounded-2xl blur-xl opacity-20`}></div>
                      <img 
                        src={services[currentService].image} 
                        alt={services[currentService].title} 
                        className="relative rounded-2xl shadow-2xl w-full h-48 sm:h-64 lg:h-80 xl:h-96 object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToService(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentService 
                      ? 'bg-gradient-to-r from-cyan-500 to-teal-500 scale-125' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {/* Service Counter */}
            <div className="text-center mt-4 sm:mt-6">
              <span className="text-xs sm:text-sm text-slate-600">
                {currentService + 1} of {services.length} services
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
          <div className="absolute inset-0">
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
          <div 
            className="absolute inset-0 opacity-6"
            style={{
              backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.12) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-teal-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
            
            <div className="relative bg-white/95 backdrop-blur-2xl border border-cyan-200/50 rounded-3xl p-6 sm:p-8 lg:p-12 text-center hover:border-cyan-300/50 transition-all duration-500 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-800 mb-4 sm:mb-6">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500">Transform</span> Your Business?
              </h2>
              <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto">
                Contact us today to discuss how our services can help you achieve your business goals. 
                Our team of experts is ready to develop a customized solution for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-2xl opacity-40 blur-sm group-hover:opacity-60 transition-opacity duration-300"></div>
                  <a 
                    href="/contact" 
                    className="relative flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                  >
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>

                <div className="group">
                  <a
                    href="/about"
                    className="flex items-center justify-center gap-2 sm:gap-3 bg-white/90 backdrop-blur-xl border border-emerald-200 text-slate-700 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg hover:bg-white hover:scale-105 hover:border-emerald-300 transition-all duration-300 shadow-lg"
                  >
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 text-emerald-500" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;