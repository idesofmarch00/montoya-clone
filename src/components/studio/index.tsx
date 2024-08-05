import { motion } from "framer-motion";
import { useCallback } from "react";

const wordOne = "OUR".split("");
const wordTwo = "STUDIO".split("");

const Studio = () => {
  const handleMouseEnter = useCallback((letter: string) => {
    window.dispatchEvent(
      new CustomEvent("cardHover", {
        detail: { isHovered: true, text: letter },
      })
    );
  }, []);

  const handleMouseLeave = useCallback(() => {
    window.dispatchEvent(
      new CustomEvent("cardHover", {
        detail: { isHovered: false, text: "" },
      })
    );
  }, []);

  return (
    <div className="flex pt-20 flex-col items-center justify-center h-screen bg-black text-white text-center z-0">
      <p className="text-lg max-w-2xl text-wrap text-gray-400">
        EXPLORING OUR WORLD OF VISUAL AND INTERACTIVE DESIGN
      </p>
      <div className="flex items-center space-x-4">
        <motion.h1 className="text-[21rem] font-medium flex">
          {wordOne.map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block relative"
              initial={{ scaleY: 1 }}
              whileHover={{ scaleY: 1.1 }}
              transition={{ type: "spring", stiffness: 100, damping: 5 }}
              style={{
                transformOrigin: "top center",
                display: "inline-block",
                position: "relative",
                overflow: "hidden",
                lineHeight: 1,
              }}
              onMouseEnter={() => handleMouseEnter(letter)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="text-white">{letter}</span>
            </motion.span>
          ))}
        </motion.h1>
        <div className="mx-10"></div>
        <motion.h1 className="text-[21rem] font-medium flex">
          {wordTwo.map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block relative"
              initial={{ scaleY: 1 }}
              whileHover={{ scaleY: 1.1 }}
              transition={{ type: "spring", stiffness: 100, damping: 5 }}
              style={{
                transformOrigin: "top center",
                display: "inline-block",
                position: "relative",
                overflow: "hidden",
                lineHeight: 1,
              }}
              onMouseEnter={() => handleMouseEnter(letter)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="text-white">{letter}</span>
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </div>
  );
};

export default Studio;
