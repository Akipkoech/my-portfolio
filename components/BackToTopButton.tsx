"use client";

import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="mt-4 inline-flex items-center text-gray-300 hover:text-red-500 transition-colors duration-200 focus:text-red-500 focus:outline-none"
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5 mr-2" />
      Back to Top
    </button>
  );
}