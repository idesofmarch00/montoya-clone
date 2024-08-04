"use client";
import Image from "next/image";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";
import { ProjectImage } from "./data";

const Card = ({
  i,
  title,
  year,
  type,
  progress,
  range,
  targetScale,
  src,
}: ProjectImage & {
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  src: string;
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: 0,
        }}
        className="flex flex-col relative -top-1/4 h-[750px] w-[1450px] rounded-[25px] p-[50px] transform-origin-top"
      >
        <div className="flex h-full gap-[50px]">
          <div className="relative w-[1450px] h-[660px] rounded-[25px] overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                fill
                src={`/${src}`}
                alt="image"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute bottom-0 w-full px-20 pb-14 text-white flex items-end justify-between">
              <button className="text-sm bg-white bg-opacity-20 rounded-full px-4 py-1 text-white">
                {year}
              </button>
              <h1 className="text-9xl">{title}</h1>
              <span className="text-sm bg-white bg-opacity-20 rounded-full px-4 py-1 text-white">
                {type}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
