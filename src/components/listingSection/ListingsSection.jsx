
import { Link } from 'react-router-dom';
import ApartmentCard from '../apartmentCard/ApartmentCard'; 
import Button from '../button/Button';
import Badge from '../badge/Badge'; 
import { MapPin, Tag } from 'lucide-react'; 
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListingsSection() {
    const [apartments, setApartments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/apartment')
        .then(response => {
          setApartments(response.data);
          setLoading(false);
        })
        .catch(err => {
          setError('Error fetching apartments. Please try again later.');
          setLoading(false);
          console.error(err);
        });
    }, []);
  
    if (loading) return <div className="text-white text-center">Loading...</div>;
    if (error) return <div className="text-red-500 text-center">{error}</div>;
  
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