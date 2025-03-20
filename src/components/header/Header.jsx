// src/components/Header.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../button/Button";
import Search from "../search/Search";
import Input from "../input/Input";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="md:static fixed top-0 left-0 w-full bg-[#1E1E1E] border-b border-[#333333] shadow-lg z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link
            to="/"
            className="text-3xl font-bold bg-gradient-to-r from-[#00FFFF] to-[#00CCFF] bg-clip-text text-transparent"
          >
            FairRent
          </Link>

          {isHome && (
            <div className="relative w-full md:w-1/3">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#00FFFF]"
                size={18}
              />
              <Input placeholder="Search apartments..." className="pl-10" />
            </div>
          )}
          {isHome && (
            <Link to="/post-ad">
              <Button className="bg-[#00FFFF] hover:bg-[#00CCFF] text-black font-medium shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                Post Your Apartment
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
