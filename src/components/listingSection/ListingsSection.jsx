import React from 'react';
import { Link } from 'react-router-dom';
import ApartmentCard from '../apartmentCard/ApartmentCard'; 
import Button from '../button/Button';
import Badge from '../badge/Badge'; 
import { MapPin, Tag } from 'lucide-react'; 

// Datos de prueba (puedes reemplazarlos con datos del backend)
const apartments = [
    { id: 1, title: "Apartamento Moderno", description: "Luminoso, con vistas al parque", price: 1200, image: "https://via.placeholder.com/300x200?text=Apartamento+1", location: "Downtown", tags: ["Modern", "Pet Friendly", "Furnished", "Parking"], size: 800, type: "Studio", availableFrom: "Now" },
    { id: 2, title: "Estudio Acogedor", description: "Ideal para estudiantes", price: 800, image: "https://via.placeholder.com/300x200?text=Apartamento+2", location: "University Area", tags: ["Cozy", "Furnished"], size: 500, type: "Apartment", availableFrom: "Next Week" },
    { id: 3, title: "Casa Colorida", description: "Amplia y bien ubicada", price: 1500, image: "https://via.placeholder.com/300x200?text=Apartamento+3", location: "Suburbs", tags: ["Spacious", "Garden", "Balcony"], size: 1200, type: "House", availableFrom: "In 2 Months" },
  ];

function ListingsSection() {
  return (
    <main className="container mx-auto px-4 py-12" id="listings">
      {/* Sección de listados destacados */}
      <section className="mb-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">Featured Listings</h2>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button
              className="bg-[#0D0D0D] border-[#00FFFF]/50 text-[#00FFFF] hover:bg-[#1E1E1E] hover:border-[#00FFFF] hover:shadow-[0_0_10px_rgba(0,255,255,0.3)]"
            >
              <MapPin className="mr-2 h-4 w-4" /> Filter by Location
            </Button>
            <Button
              className="bg-[#0D0D0D] border-[#00FFFF]/50 text-[#00FFFF] hover:bg-[#1E1E1E] hover:border-[#00FFFF] hover:shadow-[0_0_10px_rgba(0,255,255,0.3)]"
            >
              <Tag className="mr-2 h-4 w-4" /> Filter by Tags
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {apartments.map((apartment) => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
          ))}
        </div>
      </section>

      {/* Sección para propietarios */}
      <section className="bg-gradient-to-r from-[#1E1E1E] to-[#252525] rounded-xl p-8 text-white mb-10 shadow-lg border border-[#333333]">
        <h2 className="text-2xl font-bold mb-4">Are you a property owner?</h2>
        <p className="mb-6 text-[#D3D3D3]">
          List your apartment on ApartmentHub and connect with potential tenants today!
        </p>
        <Link to="/post-ad">
          <Button>
            Post Your Apartment
          </Button>
        </Link>
      </section>

      {/* Sección de etiquetas populares */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-white">Popular Tags</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>Pet Friendly</Badge>
          <Badge color="pink">Furnished</Badge>
          <Badge>Garden</Badge>
          <Badge>Parking</Badge>
          <Badge>City Center</Badge>
          <Badge color="pink">Balcony</Badge>
          <Badge>Modern</Badge>
          <Badge color="pink">Gym</Badge>
        </div>
      </section>
    </main>
  );
}

export default ListingsSection;