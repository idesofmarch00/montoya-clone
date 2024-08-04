"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-black bg-opacity-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Montoya
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-accent transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
        </button>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black bg-opacity-90 p-4"
        >
          <ul className="flex flex-col space-y-4">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-accent transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
