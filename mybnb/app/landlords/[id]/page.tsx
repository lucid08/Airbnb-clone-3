import ContactButton from "@/app/components/ContactButton";
import Property from "@/app/components/properties/Property";
import Image from "next/image";
import React from "react";

const LandlordDetailPage = () => {
  return (
    <div className="max-w-[1500] mx-auto px-6 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside className="col-span-1 mb-4">
          <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl ">
            <Image
              src="/profile.jpeg"
              alt="Profile Pic"
              width={200}
              height={200}
              className="rounded-full"
            />
            <h1 className="mt-6 text-2xl">Landlord Name</h1>
            <ContactButton />
          </div>
        </aside>
        <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Property />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandlordDetailPage;
