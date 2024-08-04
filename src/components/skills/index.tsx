"use client";
import React, { useRef, useEffect } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

// Define a component for each word to be animated
const Word = ({ children }: { children: React.ReactNode }) => {
  // Create a reference to the element for scroll tracking
  const element = useRef(null);
  // Use the useScroll hook to track the scroll progress of the element
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start start"], // Define the offset for scroll tracking
  });

  // Use the useTransform hook to dynamically adjust the opacity and color based on scrollYProgress
  const opacity = useTransform(scrollYProgress, [0.5, 1], [0.4, 1]);
  const color = useTransform(
    scrollYProgress,
    [0.5, 1],
    ["rgba(255, 255, 255, 0.2)", "white"]
  );

  return (
    <motion.li
      ref={element}
      style={{ opacity, color }} // Apply the dynamic styles
      className="font-medium text-9xl"
    >
      {children}
    </motion.li>
  );
};

// Define the Skills component
const Skills = () => {
  // Create a reference to the container for scroll tracking
  const container = useRef<HTMLDivElement>(null); // Specify the type here
  // Use the useScroll hook to track the scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"], // Define the offset for scroll tracking
  });

  // Use the useTransform hook to dynamically adjust the opacity based on scrollYProgress
  // Make the element fully visible from -1 to 0.5
  const opacity = useTransform(
    scrollYProgress,
    [-1, 0.5],
    [0, 1] // Fully visible from -1 to 0.5
  );

  // Ensure smooth scrolling to the end when 80% is reached
  useEffect(() => {
    // Subscribe to scrollYProgress changes
    const unsubscribe = scrollYProgress.onChange((latest) => {
      // Smoothly scroll to the end when 80% is reached
      if (latest > 0.8 && container.current) {
        window.scrollTo({
          top: container.current!.offsetTop + container.current!.clientHeight,
          behavior: "smooth",
        });
      }
    });

    // Cleanup function to unsubscribe from scrollYProgress changes
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div ref={container} className="flex flex-col items-center my-40">
      <motion.p
        className="text-sm font-medium sticky top-0 -mt-40"
        style={{ opacity }} // Always visible
      >
        OUR SKILLS COVER
      </motion.p>
      <ul className="text-7xl flex flex-col items-center justify-center h-screen space-y-6 mt-44">
        {[
          "WEB DESIGN",
          "MOBILE APP DEVELOPMENT",
          "UI/UX DESIGN",
          "SEO OPTIMIZATION",
          "SOCIAL MEDIA MANAGEMENT",
          "DATA ANALYTICS",
          "CONTENT CREATION",
        ].map((skill, index) => (
          <Word key={index}>{skill}</Word>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
