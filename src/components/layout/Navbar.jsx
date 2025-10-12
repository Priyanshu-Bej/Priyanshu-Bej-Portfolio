import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiDownloadCloud, FiMenu, FiX } from "react-icons/fi";

import { navItems, resumeResource } from "../../constants";
import { useTheme } from "../../context/ThemeContext";
import { smoothScrollTo } from "../../utils/smoothScroll";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme } = useTheme();

  const sectionIds = useMemo(
    () => navItems.map((item) => item.id).filter(Boolean),
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -45% 0px",
        threshold: 0.2,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  const handleNavigate = (id) => {
    setMobileOpen(false);
    setActiveSection(id);
    smoothScrollTo(`#${id}`);
  };

  const resumeLabel = resumeResource.label ?? "Resume";
  const resumeDownloadProps = resumeResource.fileName
    ? { download: resumeResource.fileName }
    : {};

  return (
    <header
      className={`sticky top-0 z-[60] transition-all duration-500 ${
        isScrolled ? "backdrop-blur-2xl" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent" />
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-300 md:px-6 ${
          isScrolled
            ? "mt-2 rounded-full border border-white/20 bg-white/10 py-3 shadow-card-light backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
            : "py-5"
        }`}
      >
        <button
          type="button"
          onClick={() => handleNavigate("hero")}
          className="font-display text-lg font-semibold tracking-tight text-neutral-900 transition hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary dark:text-neutral-100"
        >
          Priyanshu
          <span className="ml-1 rounded-full bg-gradient-to-r from-brand-primary via-brand-secondary-soft to-brand-accent bg-clip-text text-transparent">
            .dev
          </span>
        </button>

        <div className="hidden items-center gap-6 lg:flex">
          <ul className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-2 py-1 text-sm shadow-card-light backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-neutral-200">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => handleNavigate(id)}
                  className={`rounded-full px-4 py-2 transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary ${
                    activeSection === id
                      ? "bg-brand-primary text-white shadow-soft-xl"
                      : "text-neutral-600 hover:text-brand-primary dark:text-neutral-300"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a
              href={resumeResource.href}
              target="_blank"
              rel="noreferrer"
              {...resumeDownloadProps}
              className="group inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary px-4 py-2 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-brand-primary-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
            >
              <FiDownloadCloud />
              <span>{resumeLabel}</span>
            </a>
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={resumeResource.href}
            target="_blank"
            rel="noreferrer"
            {...resumeDownloadProps}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/20 text-neutral-600 shadow-card-light backdrop-blur-lg transition hover:text-brand-primary dark:border-white/10 dark:bg-white/10 dark:text-neutral-100"
            aria-label="View resume"
          >
            <FiDownloadCloud className="text-lg" />
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/20 text-neutral-600 shadow-card-light backdrop-blur-lg transition hover:text-brand-primary dark:border-white/10 dark:bg-white/10 dark:text-neutral-100"
          >
            {mobileOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden"
          >
            <div className="mx-4 mb-4 rounded-3xl border border-white/20 bg-white/15 p-4 shadow-card-light backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-neutral-100">
              <ul className="space-y-2">
                {navItems.map(({ id, label }) => (
                  <li key={id}>
                    <button
                      type="button"
                      onClick={() => handleNavigate(id)}
                      className={`w-full rounded-2xl px-4 py-3 text-left text-base font-medium transition hover:bg-brand-primary/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary dark:hover:bg-brand-primary/25 ${
                        activeSection === id
                          ? "bg-brand-primary text-white shadow-soft-xl"
                          : ""
                      }`}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
