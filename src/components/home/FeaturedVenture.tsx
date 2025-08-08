import { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  TrendingUp, 
  Users, 
  BookOpen, 
  DollarSign, 
  ArrowRight, 
  Star,
  Sparkles,
  Award,
  Zap,
  Globe,
  Play,
  Trophy,
  Target,
  Rocket,
  Eye
} from 'lucide-react';
import codeeternity from '../../assets/codeeternity.png';

const ventureMetrics = [
  {
    icon: Users,
    value: '50,000+',
    label: 'Active Students',
    description: 'Growing community of learners',
    gradient: 'from-cyan-400 via-blue-500 to-purple-600',
    glow: 'shadow-cyan-500/25',
    progress: 85,
    delay: 0.2
  },
  {
    icon: BookOpen,
    value: '100+',
    label: 'Interactive Courses',
    description: 'Comprehensive learning paths',
    gradient: 'from-emerald-400 via-green-500 to-teal-600',
    glow: 'shadow-emerald-500/25',
    progress: 92,
    delay: 0.4
  },
  {
    icon: TrendingUp,
    value: '92%',
    label: 'Completion Rate',
    description: 'Industry-leading retention',
    gradient: 'from-orange-400 via-red-500 to-pink-600',
    glow: 'shadow-orange-500/25',
    progress: 92,
    delay: 0.6
  },
  {
    icon: Award,
    value: '₹1.2Cr',
    label: 'Annual Revenue',
    description: 'Sustainable growth trajectory',
    gradient: 'from-yellow-400 via-gold-500 to-amber-600',
    glow: 'shadow-yellow-500/25',
    progress: 78,
    delay: 0.8
  },
];

const FeaturedVenture = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);

    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Light Theme Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="absolute inset-0">
          {/* Simplified Background Blobs */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 lg:w-[600px] lg:h-[600px] rounded-full opacity-8 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.08) 50%, transparent 100%)'
            }}
          />
          
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full opacity-10 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(59, 130, 246, 0.06) 50%, transparent 100%)'
            }}
          />

          <div
            className="absolute top-1/3 right-1/4 w-64 h-64 lg:w-[400px] lg:h-[400px] rounded-full opacity-6 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, rgba(59, 130, 246, 0.06) 50%, transparent 100%)'
            }}
          />
        </div>

        {/* Simplified Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Simplified Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${(i * 150) % 1200}px`,
              top: `${(i * 100) % 800}px`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          {/* Featured Badge */}
          <div className="inline-block mb-6 sm:mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full opacity-30 blur-sm group-hover:opacity-50 transition-all duration-300"></div>
              <div className="relative flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-xl border border-gray-200 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="text-gray-800 font-medium text-sm sm:text-base">Featured Innovation</span>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6 sm:space-y-8">
            {/* Title */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-lg">
                  Code
                </span>
                <span className="text-gray-900">Eternity</span>
              </h1>
              
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-lg"></div>
                <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-lg">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                    <span className="text-yellow-600 font-semibold text-sm sm:text-base">The Future of Learning</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Revolutionary coding education platform powered by{' '}
                    <span className="text-cyan-600 font-semibold">AI-driven curriculum</span>, making programming accessible through immersive, project-based learning experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {ventureMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="group relative cursor-pointer hover:scale-105 transition-transform duration-200"
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${metric.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-white/80 backdrop-blur-2xl border border-gray-200 rounded-2xl p-4 sm:p-6 hover:border-gray-300 transition-all duration-300 shadow-lg">
                    {/* Icon Container */}
                    <div className="relative mb-3 sm:mb-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${metric.gradient} rounded-xl p-0.5 ${metric.glow} shadow-lg`}>
                        <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                          <metric.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gray-800" />
                        </div>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-400 rounded-full opacity-90 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-2 sm:space-y-3">
                      <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${metric.gradient}`}>
                        {metric.value}
                      </div>
                      <div className="text-gray-800 font-semibold text-base sm:text-lg">
                        {metric.label}
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        {metric.description}
                      </p>
                      
                      {/* Progress Bar */}
                      <div className="pt-2">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-500">Progress</span>
                          <span className="text-gray-600">{metric.progress}%</span>
                        </div>
                        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
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

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-40 blur-sm group-hover:opacity-60 transition-opacity duration-300"></div>
                <a
                  href="https://codeeternity.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center gap-2 sm:gap-3 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Explore Platform</span>
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              <div className="group">
                <a
                  href="/ventures"
                  className="flex items-center justify-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-xl border border-gray-200 text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>All Ventures</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT - Enhanced Card Design */}
          <div
            className="relative mt-8 lg:mt-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Simplified Floating Elements */}
            <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl backdrop-blur-xl border border-gray-200 z-10 opacity-60"></div>
            
            <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-12 h-12 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-3xl backdrop-blur-xl border border-gray-200 z-10 opacity-40"></div>
            
            <div className="absolute top-1/4 -left-2 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl backdrop-blur-xl border border-gray-200 z-10 opacity-50"></div>

            {/* Main Featured Card */}
            <div
              className={`relative z-20 transition-all duration-400 ${isHovered ? 'hover:scale-105 hover:-translate-y-2' : ''}`}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-pink-500/15 rounded-3xl blur-2xl opacity-30 transition-opacity duration-500"></div>
              
              {/* Main Container */}
              <div className="relative bg-white/90 backdrop-blur-2xl border border-gray-200 rounded-3xl overflow-hidden shadow-2xl hover:border-gray-300 transition-all duration-500">
                
                {/* Top Status Bar */}
                <div className="relative p-3 sm:p-4 bg-gradient-to-r from-gray-100/80 to-gray-50/80 backdrop-blur-xl border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                        <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-gray-800 font-semibold text-sm sm:text-base">CodeEternity Platform</div>
                        <div className="text-gray-600 text-xs sm:text-sm">Learning Management System</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                      <span className="text-green-600 font-medium text-xs sm:text-sm">Live & Growing</span>
                    </div>
                  </div>
                </div>

                {/* Image Section */}
                <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
                  <img
                    src={codeeternity}
                    alt="CodeEternity Platform Interface"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  
                  {/* Interactive Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent"></div>
                  
                  {/* Static Interactive Elements */}
                  <div className="absolute top-3 sm:top-6 left-3 sm:left-6">
                    <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 px-2 sm:px-4 py-1 sm:py-2 rounded-xl">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                        <span className="text-blue-700 font-medium text-xs sm:text-sm">2,847 online</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-12 sm:top-20 right-3 sm:right-6">
                    <div className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 px-2 sm:px-4 py-1 sm:py-2 rounded-xl">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600" />
                        <span className="text-emerald-700 font-medium text-xs sm:text-sm">+12% growth</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-cyan-400 font-bold text-base sm:text-lg">Success Story</span>
                          <div className="text-gray-300 text-xs sm:text-sm">Transforming Education</div>
                        </div>
                      </div>
                      <p className="text-white text-sm sm:text-base lg:text-xl font-medium leading-relaxed">
                        "From ambitious vision to India's most innovative coding education platform, 
                        <span className="text-cyan-400"> empowering 50,000+ developers</span> and revolutionizing the learning experience."
                      </p>
                      
                      {/* Achievement Badges */}
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {[
                          { icon: Award, label: 'Best EdTech 2024', color: 'from-yellow-400 to-orange-500' },
                          { icon: Star, label: 'Top Rated', color: 'from-purple-400 to-pink-500' },
                          { icon: Target, label: 'Mission Driven', color: 'from-green-400 to-emerald-500' }
                        ].map((badge, i) => (
                          <div
                            key={i}
                            className="group/badge"
                          >
                            <div className={`flex items-center gap-1 sm:gap-2 bg-gradient-to-r ${badge.color} rounded-full px-2 sm:px-3 py-1`}>
                              <badge.icon className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                              <span className="text-white text-xs font-medium">{badge.label}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Stats Bar */}
                <div className="relative p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-gray-100/90 to-gray-50/90 backdrop-blur-xl border-t border-gray-200">
                  {/* Performance Metrics */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-4 sm:mb-6">
                    {[
                      { label: 'Student Rating', value: '4.9', icon: Star, color: 'text-yellow-500' },
                      { label: 'Course Completion', value: '92%', icon: Trophy, color: 'text-green-500' },
                      { label: 'Job Placement', value: '87%', icon: Target, color: 'text-blue-500' }
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="text-center"
                      >
                        <div className={`flex items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2`}>
                          <stat.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${stat.color}`} />
                          <div className={`text-lg sm:text-xl lg:text-2xl font-bold ${stat.color}`}>
                            {stat.value}
                          </div>
                        </div>
                        <div className="text-gray-600 text-xs sm:text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-gray-200 gap-3 sm:gap-0">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                        10k+ Reviews
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <div className="group/btn hover:scale-105 transition-transform duration-200">
                      <div className="flex items-center gap-2 bg-white/80 hover:bg-white backdrop-blur-xl border border-gray-200 hover:border-gray-300 px-3 sm:px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer shadow-sm">
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
                        <span className="text-gray-800 font-medium text-sm sm:text-base">View Details</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

                     {/* Bottom CTA Section */}
           <section className="mt-16 sm:mt-20 lg:mt-24 text-center col-span-full">
             <div className="relative max-w-4xl mx-auto">
               <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl"></div>
               <div className="relative bg-white/90 backdrop-blur-2xl border border-gray-200 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl">
                
                <div className="mb-6 sm:mb-8">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                      <Rocket className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center sm:text-left">
                      Ready to Launch Your Vision?
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                    Join CodeEternity's success story. Partner with us to{' '}
                    <span className="text-cyan-600 font-semibold">transform your ideas</span> into{' '}
                    <span className="text-purple-600 font-semibold">market-leading platforms</span>.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {[
                    { value: '3 Years', label: 'To Success' },
                    { value: '₹1.2Cr', label: 'Revenue' },
                    { value: '50k+', label: 'Users' },
                    { value: '92%', label: 'Satisfaction' }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-gray-600 text-xs sm:text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <div className="hover:scale-105 transition-transform duration-200">
                    <a
                      href="/contact"
                      className="flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Start Your Journey</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>

                  <div className="hover:scale-105 transition-transform duration-200">
                    <a
                      href="/portfolio"
                      className="flex items-center justify-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-xl border border-gray-200 text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg hover:bg-white transition-all duration-300 shadow-lg"
                    >
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>View Portfolio</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Simplified Floating Geometric Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="hidden lg:block absolute top-1/4 right-16 w-16 h-16 border-2 border-cyan-400/20 rounded-lg backdrop-blur-sm opacity-20" />
            <div className="hidden lg:block absolute bottom-1/4 left-16 w-12 h-12 bg-purple-500/10 rounded-full backdrop-blur-sm border border-purple-400/20 opacity-15" />
          </div>

        </div>

        {/* Enhanced Responsive Styles */}
        <style>{`
          @media (max-width: 1024px) {
            .venture-title {
              font-size: 4rem !important;
            }
          }
          
          @media (max-width: 768px) {
            .venture-title {
              font-size: 3rem !important;
            }
            
            .venture-grid {
              grid-template-columns: 1fr !important;
              gap: 2rem;
            }
            
            .stats-grid {
              grid-template-columns: 1fr !important;
              gap: 1rem;
            }
          }
          
          @media (max-width: 480px) {
            .venture-title {
              font-size: 2.5rem !important;
            }
            
            .venture-card {
              padding: 1rem !important;
            }
          }

          /* Accessibility focus states */
          .venture-button:focus {
            outline: 2px solid rgba(59, 130, 246, 0.5);
            outline-offset: 2px;
          }
        `}</style>
      </div>
    </section>
  );
};

export default FeaturedVenture;