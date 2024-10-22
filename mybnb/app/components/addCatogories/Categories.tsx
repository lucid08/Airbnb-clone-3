interface CategoriesProps {
    dataCategory: string;
    setCategory: (category: string) => void;
}

import Image from 'next/image';
import React from 'react'

const Categories: React.FC<CategoriesProps> = ({
    dataCategory,
    setCategory,
  
}) => {
  return (
    <div className='pt-3 cursor-pointer pb-6 space-x-12 flex items-center'>
        <div onClick={() => setCategory('Beach')} className={`pb-3 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Beach' ? 'border-gray-800' : 'border-white'} hover:border-gray-200 ${dataCategory == 'Beach' ? 'opacity-100' : 'opacity-60'} hover:opacity-100 `}>
        <Image src="/treehouse.jpg" width={25} height={25} alt="Beach" />
        <span className="text-xs">Beach</span>
      </div>
      <div onClick={() => setCategory('beach')}  className={`pb-3 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Villas' ? 'border-gray-800' : 'border-white'} hover:border-gray-200 ${dataCategory == 'Villas' ? 'opacity-100' : 'opacity-60'} hover:opacity-100 `}>
        <Image src="/treehouse.jpg" width={25} height={25} alt="beach" />
        <span className="text-xs">Villas</span>
      </div>
      <div onClick={() => setCategory('Cabins')}  className={`pb-3 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Cabins' ? 'border-gray-800' : 'border-white'} hover:border-gray-200 ${dataCategory == 'Cabins' ? 'opacity-100' : 'opacity-60'} hover:opacity-100 `}>
        <Image src="/treehouse.jpg" width={25} height={25} alt="Cabins" />
        <span className="text-xs"> Cabins</span>
      </div>
      <div onClick={() => setCategory('Tiny house')}  className={`pb-3 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Tiny house' ? 'border-gray-800' : 'border-white'} hover:border-gray-200 ${dataCategory == 'Tiny house' ? 'opacity-100' : 'opacity-60'} hover:opacity-100 `}>
        <Image src="/treehouse.jpg" width={25} height={25} alt="Tiny house" />
        <span className="text-xs">Tiny house</span>
      </div>
    </div>
  )
}

export default Categories