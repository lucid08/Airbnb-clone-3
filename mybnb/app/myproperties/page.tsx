import Image from "next/image";
import React from "react";
import Property from "../components/properties/Property";

const MyPropertiesPage = () => {
  return (
    <div className="max-w-[1500] mx-auto px-6 pb-6">
      <h1 className="mb-6 text-2xl">MyPropertiesPage</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cold-3 lg:grid-cols-5 gap-6">
        <Property />
      </div>
    </div>
  );
};
export default MyPropertiesPage;
