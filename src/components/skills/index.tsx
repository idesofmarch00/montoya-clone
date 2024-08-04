"use client";
import React, { useRef, useEffect } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const Word = ({ children }: { children: React.ReactNode }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start start"],
  });

  const opacity = useTransform(scrollYProgress, [0.5, 1], [0.4, 1]);
  const color = useTransform(
    scrollYProgress,
    [0.5, 1],
    ["rgba(255, 255, 255, 0.2)", "white"]
  );

  return (
    <motion.li
      ref={element}
      style={{ opacity, color }}
      className="font-medium text-9xl"
    >
      {children}
    </motion.li>
  );
};

const Skills = () => {
  const container = useRef<HTMLDivElement>(null); // Specify the type here
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest > 0.8 && container.current) {
        window.scrollTo({
          top: container.current!.offsetTop + container.current!.clientHeight,
          behavior: "smooth",
        });
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div ref={container} className="flex flex-col items-center my-40">
      <motion.p
        className="text-xs font-medium sticky top-0"
        initial={{ opacity: 1 }}
      >
        OUR SKILLS COVER
      </motion.p>
      <ul className="text-7xl flex flex-col items-center justify-center h-screen space-y-6">
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
