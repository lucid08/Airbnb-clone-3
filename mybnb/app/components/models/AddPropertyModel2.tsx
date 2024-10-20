'use client'

import React, { useState } from 'react'
import Model from './Model'
import usePropertyModel from '@/app/hooks/usePropertyModel'
import CustomButton from '../forms/CustomButton'
import Categories from '../addCatogories/Categories'
const AddPropertyModel2 = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [dataCategory, setDataCategory] = useState('');
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
        ) : (
          <p>Step22222</p>
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