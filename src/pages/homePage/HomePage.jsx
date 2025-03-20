import React from 'react';


import ListingsSection from '../../components/listingSection/ListingsSection'; 
import HeroSection from '../../components/heroSection/HeroSection';

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
     <HeroSection/>
      <ListingsSection />
     
    </div>
  );
}

export default HomePage;