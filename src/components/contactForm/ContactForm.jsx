import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    aboutMe: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

 
  const sanitizeInput = (input) => {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
  };

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: sanitizeInput(value) });
  };

 
  const validateForm = () => {
    let errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "⚠ Name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName.trim())) {
      errors.fullName = "⚠ Only letters are allowed.";
    }

    if (!formData.email.trim()) {
      errors.email = "⚠ Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "⚠ Enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      errors.phone = "⚠ Phone number is required.";
    } else if (!/^(?:\+34|0034|34)?[6789]\d{8}$/.test(formData.phone.trim())) {
      errors.phone = "⚠ Invalid Spanish phone number.";
    }

    if (formData.aboutMe.length > 500) {
      errors.aboutMe = "⚠ Maximum length is 500 characters.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      alert("Message sent successfully!");
      
      
      setFormData({ fullName: "", phone: "", email: "", aboutMe: "" });
      setErrors({});
    } catch (error) {
      setErrors({ root: "⚠ There was a problem. Try again later." });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="bg-[#1E1E1E] rounded-xl shadow-lg shadow-black/50 overflow-hidden mb-8 border border-[#333333]">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-white">
          Contact About This Property
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2 relative">
              <label htmlFor="fullName" className="text-[#D3D3D3]">Full name:</label>
              <input
                className="w-full p-2 border border-gray-300 rounded-md bg-white text-black placeholder-gray-500"
                name="fullName"
                type="text"
                placeholder="Full Name"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>

            <div className="grid gap-2 relative">
              <label htmlFor="phone" className="text-[#D3D3D3]">Phone number:</label>
              <input
                className="w-full p-2 border border-gray-300 rounded-md bg-white text-black placeholder-gray-500"
                name="phone"
                type="tel"
                placeholder="Phone Number"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid gap-2 relative">
            <label htmlFor="email" className="text-[#D3D3D3]">Email:</label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md bg-white text-black placeholder-gray-500"
              name="email"
              type="email"
              placeholder="Email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="grid gap-2 relative">
            <label htmlFor="aboutMe" className="text-[#D3D3D3]">Message:</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md bg-white text-black placeholder-gray-500 min-h-[120px]"
              name="aboutMe"
              rows="5"
              id="aboutMe"
              value={formData.aboutMe}
              onChange={handleChange}
            />
            {errors.aboutMe && <p className="text-red-500 text-sm">{errors.aboutMe}</p>}
          </div>

          <button disabled={isSubmitting} type="submit" className="w-full bg-[#00FFFF] hover:bg-[#00CCFF] text-black font-medium rounded-md p-2 shadow-md">
            {isSubmitting ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
