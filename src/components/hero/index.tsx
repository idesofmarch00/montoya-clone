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
      {/* Rest of your component remains the same */}
    </div>
  );
};

export default Hero;
