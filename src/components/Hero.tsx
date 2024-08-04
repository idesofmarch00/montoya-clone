"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
    >
      <Image
        src="/images/hero-bg.jpg"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-70" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-6xl font-bold mb-4">Welcome to Montoya</h1>
        <p className="text-xl mb-8">Discover our creative world</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent text-white px-8 py-3 rounded-full text-lg font-semibold"
        >
          Explore Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
