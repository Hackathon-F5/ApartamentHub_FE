import React from 'react';
import { Link } from 'react-router-dom';
import './ApartmentCard.css';


function ApartmentCard({ apartment }) {
  return (
    <div className="apartment-card">
      <Link to={`/apartments/${apartment.id}`}>
        <img src={apartment.image} alt={apartment.title} />
      </Link>
      <div className="apartment-info">
        <h2>{apartment.title}</h2>
        <p>{apartment.description}</p>
        <p className="price">${apartment.price}</p>
      </div>
    </div>
  );
}

export default ApartmentCard;