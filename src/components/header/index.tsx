import { forwardRef } from "react";
import { motion } from "framer-motion";

import Magnetic from "../magnetic";

const Header = forwardRef(function Header(props, ref) {
  const lineVariants = {
    initial: { width: 0 },
    hover: { width: "100%" },
  };

  const textVariants = {
    initial: { y: 20, opacity: 0 },
    hover: { y: 0, opacity: 1 },
  };

  return (
    <div className="fixed top-0 right-0 flex items-center w-full justify-end box-border cursor-pointer mix-blend-difference z-10">
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
          Menu
        </motion.div>
        <motion.div
          className="absolute inset-0"
          variants={{
            initial: { y: 30, opacity: 0 },
            hovered: { y: 0, opacity: 1 },
          }}
        >
          Menu
        </motion.div>
      </motion.div>

      <Magnetic>
        <div className="relative flex flex-col gap-2 p-7.5 pointer-events-none">
          <div className="w-7.5 h-0.5 bg-white mix-blend-difference"></div>
          <div className="w-7.5 h-0.5 bg-white mix-blend-difference"></div>
          <div
            ref={ref as React.Ref<HTMLDivElement>}
            className=" absolute left-0 top-0 w-full h-full pointer-events-auto hover:scale-300 transition-transform rounded-full"
          ></div>
        </div>
      </Magnetic>
    </div>
  );
});

export default Header;
