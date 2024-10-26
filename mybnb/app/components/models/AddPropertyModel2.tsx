"use client";

import React, { ChangeEvent, useState } from "react";
import Model from "./Model";
import usePropertyModel from "@/app/hooks/usePropertyModel";
import CustomButton from "../forms/CustomButton";
import Categories from "../addCatogories/Categories";
import SelectCountry, { SelectCountryValue } from "../forms/SelectCountry2";
import Image from "next/image";
import apiService from "@/app/services/apiService";
import { useRouter } from "next/navigation";
const AddPropertyModel2 = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [dataCategory, setDataCategory] = useState("");
  const [dataTitle, setDataTitle] = useState("");
  const [dataDescription, setDataDescription] = useState("");
  const [dataPrice, setDataPrice] = useState("");
  const [dataBedrooms, setDataBedrooms] = useState("");
  const [dataBathrooms, setDataBathrooms] = useState("");
  const [dataGuests, setDataGuests] = useState("");
  const [dataCountry, setDataCountry] = useState<SelectCountryValue>();
  const [dataImage, setDataImage] = useState<File | null>(null)



  const addPropertymodel = usePropertyModel();
  const router = useRouter();




  const setCategory = (category: string) => {
    setDataCategory(category);
    // setCurrentStep(2);
  };

  const setImage = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.files && event.target.files.length > 0){
      const tempFile = event.target.files[0]
      setDataImage(tempFile);
    }
  }

  const submitForm = async () => {
    console.log('submitForm');
    if(
      dataCategory &&
      dataTitle &&
      dataDescription &&
      dataPrice &&
      dataCountry &&
      dataImage 
    ) {
      const formData = new FormData();
      formData.append('category', dataCategory)
      formData.append('title', dataTitle);
      formData.append('description', dataDescription)
      formData.append('price_per_night', dataPrice)
      formData.append('bedrooms', dataBedrooms);
      formData.append('bathrooms', dataBathrooms)
      formData.append('guests', dataGuests)
      formData.append('country', dataCountry.label)
      formData.append('country_code', dataCountry.value)
      formData.append('image', dataImage)

      const response = await apiService.post('/api/properties/create', formData)
      if(response.success){
        console.log('Success Mateeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
        
        router.push('/')
        addPropertymodel.close();
      }

    }
    
  }

  const content = (
    <>
      {currentStep == 1 ? (
        <>
          <h2 className="mb-6 text-2xl">Choose Category</h2>

          <Categories
            dataCategory={dataCategory}
            setCategory={(category) => setCategory(category)}
          />

          <CustomButton label="Next" onClick={() => setCurrentStep(2)} />
        </>
      ) : currentStep == 2 ? (
        <>
          <h2 className="mb-6 text-2xl">Describe your place</h2>
          <div className="mb-6 pb-6 space-y-4">
            <div className="flex flex-col space-y-4">
              <label>Title</label>
              <input
                type="text"
                value={dataTitle}
                onChange={(e) => setDataTitle(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <label>Description</label>
              <textarea
                value={dataDescription}
                onChange={(e) => setDataDescription(e.target.value)}
                className="w-full h-[200px] p-4 border border-gray-600 rounded-xl"
              ></textarea>
            </div>
          </div>
          <CustomButton
            label="Previous"
            className="mb-2 bg-black hover:bg-gray-800"
            onClick={() => setCurrentStep(1)}
          />
          <CustomButton label="Next" onClick={() => setCurrentStep(3)} />
        </>
      ) : currentStep == 3 ? (
        <>
          <h2 className="mb-6 text-2xl">Details</h2>
          <div className="mb-6 pb-4 space-y-4">
            <div className="flex flex-col space-y-4">
              <label>Price Per Night</label>
              <input
                type="number"
                value={dataPrice}
                onChange={(e) => setDataPrice(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <label>Bedrooms</label>
              <input
                type="number"
                value={dataBedrooms}
                onChange={(e) => setDataBedrooms(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <label>Bathrooms</label>
              <input
                type="number"
                value={dataBathrooms}
                onChange={(e) => setDataTitle(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <label>Maximum number of Guests</label>
              <input
                type="number"
                value={dataGuests}
                onChange={(e) => setDataGuests(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
          </div>
          <CustomButton
            label="Previous"
            className="mb-2 bg-black hover:bg-gray-800"
            onClick={() => setCurrentStep(2)}
          />
          <CustomButton label="Next" onClick={() => setCurrentStep(4)} />
        </>
      ) : currentStep == 4 ? (
        <>
          <h2 className="mb-6 text-2xl">Location</h2>
          <div className="mb-6 pb-4 space-y-4">
            <SelectCountry
              value={dataCountry}
              onChange={(value) => setDataCountry(value as SelectCountryValue)}
            />
          </div>
          <CustomButton
            label="Previous"
            className="mb-2 bg-black hover:bg-gray-800"
            onClick={() => setCurrentStep(3)}
          />
          <CustomButton label="Next" onClick={() => setCurrentStep(5)} />
        </>
      ) : (
        <>
          <h2 className="mb-6 text-2xl">Image</h2>
          <div className="mb-6 pb-4 space-y-4">
            <div className="py-4 px-6 bg-gray-600 text-white rounded-xl">
              <input
                type="file"
                accept="image/*"
                onChange={setImage}
              />


            </div>
              {dataImage && (
                <div className="flex justify-center">

                <div className="w-[300px] h-[300px] relative ">

                  <img
                    src={URL.createObjectURL(dataImage)}
                    alt="property-image"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                </div>
              )}
          </div>
          <CustomButton
            label="Previous"
            className="mb-2 bg-black hover:bg-gray-800"
            onClick={() => setCurrentStep(4)}
          />
          <CustomButton label="Submit" onClick={() => console.log("Submit")}
         />
        </>
      )}
    </>
  );
  return (
    <>
      <Model
        isOpen={addPropertymodel.isOpen}
        close={addPropertymodel.close}
        label="Add Property"
        content={content} // or any component you want to display inside the model.
      />
    </>
  );
};

export default AddPropertyModel2;
