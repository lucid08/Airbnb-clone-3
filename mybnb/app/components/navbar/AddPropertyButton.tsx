'use client'

import usePropertyModel from "@/app/hooks/usePropertyModel"

const AddPropertyButton = () => {
  const addPropertyModel = usePropertyModel();
  const toAddProperty = () => {
    addPropertyModel.open();
  }
  return (
    <div onClick={toAddProperty} className="p-2 cursor-pointer text-sm rounded-full font-semibold hover:bg-gray-200">
        Djangobnb your home
    </div>
  )
}

export default AddPropertyButton