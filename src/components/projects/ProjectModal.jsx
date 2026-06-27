import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiExternalLink, FiX } from "react-icons/fi";

import ProjectArtwork from "./ProjectArtwork";

const focusableSelectors =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex="0"]';

const ProjectModal = ({ project, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;
    const previouslyFocused =
      (typeof document !== "undefined" && document.activeElement) || null;
    const element = dialogRef.current;
    element?.focus();

    const focusables = element ? element.querySelectorAll(focusableSelectors) : [];
    const trap = {
      first: focusables[0],
      last: focusables[focusables.length - 1],
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
      }
      if (event.key === "Tab" && trap.first && trap.last) {
        if (event.shiftKey && document.activeElement === trap.first) {
          event.preventDefault();
          trap.last.focus();
        } else if (!event.shiftKey && document.activeElement === trap.last) {
          event.preventDefault();
          trap.first.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [onClose, project]);

  if (!project) return null;

  const {
    title,
    category,
    description,
    impact,
    tech,
    links,
    timeframe,
    facts = [],
    storeLinks = [],
  } = project;
  const externalLinks =
    storeLinks.length > 0
      ? storeLinks
      : [
          links.live && { label: "Explore live", href: links.live },
          links.repo && { label: "View source", href: links.repo },
        ].filter(Boolean);

  return (
    <AnimatePresence>
      <motion.div
        key={title}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/58 p-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
      >
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          tabIndex={-1}
          className="premium-card relative grid max-h-[90vh] w-full max-w-5xl overflow-y-auto lg:grid-cols-[0.9fr,1.1fr] lg:overflow-hidden"
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 12, opacity: 0 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            type="button"
            aria-label="Close project details"
            onClick={onClose}
            className="icon-button absolute right-4 top-4 z-10"
          >
            <FiX className="text-lg" />
          </button>

          <ProjectArtwork project={project} variant="modal" />

          <div className="scrollbar-premium p-6 md:p-8 lg:max-h-[90vh] lg:overflow-y-auto">
            <p className="eyebrow">
              {category} · {timeframe}
            </p>
            <h3
              id="project-modal-title"
              className="mt-4 text-balance text-4xl font-extrabold leading-tight"
            >
              {title}
            </h3>
            <p className="mt-4 text-pretty text-base text-ink-muted dark:text-ink-inverse/80">
              {description}
            </p>

            {facts.length > 0 && (
              <div className="mt-8 border-t border-line-light pt-6 dark:border-line-dark">
                <p className="text-sm font-bold text-ink-strong dark:text-ink-inverse">
                  Store Snapshot
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {facts.map((fact) => (
                    <div
                      key={`${fact.label}-${fact.value}`}
                      className="rounded-md border border-line-light bg-surface-muted p-3 dark:border-white/20 dark:bg-surface-dark-elevated"
                    >
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] meta-text">
                        {fact.label}
                      </p>
                      <p className="mt-1 text-sm font-bold text-ink-strong dark:text-ink-inverse">
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 border-t border-line-light pt-6 dark:border-line-dark">
              <p className="text-sm font-bold text-ink-strong dark:text-ink-inverse">
                Impact
              </p>
              <ul className="mt-4 space-y-3 text-sm text-ink-base dark:text-ink-inverse/90">
                {impact.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-line-light pt-6 dark:border-line-dark">
              <p className="text-sm font-bold text-ink-strong dark:text-ink-inverse">
                Stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tech.map((item) => (
                  <span
                    key={item}
                    className="chip px-3 py-1.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {externalLinks.length > 0 ? (
                externalLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={index === 0 ? "button-primary" : "button-secondary"}
                  >
                    {link.label}
                    <FiExternalLink />
                  </a>
                ))
              ) : (
                <span className="text-sm meta-text">Private deployment</span>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
