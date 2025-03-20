import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import ApartmentDetail from './pages/apartmentDetail/ApartmentDetail';
import PostAd from './pages/postAd/PostAd';
import Footer from './components/footer/footer';
import './App.css';
import Header from './components/header/Header';
import HeroSection from './components/heroSection/HeroSection';

function App() {
  return (
    <>
    <Header />
    <main>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/apartments/:id" element={<ApartmentDetail />} />
      <Route path="/post-ad" element={<PostAd />} />
    </Routes>
    </main>
    <Footer />
    </>
  );
}

export default App;