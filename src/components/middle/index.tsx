import React from "react";
import { motion } from "framer-motion";
import Magnetic from "../magnetic";

const Middle = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-lg font-mono max-w-2xl text-wrap text-gray-400">
        WE ARE A CREATIVE STUDIO, SPECIALIZED IN STRATEGY, BRANDING DESIGN, AND
        DEVELOPMENT. OUR WORK IS ALWAYS AT THE INTERSECTION OF DESIGN AND
        TECHNOLOGY.
      </p>
      <Magnetic>
        <div className="border-2 border-white rounded-2xl min-w-40 h-10">
          <motion.div
            initial="initial"
            whileHover="hovered"
            className="h-fit relative overflow-hidden font-black uppercase cursor-pointer"
          >
            <motion.div
              variants={{
                initial: { y: 0 },
                hovered: { y: -30 },
              }}
            >
              See All Works
            </motion.div>
            <motion.div
              className="absolute inset-0"
              variants={{
                initial: { y: 30, opacity: 0 },
                hovered: { y: 0, opacity: 1 },
              }}
            >
              See All Works
            </motion.div>
          </motion.div>
        </div>
      </Magnetic>
    </div>
  );
};

export default Middle;
