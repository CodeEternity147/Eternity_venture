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
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh] pt-8 sm:pt-12 lg:pt-16">
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Enhanced Badge */}
            <div className="inline-block">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-30 blur-sm group-hover:opacity-50 transition-all duration-300"></div>
                <div className="relative flex items-center gap-2 sm:gap-3 bg-white/90 backdrop-blur-xl border border-orange-200 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-xl">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-slate-700 font-bold text-sm sm:text-base">Next-Gen Venture Capital</span>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Hero Title */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-none">
                <div className="text-slate-800 mb-2 sm:mb-4">
                  FUTURE
                </div>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500">
                  VENTURES
                </div>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl">
                Empowering the next generation of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 font-bold">
                  innovative startups
                </span>{' '}
                with cutting-edge technology and strategic investment.
              </p>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { value: '₹50Cr+', label: 'Portfolio Value', icon: TrendingUp, gradient: 'from-orange-400 to-pink-500' },
                { value: '25+', label: 'Startups Funded', icon: Zap, gradient: 'from-emerald-400 to-cyan-500' },
                { value: '92%', label: 'Success Rate', icon: Star, gradient: 'from-violet-400 to-purple-500' },
                { value: '3x', label: 'Avg. ROI', icon: Trophy, gradient: 'from-amber-400 to-orange-500' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <div className={`absolute -inset-2 bg-gradient-to-r ${stat.gradient} rounded-xl blur-sm opacity-0 group-hover:opacity-25 transition-opacity duration-300`}></div>
                    <div className="relative bg-white/90 backdrop-blur-xl border border-orange-200/50 rounded-xl p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-center justify-center mb-2">
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r ${stat.gradient} rounded-lg flex items-center justify-center`}>
                          <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                      </div>
                      <div className={`text-lg sm:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}>
                        {stat.value}
                      </div>
                      <div className="text-slate-600 text-xs sm:text-sm font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-xl sm:rounded-2xl opacity-40 blur-sm group-hover:opacity-60 transition-opacity duration-300"></div>
                <a
                  href="/contact"
                  className="relative flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              <div className="group">
                <a
                  href="/portfolio"
                  className="flex items-center justify-center gap-2 sm:gap-3 bg-white/90 backdrop-blur-xl border border-violet-200 text-slate-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-white hover:scale-105 hover:border-violet-300 transition-all duration-300 shadow-lg"
                >
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-violet-500" />
                  <span>View Portfolio</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 text-violet-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="lg:col-span-5 relative">
            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-orange-400/15 to-pink-500/15 rounded-3xl backdrop-blur-xl border border-orange-200/50 z-10 opacity-80"></div>
            
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-emerald-400/15 to-cyan-500/15 rounded-3xl backdrop-blur-xl border border-emerald-200/50 z-10 opacity-60"></div>
            
            <div className="absolute top-1/4 -left-4 w-16 h-16 bg-gradient-to-br from-violet-400/15 to-purple-500/15 rounded-2xl backdrop-blur-xl border border-violet-200/50 z-10 opacity-70"></div>

            {/* Main Image Container */}
            <div className="relative z-20">
              {/* Enhanced Glow Effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-orange-400/20 via-pink-500/20 to-violet-500/20 rounded-3xl blur-2xl opacity-40"></div>
              
              {/* Image Container */}
              <div className="relative bg-white/95 backdrop-blur-2xl border border-orange-200/50 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1736892868741-35bc1ae89091?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5ub3ZhdGl2ZSUyMHN0YXJ0dXBzfGVufDB8fDB8fHww"
                  alt="Eternity Ventures Team"
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Overlay with Company Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-pink-500 rounded-xl flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Eternity Ventures</div>
                        <div className="text-orange-200 text-sm">Innovation Hub</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-emerald-300 font-medium text-sm">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-slate-600">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
              <ChevronDown className="w-5 h-5 text-white animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;