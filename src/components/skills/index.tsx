"use client";
import React, { useRef, useEffect } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const Word = ({ children }: { children: React.ReactNode }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0.2"],
  });

  const opacity = useTransform(scrollYProgress, [0.5, 1], [0.4, 1]);
  const color = useTransform(
    scrollYProgress,
    [0.5, 1],
    ["#FFFFFF20", "#FFFFFF"]
  );

  return (
    <motion.li
      ref={element}
      style={{ opacity, color }}
      className="font-medium text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
    >
      {children}
    </motion.li>
  );
};

const Skills = () => {
  const container = useRef<HTMLDivElement>(null);
  const listContainer = useRef<HTMLUListElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const headingOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Slow down the scroll progress for the list container
  const listScrollProgress = useTransform(scrollYProgress, [0, 1], [0, 0.5]);

  // Increase the range of translateY to allow the first two items to scroll out of view
  const listTranslateY = useTransform(
    listScrollProgress,
    [0, 1],
    ["0%", "-50%"]
  );

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest > 0.95 && container.current) {
        window.scrollTo({
          top: container.current.offsetTop + container.current.clientHeight,
          behavior: "smooth",
        });
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div ref={container} className="relative md:h-[800vh] text-center">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.p
          style={{ opacity: headingOpacity }}
          className="hidden sm:block sm:text-center text-sm font-medium py-4"
        >
          OUR SKILLS COVER
        </motion.p>
        <motion.ul
          ref={listContainer}
          className="mt-28 sm:mt-36 md:mt-10 space-y-2"
          style={{ translateY: listTranslateY }}
        >
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
        </motion.ul>
      </div>
    </div>
  );
};

export default Skills;
