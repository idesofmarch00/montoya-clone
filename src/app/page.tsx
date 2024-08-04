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

export default function Home() {
  const stickyElement = useRef(null);

  return (
    <main className="bg-black h-screen">
      <Header ref={stickyElement} />
      <Hero />
      <Projects />
      <Middle />
      <Skills />
      <Studio />
      <Footer ref={stickyElement} />
      <StickyCursor stickyElement={stickyElement} />
    </main>
  );
}
