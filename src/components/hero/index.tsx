import { motion } from "framer-motion";
import Magnetic from "../magnetic";
import { useCallback, useState } from "react";

const letters = "MONTOYA".split("");

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoverProgress, setHoverProgress] = useState(0.5);

  const handleMouseEnter = useCallback((index) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
    setHoverProgress(0);
  }, []);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const progress = Math.sin((x / rect.width) * Math.PI);
    setHoverProgress(progress);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center z-0">
      <motion.h1 className="flex text-[19rem] font-medium -mt-10">
        {letters.map((letter, index) => (
          <>
            <motion.span
              className="inline-block relative"
              initial={{ scaleY: 1 }}
              animate={{
                scaleY: hoveredIndex === index ? 1 + 0.3 * hoverProgress : 1,
                y: hoveredIndex === index ? 6 * hoverProgress : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 10,
                mass: 0.5,
              }}
              style={{
                transformOrigin: "bottom center",
                display: "inline-block",
                overflow: "hidden",
                lineHeight: 1,
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <span className="text-white">{letter}</span>
            </motion.span>
          </>
        ))}
      </motion.h1>
      <p className=" text-lg max-w-2xl text-wrap text-white opacity-40">
        WE ARE A CREATIVE STUDIO, SPECIALIZED IN STRATEGY, BRANDING DESIGN, AND
        DEVELOPMENT. OUR WORK IS ALWAYS AT THE INTERSECTION OF DESIGN AND
        TECHNOLOGY.
      </p>
      <div className="absolute bottom-6 flex items-center justify-between w-full px-10 pt-8">
        <div className="left-10 flex items-center text-sm font-medium">
          <motion.div
            initial="initial"
            whileHover="hovered"
            className="h-fit relative overflow-hidden cursor-pointer"
          >
            <motion.div
              variants={{
                initial: { y: 0 },
                hovered: { y: -30 },
              }}
            >
              Scroll To Explore
            </motion.div>
            <motion.div
              className="absolute inset-0"
              variants={{
                initial: { y: 30, opacity: 0 },
                hovered: { y: 0, opacity: 1 },
              }}
            >
              Scroll To Explore
            </motion.div>
          </motion.div>
          <Magnetic>
            <div
              className="ml-4 w-full h-full pointer-events-auto scale: hover:scale-130 transition-transform"
              onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
            >
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </Magnetic>
        </div>

        <div className="text-white text-sm flex font-medium items-center justify-end">
          <span className="mr-6">Featured Projects</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
