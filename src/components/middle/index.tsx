"use client";
import React, { useRef, forwardRef, RefObject } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Magnetic from "../magnetic";

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative inline-block text-lg">
      <span className="opacity-10 absolute top-0 left-0 whitespace-nowrap">
        {children}
      </span>
      <motion.span style={{ opacity }} className="relative z-10">
        {children}
      </motion.span>
    </span>
  );
}

interface ParaProps {
  value: string;
}

const Para = forwardRef<HTMLParagraphElement, ParaProps>(function Para(
  { value },
  ref
) {
  const element = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = value.split(" ");

  return (
    <p
      ref={element}
      className="text-lg text-white opacity-60 text-wrap text-center"
    >
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        return (
          <React.Fragment key={index}>
            <Word progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
            {index < words.length - 1 && " "}
          </React.Fragment>
        );
      })}
    </p>
  );
});

const Middle: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={container}
      className="flex flex-col justify-center items-center pb-20 font-medium px-4 text-wrap max-w-xl mx-auto"
    >
      <Para value="CRAFTING WEBSITES WHERE THE ELEGANCE OF DESIGN INTERSECTS WITH THE SCIENCE OF SELLING PRODUCTS." />
      <Magnetic>
        <div className="mt-6 border-2 border-white rounded-3xl w-[10.5rem] h-12 flex items-center justify-center">
          <motion.div
            initial="initial"
            whileHover="hovered"
            className="h-fit relative overflow-hidden cursor-pointer"
          >
            <motion.div
              variants={{
                initial: { y: 0 },
                hovered: { y: -30 },
              }}
            >
              See All Works
            </motion.div>
            <motion.div
              className="absolute inset-0"
              variants={{
                initial: { y: 30, opacity: 0 },
                hovered: { y: 0, opacity: 1 },
              }}
            >
              See All Works
            </motion.div>
          </motion.div>
        </div>
      </Magnetic>
    </div>
  );
};

export default Middle;
