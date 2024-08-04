"use client";
import { useRef } from "react";
import { useScroll } from "framer-motion";

const Skills = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container}>
      <p className="text-4xl font-bold sticky top-0">Skills</p>
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
