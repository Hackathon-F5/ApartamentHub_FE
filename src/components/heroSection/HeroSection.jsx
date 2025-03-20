import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import Button from "../button/Button";
import Input from "../input/Input";
import Search from "../search/Search";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full">
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1200&width=2000')",
        }}
      ></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 max-w-4xl">
          Everyone deserves a
          <br />
          <span className="mt-2 block text-[#00FFFF] drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">
            HOME
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-[#D3D3D3] mb-8 max-w-2xl">
          Browse thousands of apartments and houses for rent in your area
        </p>
        <div className="w-full max-w-2xl bg-[#1E1E1E]/90 p-4 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-[#333333]">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="relative flex-grow">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#00FFFF]"
                size={18}
              />
              <Input
                placeholder="Search by location, property type, or features..."
                className="pl-10 border border-[#333333] focus:border-[#00FFFF] bg-[#1E1E1E] text-white placeholder:text-gray-500"
              />
            </div>
            <Button className="bg-[#00FFFF] hover:bg-[#00CCFF] text-black shadow-[0_0_10px_rgba(0,255,255,0.3)]">
              Search
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 flex justify-center w-full z-20 animate-bounce">
        <Link to="#listings">
          <Button
            variant="ghost"
            className=" rounded-full bg-[#1E1E1E]/30 hover:bg-[#1E1E1E]/50 text-[#00FFFF] border border-[#00FFFF]/30 shadow-[0_0_10px_rgba(0,255,255,0.2)]"
          >
            <ChevronDown size={24} />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
