import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import Image from "next/image";
import React from "react";

const PropertyDetailPage = async ({params} : {params : {id : string}}) => {

  const property = await apiService.get(`/api/properties/${params.id}`);
  const userId = await getUserId(); 
  console.log(property.landlord.name);
  

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
          <h1 className="mb-4 text-4xl">{property.title}</h1>
          <span className="mb-6 block text-lg text-gray-500">
          {property.guests} guests - {property.bedrooms} bedrooms - {property.bathrooms} Bathrooms
          </span>

          <hr />
          <div className="py-6 flex items-center space-x-4">
            {
              property.landlord.avatar_url && (

                <Image
                  src={property.landlord.avatar_url}
                  alt=""
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              )
            }
            <p>{property.landlord.name}</p>
          </div>
        <hr />

        <p className="mt-6 text-lg">
        {property.description}
        </p>
        </div>
      <ReservationSidebar
      userId={userId}
      property={property}
      />
      </div>
    </div>
  );
};

export default PropertyDetailPage;
