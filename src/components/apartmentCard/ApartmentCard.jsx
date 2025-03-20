import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import Badge from '../badge/Badge'; 

function ApartmentCard({ apartment }) {
  return (
    <Link to={`/apartments/${apartment.id}`}>
      <div className="overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.15)] hover:-translate-y-1 h-full flex flex-col bg-[#1E1E1E] border border-[#333333] rounded-lg">
        {/* Imagen y precio */}
        <div className="relative h-48 w-full">
          <img
            src={apartment.image || '/placeholder.svg'}
            alt={apartment.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute top-2 right-2 bg-[#FF007F] rounded-full px-3 py-1 font-bold text-white shadow-[0_0_15px_rgba(255,0,127,0.5)]">
            ${apartment.price}/mo
          </div>
        </div>

        {/* Contenido */}
        <div className="pt-4 flex-grow px-4">
          <h3 className="font-bold text-lg mb-2 line-clamp-1 text-white">{apartment.title}</h3>
          <div className="flex items-center text-[#D3D3D3] text-sm mb-3">
            <MapPin className="h-4 w-4 mr-1 text-[#00FFFF]" />
            <span className="line-clamp-1">{apartment.location || 'Unknown Location'}</span>
          </div>
          <p className="text-[#D3D3D3] mb-3 line-clamp-2">{apartment.description}</p>
          <div className="flex flex-wrap gap-1 mt-auto">
            {apartment.tags && apartment.tags.slice(0, 3).map((tag, index) => (
              <Badge
                key={index}
                className="bg-[#252525] text-[#00FFFF] border-[#00FFFF]/30 hover:border-[#00FFFF] hover:shadow-[0_0_8px_rgba(0,255,255,0.3)]"
              >
                {tag}
              </Badge>
            ))}
            {apartment.tags && apartment.tags.length > 3 && (
              <Badge
                className="bg-[#252525] text-[#00FFFF] border-[#00FFFF]/30 hover:border-[#00FFFF] hover:shadow-[0_0_8px_rgba(0,255,255,0.3)]"
              >
                +{apartment.tags.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Pie de página */}
        <div className="border-t border-[#333333] pt-3 px-4 pb-4 text-sm text-[#D3D3D3]">
          {apartment.size ? `${apartment.size} sqft` : 'N/A'} • {apartment.type || 'N/A'} • Available {apartment.availableFrom || 'N/A'}
        </div>
      </div>
    </Link>
  );
}

export default ApartmentCard;