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
        className="left-4 top-2 md:left-10 md:top-6 absolute"
        onMouseEnter={handleLogoMouseEnter}
        onMouseLeave={handleLogoMouseLeave}
      >
        <Image src={Logo} alt="Logo" width={60} height={60} />
      </motion.div>

      <div className="right-2 top-2 md:right-10 md:top-6 absolute flex items-center space-x-2 text-sm font-thin">
        <motion.div
          initial="initial"
          whileHover="hovered"
          className="h-fit relative hidden md:block overflow-hidden font-black cursor-pointer"
          onMouseEnter={() =>
            window.dispatchEvent(
              new CustomEvent("menuHover", { detail: { isHovered: true } })
            )
          }
          onMouseLeave={() =>
            window.dispatchEvent(
              new CustomEvent("menuHover", { detail: { isHovered: false } })
            )
          }
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
            className="h-14 w-14 pointer-events-auto scale: hover:scale-130 transition-transform rounded-full flex"
            onMouseEnter={() =>
              window.dispatchEvent(
                new CustomEvent("magneticHover", {
                  detail: { isHovered: true },
                })
              )
            }
            onMouseLeave={() =>
              window.dispatchEvent(
                new CustomEvent("magneticHover", {
                  detail: { isHovered: false },
                })
              )
            }
          >
            <div className="m-auto flex flex-col space-y-1.5 p-2 rounded-full">
              <div className="w-4 h-0.5 bg-white mix-blend-difference"></div>
              <div className="w-4 h-0.5 bg-white mix-blend-difference"></div>
            </div>
          </div>
        </Magnetic>
      </div>
    </div>
  );
});

export default Header;
