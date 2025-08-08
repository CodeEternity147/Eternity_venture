import { useState, useEffect } from 'react';
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Globe, 
  Coins, 
  ArrowRight, 
  Sparkles,
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

const servicesData = [
  {
    id: 1,
    title: 'Real Estate Intelligence',
    subtitle: 'Next-Gen Property Investment',
    description: 'AI-powered real estate analytics and strategic development for maximum ROI through data-driven investment decisions and smart market timing.',
    icon: Building2,
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    glowColor: 'shadow-emerald-500/30',
    bgPattern: 'bg-gradient-to-br from-emerald-500/5 to-teal-500/10',
    features: ['Smart Analytics', 'ROI Optimization', 'Market Intelligence'],
    stats: { value: '₹50Cr+', label: 'Assets Managed' },
    delay: 0.1,
  },
  {
    id: 2,
    title: 'Business Evolution',
    subtitle: 'Transform • Scale • Dominate',
    description: 'Complete business transformation using cutting-edge methodologies, AI automation, and strategic innovation frameworks.',
    icon: Rocket,
    gradient: 'from-rose-400 via-pink-500 to-purple-600',
    glowColor: 'shadow-rose-500/30',
    bgPattern: 'bg-gradient-to-br from-rose-500/5 to-pink-500/10',
    features: ['AI Integration', 'Process Automation', 'Growth Scaling'],
    stats: { value: '300%', label: 'Avg Growth' },
    delay: 0.2,
  },
  {
    id: 3,
    title: 'Strategic Alliances',
    subtitle: 'Power Through Partnership',
    description: 'Build unstoppable network effects through strategic partnerships, collaborative ecosystems, and shared intelligence platforms.',
    icon: Users,
    gradient: 'from-indigo-400 via-blue-500 to-cyan-600',
    glowColor: 'shadow-indigo-500/30',
    bgPattern: 'bg-gradient-to-br from-indigo-500/5 to-blue-500/10',
    features: ['Network Building', 'Ecosystem Design', 'Collaborative Growth'],
    stats: { value: '500+', label: 'Partnerships' },
    delay: 0.3,
  },
  {
    id: 4,
    title: 'Global Domination',
    subtitle: 'Worldwide Market Conquest',
    description: 'Advanced market penetration strategies with local intelligence, cultural adaptation, and global scaling frameworks.',
    icon: Globe,
    gradient: 'from-amber-400 via-orange-500 to-red-600',
    glowColor: 'shadow-amber-500/30',
    bgPattern: 'bg-gradient-to-br from-amber-500/5 to-orange-500/10',
    features: ['Market Analysis', 'Cultural Intelligence', 'Global Scaling'],
    stats: { value: '25+', label: 'Countries' },
    delay: 0.4,
  },
  {
    id: 5,
    title: 'Capital Acceleration',
    subtitle: 'Smart Money • Smart Growth',
    description: 'Intelligent capital deployment with AI-driven investment strategies, risk optimization, and exponential growth models.',
    icon: Coins,
    gradient: 'from-lime-400 via-green-500 to-emerald-600',
    glowColor: 'shadow-lime-500/30',
    bgPattern: 'bg-gradient-to-br from-lime-500/5 to-green-500/10',
    features: ['Smart Investment', 'Risk Management', 'Growth Capital'],
    stats: { value: '45%', label: 'Avg Returns' },
    delay: 0.5,
  },
  {
    id: 6,
    title: 'Innovation Engine',
    subtitle: 'Future-Ready Technology',
    description: 'Bleeding-edge technology integration, AI/ML solutions, and innovation frameworks to dominate tomorrow\'s markets.',
    icon: Brain,
    gradient: 'from-violet-400 via-purple-500 to-fuchsia-600',
    glowColor: 'shadow-violet-500/30',
    bgPattern: 'bg-gradient-to-br from-violet-500/5 to-purple-500/10',
    features: ['AI/ML Integration', 'Innovation Labs', 'Future Tech'],
    stats: { value: '10x', label: 'Innovation Rate' },
    delay: 0.6,
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(0);
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
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          {/* Services Badge */}
          <div className="inline-block mb-6 sm:mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full opacity-30 blur-sm group-hover:opacity-50 transition-all duration-300"></div>
              <div className="relative flex items-center gap-2 sm:gap-3 bg-white/90 backdrop-blur-xl border border-cyan-200 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-xl">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="text-slate-700 font-bold text-sm sm:text-base">Our Services</span>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-slate-800">STRATEGIC</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500">
              SERVICES
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600 font-bold">accelerate growth</span> and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-bold">maximize returns</span> through innovative strategies and cutting-edge technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`group relative cursor-pointer transition-all duration-500 ${
                activeService === index ? 'scale-105' : 'hover:scale-105'
              }`}
              onMouseEnter={() => setActiveService(index)}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${service.gradient} rounded-3xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-500`}></div>
              
              {/* Main Card */}
              <div className="relative bg-white/90 backdrop-blur-2xl border border-cyan-200/50 rounded-3xl p-8 hover:border-cyan-300/50 transition-all duration-500 shadow-xl hover:shadow-2xl">
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl p-0.5 ${service.glowColor} shadow-lg`}>
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-slate-700" />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full opacity-90 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-medium mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                        <span className="text-slate-700 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="pt-4 border-t border-cyan-200/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                          {service.stats.value}
                        </div>
                        <div className="text-slate-600 text-sm">{service.stats.label}</div>
                      </div>
                      <div className="group-hover:translate-x-2 transition-transform duration-300">
                        <ArrowRight className="w-6 h-6 text-cyan-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400/20 via-teal-500/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-40"></div>
            <div className="relative bg-white/95 backdrop-blur-2xl border border-cyan-200/50 rounded-3xl p-8 lg:p-12 shadow-2xl">
              
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-800">
                    Ready to Transform Your Business?
                  </h3>
                </div>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Let's discuss how our strategic services can{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600 font-bold">accelerate your growth</span> and{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-bold">maximize your success</span>.
                </p>
              </div>

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
                    href="/services"
                    className="flex items-center justify-center gap-3 bg-white/90 backdrop-blur-xl border border-emerald-200 text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:scale-105 hover:border-emerald-300 transition-all duration-300 shadow-lg"
                  >
                    <Globe className="w-5 h-5 text-emerald-500" />
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 text-emerald-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;