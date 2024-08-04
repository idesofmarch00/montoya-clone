import { motion } from "framer-motion";
import Magnetic from "../magnetic";
const letters = "MONTOYA".split("");

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center z-0">
      <motion.h1 className="text-8xl font-bold">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block relative overflow-hidden" // Added styles
            initial={{ scaleY: 1 }}
            whileHover={{ scaleY: 1.5 }} // Adjust stretch factor
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className=" text-white">{letter}</span>
          </motion.span>
        ))}
      </motion.h1>
      <p className="mt-4 text-lg font-mono max-w-2xl text-wrap text-white opacity-40">
        WE ARE A CREATIVE STUDIO, SPECIALIZED IN STRATEGY, BRANDING DESIGN, AND
        DEVELOPMENT. OUR WORK IS ALWAYS AT THE INTERSECTION OF DESIGN AND
        TECHNOLOGY.
      </p>
      <div className="absolute bottom-6 flex items-center justify-between w-full px-10 pt-8">
        <div className="left-10 flex items-center text-sm font-thin">
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
            <div className="ml-4 w-full h-full pointer-events-auto scale: hover:scale-130 transition-transform">
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </Magnetic>
        </div>

        <div className="text-white text-sm flex font-bold items-center justify-end">
          <span className="mr-6">Featured Projects</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
