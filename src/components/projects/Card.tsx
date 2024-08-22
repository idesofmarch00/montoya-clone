"use client";
import Image from "next/image";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef, useCallback } from "react";
import { ProjectImage } from "../../data/imageData";

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

  const handleMouseEnter = useCallback(() => {
    window.dispatchEvent(
      new CustomEvent("cardHover", {
        detail: { isHovered: true, text: title },
      })
    );
  }, [title]);

  const handleMouseLeave = useCallback(() => {
    window.dispatchEvent(
      new CustomEvent("cardHover", {
        detail: { isHovered: false, text: "" },
      })
    );
  }, []);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          scale,
          top: 0,
        }}
        className="flex flex-col relative -top-1/4 w-[330px] h-[560px]  sm:w-[700px] sm:h-[630px] rounded-[10px] md:w-[980px] md:rounded-[15px] lg:h-[750px] lg:w-[1450px] lg:rounded-[25px] lg:p-[50px] transform-origin-top"
      >
        <div className="flex h-full gap-[50px]">
          <div className="relative w-[330px] h-[560px]  sm:w-[720px] rounded-[10px] md:w-[980px] sm:h-[630px] md:rounded-[15px] lg:w-[1450px] lg:h-[660px]  lg:rounded-[25px] overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                fill
                src={`/${src}`}
                alt="image"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute top-6 sm:top-8 md:bottom-0 w-full px-4 md:px-16 lg:px-20 md:pb-16 lg:pb-14 text-white flex items-end justify-between">
              <button className="text-sm bg-white bg-opacity-20 rounded-full px-4 py-1 text-white">
                {year}
              </button>
              <h1 className="hidden md:flex text-6xl sm:text-7xl  md:text-8xl lg:text-9xl">
                {title}
              </h1>
              <span className="text-sm bg-white bg-opacity-20 rounded-full px-4 py-1 text-white">
                {type}
              </span>
            </div>
            <h1 className="relative bottom-20 sm:bottom-28 text-center md:hidden text-6xl sm:text-7xl">{title}</h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
