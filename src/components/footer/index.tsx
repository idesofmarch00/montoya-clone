"use client";

// Importing necessary dependencies
import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import Magnetic from "../magnetic";

// Footer component definition
const Footer = forwardRef(function Footer(props, ref) {
  return (
    <div className="bottom-0 left-0 right-0 flex items-center md:justify-between w-full box-border cursor-pointer mix-blend-difference z-10 px-2 sm:px-6 md:pb-6">
      <a className="lg:left-14 flex items-center text-sm font-medium" href="#">
        <Magnetic>
          <div
            ref={ref as React.Ref<HTMLDivElement>}
            className="h-14 w-14 flex pointer-events-auto scale: hover:scale-130 transition-transform"
          >
            <i className="ml-6 sm:ml-0 fa-solid fa-angle-up md:mx-auto mt-7 sm:m-auto text-lg opacity-40 md:opacity-100"></i>
          </div>
        </Magnetic>
        <motion.div
          initial="initial"
          whileHover="hovered"
          onMouseEnter={() =>
            window.dispatchEvent(
              new CustomEvent("backHover", { detail: { isHovered: true } })
            )
          }
          onMouseLeave={() =>
            window.dispatchEvent(
              new CustomEvent("backHover", { detail: { isHovered: false } })
            )
          }
          className="h-fit relative overflow-hidden font-black cursor-pointer ml-2 hidden md:flex"
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
      </a>

      <div className="w-[85%] mr-12 sm:mr-0 mb-6 sm:mb-10 md:mb-0 md:w-2/3 lg:w-fit flex flex-col space-y-4 md:space-y-0 md:flex-row items-center justify-between">
        <div className="text-center text-sm font-medium">
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

        <div className="flex text-sm lg:hidden font-medium">
          {["Db", "Tw", "Be", "Fb", "In"].map((link, index) => (
            <a href="#" className="mr-3 md:mr-5" key={link}>
              {link}
            </a>
          ))}
        </div>
      </div>

      <motion.div
        initial="initial"
        whileHover="hovered"
        className="hidden lg:flex lg:flex-col items-center text-sm font-semibold"
      >
        <motion.div
          variants={{
            initial: { translateY: 0 },
            hovered: { translateX: 50, translateY: -30 },
          }}
          className="items-center justify-end"
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
          {["Db", "Tw", "Be", "Fb", "In"].map((link, index) => (
            <Magnetic key={link}>
              <a href="#" className="mr-4">
                {link}
              </a>
            </Magnetic>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
});

export default Footer;
