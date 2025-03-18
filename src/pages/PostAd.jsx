import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import './PostAd.css';


function PostAd() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, price });
  };

  return (
    <div>
      <h1>Publica tu anuncio</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Precio:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <button type="submit">Publicar</button>
      </form>
      <ContactForm />
    </div>
  );
}

export default PostAd;