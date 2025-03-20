import React from "react";
import Input from "../input/Input";
import Button from "../button/Button";

export const PostForm = () => {

  return (
    <>
      <div className="rounded border text-card-foreground max-w-3xl mx-auto bg-[#1E1E1E] border-[#333333] shadow-lg">
        <header className="flex flex-col space-y-1.5 p-6 bg-gradient-to-r from-[#1E1E1E] to-[#252525] border-b border-[#333333]">
          <h3 className="font-semibold tracking-tight text-2xl text-white">Post Your Apartment</h3>
          <p className="text-sm text-[#D3D3D3]">
            Fill out the form below to list your apartment
          </p>
        </header>
        <div className="p-6 pt-6">
          <form className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">
                Basic Information
              </h3>

              <div className="grid gap-2">
                <label htmlFor="title" className="text-[#D3D3D3]">
                  Apartment Title
                </label>
                <Input
                  id="title"
                  placeholder="e.g. Cozy Studio in Downtown"
                  className="border-[#333333] focus:border-[#00FFFF] bg-[#252525] text-white placeholder:text-gray-500"
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="description" className="text-[#D3D3D3]">
                  Description
                </label>
                <textarea
                  id="description"
                  placeholder="Describe your apartment in detail..."
                  className="min-h-[150px] border-[#333333] focus:border-[#00FFFF] bg-[#252525] text-white placeholder:text-gray-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="price" className="text-[#D3D3D3]">
                    Monthly Rent ($)
                  </label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="e.g. 1200"
                    className="border-[#333333] focus:border-[#00FFFF] bg-[#252525] text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="size" className="text-[#D3D3D3]">
                    Size (sqft)
                  </label>
                  <Input
                    id="size"
                    type="number"
                    placeholder="e.g. 750"
                    className="border-[#333333] focus:border-[#00FFFF] bg-[#252525] text-white placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="type" className="text-[#D3D3D3]">
                    Property Type
                  </label>
                  <select
                    id="type"
                    className="border border-[#333333] bg-[#252525] text-white p-2 rounded-md"
                  >
                    <option value="" disabled selected>
                      Select type
                    </option>
                    <option value="studio">Studio</option>
                    <option value="apartment">Apartment</option>
                    <option value="condo">Condo</option>
                    <option value="house">House</option>
                    <option value="townhouse">Townhouse</option>
                  </select>
                </div>

                <div className="grid gap-2">
                  <label htmlFor="available" className="text-[#D3D3D3]">
                    Available From
                  </label>
                  <Input
                    id="available"
                    type="date"
                    className="border-[#333333] focus:border-[#00FFFF] bg-[#252525] text-white"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Location</h3>

              <div className="grid gap-2">
                <label htmlFor="address" className="text-[#D3D3D3]">
                  Address
                </label>
                <Input
                  id="address"
                  placeholder="Street address"
                  className="border-[#333333] focus:border-[#00FFFF] bg-[#252525] text-white placeholder:text-gray-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="city" className="text-[#D3D3D3]">
                    City
                  </label>
                  <Input
                    id="city"
                    placeholder="City"
                    className="border-[#333333] focus:border-[#00FFFF] bg-[#252525] text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="state" className="text-[#D3D3D3]">
                    State
                  </label>
                  <Input
                    id="state"
                    placeholder="State"
                    className="border-[#333333] focus:border-[#00FFFF] bg-[#252525] text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="zip" className="text-[#D3D3D3]">
                    ZIP Code
                  </label>
                  <Input
                    id="zip"
                    placeholder="ZIP Code"
                    className="border-[#333333] focus:border-[#00FFFF] bg-[#252525] text-white placeholder:text-gray-500"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Features</h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { id: "pet-friendly", label: "Pet Friendly" },
                  { id: "furnished", label: "Furnished" },
                  { id: "parking", label: "Parking" },
                  { id: "balcony", label: "Balcony" },
                  { id: "gym", label: "Gym" },
                  { id: "pool", label: "Pool" },
                  { id: "laundry", label: "Laundry" },
                  { id: "ac", label: "Air Conditioning" },
                  { id: "heating", label: "Heating" },
                ].map(({ id, label }) => (
                  <div key={id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={id}
                      className="w-5 h-5 border border-[#333333] bg-[#252525] checked:bg-[#00FFFF] checked:border-[#00FFFF] focus:ring-2 focus:ring-[#00FFFF] cursor-pointer"
                    />
                    <label htmlFor={id} className="text-[#D3D3D3]">
                      {label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Images</h3>

              <div className="grid gap-2">
                <label htmlFor="images" className="text-[#D3D3D3]">
                  Upload Images
                </label>
                <Input
                  id="images"
                  type="file"
                  multiple
                  accept="image/*"
                  className="cursor-pointer border-[#333333] bg-[#252525] text-white"
                />
                <p className="text-sm text-[#D3D3D3]">
                  Upload up to 10 images. First image will be the main image.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">
                Contact Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-[#D3D3D3]">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Full name"
                    className="border-[#333333] focus:border-[#00FFFF] bg-[#252525] text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="phone" className="text-[#D3D3D3]">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    placeholder="Phone number"
                    className="border-[#333333] focus:border-[#00FFFF] bg-[#252525] text-white placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <label htmlFor="email" className="text-[#D3D3D3]">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  className="border-[#333333] focus:border-[#00FFFF] bg-[#252525] text-white placeholder:text-gray-500"
                />
              </div>
            </div>
          </form>
        </div>
        <footer className="items-center p-5 pt-0 flex justify-end border-t border-[#333333]">

          <Button className="mt-5 bg-[#00FFFF] hover:bg-[#00CCFF] text-black font-medium shadow-[0_0_10px_rgba(0,255,255,0.3)]">
            Post Apartment
          </Button>
        </footer>
      </div>
      </>
  );
};

export default PostForm;
