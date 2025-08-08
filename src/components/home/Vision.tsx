import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Target, 
  Lightbulb, 
  TrendingUp, 
  Users, 
  Star, 
  ArrowRight,
  Zap,
  Rocket,
  Globe,
  Award,
  Eye,
  Sparkles,
  Crown,
  Briefcase
} from 'lucide-react';

const visionMetrics = [
  {
    icon: Users,
    value: '500+',
    label: 'Entrepreneurs Empowered',
    description: 'Visionary founders across diverse industries worldwide',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    glowColor: 'shadow-emerald-500/30',
    delay: 0.2,
    currentValue: '127',
    progress: 25
  },
  {
    icon: Briefcase,
    value: '10,000+',
    label: 'Jobs Created',
    description: 'Sustainable employment opportunities for the future',
    gradient: 'from-rose-400 via-pink-500 to-purple-600',
    glowColor: 'shadow-rose-500/30',
    delay: 0.4,
    currentValue: '3,247',
    progress: 32
  },
  {
    icon: Crown,
    value: '₹100Cr',
    label: 'Investment Fund',
    description: 'Driving innovation across emerging global markets',
    gradient: 'from-amber-400 via-yellow-500 to-orange-600',
    glowColor: 'shadow-amber-500/30',
    delay: 0.6,
    currentValue: '₹32Cr',
    progress: 32
  },
];

const visionPillars = [
  {
    icon: Lightbulb,
    title: 'INNOVATE',
    subtitle: 'Breakthrough Solutions',
    description: 'Supporting groundbreaking ideas that solve real-world problems with cutting-edge technology, AI integration, and creative solutions that reshape industries.',
    gradient: 'from-indigo-400 via-blue-500 to-cyan-600',
    glowColor: 'shadow-indigo-500/30',
    features: ['AI Integration', 'Deep Tech', 'Future-Ready'],
    delay: 0.2
  },
  {
    icon: Star,
    title: 'NURTURE',
    subtitle: 'Strategic Growth',
    description: 'Providing expert guidance, comprehensive resources, and world-class mentorship for sustainable growth and long-term market success.',
    gradient: 'from-violet-400 via-purple-500 to-fuchsia-600',
    glowColor: 'shadow-violet-500/30',
    features: ['Expert Mentorship', 'Resource Access', 'Growth Strategy'],
    delay: 0.4
  },
  {
    icon: Rocket,
    title: 'SCALE',
    subtitle: 'Global Expansion',
    description: 'Accelerating worldwide expansion through strategic investments, partnerships, and cutting-edge infrastructure for global market domination.',
    gradient: 'from-lime-400 via-green-500 to-emerald-600',
    glowColor: 'shadow-lime-500/30',
    features: ['Global Reach', 'Strategic Partnerships', 'Market Leadership'],
    delay: 0.6
  },
];

const Vision = () => {
  const navigate = useNavigate();

  const handlePartnerClick = () => {
    navigate('/contact');
  };

  const handleLearnMoreClick = () => {
    navigate('/services');
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Fresh Light Theme Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50">
        <div className="absolute inset-0">
          {/* Colorful Background Blobs */}
          <div
            className="absolute -top-40 -left-40 w-96 h-96 lg:w-[550px] lg:h-[550px] rounded-full opacity-15 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%)'
            }}
          />
          
          <div
            className="absolute -bottom-32 -right-32 w-80 h-80 lg:w-[450px] lg:h-[450px] rounded-full opacity-12 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(168, 85, 247, 0.08) 50%, transparent 100%)'
            }}
          />

          <div
            className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-64 h-64 lg:w-[380px] lg:h-[380px] rounded-full opacity-10 blur-3xl"
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
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Light Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${i % 3 === 0 ? 'bg-cyan-400/20' : i % 3 === 1 ? 'bg-emerald-400/20' : 'bg-rose-400/20'}`}
            style={{
              left: `${(i * 120) % 1200}px`,
              top: `${(i * 80) % 800}px`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          {/* Vision Badge */}
          <div className="inline-block mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-500 rounded-full opacity-30 blur-sm group-hover:opacity-50 transition-all duration-300"></div>
              <div className="relative flex items-center gap-3 bg-white/90 backdrop-blur-xl border border-cyan-200 px-6 py-3 rounded-full shadow-xl">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center">
                  <Eye className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-700 font-bold">Vision 2030</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black mb-6">
              <span className="text-slate-800 block mb-2">BUILDING</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500">
                TOMORROW'S
              </span>
              <span className="text-slate-800 block">LEGACY</span>
            </h2>
          </div>

          {/* Enhanced Description */}
          <div className="relative max-w-5xl mx-auto mb-12">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/10 via-teal-500/10 to-emerald-500/10 rounded-3xl blur-lg"></div>
            <div className="relative bg-white/80 backdrop-blur-xl border border-cyan-200/50 rounded-3xl p-6 lg:p-10 shadow-xl">
              <p className="text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed font-light">
                By 2030, we aim to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600 font-bold">empower 500+ entrepreneurs</span>, create{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 font-bold">10,000+ sustainable jobs</span>, and establish a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600 font-bold">₹100 Crore investment ecosystem</span> that drives exponential innovation across emerging global markets.
              </p>
              
              {/* Progress Indicator */}
              <div className="mt-6 pt-6 border-t border-cyan-200/50">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-slate-600">Mission Progress</span>
                  <span className="text-slate-800 font-semibold">29% Complete</span>
                </div>
                <div className="h-2 bg-cyan-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-400 rounded-full transition-all duration-1000"
                    style={{ width: '29%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Metrics - Enhanced Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {visionMetrics.map((metric, index) => (
            <div
              key={index}
              className="group relative transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${metric.gradient} rounded-3xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-500`}></div>
              
              {/* Main Card */}
              <div className="relative bg-white/90 backdrop-blur-2xl border border-cyan-200/50 rounded-3xl p-8 text-center hover:border-cyan-300/50 transition-all duration-500 shadow-xl hover:shadow-2xl">
                
                {/* Icon Container */}
                <div className="relative mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <div className={`w-20 h-20 bg-gradient-to-br ${metric.gradient} rounded-2xl p-0.5 mx-auto ${metric.glowColor} shadow-2xl`}>
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <metric.icon className="w-10 h-10 text-slate-700" />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className={`text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${metric.gradient}`}>
                    {metric.value}
                  </div>
                  <div className="text-xl font-bold text-slate-800">
                    {metric.label}
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {metric.description}
                  </p>
                  
                  {/* Progress Section */}
                  <div className="pt-4 border-t border-cyan-200/50">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600">Current</span>
                      <span className={`font-semibold text-transparent bg-clip-text bg-gradient-to-r ${metric.gradient}`}>
                        {metric.currentValue}
                      </span>
                    </div>
                    <div className="h-2 bg-cyan-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${metric.gradient} rounded-full transition-all duration-1000`}
                        style={{ width: `${metric.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Pillars - Enhanced Design */}
        <div className="mb-24">
          {/* Pillars Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-800">
                Our Foundation Pillars
              </h3>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Three core principles that drive our mission to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600 font-bold">reshape the future</span> of entrepreneurship and innovation.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {visionPillars.map((pillar, index) => (
              <div
                key={index}
                className="group relative transform transition-all duration-500 hover:scale-103"
              >
                {/* Card Glow */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${pillar.gradient} rounded-3xl opacity-0 blur group-hover:opacity-20 transition-all duration-500`}></div>
                
                {/* Main Card */}
                <div className="relative bg-white/80 backdrop-blur-2xl border border-cyan-200/50 rounded-3xl p-8 h-full hover:border-cyan-300/50 transition-all duration-500 overflow-hidden shadow-xl">
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 bg-gradient-to-r ${pillar.gradient} rounded-full text-white text-xs font-semibold`}>
                      Core
                    </div>
                  </div>

                  {/* Icon Section */}
                  <div className="relative mb-8 transform transition-transform duration-300 group-hover:scale-115 group-hover:rotate-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${pillar.gradient} rounded-2xl p-0.5 ${pillar.glowColor} shadow-2xl`}>
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <pillar.icon className="w-10 h-10 text-slate-700" />
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white/90 backdrop-blur-xl border border-cyan-200/50 rounded-xl flex items-center justify-center">
                      <Star className="w-4 h-4 text-slate-700" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h4 className={`text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${pillar.gradient} mb-2`}>
                        {pillar.title}
                      </h4>
                      <p className="text-slate-600 font-semibold">
                        {pillar.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-slate-700 leading-relaxed">
                      {pillar.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3">
                      {pillar.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className={`w-6 h-6 bg-gradient-to-r ${pillar.gradient} rounded-lg flex items-center justify-center`}>
                            <Zap className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-slate-700 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 transform transition-transform duration-300 hover:scale-105">
                      <div className="flex items-center justify-between w-full bg-cyan-50/50 hover:bg-cyan-50 backdrop-blur-xl border border-cyan-200/50 hover:border-cyan-300/50 px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer group/btn">
                        <span className="text-slate-700 font-medium">
                          Explore More
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-700 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/60 backdrop-blur-xl border border-cyan-200/50 rounded-lg opacity-60"></div>
                  <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-white/60 backdrop-blur-xl border border-cyan-200/50 rounded-lg opacity-40"></div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Light Geometric Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="hidden lg:block absolute top-1/4 right-20 w-24 h-24 border-2 border-cyan-400/15 rounded-2xl backdrop-blur-sm transform rotate-12 opacity-20" />
          <div className="hidden lg:block absolute bottom-1/3 left-24 w-16 h-16 bg-emerald-400/10 rounded-full backdrop-blur-sm border border-emerald-400/20 opacity-25" />
          <div className="hidden lg:block absolute top-2/3 right-1/3 w-20 h-20 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 transform rotate-45 backdrop-blur-sm border border-teal-400/20 opacity-30" />
        </div>

      </div>

      {/* Enhanced Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .vision-header {
            font-size: 4rem !important;
          }
          
          .vision-card {
            padding: 1.5rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .vision-header {
            font-size: 3rem !important;
            line-height: 1.1;
          }
          
          .vision-description {
            font-size: 1.125rem !important;
            padding: 1.5rem !important;
          }
          
          .vision-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .vision-header {
            font-size: 2.5rem !important;
          }
          
          .vision-card {
            padding: 1rem !important;
          }
          
          .vision-stats {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem;
          }
        }

        /* Focus states for accessibility */
        .vision-card:focus-within {
          outline: 2px solid rgba(6, 182, 212, 0.5);
          outline-offset: 4px;
        }
      `}</style>
    </section>
  );
};

export default Vision;