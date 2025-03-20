import React from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import { BackButton } from "../../components/backButton/BackButton";

function ApartmentDetail() {
  return (
    <div className="container mx-auto px-4 pt-28">
      <BackButton />
      <ContactForm />
    </div>
  );
}

export default ApartmentDetail;
