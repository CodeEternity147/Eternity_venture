import React, { useEffect } from 'react';
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
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    quote: 'We believe in the power of entrepreneurship to solve pressing challenges and create lasting impact.',
    description: [
      '15+ years experience in entrepreneurship and venture capital.',
      'Founded two successful startups prior to Eternity Ventures.',
      'Led investments in 50+ companies across diverse sectors.',
    ],
  };

  return (
    <div className="pt-6">
      {/* Hero Section */}
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

        {/* Static Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                left: `${(i * 120) % 1200}px`,
                top: `${(i * 80) % 800}px`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            {/* About Badge */}
            <div className="inline-block mb-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 blur-sm group-hover:opacity-50 transition-all duration-300"></div>
                <div className="relative flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium">About Us</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 leading-none">
              <span className="text-white block mb-4">CELEBRATING</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
                DIVERSITY
              </span>
              <span className="text-white block mt-4">SHAPING THE FUTURE</span>
            </h1>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl blur-lg"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
                  We're a diverse team committed to empowering visionary founders and transforming innovative ideas into successful ventures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Story Badge */}
              <div className="inline-block">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30 blur-sm"></div>
                  <div className="relative flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-medium">Our Story</span>
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
                Vision & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">Mission</span>
              </h2>
              
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl blur-lg"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8">
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
                    Founded in 2019 to identify and nurture promising entrepreneurs across India with a focus on early-stage startups with strong teams and scalable models.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group relative transform transition-all duration-300 hover:scale-105">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 blur group-hover:opacity-30 transition-all duration-300"></div>
                  <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 hover:border-white/30 transition-all duration-300">
                    <h3 className="font-bold text-xl mb-3 text-white">Our Vision</h3>
                    <p className="text-gray-300">
                      Catalyst for India's next generation of transformative companies.
                    </p>
                  </div>
                </div>
                <div className="group relative transform transition-all duration-300 hover:scale-105">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 blur group-hover:opacity-30 transition-all duration-300"></div>
                  <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 hover:border-white/30 transition-all duration-300">
                    <h3 className="font-bold text-xl mb-3 text-white">Our Mission</h3>
                    <p className="text-gray-300">
                      Empower entrepreneurs with capital, expertise, and connections.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Card */}
            <div className="relative">
              <div className="group relative transform transition-all duration-500 hover:scale-105">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
                <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 hover:border-white/30 transition-all duration-500">
                  <div className="flex items-start mb-8">
                    <div className="relative mr-4">
                      <img
                        src={FOUNDER_INFO.image}
                        alt="Founder"
                        className="h-16 w-16 rounded-xl object-cover"
                      />
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-20"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{FOUNDER_INFO.name}</h3>
                      <p className="text-purple-400 font-medium">{FOUNDER_INFO.position}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-300 italic mb-6 border-l-4 border-purple-500 pl-4 text-lg">
                    "{FOUNDER_INFO.quote}"
                  </blockquote>
                  <div className="text-gray-300 space-y-4">
                    {FOUNDER_INFO.description.map((text, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <p>{text}</p>
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
          <div className="text-center mb-20">
            {/* Expertise Badge */}
            <div className="inline-block mb-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full opacity-30 blur-sm"></div>
                <div className="relative flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium">Our Expertise</span>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-400">Divisions</span>
            </h2>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-2xl blur-lg"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
                  Comprehensive support across key business domains through multi-disciplinary approach and expert guidance.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DIVISIONS.map((division, index) => (
              <div
                key={division.id}
                className="group relative transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                {/* Card Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${division.gradient} rounded-3xl opacity-0 blur group-hover:opacity-30 transition-all duration-500`}></div>
                
                {/* Main Card */}
                <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 h-full hover:border-white/30 transition-all duration-500 overflow-hidden">
                  
                  {/* Status Indicator */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 font-medium text-xs">Active</span>
                    </div>
                  </div>

                  {/* Icon Container */}
                  <div className="relative mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <div className={`w-16 h-16 bg-gradient-to-br ${division.gradient} rounded-2xl p-0.5 ${division.glowColor} shadow-2xl`}>
                      <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
                        <division.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full opacity-80"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${division.gradient} mb-2`}>
                      {division.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {division.description}
                    </p>
                  </div>

                  {/* Static Floating Elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg opacity-60"></div>
                  <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg opacity-40"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
          <div className="text-center mb-20">
            {/* Culture Badge */}
            <div className="inline-block mb-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full opacity-30 blur-sm"></div>
                <div className="relative flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium">Our Culture</span>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-orange-500 to-red-400">Values</span>
            </h2>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/5 to-orange-500/5 rounded-2xl blur-lg"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
                  Guiding principles that shape our decisions and community engagement for sustainable growth.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((value, index) => (
              <div
                key={value.title}
                className="group relative transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                {/* Card Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${value.gradient} rounded-3xl opacity-0 blur group-hover:opacity-30 transition-all duration-500`}></div>
                
                {/* Main Card */}
                <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 h-full hover:border-white/30 transition-all duration-500 overflow-hidden">
                  
                  {/* Icon Container */}
                  <div className="relative mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl p-0.5 shadow-2xl`}>
                      <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full opacity-80"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${value.gradient} mb-4`}>
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{value.content}</p>
                    
                    {/* Features List */}
                    <div className="space-y-3">
                      {value.items.map((item, idx) => (
                        <div key={idx} className="flex items-start text-gray-300">
                          <CheckCircle className="w-5 h-5 mt-0.5 mr-3 text-purple-400 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Static Floating Elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg opacity-60"></div>
                  <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg opacity-40"></div>
                </div>
              </div>
            ))}
          </div>
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
          outline: 2px solid rgba(59, 130, 246, 0.5);
          outline-offset: 4px;
        }
      `}</style>
    </div>
  );
};

export default About;