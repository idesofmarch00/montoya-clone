"use client";
import { useRef } from "react";
import Header from "../components/header";
import StickyCursor from "../components/stickyCursor";

export default function Home() {
  const stickyElement = useRef(null);

  return (
    <main className="bg-white h-screen">
      <Header ref={stickyElement} />
      <StickyCursor stickyElement={stickyElement} />
    </main>
  );
}
