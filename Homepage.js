import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import Footer from './Footer';
import '../style.css';

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default HomePage;
