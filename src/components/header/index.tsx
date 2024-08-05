import { forwardRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Magnetic from "../magnetic";
import Logo from "../../../public/assets/logo-white.png";

const Header = forwardRef(function Header(props, ref) {
  const handleLogoMouseEnter = useCallback(() => {
    window.dispatchEvent(
      new CustomEvent("logoHover", {
        detail: { isHovered: true },
      })
    );
  }, []);

  const handleLogoMouseLeave = useCallback(() => {
    window.dispatchEvent(
      new CustomEvent("logoHover", {
        detail: { isHovered: false },
      })
    );
  }, []);

  return (
    <div className="fixed left-0 right-0 flex items-center justify-between w-full box-border cursor-pointer mix-blend-difference z-10">
      <motion.div
        className="left-10 top-6 absolute"
        onMouseEnter={handleLogoMouseEnter}
        onMouseLeave={handleLogoMouseLeave}
      >
        <Image src={Logo} alt="Logo" width={60} height={60} />
      </motion.div>

      <div className="right-10 top-6 absolute flex items-center gap-4 text-sm font-thin">
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
          <div
            ref={ref as React.Ref<HTMLDivElement>}
            className="w-full h-full pointer-events-auto scale: hover:scale-130 transition-transform rounded-full"
          >
            <div className="relative flex flex-col gap-2 p-7.5">
              <div className="w-7.5 h-0.5 bg-white mix-blend-difference"></div>
              <div className="w-7.5 h-0.5 bg-white mix-blend-difference"></div>
            </div>
          </div>
        </Magnetic>
      </div>
    </div>
  );
});

export default Header;
