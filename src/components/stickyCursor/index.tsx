"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  transform,
  animate,
} from "framer-motion";

// StickyCursor component that dynamically updates its position and size based on mouse movement and hover state.
export default function StickyCursor({ stickyElement }: any) {
  // State to manage the hover state of the cursor.
  const [isHovered, setIsHovered] = useState(false);
  // Reference to the cursor element for direct DOM manipulation.
  const cursor = useRef(null);
  // Dynamically calculate cursor size based on hover state.
  const cursorSize = isHovered ? 60 : 40;

  // Motion values for smooth mouse movement tracking.
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  // Motion values for cursor scale.
  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  // Smooth out the mouse values using spring animation.
  const smoothOptions = { damping: 20, stiffness: 150, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  // Function to rotate the cursor based on distance from the stickyElement.
  const rotate = (distance: any) => {
    const angle = Math.atan2(distance.y, distance.x);
    animate(cursor.current, { rotate: `${angle}rad` }, { duration: 0 });
  };

  // Callback function to manage mouse movement.
  const manageMouseMove = useCallback(
    (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, height, width } =
        stickyElement.current.getBoundingClientRect();

      // Calculate the center position of the stickyElement.
      const center = { x: left + width / 2, y: top + height / 2 };

      if (isHovered) {
        // Calculate distance between the mouse pointer and the center of the custom cursor.
        const distance = { x: clientX - center.x, y: clientY - center.y };

        // Rotate the cursor based on the distance.
        rotate(distance);

        // Stretch the cursor based on the distance.
        const absDistance = Math.max(
          Math.abs(distance.x),
          Math.abs(distance.y)
        );
        const newScaleX = transform(absDistance, [0, height / 2], [1, 1.3]);
        const newScaleY = transform(absDistance, [0, width / 2], [1, 0.8]);
        scale.x.set(newScaleX);
        scale.y.set(newScaleY);

        // Move the mouse to the center of stickyElement + slightly move it towards the mouse pointer.
        mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.1);
        mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.1);
      } else {
        // Move custom cursor to center of stickyElement.
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);
      }
    },
    [isHovered, stickyElement, cursorSize, mouse.x, mouse.y, scale.x, scale.y]
  ); // Added missing dependencies

  // Function to manage mouse enter event.
  const manageMouseOver = () => {
    setIsHovered(true);
  };

  // Function to manage mouse leave event.
  const manageMouseLeave = () => {
    setIsHovered(false);
    animate(
      cursor.current,
      { scaleX: 1, scaleY: 1 },
      { duration: 0.1, type: "spring" }
    );
  };

  // Effect to set up event listeners.
  useEffect(() => {
    stickyElement.current.addEventListener("mouseenter", manageMouseOver);
    stickyElement.current.addEventListener("mouseleave", manageMouseLeave);
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      stickyElement.current.removeEventListener("mouseenter", manageMouseOver);
      stickyElement.current.removeEventListener("mouseleave", manageMouseLeave);
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [isHovered, manageMouseMove, stickyElement]);

  // Template function for cursor transform.
  const template = ({ rotate, scaleX, scaleY }: any) => {
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
  };

  return (
    <div className="">
      <motion.div
        transformTemplate={template}
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          scaleX: scale.x,
          scaleY: scale.y,
        }}
        animate={{
          width: cursorSize,
          height: cursorSize,
        }}
        className={`fixed border h-20 w-20 rounded-full pointer-events-none ${
          isHovered ? "border-orange-300" : "border-gray-300"
        }`}
        ref={cursor}
      ></motion.div>
    </div>
  );
}
