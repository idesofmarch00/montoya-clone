"use client";

// Importing necessary dependencies
import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import Magnetic from "../magnetic";

// Footer component definition
const Footer = forwardRef(function Footer(props, ref) {
  return (
    <div className="bottom-0 left-0 right-0 flex items-center justify-between w-full box-border cursor-pointer mix-blend-difference z-10 px-16 pb-8">
      <div className="left-14 flex items-center text-sm font-thin">
        <Magnetic>
          <div
            ref={ref as React.Ref<HTMLDivElement>}
            className="w-full h-full pointer-events-auto scale: hover:scale-130 transition-transform"
            onClick={() =>
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              })
            }
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
        {new Date().getFullYear()} &copy;
        <motion.span
          initial="initial"
          whileHover="hovered"
          variants={{
            initial: { textDecoration: "none" },
            hovered: { textDecoration: "underline" },
          }}
        >
          ClaPat
        </motion.span>
        . All rights reserved.
      </div>

      <motion.div
        initial="initial"
        whileHover="hovered"
        className="flex flex-col items-center text-sm font-bold"
      >
        <motion.div
          variants={{
            initial: { translateY: 0 },
            hovered: { translateX: 50, translateY: -30 },
          }}
          className="flex items-center justify-end"
        >
          <span className="mr-6">Follow Us</span>
          <motion.i
            variants={{
              initial: { opacity: 1 },
              hovered: { opacity: 0 },
            }}
            className="fa-solid fa-share-nodes"
          />
        </motion.div>

        <motion.div
          variants={{
            initial: { opacity: 0, height: 0 },
            hovered: { opacity: 1, height: "auto", translateY: -20 },
          }}
          className="flex mt-2"
        >
          {["In", "Fb", "Be", "Tw", "Db"].map((link, index) => (
            <Magnetic key={index}>
              <p className="mr-4">{link}</p>
            </Magnetic>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
});

export default Footer;
