import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiExternalLink, FiX } from "react-icons/fi";

const focusableSelectors =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex="0"]';

const ProjectModal = ({ project, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;
    const previouslyFocused =
      (typeof document !== "undefined" && document.activeElement) || null;
    const element = dialogRef.current;
    if (element) {
      element.focus();
    }
    const focusables = element
      ? element.querySelectorAll(focusableSelectors)
      : [];
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

  const { title, category, description, impact, tech, links, image } = project;

  return (
    <AnimatePresence>
      <motion.div
        key={title}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
      >
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          tabIndex={-1}
          className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-white/30 bg-white/95 shadow-soft-xl backdrop-blur-xl dark:border-white/10 dark:bg-surface-elevated/95"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            type="button"
            aria-label="Close project details"
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full border border-neutral-200 bg-white/80 p-2 text-neutral-500 shadow-card-light transition hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary dark:border-white/10 dark:bg-surface-elevated/80 dark:text-neutral-200"
          >
            <FiX className="text-lg" />
          </button>

          <div className="overflow-y-auto">
            <img
              src={image}
              alt={`${title} hero`}
              loading="lazy"
              className="h-56 w-full object-cover"
            />
            <div className="space-y-6 px-6 py-8">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-neutral-400 dark:text-neutral-500">
                  {category}
                </p>
                <h3
                  id="project-modal-title"
                  className="mt-3 font-display text-2xl text-neutral-900 dark:text-neutral-50"
                >
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {description}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-neutral-400 dark:text-neutral-500">
                  Impact
                </p>
                <ul className="mt-3 space-y-3 text-sm text-neutral-600 dark:text-neutral-300">
                  {impact.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-brand-primary">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-neutral-400 dark:text-neutral-500">
                  Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary dark:bg-brand-primary/20 dark:text-neutral-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200/80 bg-white/80 px-6 py-4 text-sm dark:border-white/10 dark:bg-surface-elevated/80">
            {links.live ? (
              <a
                href={links.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 px-4 py-2 font-semibold text-brand-primary transition hover:border-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              >
                Explore live <FiExternalLink />
              </a>
            ) : (
              <span className="text-neutral-400">Private deployment</span>
            )}
            {links.repo && (
              <a
                href={links.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-neutral-500 transition hover:text-brand-primary"
              >
                View source <FiExternalLink />
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
