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
// import { Link } from 'react-router-dom';

const servicesData = [
  {
    id: 1,
    title: 'Real Estate Intelligence',
    subtitle: 'Next-Gen Property Investment',
    description: 'AI-powered real estate analytics and strategic development for maximum ROI through data-driven investment decisions and smart market timing.',
    icon: Building2,
    gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
    glowColor: 'shadow-cyan-500/30',
    bgPattern: 'bg-gradient-to-br from-cyan-500/5 to-blue-500/10',
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
    gradient: 'from-emerald-400 via-green-500 to-teal-600',
    glowColor: 'shadow-emerald-500/30',
    bgPattern: 'bg-gradient-to-br from-emerald-500/5 to-green-500/10',
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
    gradient: 'from-purple-400 via-violet-500 to-indigo-600',
    glowColor: 'shadow-purple-500/30',
    bgPattern: 'bg-gradient-to-br from-purple-500/5 to-violet-500/10',
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
    gradient: 'from-orange-400 via-red-500 to-pink-600',
    glowColor: 'shadow-orange-500/30',
    bgPattern: 'bg-gradient-to-br from-orange-500/5 to-red-500/10',
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
    gradient: 'from-yellow-400 via-amber-500 to-orange-600',
    glowColor: 'shadow-yellow-500/30',
    bgPattern: 'bg-gradient-to-br from-yellow-500/5 to-amber-500/10',
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
    gradient: 'from-pink-400 via-rose-500 to-red-600',
    glowColor: 'shadow-pink-500/30',
    bgPattern: 'bg-gradient-to-br from-pink-500/5 to-rose-500/10',
    features: ['AI/ML Integration', 'Innovation Labs', 'Future Tech'],
    stats: { value: '10x', label: 'Innovation Rate' },
    delay: 0.6,
  },
];

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Static Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
        <div className="absolute inset-0">
          {/* Static Liquid Blobs */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 lg:w-[500px] lg:h-[500px] rounded-full opacity-15 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)'
            }}
          />
          
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 lg:w-[400px] lg:h-[400px] rounded-full opacity-20 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)'
            }}
          />

          <div
            className="absolute top-1/2 right-1/3 w-64 h-64 lg:w-[350px] lg:h-[350px] rounded-full opacity-10 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, rgba(16, 185, 129, 0.1) 50%, transparent 100%)'
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
        
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Static Badge */}
          <div className="inline-block mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full opacity-30 blur-sm"></div>
              <div className="relative flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-medium">Our Services</span>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">HOW WE</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-400">
              TRANSFORM
            </span>
          </h2>

          {/* Subtitle with Glass Effect */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-2xl blur-lg"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
                We offer comprehensive solutions designed to{' '}
                <span className="text-emerald-400 font-semibold">transform visionary ideas</span> into{' '}
                <span className="text-cyan-400 font-semibold">thriving enterprises</span> through strategic investments and partnerships.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-24">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative transform transition-all duration-300 hover:-translate-y-2 hover:scale-105"
            >
              {/* Card Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 blur group-hover:opacity-30 transition-all duration-500`}></div>
              
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
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl p-0.5 ${service.glowColor} shadow-2xl`}>
                    <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full opacity-80"></div>
                </div>

                {/* Content */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} mb-2`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-400 font-medium text-sm">
                      {service.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-6 h-6 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center`}>
                        <Zap className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300 font-medium text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                  <div>
                    <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                      {service.stats.value}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {service.stats.label}
                    </div>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center opacity-20`}>
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Action Button */}
                <div className="group/btn transform transition-transform duration-300 hover:scale-105">
                  <button 
                    // to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center justify-between w-full bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 hover:border-white/20 px-6 py-4 rounded-2xl transition-all duration-300"
                  >
                    <span className="text-white font-semibold">
                      Learn More
                    </span>
                    <ArrowRight className="w-5 h-5 text-white group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Static Floating Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg opacity-60"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg opacity-40"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          {/* Glass Panel CTA */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-lg"></div>
            <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 lg:p-12">
              
              {/* CTA Header */}
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white">
                    Ready to Transform Your Business?
                  </h3>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Let's discuss how our services can help you achieve your business goals and{' '}
                  <span className="text-blue-400 font-semibold">accelerate your growth</span> to new heights.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {[
                  { icon: Award, value: '98%', label: 'Success Rate', color: 'from-yellow-400 to-orange-500' },
                  { icon: Users, value: '500+', label: 'Clients Served', color: 'from-blue-400 to-cyan-500' },
                  { icon: Globe, value: '25+', label: 'Countries', color: 'from-green-400 to-emerald-500' },
                  { icon: TrendingUp, value: '₹100Cr+', label: 'Value Created', color: 'from-purple-400 to-pink-500' }
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="text-center transform transition-transform duration-300 hover:scale-105"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <div className="group relative transform transition-transform duration-300 hover:scale-105">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-50 blur-sm group-hover:opacity-75 transition-all duration-300"></div>
                  <button 
                    // to="/contact"
                    className="relative flex items-center justify-center px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg transition-all duration-300"
                  >
                    <span className="flex items-center gap-3">
                      <Target className="w-5 h-5" />
                      Schedule Consultation
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>

                <div className="group transform transition-transform duration-300 hover:scale-105">
                  <button 
                    // to="/portfolio"
                    className="flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
                  >
                    <span className="flex items-center gap-3">
                      <Layers className="w-5 h-5" />
                      View Our Work
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                  Or reach out directly • 
                  <span className="text-blue-400 font-semibold ml-1 hover:text-blue-300 cursor-pointer transition-colors duration-300">
                    hello@futureventures.com
                  </span>
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Static Geometric Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="hidden lg:block absolute top-1/4 right-16 w-20 h-20 border-2 border-emerald-400/20 rounded-lg backdrop-blur-sm opacity-20" />
          <div className="hidden lg:block absolute bottom-1/3 left-20 w-16 h-16 bg-cyan-500/15 rounded-full backdrop-blur-sm border border-cyan-400/20 opacity-15" />
          <div className="hidden lg:block absolute top-2/3 right-1/3 w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-400/20 transform rotate-45 backdrop-blur-sm opacity-20" />
        </div>

      </div>

      {/* Enhanced Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .service-card {
            padding: 1.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .service-title {
            font-size: 1.5rem !important;
          }
          
          .service-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem;
          }
          
          .cta-stats {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .service-card {
            padding: 1rem;
          }
          
          .service-title {
            font-size: 1.25rem !important;
          }
          
          .cta-buttons {
            flex-direction: column;
            gap: 1rem;
          }
        }

        /* Enhanced accessibility */
        .service-card:focus-within {
          outline: 2px solid rgba(59, 130, 246, 0.5);
          outline-offset: 2px;
        }

        /* Custom scrollbar */
        .service-features::-webkit-scrollbar {
          width: 4px;
        }
        
        .service-features::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.3);
          border-radius: 2px;
        }
      `}</style>
    </section>
  );
};

export default Services;