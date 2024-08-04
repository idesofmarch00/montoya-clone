"use client";
import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Card = ({
  i,
  title,
  description,
  src,
  link,
  color,
  progress,
  range,
  targetScale,
}: any) => {
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
          backgroundColor: color,
          scale,
          top: 0,
        }}
        className="flex flex-col relative -top-1/4 h-[650px] w-[1350px] rounded-[25px] p-[50px] transform-origin-top"
      >
        <div className="flex h-full gap-[50px]">
          <div className="relative w-[1350px] h-[650px] rounded-[25px] overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                fill
                src={`/${src}`}
                alt="image"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
