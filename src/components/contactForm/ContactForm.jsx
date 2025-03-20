// import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import "./ContactForm.css";

function ContactForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      //simular que hace una petición de enviar el formulario (postear con fetch)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data); //en vez de esto habría que mandarlos a un servidor
    } catch (error) {
      setError("root", {
        message: "There was a problem in your submission. Try again.",
      });
    }
  };

  return (
    <div class="bg-[#1E1E1E] rounded-xl shadow-lg shadow-black/50 overflow-hidden mb-8 border border-[#333333]">
      <div class="p-6">
        <h2 class="text-2xl font-bold mb-6 text-white">
          Contact About This Property
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2 relative">
              <label htmlFor="full-name" className="text-[#D3D3D3]">
                {" "}
                Full name:{" "}
              </label>

              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-[#333333] focus:border-[#00FFFF] bg-[#252525] text-white placeholder:text-gray-500"
                {...register("fullName", {
                  required: "Full name is required",
                  minLength: {
                    value: 2,
                    message: "Full name must be at least 2 characters",
                  },
                  pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: "Only letters are allowed",
                  },
                })}
                type="text"
                placeholder="Full Name"
                id="full-name"
              />

              {errors.fullName && (
                <p className="text-red-500 text-sm absolute bottom-[-20px] left-0">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div className="grid gap-2 relative">
              <label htmlFor="phone" className="text-[#D3D3D3]">
                Phone number:
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-[#333333] focus:border-[#00FFFF] bg-[#252525] text-white placeholder:text-gray-500"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^(?:\+34|0034|34)?[6789]\d{8}$/,
                    message: "Invalid Spanish phone number",
                  },
                })}
                type="tel"
                placeholder="Phone Number"
                id="phone"
              />

              {errors.phone && (
                <p className="text-red-500 text-sm absolute bottom-[-20px] left-0">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid gap-2 relative">
            <label htmlFor="email" className="text-[#D3D3D3]">
              Email:
            </label>
            <input
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-[#333333] focus:border-[#00FFFF] bg-[#252525] text-white placeholder:text-gray-500"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Email"
              id="email"
            />
            {errors.email ? (
              <p className="text-red-500 text-sm absolute bottom-[-20px] left-0">
                {errors.email.message}
              </p>
            ) : null}
          </div>
          <div className="grid gap-2 relative">
            <label htmlFor="about-me" className="text-[#D3D3D3]">
              Message:{" "}
            </label>
            <textarea
              className= "flex w-full rounded-md border px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px] border-[#333333] focus:border-[#00FFFF] bg-[#252525] text-white placeholder:text-gray-500" 
              {...register("aboutMe", {
                maxLength: {
                  value: 500,
                  message: "Maximum length is 500 characters",
                },
              })}
              placeholder="I'm interested in this apartment and would like to schedule a viewing."
              rows="5"
              id="about-me"
            />
          </div>
          {errors.aboutMe && (
            <p className="text-red-500 text-sm absolute bottom-[-20px] left-0">
              {errors.aboutMe.message}
            </p>
          )}

          <button
            disabled={isSubmitting}
            type="submit"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 w-full bg-[#00FFFF] hover:bg-[#00CCFF] text-black font-medium shadow-[0_0_10px_rgba(0,255,255,0.3)]"
          >
            {isSubmitting ? "Loading..." : "Submit"}
          </button>
          {errors.root ? (
            <p className="text-red-500 text-sm mt-1">{errors.root.message}</p>
          ) : null}




        </form>
      </div>
    </div>
  );
}

export default ContactForm;
