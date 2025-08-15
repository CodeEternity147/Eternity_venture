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


const Vision = () => {
  const navigate = useNavigate();

  const handlePartnerClick = () => {
    navigate('/contact');
  };

  const handleLearnMoreClick = () => {
    navigate('/services');
  };

  return (
    <section className="relative overflow-hidden">
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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
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
          <div className="relative max-w-5xl mx-auto mb-8">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-0">
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