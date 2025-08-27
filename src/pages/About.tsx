import React, { useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { 
  Code, 
  BookOpen, 
  Building, 
  Scale, 
  Sparkles, 
  Target, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Award,
  Star,
  Zap,
  Rocket,
  Eye,
  Crown,
  Briefcase,
  Lightbulb
} from 'lucide-react';

const About = () => {
  useEffect(() => {
    document.title = 'About Us | Eternity Ventures';
  }, []);

  // Constants
  const DIVISIONS = [
    {
      id: 1,
      title: 'IT Consulting',
      description: 'Strategic technological solutions and digital transformation services for modern businesses.',
      icon: Code,
      gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
      glowColor: 'shadow-cyan-500/30',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20',
    },
    {
      id: 2,
      title: 'EdTech',
      description: 'Revolutionizing education through innovative technology solutions and interactive learning.',
      icon: BookOpen,
      gradient: 'from-emerald-400 via-green-500 to-teal-600',
      glowColor: 'shadow-emerald-500/30',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
    },
    {
      id: 3,
      title: 'Real Estate',
      description: 'Premium residential/commercial properties with sustainability focus and modern amenities.',
      icon: Building,
      gradient: 'from-purple-400 via-violet-500 to-indigo-600',
      glowColor: 'shadow-purple-500/30',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
    },
    {
      id: 4,
      title: 'Legal Advisory',
      description: 'Comprehensive legal services for regulatory compliance and business protection.',
      icon: Scale,
      gradient: 'from-orange-400 via-red-500 to-pink-600',
      glowColor: 'shadow-orange-500/30',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20',
    },
  ];

  const VALUES = [
    {
      title: 'Integrity',
      content: 'Upholding highest ethical standards in all interactions and business decisions.',
      items: ['Transparent communication', 'Honest feedback', 'Responsible governance'],
      gradient: 'from-blue-400 via-cyan-500 to-indigo-600',
      icon: Target,
    },
    {
      title: 'Innovation',
      content: 'Embracing creative solutions and bold approaches to solve complex challenges.',
      items: ['Continuous learning', 'Embracing change', 'Problem-solving mindset'],
      gradient: 'from-purple-400 via-pink-500 to-red-600',
      icon: Sparkles,
    },
    {
      title: 'Collaboration',
      content: 'Power of partnerships and teamwork to achieve extraordinary results.',
      items: ['Strategic partnerships', 'Inclusive teamwork', 'Knowledge sharing'],
      gradient: 'from-emerald-400 via-green-500 to-teal-600',
      icon: Users,
    },
  ];

  const FOUNDER_INFO = {
    name: 'Adarsh Srivastava',
    position: 'Founder & CEO',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQECRqG2QDJNOg/profile-displayphoto-shrink_200_200/B56ZRAjzR0H0Ac-/0/1736249916228?e=2147483647&v=beta&t=UlbblVSE25loL7zmB4epaUUJfzjGZy-HP9gLqVTVhWY',
    quote: 'We believe in the power of entrepreneurship to solve pressing challenges and create lasting impact.',
    description: [
      '3+ years experience in entrepreneurship and venture capital.',
      'Founded two successful startups prior to Eternity Ventures.',
      'Led investments in 5+ companies across diverse sectors.',
    ],
  };

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
   
  <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 mt-2 sm:mt-4 max-w-7xl pt-2 sm:pt-4 pb-12 sm:pb-16 lg:pb-24">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh] pt-8 sm:pt-12 lg:pt-16">
      {/* Left Side - Heading */}
      <div className="space-y-6 sm:space-y-8 order-1 lg:order-1">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
          <div className="text-slate-800 mb-2">
            CELEBRATING
          </div>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 mb-2">
            DIVERSITY
          </div>
          <div className="text-slate-800">
            SHAPING THE FUTURE
          </div>
        </h1>
        
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-2xl blur-lg"></div>
          <div className="relative bg-white/95 backdrop-blur-xl border border-orange-200/50 rounded-2xl p-4 sm:p-6 shadow-xl">
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
              We're a diverse team committed to empowering visionary founders and transforming innovative ideas into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 font-bold">
                successful ventures
              </span>.
            </p>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
          <button className="group relative px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 group-hover:from-orange-600 group-hover:to-pink-600 transition-all duration-300"></div>
            <div className="relative flex items-center justify-center gap-2">
              Our Story
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </button>
          
          <button className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-semibold text-slate-700 bg-white/80 backdrop-blur-xl border border-orange-200/50 hover:bg-white/95 hover:border-orange-300/50 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Meet Our Team
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
            src="https://lottie.host/d168f8e1-45a6-4b75-abe7-a0016858d9c9/D1LwuXHCwu.lottie"
            loop
            autoplay
            className='h-[250px] w-[400px] sm:h-[300px] sm:w-[500px] md:h-[350px] md:w-[600px] lg:h-[400px] lg:w-[700px]'
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Vision & Mission */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
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
        
        <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-6 sm:space-y-8">
              {/* Story Badge */}
              <div className="inline-block">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full opacity-30 blur-sm group-hover:opacity-50 transition-all duration-300"></div>
                  <div className="relative flex items-center gap-2 sm:gap-3 bg-white/90 backdrop-blur-xl border border-cyan-200 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-xl">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center">
                      <Target className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-slate-700 font-bold text-sm sm:text-base">Our Story</span>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-gray-800 font-black mb-4 sm:mb-6">
                Vision & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500">Mission</span>
              </h2>
              
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-2xl blur-lg"></div>
                <div className="relative bg-white/95 backdrop-blur-xl border border-cyan-200/50 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed">
                    Founded in 2023 to identify and nurture promising entrepreneurs across India with a focus on early-stage startups with strong teams and scalable models.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="group relative transform transition-all duration-300 hover:scale-105">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-2xl opacity-0 blur group-hover:opacity-25 transition-all duration-300"></div>
                  <div className="relative bg-white/90 backdrop-blur-2xl border border-cyan-200/50 rounded-2xl p-4 sm:p-6 hover:border-cyan-300/50 transition-all duration-300 shadow-xl">
                    <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-slate-800">Our Vision</h3>
                    <p className="text-slate-600 text-sm sm:text-base">
                      Catalyst for India's next generation of transformative companies.
                    </p>
                  </div>
                </div>
                <div className="group relative transform transition-all duration-300 hover:scale-105">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-2xl opacity-0 blur group-hover:opacity-25 transition-all duration-300"></div>
                  <div className="relative bg-white/90 backdrop-blur-2xl border border-emerald-200/50 rounded-2xl p-4 sm:p-6 hover:border-emerald-300/50 transition-all duration-300 shadow-xl">
                    <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-slate-800">Our Mission</h3>
                    <p className="text-slate-600 text-sm sm:text-base">
                      Empower entrepreneurs with capital, expertise, and connections.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Card */}
            <div className="relative">
              <div className="group relative transform transition-all duration-500 hover:scale-105">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-teal-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
                <div className="relative bg-white/95 backdrop-blur-2xl border border-cyan-200/50 rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-cyan-300/50 transition-all duration-500 shadow-2xl">
                  <div className="flex items-start mb-6 sm:mb-8">
                    <div className="relative mr-3 sm:mr-4">
                      <img
                        src={FOUNDER_INFO.image}
                        alt="Founder"
                        className="h-12 w-12 sm:h-16 sm:w-16 rounded-xl object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-800">{FOUNDER_INFO.name}</h3>
                      <p className="text-cyan-600 font-medium text-sm sm:text-base">{FOUNDER_INFO.position}</p>
                    </div>
                  </div>
                  <blockquote className="text-slate-600 italic mb-4 sm:mb-6 border-l-4 border-cyan-500 pl-3 sm:pl-4 text-base sm:text-lg">
                    "{FOUNDER_INFO.quote}"
                  </blockquote>
                  <div className="text-slate-600 space-y-3 sm:space-y-4">
                    {FOUNDER_INFO.description.map((text, index) => (
                      <div key={index} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm sm:text-base">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Divisions */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
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
        
        <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            {/* Expertise Badge */}
            <div className="inline-block mb-6 sm:mb-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full opacity-30 blur-sm group-hover:opacity-50 transition-all duration-300"></div>
                <div className="relative flex items-center gap-2 sm:gap-3 bg-white/90 backdrop-blur-xl border border-cyan-200 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-xl">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-slate-700 font-bold text-sm sm:text-base">Our Expertise</span>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-gray-800 font-black mb-4 sm:mb-6">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500">Divisions</span>
            </h2>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-2xl blur-lg"></div>
              <div className="relative bg-white/95 backdrop-blur-xl border border-cyan-200/50 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed">
                  Comprehensive support across key business domains through multi-disciplinary approach and expert guidance.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {DIVISIONS.map((division, index) => (
              <div
                key={division.id}
                className="group relative transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                {/* Card Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${division.gradient} rounded-3xl opacity-0 blur group-hover:opacity-25 transition-all duration-500`}></div>
                
                {/* Main Card */}
                <div className="relative bg-white/95 backdrop-blur-2xl border border-cyan-200/50 rounded-3xl p-4 sm:p-6 lg:p-8 h-full hover:border-cyan-300/50 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl">
                  
                  {/* Status Indicator */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-emerald-600 font-medium text-xs">Active</span>
                    </div>
                  </div>

                  {/* Icon Container */}
                  <div className="relative mb-4 sm:mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${division.gradient} rounded-2xl p-0.5 ${division.glowColor} shadow-lg`}>
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <division.icon className="w-6 h-6 sm:w-8 sm:h-8 text-slate-700" />
                      </div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-emerald-400 rounded-full opacity-80"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${division.gradient} mb-1 sm:mb-2`}>
                      {division.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      {division.description}
                    </p>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-cyan-500/10 backdrop-blur-xl border border-cyan-200/50 rounded-lg opacity-40"></div>
                  <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 bg-teal-500/10 backdrop-blur-xl border border-teal-200/50 rounded-lg opacity-30"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
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
        
       
      </section>

      {/* Enhanced Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .about-title {
            font-size: 4rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .about-title {
            font-size: 3rem !important;
          }
          
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .about-title {
            font-size: 2.5rem !important;
          }
          
          .about-card {
            padding: 1rem !important;
          }
        }

        /* Focus states for accessibility */
        .about-card:focus-within {
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

export default About;