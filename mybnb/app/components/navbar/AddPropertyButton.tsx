'use client'

import useLoginModel from "@/app/hooks/useLoginModel";
import usePropertyModel from "@/app/hooks/usePropertyModel"

interface AddPropertyButtonProps {
  userId?: string | null;
  
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({
  userId
}) => {
  const loginModel = useLoginModel();
  const addPropertyModel = usePropertyModel();
  const toAddProperty = () => {
    if(userId){
    addPropertyModel.open();
    } else {
      loginModel.open();
    }
  }
  return (
    <div onClick={toAddProperty} className="p-2 cursor-pointer text-sm rounded-full font-semibold hover:bg-gray-200">
        Djangobnb your home
    </div>
  )
}

export default AddPropertyButton