import { useState } from "react";
import PropertyItem from "./PropertyItem";
import { data } from "../mock-data";

const newData = data;

const PropertyCard = () => {
  const [active, setActive] = useState("new york");
  const [limit, setLimit] = useState(6);

  let filteredData = newData
    .filter((item) => {
      if (item.country.toLowerCase() === active) return item;
    })
    .slice(0, limit);

  return (
    <div className="flex flex-col m-auto mt-6 w-[80%]">
      <div className="flex justify-start pl-[150px] pr-[150px] gap-4">
        <button
          value="new york"
          onClick={(e) => {
            setActive(e.target.value);
          }}
          className={` ${
            active === "new york"
              ? "text-white bg-blue-700"
              : "text-gray-700 bg-slate-300 "
          } block   font-medium rounded-full text-sm w-[80px] px-2 py-1`}
        >
          New York
        </button>
        <button
          value="mumbai"
          onClick={(e) => {
            setActive(e.target.value);
          }}
          className={` ${
            active === "mumbai"
              ? "text-white bg-blue-700"
              : "text-gray-700 bg-slate-300 "
          }  block  font-medium rounded-full text-sm w-[80px] px-2 py-1`}
        >
          Mumbai
        </button>
        <button
          value="paris"
          onClick={(e) => {
            setActive(e.target.value);
          }}
          className={` ${
            active === "paris"
              ? "text-white bg-blue-700"
              : "text-gray-700 bg-slate-300 "
          }  block font-medium rounded-full text-sm w-[80px] px-2 py-1`}
        >
          Paris
        </button>
        <button
          value="london"
          onClick={(e) => {
            setActive(e.target.value);
          }}
          className={` ${
            active === "london"
              ? "text-white bg-blue-700"
              : "text-gray-700 bg-slate-300 "
          }  block font-medium rounded-full text-sm w-[80px] px-2 py-1`}
        >
          London
        </button>
        <button className=" block bg-transparent border border-blue-700 text-gray-700 font-medium rounded-full text-sm w-[90px] px-3 py-1 ml-auto">
          View All
        </button>
      </div>
      <div className="flex flex-wrap  m-auto justify-center mb-4">
        {filteredData.map((item, index) => (
          <PropertyItem key={item.id} index={index} {...item} />
        ))}
      </div>
      <button
        onClick={() => {
          if (limit === 6) {
            setLimit(9);
          } else {
            setLimit(6);
          }
        }}
        className={` 
         mb-4 m-auto bg-transparent border border-blue-700 text-gray-700 font-medium rounded-full text-sm w-[100px] px-3 py-1`}
      >
        {limit === 6 ? "Show More" : "Show Less"}
      </button>
    </div>
  );
};

export default PropertyCard;
