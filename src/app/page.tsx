"use client";
import { useRef } from "react";
import Header from "../components/header";
import StickyCursor from "../components/stickyCursor";
import Hero from "../components/hero";
import Projects from "@/components/projects";
import Middle from "@/components/middle";

export default function Home() {
  const stickyElement = useRef(null);

  return (
    <main className="bg-black h-screen">
      <Header ref={stickyElement} />
      <Hero />
      <Projects />
      <Middle />
      <StickyCursor stickyElement={stickyElement} />
    </main>
  );
}
