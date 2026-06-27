import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll back to top"
      className="fixed bottom-5 right-5 z-[65] inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-light bg-white/35 text-ink-strong shadow-subtle backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/55 dark:border-white/20 dark:bg-black/30 dark:text-ink-inverse dark:hover:bg-black/45"
    >
      <FiArrowUp className="text-lg" />
    </button>
  );
};

export default BackToTopButton;
