import React from "react";
import { motion } from "framer-motion";
import Magnetic from "../magnetic";

const Middle = () => {
  return (
    <div className="flex flex-col justify-center items-center pb-20">
      <p className="text-lg font-mono max-w-lg text-wrap text-white opacity-40 pt-10 text-center">
        CRAFTING WEBSITES WHERE THE ELEGANCE
      </p>
      <p className="text-lg font-mono max-w-2xl text-wrap text-white opacity-40 pb-8 text-center">
        OF DESIGN INTERSECTS WITH THE SCIENCE OF SELLING PRODUCTS.
      </p>
      <Magnetic>
        <div className="border-2 border-white rounded-3xl w-[10.5rem] h-12 flex items-center justify-center">
          <motion.div
            initial="initial"
            whileHover="hovered"
            className="h-fit relative overflow-hidden font-black cursor-pointer"
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
