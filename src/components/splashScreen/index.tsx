"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onFinish();
    }, 300); // Total duration (1 second)

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ backgroundColor: "#000" }}
          exit={{ backgroundColor: "#fff", transition: { duration: 0.5 } }}
          className="h-screen flex flex-col items-center justify-center space-y-40 z-50"
        >
          <motion.div
            className="bg-white"
            initial={{ width: 0, height: "70px" }}
            animate={{ width: "300px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <p className="text-white opacity-40 font-bold absolute bottom-24">
            Please wait, content is loading...
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
