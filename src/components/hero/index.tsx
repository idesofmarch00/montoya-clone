import { motion } from "framer-motion";

const letters = "MONTOYA".split("");

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center">
      <motion.h1 className="text-8xl font-bold">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ y: 0 }}
            whileHover={{ y: -20 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
      <p className="mt-4 text-lg font-mono max-w-2xl text-wrap">
        WE ARE A CREATIVE STUDIO, SPECIALIZED IN STRATEGY, BRANDING DESIGN, AND
        DEVELOPMENT. OUR WORK IS ALWAYS AT THE INTERSECTION OF DESIGN AND
        TECHNOLOGY.
      </p>
    </div>
  );
};

export default Hero;
