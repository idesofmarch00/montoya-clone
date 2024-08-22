import React from "react";
import { infoData } from "@/data/infoData";

// Component to render the info section
const Info = () => {
  return (
    <div className="flex flex-col md:flex-row md:text-sm justify-between items-center md:px-20 lg:text-lg -mt-40 sm:-mt-20 md:mt-10">
      {infoData.map((item, index) => (
        <div key={index} className="p-4 rounded-lg shadow-md m-4">
          <div className="flex flex-col items-center justify-center space-y-2">
            <i className={`${item.icon} md:mb-2`}></i>
            <p className="font-medium text-white">{item.info}</p>
            <p className="text-white font-medium opacity-40">{item.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Info;
