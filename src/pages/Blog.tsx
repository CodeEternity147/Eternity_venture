import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User, Tag, ArrowRight } from 'lucide-react';

const Blog = () => {
  useEffect(() => {
    document.title = 'Blog & Insights | Eternity Ventures';
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Venture Capital in India',
      excerpt: 'How emerging trends are reshaping the investment landscape for startups and investors in the Indian market.',
      date: 'May 15, 2025',
      author: 'Adarsh Srivastava',
      category: 'Investment',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: true,
      readTime: '8 min read',
    },
    {
      id: 2,
      title: 'From Idea to IPO: The CodeEternity Journey',
      excerpt: 'The remarkable story of how CodeEternity transformed from a small startup to a market leader in just three years.',
      date: 'April 28, 2025',
      author: 'Priya Sharma',
      category: 'Founder Stories',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: false,
      readTime: '12 min read',
    },
    {
      id: 3,
      title: 'Sustainable Business Models in Tech',
      excerpt: 'Exploring how technology companies can build profitable business models while prioritizing sustainability.',
      date: 'April 10, 2025',
      author: 'Rahul Verma',
      category: 'Startup Trends',
      image: 'https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: false,
      readTime: '7 min read',
    },
    {
      id: 4,
      title: 'The Art of Term Sheet Negotiation',
      excerpt: 'Key strategies for founders to negotiate favorable terms when raising venture capital funding.',
      date: 'March 22, 2025',
      author: 'Adarsh Srivastava',
      category: 'Investment',
      image: 'https://images.pexels.com/photos/6694544/pexels-photo-6694544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: false,
      readTime: '10 min read',
    },
    {
      id: 5,
      title: 'Building a Remote-First Startup Culture',
      excerpt: 'How Swaroop.AI created a thriving company culture with teams distributed across multiple locations.',
      date: 'March 5, 2025',
      author: 'Deepika Patel',
      category: 'Founder Stories',
      image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: false,
      readTime: '9 min read',
    },
    {
      id: 6,
      title: 'AI Trends Reshaping Startup Ecosystems',
      excerpt: 'How artificial intelligence is creating new opportunities and disrupting traditional business models.',
      date: 'February 18, 2025',
      author: 'Vikram Singh',
      category: 'Startup Trends',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: true,
      readTime: '11 min read',
    },
  ];

  const filteredPosts = blogPosts
    .filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(post => 
      activeCategory === 'all' || post.category === activeCategory
    );

  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  return (
    <div className="pt-20">
      {/* Banner */}
      <section className="relative bg-gradient-to-r from-primary-900 to-secondary-900 py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Blog & Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Thought leadership, industry insights, and success stories from our 
            team and portfolio companies.
          </motion.p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="relative w-full md:w-auto md:min-w-[320px]">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Posts' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {filteredPosts.some(post => post.featured) && (
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredPosts
                .filter(post => post.featured)
                .map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                  >
                    <div className="flex flex-col md:flex-row h-full">
                      <div className="md:w-2/5">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-3/5 p-6 flex flex-col">
                        <div className="flex items-center mb-3">
                          <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            {post.category}
                          </span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-gray-500 text-sm flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {post.date}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                        <p className="text-gray-600 mb-6">{post.excerpt}</p>
                        
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                              <User className="h-4 w-4 text-gray-600" />
                            </div>
                            <span className="text-sm text-gray-700">{post.author}</span>
                          </div>
                          <span className="text-sm text-gray-500">{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">
            {activeCategory === 'all' ? 'Recent Articles' : activeCategory}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter(post => !post.featured || activeCategory !== 'all')
              .map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow"
                >
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center mb-3">
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                        <Tag className="h-3 w-3 mr-1" />
                        {post.category}
                      </span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-gray-500 text-sm">{post.date}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                          <User className="h-4 w-4 text-gray-600" />
                        </div>
                        <span className="text-sm text-gray-700">{post.author}</span>
                      </div>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <a 
                      href={`/blog/${post.id}`} 
                      className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium text-sm"
                    >
                      Read Article
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Get the latest insights, industry trends, and success stories delivered 
              straight to your inbox. No spam, just valuable content.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;