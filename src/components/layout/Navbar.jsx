import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiDownloadCloud, FiMenu, FiX } from "react-icons/fi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { navItems, resumeResource } from "../../constants";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const resumeLabel = resumeResource.label ?? "Resume";
  const resumeDownloadProps = resumeResource.fileName
    ? { download: resumeResource.fileName }
    : {};

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] transition-[transform,opacity] duration-500 ${
        isScrolled ? "backdrop-blur-2xl" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent" />
      <nav
        className={`mx-auto flex w-full max-w-6xl items-center justify-between px-4 transition-all duration-300 md:px-6 ${
          isScrolled
            ? "mt-3 rounded-[2rem] border border-white/15 bg-white/12 py-3 shadow-card-light backdrop-blur-2xl dark:border-white/10 dark:bg-white/5"
            : "mt-6 rounded-[2.25rem] border border-white/10 bg-white/14 py-4 shadow-soft-xl backdrop-blur-2xl dark:border-white/10 dark:bg-white/10"
        }`}
      >
        <button
          type="button"
          onClick={handleNavigateHome}
          className="font-display text-lg font-semibold tracking-tight text-neutral-900 transition hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary dark:text-neutral-100"
        >
          Priyanshu
          <span className="ml-1 rounded-full bg-gradient-to-r from-brand-primary via-brand-secondary-soft to-brand-accent bg-clip-text text-transparent">
            .dev
          </span>
        </button>

        <div className="hidden items-center gap-6 lg:flex">
          <ul className="flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-base shadow-card-light backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-neutral-200">
            {navItems.map(({ id, label, path }) => (
              <li key={id}>
                <NavLink
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) =>
                    `inline-flex items-center rounded-full px-5 py-2.5 text-base font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary ${
                      isActive
                        ? "bg-brand-primary text-white shadow-soft-xl"
                        : "text-neutral-600 hover:text-brand-primary dark:text-neutral-300"
                    }`
                  }
                >
                  {label}
                </NavLink>
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
                {navItems.map(({ id, label, path }) => (
                  <li key={id}>
                    <NavLink
                      to={path}
                      end={path === "/"}
                      className={({ isActive }) =>
                        `block w-full rounded-2xl px-5 py-3 text-left text-lg font-semibold transition hover:bg-brand-primary/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary dark:hover:bg-brand-primary/25 ${
                          isActive ? "bg-brand-primary text-white shadow-soft-xl" : ""
                        }`
                      }
                    >
                      {label}
                    </NavLink>
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
