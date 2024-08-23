"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isBarFilled, setIsBarFilled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBarFilled(true);
      setTimeout(() => {
        setIsLoading(false);
        onFinish();
      }, 500); // Wait for the expansion animation to complete
    }, 800); // Duration for the loading bar to fill

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black"
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white"
            initial={{
              width: 0,
              height: "70px",
              transformOrigin: "left",
            }}
            animate={
              isBarFilled
                ? { width: "100vw", height: "100vh", transformOrigin: "center" }
                : {
                    width: "300px",
                    height: "70px",
                    transformOrigin: "left",
                  }
            }
            transition={
              isBarFilled
                ? { duration: 0.5, ease: "easeInOut" }
                : { duration: 0.8, ease: "easeInOut" }
            }
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
