"use client";
import { useRef, useState } from "react";
import SplashScreen from "../components/splashScreen";

import Header from "../components/header";
import StickyCursor from "../components/stickyCursor";
import Hero from "../components/hero";
import Projects from "@/components/projects";
import Middle from "@/components/middle";
import Skills from "@/components/skills";
import Footer from "../components/footer";
import Studio from "@/components/studio";
import Info from "@/components/info";

export default function Home() {
  const hamburgerElement = useRef(null);
  const backTopElement = useRef(null);
  const scrollBelowElement = useRef(null);
  const [showSplash, setShowSplash] = useState(true);

  const handleFinishLoading = () => {
    setTimeout(() => {
      setShowSplash(false);
    }, 500);
  };

  return (
    <main className="h-auto min-h-screen overflow-x-clip">
      {showSplash ? (
        <SplashScreen onFinish={handleFinishLoading} />
      ) : (
        <>
          <Header ref={hamburgerElement} />
          <Hero ref={scrollBelowElement} />
          <Projects />
          <Middle />
          <Skills />
          <Info />
          <Studio />
          <Footer ref={backTopElement} />
          <StickyCursor
            hamburgerMenu={hamburgerElement}
            backTopButton={backTopElement}
            scrollBelowButton={scrollBelowElement}
          />
        </>
      )}
    </main>
  );
}
