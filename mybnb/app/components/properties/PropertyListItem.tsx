import Image from "next/image";
import React from "react";

const PropertyListItem = () => {
  return (
    <div className="cursor-pointer">
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          fill
          src="/beachhouse.jpg"
          alt=""
          sizes="(max-width: 768px) 768px, (max-height: 1200px) 768px, 768px"
          className="hover:scale-110 object-cover transition h-full w-full"
        />
      </div>
      <div className="mt-2">
        <p className="text-lg font-bold">Property Name</p>
      </div>
      <div className="mt-2 text-gray-500">
        <p className="text-sm text-gray-500">200 rupees per night</p>
      </div>
    </div>
  );
};

export default PropertyListItem;
