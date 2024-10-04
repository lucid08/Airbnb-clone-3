import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div className="pt-3 pb-6 cursor-pointer flex items-center space-x-12">
      <div className="pb-3 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image src="/treehouse.jpg" width={25} height={25} alt="Treehouse" />
        <span className="text-xs">Treehouse</span>
      </div>
      <div className="pb-3 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image src="/treehouse.jpg" width={25} height={25} alt="Treehouse" />
        <span className="text-xs">Villas</span>
      </div>
      <div className="pb-3 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image src="/treehouse.jpg" width={25} height={25} alt="Treehouse" />
        <span className="text-xs"> Beach</span>
      </div>
      <div className="pb-3 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image src="/treehouse.jpg" width={25} height={25} alt="Treehouse" />
        <span className="text-xs">Something</span>
      </div>
    </div>
  );
};

export default Categories;
