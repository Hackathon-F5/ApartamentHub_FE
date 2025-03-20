import React from "react";
// import { useParams } from "react-router-dom";
import "./ApartmentDetail.css";
import ContactForm from "../../components/contactForm/ContactForm";

function ApartmentDetail() {
  // const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <ContactForm />
    </div>
  );
}

export default ApartmentDetail;
