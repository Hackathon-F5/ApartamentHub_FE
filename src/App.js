import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ApartmentDetail from './pages/ApartmentDetail';
import PostAd from './pages/PostAd';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/apartments/:id" element={<ApartmentDetail />} />
      <Route path="/post-ad" element={<PostAd />} />
    </Routes>
  );
}

export default App;