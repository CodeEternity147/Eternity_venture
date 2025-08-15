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
    value: '5,000+',
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
    <section className="relative  overflow-hidden">
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

              <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8">
        
       

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