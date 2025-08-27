import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Vision from '../components/home/Vision';
import FeaturedVenture from '../components/home/FeaturedVenture';


const Home = () => {
  useEffect(() => {
    document.title = 'Eternity Ventures | Your Vision, Our Venture';
  }, []);

  return (
    <div>
      <Hero />
      <Services />
      <Vision />
      <FeaturedVenture />
    
    </div>
  );
};

export default Home;