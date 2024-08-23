import { motion } from "framer-motion";
import Magnetic from "../magnetic";
import { useCallback, useState, forwardRef } from "react";

const letters = "MONTOYA".split("");

const Hero = forwardRef(function Hero(props, ref) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoverProgress, setHoverProgress] = useState(0.5);

  const handleMouseEnter = useCallback((index: any) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
    setHoverProgress(0);
  }, []);

  const handleMouseMove = useCallback((e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const progress = Math.sin((x / rect.width) * Math.PI);
    setHoverProgress(progress);
  }, []);

  const letterAnimation = {
    initial: {
      scaleY: 0,
      opacity: 0,
      transformOrigin: "bottom",
    },
    animate: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1], // Custom easing function for a more natural growth
        staggerChildren: 0.1, // Stagger the animation of each letter
      },
    },
  };

  return (
    <motion.div className="flex flex-col items-center justify-center h-screen text-white text-center z-0">
      <motion.h1
        className="flex text-8xl sm:text-9xl md:text-[12rem] lg:text-[18.5rem] font-medium -mt-10"
        variants={letterAnimation}
        initial="initial"
        animate="animate"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block relative"
            variants={letterAnimation}
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
        ))}
      </motion.h1>
      <p className="mt-4 md:text-lg max-w-[42.5rem] text-wrap text-white opacity-40 px-6">
        WE ARE A CREATIVE STUDIO, SPECIALIZED IN STRATEGY, BRANDING DESIGN, AND
        DEVELOPMENT. OUR WORK IS ALWAYS AT THE INTERSECTION OF DESIGN AND
        TECHNOLOGY.
      </p>
      <div className="absolute bottom-2 md:bottom-6 flex items-center justify-between w-full px-6 md:px-10 pt-8">
        <div
          className="left-10 flex items-center text-sm font-medium"
          onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
        >
          <motion.div
            initial="initial"
            whileHover="hovered"
            onMouseEnter={() =>
              window.dispatchEvent(
                new CustomEvent("scrollHover", { detail: { isHovered: true } })
              )
            }
            onMouseLeave={() =>
              window.dispatchEvent(
                new CustomEvent("scrollHover", { detail: { isHovered: false } })
              )
            }
            className="h-fit relative overflow-hidden cursor-pointer hidden md:block"
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
              className="-ml-6 md:ml-2 h-14 w-14 pointer-events-auto scale: hover:scale-130 transition-transform flex"
              ref={ref as React.Ref<HTMLDivElement>}
            >
              <i className="fa-solid fa-angle-down m-auto text-lg"></i>
            </div>
          </Magnetic>
        </div>

        <div className="text-white text-sm flex font-medium items-center justify-end">
          <span className="md:mr-6">Featured Projects</span>
        </div>
      </div>
    </motion.div>
  );
});

export default Hero;
