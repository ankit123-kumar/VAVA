import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);

      // Show button after 200px scroll
      if (scrollTop > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* 🔥 Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-gray-200/20 z-[9999]">
        <div
          className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-200"
          style={{ width: `${scrollPercent}%` }}
        ></div>
      </div>

      {/* 🔥 Scroll to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-[9999]"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </>
  );
}
