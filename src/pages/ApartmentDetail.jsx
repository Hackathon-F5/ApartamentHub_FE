import React from 'react';
import { useParams } from 'react-router-dom';
import './ApartmentDetail.css';

function ApartmentDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalle del Apartamento</h1>
      <p>ID: {id}</p>
      <p>Información detallada del apartamento...</p>
    </div>
  );
}

export default ApartmentDetail;