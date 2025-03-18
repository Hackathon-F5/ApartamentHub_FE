import React from 'react';
import ApartmentCard from '../components/ApartmentCard';
import './HomePage.css';

const apartments = [
  { id: 1, title: "Apartamento Moderno", description: "Luminoso, con vistas al parque", price: 1200, image: "https://via.placeholder.com/300x200?text=Apartamento+1" },
  { id: 2, title: "Estudio Acogedor", description: "Ideal para estudiantes", price: 800, image: "https://via.placeholder.com/300x200?text=Apartamento+2" },
  { id: 3, title: "Casa Colorida", description: "Amplia y bien ubicada", price: 1500, image: "https://via.placeholder.com/300x200?text=Apartamento+3" }
];

function HomePage() {
  return (
    <div>
      <h1>Apartment Marketplace</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
        {apartments.map(apartment => (
          <ApartmentCard key={apartment.id} apartment={apartment} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;