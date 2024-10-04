import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
import Image from "next/image";
import React from "react";

const PropertyDetailPage = () => {
  return (
    <div className="max-w-[1500] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden relative">
        <Image
          fill
          src="/beachhouse.jpg"
          alt=""
          className="object-cover h-full w-full rounded-xl"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">Property name</h1>
          <span className="mb-6 block text-lg text-gray-500">
            4 gutes - 2 bedrooms - something
          </span>

          <hr />
          <div className="py-6 flex items-center space-x-4">
            <Image
              src="/profile.jpeg"
              alt=""
              width={50}
              height={50}
              className="rounded-full"
            />
            <p>Thy name is bond james bond</p>
          </div>
        <hr />

        <p className="mt-6 text-lg">
          dsfusoieaee jirhwwwwwwww vwdixjiwgmtug cgnwgywuycuis
        </p>
        </div>
      <ReservationSidebar/>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
