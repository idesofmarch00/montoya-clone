"use client";

import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Magnetic from "../magnetic";

const Footer = forwardRef(function Footer(props, ref) {
  return (
    <div className="bottom-0 left-0 right-0 flex items-center justify-between w-full box-border cursor-pointer mix-blend-difference z-10 px-16 pb-8">
      <div className="left-14 flex items-center text-sm font-thin">
        <Magnetic>
          <div
            ref={ref as React.Ref<HTMLDivElement>}
            className="w-full h-full pointer-events-auto scale: hover:scale-130 transition-transform"
          >
            <i className="fa-solid fa-angle-up"></i>
          </div>
        </Magnetic>
        <motion.div
          initial="initial"
          whileHover="hovered"
          className="h-fit relative overflow-hidden font-black cursor-pointer ml-8"
        >
          <motion.div
            variants={{
              initial: { y: 0 },
              hovered: { y: -30 },
            }}
          >
            Back Top
          </motion.div>
          <motion.div
            className="absolute inset-0"
            variants={{
              initial: { y: 30, opacity: 0 },
              hovered: { y: 0, opacity: 1 },
            }}
          >
            Back Top
          </motion.div>
        </motion.div>
      </div>

      <div className="text-center text-sm font-bold">
        {new Date().getFullYear()} &copy; ClaPat. All rights reserved.
      </div>

      <div className="flex items-center  text-sm font-bold">
        <span className="mr-6">Follow Us</span>
        <i className="fa-solid fa-share-nodes"></i>
      </div>
    </div>
  );
});

export default Footer;
