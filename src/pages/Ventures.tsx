import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, ExternalLink, Bookmark, Award, Calendar, Users } from 'lucide-react';

const Ventures = () => {
  useEffect(() => {
    document.title = 'Our Ventures | Eternity Ventures';
  }, []);

  const [activeFilter, setActiveFilter] = useState('all');

  const ventures = [
    {
      id: 1,
      name: 'CodeEternity',
      description: 'A revolutionary coding education platform with interactive, project-based curriculum and AI-powered guidance.',
      logo: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      industry: 'EdTech',
      stage: 'Growth',
      location: 'Noida',
      website: 'https://codeeternity.com',
      featured: true,
      metrics: [
        { label: 'Active Users', value: '50,000+' },
        { label: 'Revenue', value: '₹1.2 Cr' },
        { label: 'Investment', value: '₹85 Lakhs' },
      ],
    },
    {
      id: 2,
      name: 'Flick Lifestyle',
      description: 'Digital fashion marketplace connecting independent designers with environmentally conscious consumers.',
      logo: 'https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      industry: 'E-commerce',
      stage: 'Early',
      location: 'Bangalore',
      website: 'https://flicklifestyle.com',
      featured: false,
      metrics: [
        { label: 'Designers', value: '250+' },
        { label: 'Revenue', value: '₹40 Lakhs' },
        { label: 'Investment', value: '₹25 Lakhs' },
      ],
    },
    {
      id: 3,
      name: 'GreenRide',
      description: 'Electric vehicle ride-sharing platform focused on zero-emission transportation solutions for urban areas.',
      logo: 'https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      industry: 'Transport',
      stage: 'Early',
      location: 'Delhi',
      website: 'https://greenride.co.in',
      featured: false,
      metrics: [
        { label: 'Vehicles', value: '75+' },
        { label: 'Revenue', value: '₹30 Lakhs' },
        { label: 'Investment', value: '₹50 Lakhs' },
      ],
    },
    {
      id: 4,
      name: 'Swaroop.AI',
      description: 'AI-powered analytics platform helping businesses optimize operations and make data-driven decisions.',
      logo: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      industry: 'AI & ML',
      stage: 'Growth',
      location: 'Hyderabad',
      website: 'https://swaroop.ai',
      featured: true,
      metrics: [
        { label: 'Clients', value: '120+' },
        { label: 'Revenue', value: '₹95 Lakhs' },
        { label: 'Investment', value: '₹1.1 Cr' },
      ],
    },
    {
      id: 5,
      name: 'Radhika Infra',
      description: 'Modern infrastructure development company specializing in sustainable building solutions.',
      logo: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      industry: 'Real Estate',
      stage: 'Mature',
      location: 'Mumbai',
      website: 'https://radhikainfra.com',
      featured: false,
      metrics: [
        { label: 'Projects', value: '15+' },
        { label: 'Revenue', value: '₹4.5 Cr' },
        { label: 'Investment', value: '₹2 Cr' },
      ],
    },
    {
      id: 6,
      name: 'NutriChef',
      description: 'Personalized meal delivery service focusing on nutritionally optimized meals for health-conscious consumers.',
      logo: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      industry: 'FoodTech',
      stage: 'Early',
      location: 'Pune',
      website: 'https://nutrichef.in',
      featured: false,
      metrics: [
        { label: 'Subscribers', value: '5,000+' },
        { label: 'Revenue', value: '₹25 Lakhs' },
        { label: 'Investment', value: '₹40 Lakhs' },
      ],
    },
  ];

  const filteredVentures = activeFilter === 'all' 
    ? ventures 
    : ventures.filter(venture => 
        venture.industry === activeFilter || 
        venture.stage === activeFilter || 
        venture.location === activeFilter
      );

  const industries = [...new Set(ventures.map(venture => venture.industry))];
  const stages = [...new Set(ventures.map(venture => venture.stage))];
  const locations = [...new Set(ventures.map(venture => venture.location))];

  return (
    <div className="pt-20">
      {/* Banner */}
      <section className="relative bg-gradient-to-r from-primary-900 to-secondary-900 py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our Ventures
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Discover the innovative companies in our portfolio. From early-stage startups 
            to established businesses, we invest in visionaries creating impact across industries.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-900">Our Portfolio</h2>
              <p className="text-gray-600">
                {filteredVentures.length} ventures found
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700 font-medium">Filter by:</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            
            <div className="flex flex-wrap gap-3">
              <span className="text-gray-500 px-1 flex items-center">Industry:</span>
              {industries.map(industry => (
                <button
                  key={industry}
                  onClick={() => setActiveFilter(industry)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === industry
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-3">
              <span className="text-gray-500 px-1 flex items-center">Stage:</span>
              {stages.map(stage => (
                <button
                  key={stage}
                  onClick={() => setActiveFilter(stage)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === stage
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {stage}
                </button>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-3">
              <span className="text-gray-500 px-1 flex items-center">Location:</span>
              {locations.map(location => (
                <button
                  key={location}
                  onClick={() => setActiveFilter(location)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === location
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVentures.map((venture, index) => (
              <motion.div
                key={venture.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 h-full flex flex-col"
              >
                <div className="relative">
                  <img 
                    src={venture.logo} 
                    alt={`${venture.name} logo`} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                  
                  {venture.featured && (
                    <div className="absolute top-4 right-4 bg-accent-500 text-primary-900 px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <Award className="h-3 w-3 mr-1" />
                      Featured
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-center">
                      <span className="bg-white/90 text-primary-800 px-3 py-1 rounded-full text-xs font-medium">
                        {venture.industry}
                      </span>
                      <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                        {venture.location}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{venture.name}</h3>
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      venture.stage === 'Early' 
                        ? 'bg-blue-50 text-blue-700' 
                        : venture.stage === 'Growth' 
                        ? 'bg-green-50 text-green-700'
                        : 'bg-purple-50 text-purple-700'
                    }`}>
                      {venture.stage} Stage
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{venture.description}</p>
                  
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {venture.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-gray-50 p-2 rounded-lg text-center">
                        <span className="block text-primary-700 font-bold text-sm">{metric.value}</span>
                        <span className="text-gray-500 text-xs">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="px-6 pb-6 mt-auto">
                  <div className="flex justify-between">
                    <a 
                      href={venture.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium text-sm"
                    >
                      Visit Website
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                    
                    <button 
                      className="inline-flex items-center text-gray-600 hover:text-gray-800 font-medium text-sm"
                      aria-label="Save for later"
                    >
                      <Bookmark className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Programs */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium mb-4">
              Accelerate Your Growth
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Upcoming Programs</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Join our accelerator and incubator programs designed to help startups scale 
              through funding, mentorship, and strategic guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-gray-50 rounded-xl p-8 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-secondary-100 p-3 rounded-full mr-4">
                  <Calendar className="h-6 w-6 text-secondary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Startup Accelerator Program</h3>
                  <p className="text-gray-600">Applications open until June 30, 2025</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                A 12-week intensive program for early-stage startups with validated products. 
                Receive ₹15 lakhs funding, mentorship from industry leaders, and access to our network.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                  ₹15 Lakhs Funding
                </span>
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  Weekly Mentorship
                </span>
                <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                  Investor Demo Day
                </span>
              </div>
              
              <a 
                href="/apply" 
                className="inline-flex items-center bg-secondary-600 hover:bg-secondary-700 text-white py-2 px-6 rounded-lg transition-colors"
              >
                Apply Now
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-gray-50 rounded-xl p-8 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Founder Mentorship Program</h3>
                  <p className="text-gray-600">Rolling applications - Next cohort July 2025</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                A 6-month mentorship program for first-time founders. Get paired with successful 
                entrepreneurs who will guide you through the challenges of building your startup.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                  1:1 Mentorship
                </span>
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  Monthly Workshops
                </span>
                <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                  Networking Events
                </span>
              </div>
              
              <a 
                href="/apply" 
                className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white py-2 px-6 rounded-lg transition-colors"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pitch CTA */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Have a Startup Idea?
            </h2>
            <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for innovative ideas and passionate founders. 
              Pitch your startup to us and see if we're the right partner for your vision.
            </p>
            <a 
              href="/pitch" 
              className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-primary-900 font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Pitch Your Idea
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Ventures;