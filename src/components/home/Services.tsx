import { useState, useEffect } from 'react';
import { 
  Building2, 
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
  Layers,
  Code,
  BookOpen,
  Building,
  Scale,
  TrendingUp,
  Users,
} from 'lucide-react';

// Constants
const DIVISIONS = [
  {
    id: 1,
    title: 'IT Consulting',
    description: 'Comprehensive technology solutions for startups including digital transformation, software development, cloud infrastructure, and cybersecurity. We help startups build scalable tech foundations and digital products that drive growth and innovation.',
    icon: Code,
    gradient: 'from-violet-500 via-purple-500 to-indigo-600',
    glowColor: 'shadow-violet-500/40',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/20',
    accentColor: 'text-violet-600',
  },
  {
    id: 2,
    title: 'EdTech',
    description: 'Revolutionary educational technology solutions for startups in the learning sector. We provide platform development, content creation, interactive learning tools, and market entry strategies to help EdTech startups scale and reach global audiences.',
    icon: BookOpen,
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    glowColor: 'shadow-emerald-500/40',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    accentColor: 'text-emerald-600',
  },
  {
    id: 3,
    title: 'Real Estate',
    description: 'Strategic real estate solutions for startups including office space acquisition, property development consulting, and investment opportunities. We help startups find optimal locations, negotiate leases, and develop sustainable real estate portfolios.',
    icon: Building,
    gradient: 'from-amber-500 via-orange-500 to-red-600',
    glowColor: 'shadow-amber-500/40',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20',
    accentColor: 'text-amber-600',
  },
  {
    id: 4,
    title: 'Legal Advisory',
    description: 'Comprehensive legal support for startups including company registration, compliance management, intellectual property protection, contract negotiations, and regulatory guidance. We ensure startups operate within legal frameworks while protecting their interests.',
    icon: Scale,
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-600',
    glowColor: 'shadow-rose-500/40',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/20',
    accentColor: 'text-rose-600',
  },
  {
    id: 5,
    title: 'Funding & Financial',
    description: 'End-to-end financial support for startups including seed funding, venture capital connections, financial planning, accounting services, and investment strategy. We help startups secure capital, manage finances, and build sustainable financial models.',
    icon: TrendingUp,
    gradient: 'from-green-500 via-emerald-500 to-teal-600',
    glowColor: 'shadow-green-500/40',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    accentColor: 'text-green-600',
  },
  {
    id: 6,
    title: 'Collaboration Support',
    description: 'Strategic partnership and collaboration services including business development, networking opportunities, joint venture facilitation, and ecosystem building. We connect startups with potential partners, mentors, and industry leaders.',
    icon: Users,
    gradient: 'from-blue-500 via-indigo-500 to-purple-600',
    glowColor: 'shadow-blue-500/40',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    accentColor: 'text-blue-600',
  },
];

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-amber-400/15 to-orange-400/15 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          {/* Animated Badge */}
          <div className="inline-block mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full opacity-30 blur-sm group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
              <div className="relative flex items-center gap-3 bg-white/90 backdrop-blur-xl border border-violet-200 px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center animate-spin-slow">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-700 font-bold text-base">Our Expertise</span>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
          
          {/* Main Title */}
          <h2 className={`text-4xl md:text-6xl lg:text-7xl font-black mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-slate-800">Core</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-600 animate-gradient">
              Divisions
            </span>
          </h2>
          
          {/* Subtitle */}
          <div className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute -inset-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-2xl blur-lg"></div>
            <div className="relative bg-white/95 backdrop-blur-xl border border-violet-200/50 rounded-2xl p-6 lg:p-8 shadow-xl">
              <p className="text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed">
                Comprehensive support across key business domains through{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 font-bold">
                  multi-disciplinary approach
                </span>{' '}
                and expert guidance.
              </p>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {DIVISIONS.map((division, index) => (
            <div
              key={division.id}
              className={`group relative transform transition-all duration-700 hover:scale-105 hover:-translate-y-3 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(division.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${division.gradient} rounded-3xl opacity-0 blur-xl group-hover:opacity-30 transition-all duration-500`}></div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-violet-400/20 to-purple-400/20 backdrop-blur-xl border border-violet-200/50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 backdrop-blur-xl border border-emerald-200/50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"></div>
              
              {/* Main Card */}
              <div className="relative bg-white/95 backdrop-blur-2xl border border-slate-200/50 rounded-3xl p-6 lg:p-8 h-full hover:border-violet-300/50 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl">
                
                {/* Status Indicator */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-emerald-600 font-medium text-xs">Active</span>
                  </div>
                </div>

                {/* Icon Container */}
                <div className="relative mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${division.gradient} rounded-2xl p-0.5 ${division.glowColor} shadow-lg group-hover:shadow-xl transition-all duration-500`}>
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-slate-50 transition-all duration-500">
                      <division.icon className={`w-8 h-8 ${division.accentColor} group-hover:scale-110 transition-transform duration-500`} />
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full opacity-80 animate-ping"></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className={`text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${division.gradient} mb-2 group-hover:scale-105 transition-transform duration-300`}>
                    {division.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm lg:text-base group-hover:text-slate-700 transition-colors duration-300">
                    {division.description}
                  </p>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-violet-500 to-purple-600 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 lg:mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full opacity-30 blur-sm group-hover:opacity-50 transition-all duration-300"></div>
                             <a href="/services" className="relative flex items-center gap-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                 <span>Explore All Services</span>
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
               </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Services;