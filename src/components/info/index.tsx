import React from "react";
import { motion } from "framer-motion";
import Magnetic from "../magnetic";

const infoData = [
  {
    icon: "email",
    info: "info@example.com",
    type: "email",
  },
  {
    icon: "address",
    info: "123 Street, City, State, Zip",
    type: "address",
  },
  {
    icon: "phone",
    info: "123-456-7890",
    type: "phone",
  },
];

const Info = () => {
  return (
    <div className="flex justify-between items-center px-20 pt-40">
      {infoData.map((item, index) => (
        <div
          key={index}
          className="p-4 rounded-lg shadow-md bg-black m-4 flex flex-col items-center justify-center"
        >
          <span className={`icon ${item.icon} mb-4`}></span>
          <p className="text-lg font-semibold text-gray-400">{item.info}</p>
          <p className="text-sm text-gray-400">{item.type}</p>
        </div>
      ))}
    </div>
  );
};

export default Info;
