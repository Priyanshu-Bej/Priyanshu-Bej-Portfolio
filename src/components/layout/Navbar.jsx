import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { FiArrowUpRight, FiDownload, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { heroContent, navItems, resumeResource } from "../../constants";
import ThemeToggle from "./ThemeToggle";

const getPathHash = (path) => {
  const [pathname, hash = ""] = path.split("#");
  return { pathname: pathname || "/", hash: hash ? `#${hash}` : "" };
};

const NavItem = ({ item, currentPathname, currentHash, onNavigate }) => {
  const { pathname, hash } = getPathHash(item.path);
  const isActive =
    hash.length > 0
      ? currentHash === hash
      : currentPathname === pathname && currentHash.length === 0;

  return (
    <button
      type="button"
      onClick={() => onNavigate(item.path)}
      className={`group flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-semibold transition ${
        isActive
          ? "bg-ink-strong text-white dark:bg-ink-inverse dark:text-ink-strong"
          : "text-ink-muted hover:bg-surface-muted hover:text-ink-strong dark:text-ink-inverse/90 dark:hover:bg-surface-dark-muted dark:hover:text-ink-inverse"
      }`}
    >
      <span>{item.label}</span>
      <span className={`text-xs transition ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
        <FiArrowUpRight />
      </span>
    </button>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  const visibleNavItems = useMemo(
    () => navItems.filter((item) => item.id !== "home"),
    []
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname, hash]);

  const goTo = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const resumeDownloadProps = resumeResource.fileName
    ? { download: resumeResource.fileName }
    : {};

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-[55] hidden w-[19rem] border-r border-line-light bg-canvas-light/92 px-5 py-6 backdrop-blur-xl dark:border-line-dark dark:bg-canvas-dark/92 lg:flex lg:flex-col">
        <Link
          to="/"
          className="font-display text-2xl font-extrabold leading-none text-ink-strong transition hover:text-brand-primary dark:text-ink-inverse dark:hover:text-brand-secondary"
        >
          Priyanshu
          <span className="block meta-text">Bej</span>
        </Link>

        <div className="mt-8 overflow-hidden rounded-md border border-line-light bg-surface-elevated p-2 dark:border-line-dark dark:bg-surface-dark">
          <div className="flex aspect-[4/3] w-full flex-col justify-between rounded bg-ink-strong p-4 text-white dark:bg-ink-inverse dark:text-ink-strong">
            <div className="flex items-start justify-between">
              <span className="font-display text-5xl font-extrabold leading-none">PB</span>
              <span className="rounded border border-white/20 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] dark:border-black/20">
                4+ yrs
              </span>
            </div>
            <p className="max-w-[11rem] text-sm font-semibold leading-tight text-white/90 dark:text-ink-strong">
              Mobile systems, release discipline, product craft.
            </p>
          </div>
          <div className="p-3">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-primary dark:text-brand-secondary">
              {heroContent.eyebrow}
            </p>
            <p className="mt-2 text-sm text-ink-muted dark:text-ink-inverse/80">
              {heroContent.location}
            </p>
          </div>
        </div>

        <nav aria-label="Primary navigation" className="mt-8">
          <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] meta-text">
            Index
          </p>
          <div className="space-y-1">
            {visibleNavItems.map((item) => (
              <NavItem
                key={item.id}
                item={item}
                currentPathname={pathname}
                currentHash={hash}
                onNavigate={goTo}
              />
            ))}
          </div>
        </nav>

        <div className="mt-auto space-y-3 border-t border-line-light pt-5 dark:border-line-dark">
          <div className="grid grid-cols-3 gap-2">
            {heroContent.stats.map((stat) => (
              <div key={stat.label} className="rounded-md border border-transparent bg-surface-muted p-2 dark:border-white/10 dark:bg-surface-dark-elevated">
                <p className="text-sm font-bold text-ink-strong dark:text-ink-inverse">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] font-semibold leading-tight text-ink-muted dark:text-ink-inverse/80">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={resumeResource.href}
              target="_blank"
              rel="noreferrer"
              {...resumeDownloadProps}
              className="button-primary flex-1 px-3 py-2.5"
            >
              <FiDownload />
              Resume
            </a>
            <ThemeToggle />
          </div>
        </div>
      </aside>

      <header className="fixed inset-x-0 top-0 z-[60] px-4 pt-4 lg:hidden">
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-lg border px-3 py-3 transition duration-300 ease-premium ${
            isScrolled
              ? "border-line-light bg-canvas-light/90 shadow-subtle backdrop-blur-xl dark:border-line-dark dark:bg-canvas-dark/88"
              : "border-line-light/70 bg-canvas-light/78 backdrop-blur-xl dark:border-line-dark dark:bg-canvas-dark/78"
          }`}
        >
          <Link
            to="/"
            className="font-display text-base font-bold text-ink-strong dark:text-ink-inverse"
          >
            Priyanshu Bej
          </Link>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              className="icon-button"
            >
              {mobileOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mx-auto mt-2 max-w-6xl rounded-lg border border-line-light bg-canvas-light p-2 shadow-lift dark:border-line-dark dark:bg-canvas-dark">
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <NavItem
                      key={item.id}
                      item={item}
                      currentPathname={pathname}
                      currentHash={hash}
                      onNavigate={goTo}
                    />
                  ))}
                </div>
                <a
                  href={resumeResource.href}
                  target="_blank"
                  rel="noreferrer"
                  {...resumeDownloadProps}
                  className="button-primary mt-2 w-full"
                >
                  <FiDownload />
                  {resumeResource.label}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
