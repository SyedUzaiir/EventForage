import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <HeroSection />
        {/* You can add more sections here like "Featured Events", "Testimonials" etc. */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;

