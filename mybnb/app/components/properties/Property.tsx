"use client";

import React, { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";
import apiService from "@/app/services/apiService";

export type PropertyType = {
  id: string;
  title: string;
  image_url: string;
  price_per_night: number;
};

const Property = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);

  const getResponse = async () => {
    try {
      const url = "/api/properties";
      const tempProperties = await apiService.get(url);
      setProperties(tempProperties.data); // Ensure tempProperties.data is valid
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    getResponse();
  }, []);

  return (
    <>
      {properties.map((property) => (
        <PropertyListItem key={property.id} property={property} />
      ))}
    </>
  );
};

export default Property;
