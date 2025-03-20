import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../button/Button'; 

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-10 border-t border-[#333333]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ApartmentHub</h3>
            <p className="text-[#D3D3D3]">
              Find your perfect apartment with ease. Browse listings, post your own, and connect with property owners.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#00FFFF] hover:text-[#00CCFF]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/post-ad" className="text-[#00FFFF] hover:text-[#00CCFF]">
                  Post an Ad
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#00FFFF] hover:text-[#00CCFF]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#00FFFF] hover:text-[#00CCFF]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-[#D3D3D3]">
              Have questions? Reach out to our support team.
            </p>
            <Link to="/contact">
              <Button className="mt-4 bg-[#00FFFF] hover:bg-[#00CCFF] text-black font-medium shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#333333] text-center text-[#D3D3D3]">
          <p>&copy; {new Date().getFullYear()} ApartmentHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
