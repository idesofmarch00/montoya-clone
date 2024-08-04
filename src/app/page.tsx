"use client";
import { useRef } from "react";
import Header from "../components/header";
import StickyCursor from "../components/stickyCursor";
import Hero from "../components/hero";

export default function Home() {
  const stickyElement = useRef(null);

  return (
    <main className="bg-black h-screen">
      <Header ref={stickyElement} />
      <Hero />
      <StickyCursor stickyElement={stickyElement} />
    </main>
  );
}
