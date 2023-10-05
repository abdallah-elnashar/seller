import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../mock-data";
import PropertyItem from "./PropertyItem";

const Property = () => {
  const { id } = useParams();

  const filteredData = data.filter((item) => item.id === id)[0];

  return (
    <div className="   m-auto mt-8 w-[1000px]">
      <PropertyItem {...filteredData} />
    </div>
  );
};

export default Property;
