import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { MapPin } from 'lucide-react';
import Badge from '../../components/badge/Badge';
import ContactForm from '../../components/contactForm/ContactForm';

function ApartmentDetail() {
  const { id } = useParams();
  const [apartment, setApartment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/apartment/${id}`)
      .then(response => {
        setApartment(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching apartment details.');
        setLoading(false);
        console.error(err);
      });
  }, [id]);

  
  const handleContactSubmit = (formData) => {
    console.log('Contact form submitted:', {
      apartmentId: id,
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });
    // Aquí  añadiremos una solicitud al backend para enviar el mensaje
    /*
    axios.post('http://127.0.0.1:8000/api/contact', {
      apartment_id: id,
      name: formData.name,
      email: formData.email,
      message: formData.message,
    })
      .then(response => {
        console.log('Message sent:', response.data);
      })
      .catch(err => {
        console.error('Error sending message:', err);
      });
    */
  };

  if (loading) return <div className="text-white text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;
  if (!apartment) return <div className="text-white text-center">Apartment not found</div>;

  const mappedApartment = {
    title: apartment.name,
    description: apartment.description,
    price: apartment.price,
    image: apartment.pictures && apartment.pictures.length > 0 ? apartment.pictures[0].url : '/placeholder.svg',
    location: apartment.address,
    tags: apartment.tags ? apartment.tags.map(tag => tag.name) : [],
    size: apartment.size || null,
    type: apartment.type || 'Apartment',
    availableFrom: apartment.availability ? 'Now' : 'Not Available',
  };

  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagen principal */}
        <div>
          <img
            src={mappedApartment.image}
            alt={mappedApartment.title}
            className="w-full h-96 object-cover rounded-lg"
          />
          {/* Galería de imágenes adicionales */}
          {apartment.pictures && apartment.pictures.length > 1 && (
            <div className="flex gap-2 mt-4">
              {apartment.pictures.slice(1).map((picture, index) => (
                <img
                  key={index}
                  src={picture.url}
                  alt={`Image ${index + 2}`}
                  className="w-24 h-24 object-cover rounded-lg"
                />
              ))}
            </div>
          )}
        </div>

        {/* Detalles */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{mappedApartment.title}</h1>
          <div className="flex items-center text-[#D3D3D3] text-lg mb-4">
            <MapPin className="h-5 w-5 mr-2 text-[#00FFFF]" />
            <span>{mappedApartment.location}</span>
          </div>
          <p className="text-2xl font-bold text-[#FF007F] mb-4">€{mappedApartment.price}/mo</p>
          <p className="text-[#D3D3D3] mb-4">{mappedApartment.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {mappedApartment.tags.map((tag, index) => (
              <Badge
                key={index}
                className="bg-[#252525] text-[#00FFFF] border-[#00FFFF]/30 hover:border-[#00FFFF] hover:shadow-[0_0_8px_rgba(0,255,255,0.3)]"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="text-[#D3D3D3] text-sm">
            <p>Size: {mappedApartment.size ? `${mappedApartment.size} m²` : 'N/A'}</p>
            <p>Type: {mappedApartment.type}</p>
            <p>Availability: {mappedApartment.availableFrom}</p>
          </div>
        </div>
      </div>
      {/* Formulario de contacto */}
      <ContactForm apartmentId={id} onSubmit={handleContactSubmit} />
    </div>
  );
}

export default ApartmentDetail;