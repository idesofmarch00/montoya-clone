import React from "react";
import { infoData } from "@/data/infoData";

// Component to render the info section
const Info = () => {
  return (
    <div className="flex justify-between items-center px-20">
      {infoData.map((item, index) => (
        <div key={index} className="p-4 rounded-lg shadow-md bg-black m-4">
          <div className="flex flex-col items-center justify-center space-y-2">
            <i className={`${item.icon} mb-2`}></i>
            <p className="text-lg font-medium text-white">{item.info}</p>
            <p className="text-lg text-white font-medium opacity-40">
              {item.type}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Info;
