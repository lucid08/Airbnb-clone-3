import React from 'react'
import Model from './Model'
import usePropertyModel from '@/app/hooks/usePropertyModel'
const AddPropertyModel2 = () => {
    const addPropertymodel = usePropertyModel();
  return (
    
    <div>
        return(
          <>
            <Model
            isOpen={addPropertymodel.isOpen}
            close={addPropertymodel.close}
            label="Add Property"
            content={<h2>Add Property</h2>}  // or any component you want to display inside the model.
            />
          </>
        )
    </div>
  )
}

export default AddPropertyModel2; 