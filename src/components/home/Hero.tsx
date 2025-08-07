import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  Sparkles, 
  TrendingUp, 
  Zap, 
  Layers, 
  Globe,
  Play,
  Star,
  Trophy
} from 'lucide-react';

const Hero = () => {
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    // Handle window size
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Set initial window size
    updateWindowSize();

    // Add event listeners
    window.addEventListener('resize', updateWindowSize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  return (
    <section className="relative min-h-screen mt-6  overflow-hidden">
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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 mt-4 max-w-7xl pt-4 pb-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh] pt-16">
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Simple Badge */}
            <div className="inline-block">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 blur-sm group-hover:opacity-50 transition-all duration-300"></div>
                <div className="relative flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium">Next-Gen Venture Capital</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Hero Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-black leading-none">
                <div className="text-white mb-4">
                  FUTURE
                </div>
                <div className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
                    VENTURES
                  </span>
                  <div className="absolute -bottom-2 lg:-bottom-4 left-0 w-full h-1 lg:h-2 bg-gradient-to-r from-blue-400/30 to-purple-500/30 rounded-full" />
                </div>
              </h1>
            </div>

            {/* Subtitle with Glass Effect */}
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl blur-lg"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
                  We don't just invest in companies—we{' '}
                  <span className="text-blue-400 font-semibold">architect futures</span>, 
                  transforming visionary concepts into{' '}
                  <span className="text-purple-400 font-semibold">market dominance</span>.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col md:flex-row gap-6 pt-8">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-50 blur-sm group-hover:opacity-75 transition-all duration-300"></div>
                <button className="relative flex items-center justify-center px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden">
                  <span className="relative flex items-center gap-3">
                    <Zap className="w-5 h-5" />
                    Launch Your Vision
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </div>

              <div className="group relative">
                <button className="flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
                  <span className="flex items-center gap-3">
                    <Play className="w-5 h-5" />
                    Explore Portfolio
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Static Stats Dashboard */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Main Stats Glass Panel */}
              <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 lg:p-8 shadow-2xl">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white">Live Metrics</h3>
                    <p className="text-gray-400 text-sm">Real-time performance</p>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 lg:gap-6 mb-8">
                  {[
                    { icon: Trophy, value: '55+', label: 'Portfolio', color: 'from-yellow-400 to-orange-500' },
                    { icon: Globe, value: '₹2.3Cr', label: 'Invested', color: 'from-blue-400 to-cyan-500' },
                    { icon: Star, value: '32%', label: 'Returns', color: 'from-green-400 to-emerald-500' },
                    { icon: Layers, value: '98%', label: 'Success', color: 'from-purple-400 to-pink-500' }
                  ].map((metric, i) => (
                    <div
                      key={i}
                      className="group relative hover:scale-105 transition-transform duration-200"
                    >
                      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-3 lg:p-4 text-center">
                        <div className={`w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r ${metric.color} rounded-xl flex items-center justify-center mx-auto mb-2 lg:mb-3`}>
                          <metric.icon className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                        </div>
                        <div className={`text-lg lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${metric.color} mb-1`}>
                          {metric.value}
                        </div>
                        <div className="text-gray-400 text-xs lg:text-sm">{metric.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress Indicators */}
                <div className="space-y-4">
                  {[
                    { label: 'Market Growth', progress: 85, color: 'from-blue-500 to-cyan-400' },
                    { label: 'Portfolio Health', progress: 92, color: 'from-green-500 to-emerald-400' },
                    { label: 'Innovation Index', progress: 78, color: 'from-purple-500 to-pink-400' }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-300">{item.label}</span>
                        <span className="text-white font-semibold">{item.progress}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Static Geometric Shapes */}
          <div className="hidden lg:block absolute top-1/4 right-16 w-16 h-16 border-2 border-blue-400/20 rounded-lg backdrop-blur-sm opacity-30" />
          <div className="hidden lg:block absolute bottom-1/4 left-16 w-12 h-12 bg-purple-500/15 rounded-full backdrop-blur-sm border border-purple-400/20 opacity-20" />
          <div className="hidden lg:block absolute top-3/4 right-1/4 w-8 h-8 bg-gradient-to-br from-pink-400/20 to-orange-400/20 transform rotate-45 backdrop-blur-sm opacity-25" />
        </div>

        {/* Mobile Stats Quick View */}
        <div className="lg:hidden mt-24">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '55+', label: 'Companies', color: 'text-yellow-400' },
                { value: '₹2.3Cr', label: 'Investment', color: 'text-blue-400' },
                { value: '32%', label: 'Returns', color: 'text-green-400' },
                { value: '98%', label: 'Success', color: 'text-purple-400' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile-First Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem !important;
            line-height: 1.1;
          }
          
          .hero-subtitle {
            font-size: 1.125rem !important;
            padding: 1.5rem !important;
          }
          
          .liquid-blob {
            width: 300px !important;
            height: 300px !important;
          }
        }
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.5rem !important;
          }
          
          .hero-subtitle {
            font-size: 1rem !important;
            padding: 1rem !important;
          }
          
          .cta-buttons {
            flex-direction: column;
            gap: 1rem;
          }
          
          .bottom-nav {
            padding: 0.75rem 1rem;
            gap: 1rem;
          }
        }

        /* Custom scrollbar for modern browsers */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.3);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </section>
  );
};

export default Hero;