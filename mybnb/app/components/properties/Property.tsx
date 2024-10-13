"use client";

import React, { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";
import apiService from "@/app/services/apiService";

export type PropertyType = {
  id: string;
  title: string;
  image_url: string;
  price_per_night: number;
}

const Property = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);

  const getResponse = async () => {
    const url = "http://localhost:8000/api/properties";
    await fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("json", json);
        setProperties(json.data);
      })
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    apiService.get('Helooo')
    getResponse();
  }, []);

  return (
    <>
      {properties.map((property) => {
        return (<PropertyListItem
          key={property.id}
          property={property}
          />);
      })}
    </>
  );
};

export default Property;
