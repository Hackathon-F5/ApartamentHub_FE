import React from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const BackButton = () => {
  return (
    <div>
      <Link
        to="/"
        className="inline-flex items-center text-[#00FFFF] hover:text-[#00CCFF] mb-6"
      >
        <ChevronLeft className="mr-2 h-4 w-4" /> Back to listings
      </Link>
    </div>
  );
};
