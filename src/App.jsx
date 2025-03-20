import React, { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ApartmentDetail from "./pages/apartmentDetail/ApartmentDetail";
import PostAd from "./pages/postAd/PostAd";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";


function App() {
  const {pathname} = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
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
