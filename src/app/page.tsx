"use client";
import { useRef } from "react";

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

  return (
    <main className="h-auto min-h-screen">
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
    </main>
  );
}
