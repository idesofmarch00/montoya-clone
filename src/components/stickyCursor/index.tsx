"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, animate } from "framer-motion";

export default function StickyCursor({
  hamburgerMenu,
  scrollBelowButton,
  backTopButton,
}: any) {
  const [isHovered, setIsHovered] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isMagneticHovered, setIsMagneticHovered] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [isScrollHovered, setIsScrollHovered] = useState(false);
  const [isBackHovered, setIsBackHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const cursor = useRef(null);
  const cursorSize = isCardHovered ? 100 : isHovered ? 60 : 40;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  const smoothOptions = { damping: 20, stiffness: 150, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  // const rotate = (distance: any) => {
  //   const angle = Math.atan2(distance.y, distance.x);
  //   animate(cursor.current, { rotate: `${angle}rad` }, { duration: 0 });
  // };

  useEffect(() => {
    const handleCardHover = (e: CustomEvent) => {
      setIsCardHovered(e.detail.isHovered);
      setHoverText(e.detail.text || "");
    };

    const handleLogoHover = (e: CustomEvent) => {
      setIsLogoHovered(e.detail.isHovered);
    };

    window.addEventListener("cardHover" as any, handleCardHover);
    window.addEventListener("logoHover" as any, handleLogoHover);
    return () => {
      window.removeEventListener("cardHover" as any, handleCardHover);
      window.removeEventListener("logoHover" as any, handleLogoHover);
    };
  }, []);

  const handleMenuHover = (e: CustomEvent) => {
    setIsMenuHovered(e.detail.isHovered);
  };

  useEffect(() => {
    hamburgerMenu.current.classList.toggle("border", isMenuHovered);
    hamburgerMenu.current.classList.toggle("border-orange-300", isMenuHovered);
    hamburgerMenu.current.classList.toggle("rounded-full", isMenuHovered);
  }, [hamburgerMenu, isMenuHovered]);

  useEffect(() => {
    scrollBelowButton.current.classList.toggle("border-4", isScrollHovered);
    scrollBelowButton.current.classList.toggle(
      "border-white",
      isScrollHovered
    );
    scrollBelowButton.current.classList.toggle("border-opacity-40", isScrollHovered);
    scrollBelowButton.current.classList.toggle("rounded-full", isScrollHovered);
  }, [scrollBelowButton, isScrollHovered]);

  useEffect(() => {
    backTopButton.current.classList.toggle("border", isBackHovered);
    backTopButton.current.classList.toggle("border-orange-300", isBackHovered);
    backTopButton.current.classList.toggle("rounded-full", isBackHovered);
  }, [backTopButton, isBackHovered]);

  const handleMagneticHover = (e: CustomEvent) => {
    setIsMagneticHovered(e.detail.isHovered);
  };

  const handleScrollHover = (e: CustomEvent) => {
    setIsScrollHovered(e.detail.isHovered);
  };

  const handleBackHover = (e: CustomEvent) => {
    setIsBackHovered(e.detail.isHovered);
  };

  const manageMouseMove = useCallback(
    (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, height, width } =
        hamburgerMenu.current.getBoundingClientRect();

      const center = { x: left + width / 2, y: top + height / 2 };

      if (isHovered) {
        const distance = { x: clientX - center.x, y: clientY - center.y };
        // rotate(distance);

        const absDistance = Math.max(
          Math.abs(distance.x),
          Math.abs(distance.y)
        );
        const newScaleX = 1 + (absDistance / (height / 2)) * 0.3;
        const newScaleY = 1 - (absDistance / (width / 2)) * 0.2;
        scale.x.set(newScaleX);
        scale.y.set(newScaleY);

        mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.1);
        mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.1);
      } else {
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);
      }
    },
    [isHovered, hamburgerMenu, cursorSize, mouse.x, mouse.y, scale.x, scale.y]
  );

  const manageMouseOver = () => {
    setIsHovered(true);
  };

  const manageMouseLeave = () => {
    setIsHovered(false);
    animate(
      cursor.current,
      { scaleX: 1, scaleY: 1 },
      { duration: 0.1, type: "spring" }
    );
  };

  useEffect(() => {
    hamburgerMenu.current.addEventListener("mouseenter", manageMouseOver);
    hamburgerMenu.current.addEventListener("mouseleave", manageMouseLeave);
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      hamburgerMenu.current.removeEventListener("mouseenter", manageMouseOver);
      hamburgerMenu.current.removeEventListener("mouseleave", manageMouseLeave);
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [
    isHovered,
    manageMouseMove,
    hamburgerMenu,
    isMagneticHovered,
    isMenuHovered,
  ]);

  useEffect(() => {
    const handleCardHover = (e: CustomEvent) => {
      setIsCardHovered(e.detail.isHovered);
      setHoverText(e.detail.text || "");
    };

    window.addEventListener("cardHover" as any, handleCardHover);
    return () => {
      window.removeEventListener("cardHover" as any, handleCardHover);
    };
  }, []);

  const template = ({ rotate, scaleX, scaleY }: any) => {
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
  };

  useEffect(() => {
    const handleCardHover = (e: CustomEvent) => {
      setIsCardHovered(e.detail.isHovered);
      setHoverText(e.detail.text || "");
    };

    window.addEventListener("cardHover" as any, handleCardHover);
    window.addEventListener("menuHover" as any, handleMenuHover);
    window.addEventListener("scrollHover" as any, handleScrollHover);
    window.addEventListener("backHover" as any, handleBackHover);
    window.addEventListener("magneticHover" as any, handleMagneticHover);

    return () => {
      window.removeEventListener("cardHover" as any, handleCardHover);
      window.removeEventListener("menuHover" as any, handleMenuHover);
      window.removeEventListener("magneticHover" as any, handleMagneticHover);
    };
  }, []);
  return (
    <motion.div
      transformTemplate={template}
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
        scaleX: scale.x,
        scaleY: scale.y,
        opacity:
          isLogoHovered || isMenuHovered || isScrollHovered || isBackHovered
            ? 0
            : 1,
      }}
      animate={{
        width: cursorSize,
        height: cursorSize,
      }}
      className={`hidden fixed rounded-full pointer-events-none sm:flex items-center justify-center cursor-pointer ${
        isCardHovered
          ? "bg-white text-white font-medium"
          : isHovered
          ? "border-orange-300 border"
          : "border-gray-300 border"
      } ${
        hoverText.length > 1
          ? "bg-opacity-10"
          : hoverText.length == 1
          ? "bg-gray-500 bg-opacity-60 text-lg font-bold"
          : ""
      }`}
      ref={cursor}
    >
      {isCardHovered && (
        <span className="text-sm">
          {hoverText.length > 1 ? `[ OPEN ]` : "[ About Us ]"}
        </span>
      )}
    </motion.div>
  );
}
