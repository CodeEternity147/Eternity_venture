import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, BookOpen, Building, Scale } from 'lucide-react';

const About = () => {
  useEffect(() => {
    document.title = 'About Us | Eternity Ventures';
  }, []);

  // Constants
  const DIVISIONS = [
    {
      id: 1,
      title: 'IT Consulting',
      description: 'Strategic technological solutions and digital transformation services.',
      icon: <Code className="h-8 w-8" />,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      id: 2,
      title: 'EdTech',
      description: 'Revolutionizing education through innovative technology solutions.',
      icon: <BookOpen className="h-8 w-8" />,
      color: 'bg-green-50 text-green-600',
    },
    {
      id: 3,
      title: 'Real Estate',
      description: 'Premium residential/commercial properties with sustainability focus.',
      icon: <Building className="h-8 w-8" />,
      color: 'bg-amber-50 text-amber-600',
    },
    {
      id: 4,
      title: 'Legal Advisory',
      description: 'Comprehensive legal services for regulatory compliance.',
      icon: <Scale className="h-8 w-8" />,
      color: 'bg-purple-50 text-purple-600',
    },
  ];

  const VALUES = [
    {
      title: 'Integrity',
      content: 'Upholding highest ethical standards in all interactions.',
      items: ['Transparent communication', 'Honest feedback', 'Responsible governance'],
      color: 'primary',
    },
    {
      title: 'Innovation',
      content: 'Embracing creative solutions and bold approaches.',
      items: ['Continuous learning', 'Embracing change', 'Problem-solving mindset'],
      color: 'secondary',
    },
    {
      title: 'Collaboration',
      content: 'Power of partnerships and teamwork.',
      items: ['Strategic partnerships', 'Inclusive teamwork', 'Knowledge sharing'],
      color: 'accent',
    },
  ];

  const FOUNDER_INFO = {
    name: 'Adarsh Srivastava',
    position: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    quote: 'We believe in the power of entrepreneurship to solve pressing challenges.',
    description: [
      '15+ years experience in entrepreneurship and venture capital.',
      'Founded two successful startups prior to Eternity Ventures.',
      'Led investments in 50+ companies across diverse sectors.',
    ],
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-secondary-900 py-24">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg')] opacity-20 bg-cover bg-center mix-blend-overlay" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Celebrating Diversity, <br />
              <span className="text-accent-400">Shaping the Future</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto">
              We're a diverse team committed to empowering visionary founders and transforming innovative ideas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Vision & Mission</h2>
                <p className="text-gray-600 text-lg mb-6">
                  Founded in 2019 to identify and nurture promising entrepreneurs across India.
                </p>
                <p className="text-gray-600 text-lg">
                  Focus on early-stage startups with strong teams and scalable models.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-lg mb-2 text-primary-800">Our Vision</h3>
                  <p className="text-gray-600">
                    Catalyst for India's next generation of transformative companies.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-lg mb-2 text-secondary-800">Our Mission</h3>
                  <p className="text-gray-600">
                    Empower entrepreneurs with capital, expertise, and connections.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Founder Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-start mb-8">
                  <img
                    src={FOUNDER_INFO.image}
                    alt="Founder"
                    className="h-16 w-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{FOUNDER_INFO.name}</h3>
                    <p className="text-secondary-600 font-medium">{FOUNDER_INFO.position}</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 italic mb-6 border-l-4 border-accent-500 pl-4">
                  "{FOUNDER_INFO.quote}"
                </blockquote>
                <div className="text-gray-600 space-y-4">
                  {FOUNDER_INFO.description.map((text, index) => (
                    <p key={index}>{text}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Divisions */}
      <section className="section bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Core Divisions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive support across key business domains through multi-disciplinary approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DIVISIONS.map((division, index) => (
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
              >
                <div className={`${division.color} p-3 rounded-lg w-fit mb-4`}>
                  {division.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{division.title}</h3>
                <p className="text-gray-600">{division.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">
              Our Culture
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guiding principles that shape our decisions and community engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`p-6 rounded-xl border-2 ${
                  value.color === 'primary' 
                    ? 'border-primary-200 bg-primary-50' 
                    : value.color === 'secondary'
                    ? 'border-secondary-200 bg-secondary-50'
                    : 'border-accent-200 bg-accent-50'
                }`}
              >
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 mb-4">{value.content}</p>
                <ul className="space-y-2">
                  {value.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <svg
                        className={`w-5 h-5 mt-1 mr-2 ${
                          value.color === 'primary'
                            ? 'text-primary-600'
                            : value.color === 'secondary'
                            ? 'text-secondary-600'
                            : 'text-accent-600'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;