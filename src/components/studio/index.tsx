import { motion } from "framer-motion";
import { useCallback, useState } from "react";

const wordOne = "OUR".split("");
const wordTwo = "STUDIO".split("");

const Studio = () => {
  const [hoveredLetter, setHoveredLetter] = useState<any>({
    word: null,
    letter: null,
  });
  const [hoverProgress, setHoverProgress] = useState(0.5);

  const handleMouseEnter = useCallback((word: string, letter: string) => {
    setHoveredLetter({ word, letter });
    window.dispatchEvent(
      new CustomEvent("cardHover", {
        detail: { isHovered: true, text: letter },
      })
    );
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredLetter({ word: null, letter: null });
    setHoverProgress(0);
    window.dispatchEvent(
      new CustomEvent("cardHover", {
        detail: { isHovered: false, text: "" },
      })
    );
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLSpanElement>, letter: string) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const progress = Math.sin((x / rect.width) * Math.PI);
      setHoverProgress(progress);
    },
    []
  );

  return (
    <motion.div
      className="flex pt-20 flex-col items-center justify-center h-screen text-white text-center z-0 px-6 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: "all" }}
      transition={{ duration: 1 }}
    >
      <p className="text-lg max-w-2xl text-wrap opacity-40">
        EXPLORING OUR WORLD OF VISUAL AND INTERACTIVE DESIGN
      </p>
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <motion.h1 className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[18.5rem] font-medium flex">
          {wordOne.map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block relative"
              initial={{ scaleY: 1 }}
              animate={{
                scaleY:
                  hoveredLetter.word === "wordOne" &&
                  hoveredLetter.letter === letter
                    ? 1 + 0.2 * hoverProgress
                    : 1,
                y:
                  hoveredLetter.word === "wordOne" &&
                  hoveredLetter.letter === letter
                    ? -6 * hoverProgress
                    : 0,
              }}
              transition={{
                type: "tween",
              }}
              style={{
                transformOrigin: "top center",
                display: "inline-block",
                overflow: "hidden",
                lineHeight: 1,
              }}
              onMouseEnter={() => handleMouseEnter("wordOne", letter)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={(e) => handleMouseMove(e, letter)}
            >
              <span className="text-white">{letter}</span>
            </motion.span>
          ))}
        </motion.h1>
        <div className="mx-10"></div>
        <motion.h1 className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[18.5rem] font-medium flex">
          {wordTwo.map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block relative"
              initial={{ scaleY: 1 }}
              animate={{
                scaleY:
                  hoveredLetter.word === "wordTwo" &&
                  hoveredLetter.letter === letter
                    ? 1 + 0.2 * hoverProgress
                    : 1,
                y:
                  hoveredLetter.word === "wordTwo" &&
                  hoveredLetter.letter === letter
                    ? -6 * hoverProgress
                    : 0,
              }}
              transition={{
                type: "tween",
              }}
              style={{
                transformOrigin: "top center",
                display: "inline-block",
                overflow: "hidden",
                lineHeight: 1,
              }}
              onMouseEnter={() => handleMouseEnter("wordTwo", letter)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={(e) => handleMouseMove(e, letter)}
            >
              <span className="text-white">{letter}</span>
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default Studio;
