import { motion } from "framer-motion";

const wordOne = "OUR".split("");
const wordTwo = "STUDIO".split("");

const Studio = () => {
  return (
    <div className="flex pt-56 flex-col items-center justify-center h-screen bg-black text-white text-center z-0">
      <p className="-mb-20 text-lg  max-w-2xl text-wrap text-gray-400">
        EXPLORING OUR WORLD OF VISUAL AND INTERACTIVE DESIGN
      </p>
      <div className="flex items-center space-x-4">
        <motion.h1 className="text-[21rem] font-medium">
          {wordOne.map((letter, index) => (
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
        <motion.h1 className="text-[21rem] font-medium">
          {wordTwo.map((letter, index) => (
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
      </div>
    </div>
  );
};

export default Studio;
