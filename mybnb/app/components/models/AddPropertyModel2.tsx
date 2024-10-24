'use client'

import React, { useState } from 'react'
import Model from './Model'
import usePropertyModel from '@/app/hooks/usePropertyModel'
import CustomButton from '../forms/CustomButton'
import Categories from '../addCatogories/Categories'
import SelectCountry, { SelectCountryValue } from '../forms/SelectCountry2'
const AddPropertyModel2 = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [dataCategory, setDataCategory] = useState('');
  const [dataTitle, setDataTitle] = useState('');
  const [dataDescription, setDataDescription] = useState('');
  const [dataPrice, setDataPrice] = useState('');
  const [dataBedrooms, setDataBedrooms] = useState('');
  const [dataBathrooms, setDataBathrooms] = useState('');
  const [dataGuests, setDataGuests] = useState('');
  const [dataCountry, setDataCountry] = useState<SelectCountryValue>();
    const addPropertymodel = usePropertyModel();

    const setCategory = (category : string) => {
      setDataCategory(category);
      // setCurrentStep(2);
    }
    const content = (
      <>
      {
        currentStep == 1 ? (

          <><h2 className='mb-6 text-2xl'>Choose Category</h2>

            <Categories
            dataCategory={dataCategory}
            setCategory={(category) => setCategory(category)}
            />

          <CustomButton
            label='Next'
            onClick={() => setCurrentStep(2)}
          /></>
        ) : currentStep == 2 ? (
          <><h2 className='mb-6 text-2xl'>Describe your place</h2>
          <div className='mb-6 pb-6 space-y-4'>
            <div className='flex flex-col space-y-4'>
              <label>Title</label>
              <input
                type="text"
                value={dataTitle}
                onChange={(e) => setDataTitle(e.target.value)}
                className='w-full p-4 border border-gray-600 rounded-xl'
              />
            </div>
            <div className='flex flex-col space-y-4'>
              <label>Description</label>
              <textarea
                value={dataDescription}
                onChange={(e) => setDataDescription(e.target.value)}
                className='w-full h-[200px] p-4 border border-gray-600 rounded-xl'
              ></textarea>
            </div>
          </div>
            <CustomButton
              label='Previous'
              className='mb-2 bg-black hover:bg-gray-800'
              onClick={() => setCurrentStep(1)}
            />
          <CustomButton
            label='Next'
            onClick={() => setCurrentStep(3)}
          />
          </>

        ) : currentStep == 3 ?  (
          <>
          <h2 className='mb-6 text-2xl'>Details</h2>
          <div className='mb-6 pb-4 space-y-4'>
            <div className='flex flex-col space-y-4'>
              <label>Price Per Night</label>
              <input
                type="number"
                value={dataPrice}
                onChange={(e) => setDataPrice(e.target.value)}
                className='w-full p-4 border border-gray-600 rounded-xl'
              />
            </div>
            <div className='flex flex-col space-y-4'>
              <label>Bedrooms</label>
              <input
                type="number"
                value={dataBedrooms}
                onChange={(e) => setDataBedrooms(e.target.value)}
                className='w-full p-4 border border-gray-600 rounded-xl'
              />
            </div>
            <div className='flex flex-col space-y-4'>
              <label>Bathrooms</label>
              <input
                type="number"
                value={dataBathrooms}
                onChange={(e) => setDataTitle(e.target.value)}
                className='w-full p-4 border border-gray-600 rounded-xl'
              />
            </div>
            <div className='flex flex-col space-y-4'>
              <label>Maximum number of Guests</label>
              <input
                type="number"
                value={dataGuests}
                onChange={(e) => setDataGuests(e.target.value)}
                className='w-full p-4 border border-gray-600 rounded-xl'
              />
            </div>
            </div>
            <CustomButton
              label='Previous'
              className='mb-2 bg-black hover:bg-gray-800'
              onClick={() => setCurrentStep(2)}
            />
          <CustomButton
            label='Next'
            onClick={() => setCurrentStep(4)}
          />
          </>
          
        ) : currentStep == 4 ? (
          <>
          <h2 className='mb-6 text-2xl'>Location</h2>
          <div className='mb-6 pb-4 space-y-4'>
            <SelectCountry
              value={dataCountry}
              onChange={(value) => setDataCountry(value as SelectCountryValue)}
            />
            </div>
            <CustomButton
              label='Previous'
              className='mb-2 bg-black hover:bg-gray-800'
              onClick={() => setCurrentStep(3)}
            />
          <CustomButton
            label='Next'
            onClick={() => setCurrentStep(5)}
          />
          </>
        ) : (
          <p>jdgjsghdtjhg</p>
        )
      }
      </>
    )
  return (
    
    <div>
        return(
          <>
            <Model
            isOpen={addPropertymodel.isOpen}
            close={addPropertymodel.close}
            label="Add Property"
            content={content}  // or any component you want to display inside the model.
            />
          </>
        )
    </div>
  )
}

export default AddPropertyModel2; 