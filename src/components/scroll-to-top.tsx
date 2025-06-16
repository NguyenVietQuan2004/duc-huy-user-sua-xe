"use client";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 100); // Hiện khi scroll xuống > 100px
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-2 left-2 hover:opacity-75 cursor-pointer w-10 h-10  bg-[#f6ab35] text-white flex flex-col items-center justify-center rounded shadow-lg hover:bg-opacity-80 transition-colors"
      >
        <ChevronUp className="w-5 h-5 -mb-3" />
        <ChevronUp className="w-5 h-5" />
      </button>
    )
  );
}
