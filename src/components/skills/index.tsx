"use client";
import { useRef, useEffect } from "react";
import { useScroll, motion } from "framer-motion";

const Skills = () => {
  const container = useRef<HTMLDivElement | null>(null); // Specify the type for the ref
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (scrollYProgress.get() > 0.95) {
      // Use get() method instead of current
      if (container.current) {
        // Check if container.current is not null
        window.scrollTo({
          top: container.current.offsetTop + 200, // Adjust the offset as needed
          behavior: "smooth",
        });
      }
    }
  }, [scrollYProgress]);

  return (
    <div ref={container} className="flex flex-col items-center pt-40">
      <motion.p
        className="text-xs font-bold sticky top-10"
        style={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        OUR SKILLS COVER
      </motion.p>
      <div className="flex flex-col items-center justify-center h-screen">
        <ul>
          <li className="text-8xl font-bold">Skill 1</li>
          <li className="text-8xl font-bold">Skill 2</li>
          <li className="text-8xl font-bold">Skill 3</li>
          <li className="text-8xl font-bold">Skill 4</li>
          <li className="text-8xl font-bold">Skill 5</li>
          <li className="text-8xl font-bold">Skill 6</li>
          <li className="text-8xl font-bold">Skill 7</li>
          <li className="text-8xl font-bold">Skill 8</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
