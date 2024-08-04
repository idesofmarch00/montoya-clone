"use client";

// Importing necessary components and hooks
import { projectsImages } from "@/data/imageData"; // Importing project images data
import Card from "./Card"; // Importing Card component for project cards
import { useScroll } from "framer-motion"; // Importing useScroll hook for scroll tracking
import { useEffect, useRef } from "react"; // Importing useEffect and useRef hooks for state management and DOM manipulation
import Lenis from "lenis"; // Importing Lenis for smooth scrolling

export default function Projects() {
  // Creating a reference to the container element for scroll tracking
  const container = useRef(null);
  // Using the useScroll hook to track the scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"], // Defining the offset for scroll tracking
  });

  // Using useEffect to initialize Lenis for smooth scrolling
  useEffect(() => {
    // Creating a new instance of Lenis
    const lenis = new Lenis();

    // Function to handle requestAnimationFrame for smooth scrolling
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Initiating the requestAnimationFrame loop
    requestAnimationFrame(raf);
  });

  // Rendering the project cards
  return (
    <main ref={container} className="relative">
      {projectsImages.map((project, i) => {
        // Calculating the target scale for each project card based on its position
        const targetScale = 1 - (projectsImages.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}
