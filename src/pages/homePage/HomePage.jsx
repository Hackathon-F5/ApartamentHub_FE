import React from 'react';
import Header from '../../components/header/Header';
import ListingsSection from '../../components/listingSection/ListingsSection'; 
import Footer from '../../components/footer/footer';

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
     
      <ListingsSection />
     
    </div>
  );
}

export default HomePage;