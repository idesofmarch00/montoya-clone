import React from "react";
import { motion } from "framer-motion";
import Magnetic from "../magnetic";

const infoData = [
  {
    icon: "fa fa-paper-plane fa-2x fa-2x",
    info: "office@montoya.com",
    type: "Email",
  },
  {
    icon: "fa fa-map-marker fa-2x fa-2x",
    info: "35 M Street, New York, USA",
    type: "Address",
  },
  {
    icon: "fa fa-phone fa-2x fa-2x",
    info: "0040 (7763) 574-8910",
    type: "Phone",
  },
];

const Info = () => {
  return (
    <div className="flex justify-between items-center px-20">
      {infoData.map((item, index) => (
        <div key={index} className="p-4 rounded-lg shadow-md bg-black m-4">
          <div className="flex flex-col items-center justify-center space-y-2">
            <i className={`${item.icon}`}></i>
            <p className="text-xl font-semibold text-white">{item.info}</p>
            <p className=" text-white opacity-40">{item.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Info;
