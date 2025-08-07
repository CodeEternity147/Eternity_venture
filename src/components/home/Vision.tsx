import { useState, useEffect } from 'react';
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
    gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
    glowColor: 'shadow-cyan-500/30',
    delay: 0.2,
    currentValue: '127',
    progress: 25
  },
  {
    icon: Briefcase,
    value: '10,000+',
    label: 'Jobs Created',
    description: 'Sustainable employment opportunities for the future',
    gradient: 'from-emerald-400 via-green-500 to-teal-600',
    glowColor: 'shadow-emerald-500/30',
    delay: 0.4,
    currentValue: '3,247',
    progress: 32
  },
  {
    icon: Crown,
    value: '₹100Cr',
    label: 'Investment Fund',
    description: 'Driving innovation across emerging global markets',
    gradient: 'from-yellow-400 via-amber-500 to-orange-600',
    glowColor: 'shadow-yellow-500/30',
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
    gradient: 'from-purple-400 via-violet-500 to-indigo-600',
    glowColor: 'shadow-purple-500/30',
    features: ['AI Integration', 'Deep Tech', 'Future-Ready'],
    delay: 0.2
  },
  {
    icon: Star,
    title: 'NURTURE',
    subtitle: 'Strategic Growth',
    description: 'Providing expert guidance, comprehensive resources, and world-class mentorship for sustainable growth and long-term market success.',
    gradient: 'from-pink-400 via-rose-500 to-red-600',
    glowColor: 'shadow-pink-500/30',
    features: ['Expert Mentorship', 'Resource Access', 'Growth Strategy'],
    delay: 0.4
  },
  {
    icon: Rocket,
    title: 'SCALE',
    subtitle: 'Global Expansion',
    description: 'Accelerating worldwide expansion through strategic investments, partnerships, and cutting-edge infrastructure for global market domination.',
    gradient: 'from-orange-400 via-red-500 to-pink-600',
    glowColor: 'shadow-orange-500/30',
    features: ['Global Reach', 'Strategic Partnerships', 'Market Leadership'],
    delay: 0.6
  },
];

const Vision = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Static Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950">
        <div className="absolute inset-0">
          {/* Static Liquid Blobs */}
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

          <div
            className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-64 h-64 lg:w-[380px] lg:h-[380px] rounded-full opacity-12 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(236, 72, 153, 0.1) 50%, transparent 100%)'
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

      {/* Static Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${i % 3 === 0 ? 'bg-purple-400/30' : i % 3 === 1 ? 'bg-cyan-400/30' : 'bg-pink-400/30'}`}
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
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full opacity-40 blur-sm"></div>
              <div className="relative flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <Eye className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-medium">Vision 2030</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black mb-6">
              <span className="text-white block mb-2">BUILDING</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
                TOMORROW'S
              </span>
              <span className="text-white block">LEGACY</span>
            </h2>
          </div>

          {/* Enhanced Description */}
          <div className="relative max-w-5xl mx-auto mb-12">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-orange-500/5 rounded-3xl blur-lg"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 lg:p-10">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
                By 2030, we aim to{' '}
                <span className="text-purple-400 font-semibold">empower 500+ entrepreneurs</span>, create{' '}
                <span className="text-pink-400 font-semibold">10,000+ sustainable jobs</span>, and establish a{' '}
                <span className="text-orange-400 font-semibold">₹100 Crore investment ecosystem</span> that drives exponential innovation across emerging global markets.
              </p>
              
              {/* Progress Indicator */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-400">Mission Progress</span>
                  <span className="text-white font-semibold">29% Complete</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 rounded-full transition-all duration-1000"
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
              <div className={`absolute -inset-1 bg-gradient-to-r ${metric.gradient} rounded-3xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
              
              {/* Main Card */}
              <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 text-center hover:border-white/30 transition-all duration-500">
                
                {/* Icon Container */}
                <div className="relative mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <div className={`w-20 h-20 bg-gradient-to-br ${metric.gradient} rounded-2xl p-0.5 mx-auto ${metric.glowColor} shadow-2xl`}>
                    <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
                      <metric.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className={`text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${metric.gradient}`}>
                    {metric.value}
                  </div>
                  <div className="text-xl font-bold text-white">
                    {metric.label}
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {metric.description}
                  </p>
                  
                  {/* Progress Section */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Current</span>
                      <span className={`font-semibold text-transparent bg-clip-text bg-gradient-to-r ${metric.gradient}`}>
                        {metric.currentValue}
                      </span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
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
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white">
                Our Foundation Pillars
              </h3>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Three core principles that drive our mission to{' '}
              <span className="text-purple-400 font-semibold">reshape the future</span> of entrepreneurship and innovation.
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
                <div className={`absolute -inset-2 bg-gradient-to-r ${pillar.gradient} rounded-3xl opacity-0 blur group-hover:opacity-30 transition-all duration-500`}></div>
                
                {/* Main Card */}
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/15 rounded-3xl p-8 h-full hover:border-white/25 transition-all duration-500 overflow-hidden">
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 bg-gradient-to-r ${pillar.gradient} rounded-full text-white text-xs font-semibold`}>
                      Core
                    </div>
                  </div>

                  {/* Icon Section */}
                  <div className="relative mb-8 transform transition-transform duration-300 group-hover:scale-115 group-hover:rotate-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${pillar.gradient} rounded-2xl p-0.5 ${pillar.glowColor} shadow-2xl`}>
                      <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
                        <pillar.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h4 className={`text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${pillar.gradient} mb-2`}>
                        {pillar.title}
                      </h4>
                      <p className="text-gray-400 font-semibold">
                        {pillar.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {pillar.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3">
                      {pillar.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className={`w-6 h-6 bg-gradient-to-r ${pillar.gradient} rounded-lg flex items-center justify-center`}>
                            <Zap className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-300 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 transform transition-transform duration-300 hover:scale-105">
                      <div className="flex items-center justify-between w-full bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 hover:border-white/20 px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer group/btn">
                        <span className="text-white font-medium">
                          Explore More
                        </span>
                        <ArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg opacity-60"></div>
                  <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg opacity-40"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          {/* Main CTA Container */}
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 lg:p-16">
              
              {/* CTA Header */}
              <div className="mb-12">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl lg:text-5xl font-bold text-white">
                    Join the Future Revolution
                  </h3>
                </div>
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  Be part of our mission to{' '}
                  <span className="text-purple-400 font-semibold">transform the business landscape</span> and{' '}
                  <span className="text-pink-400 font-semibold">create lasting global impact</span> through innovation and strategic partnerships.
                </p>
              </div>

              {/* Impact Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: Award, value: '97%', label: 'Success Rate', color: 'from-yellow-400 to-orange-500' },
                  { icon: Users, value: '127', label: 'Active Partners', color: 'from-cyan-400 to-blue-500' },
                  { icon: Globe, value: '15+', label: 'Countries', color: 'from-green-400 to-emerald-500' },
                  { icon: TrendingUp, value: '₹32Cr+', label: 'Deployed', color: 'from-purple-400 to-pink-500' }
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="text-center transform transition-transform duration-300 hover:scale-105"
                  >
                    <div className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                      <stat.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                    </div>
                    <div className={`text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm lg:text-base font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <div className="group relative transform transition-transform duration-300 hover:scale-105">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-2xl opacity-50 blur-sm group-hover:opacity-75 transition-all duration-300"></div>
                  <button className="relative flex items-center justify-center px-10 py-5 bg-white text-black rounded-2xl font-bold text-lg transition-all duration-300">
                    <span className="flex items-center gap-3">
                      <Rocket className="w-6 h-6" />
                      Partner With Us
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>

                <div className="group transform transition-transform duration-300 hover:scale-105">
                  <button className="flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
                    <span className="flex items-center gap-3">
                      <Eye className="w-6 h-6" />
                      Discover Our Story
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-gray-400">
                  Ready to start your journey? • 
                  <span className="text-purple-400 font-semibold ml-2 hover:text-purple-300 cursor-pointer transition-colors duration-300">
                    vision@futureventures.com
                  </span>
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Static Geometric Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="hidden lg:block absolute top-1/4 right-20 w-24 h-24 border-2 border-purple-400/20 rounded-2xl backdrop-blur-sm transform rotate-12 opacity-10" />
          <div className="hidden lg:block absolute bottom-1/3 left-24 w-16 h-16 bg-pink-500/10 rounded-full backdrop-blur-sm border border-pink-400/20 opacity-15" />
          <div className="hidden lg:block absolute top-2/3 right-1/3 w-20 h-20 bg-gradient-to-br from-orange-400/10 to-yellow-400/10 transform rotate-45 backdrop-blur-sm border border-orange-400/20 opacity-20" />
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
          outline: 2px solid rgba(147, 51, 234, 0.5);
          outline-offset: 4px;
        }
      `}</style>
    </section>
  );
};

export default Vision;