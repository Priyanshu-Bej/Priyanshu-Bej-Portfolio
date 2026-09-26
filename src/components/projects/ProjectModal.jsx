import { getProjectLinks } from "../../utils/projectLinks";
import { FiExternalLink, FiX } from "react-icons/fi";

import Modal from "../common/Modal";
import ScrambleText from "../common/ScrambleText";
import ProjectArtwork from "./ProjectArtwork";

const ProjectModal = ({ project, onClose }) => {
  const {
    title,
    category,
    description,
    impact,
    tech,
    timeframe,
    facts = [],
  } = project;
  const externalLinks = getProjectLinks(project);

  return (
    <Modal
      labelledBy="project-modal-title"
      onClose={onClose}
      className="grid max-h-[90dvh] overflow-y-auto lg:grid-cols-[0.9fr,1.1fr] lg:overflow-hidden"
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

      <div className="scrollbar-premium p-6 md:p-8 lg:max-h-[90dvh] lg:overflow-y-auto">
        <p className="eyebrow">
          {category} · {timeframe}
        </p>
        <h3
          id="project-modal-title"
          className="mt-4 text-balance text-4xl font-extrabold leading-tight"
        >
          <ScrambleText duration={620} delay={80}>
            {title}
          </ScrambleText>
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
    </Modal>
  );
};

export default ProjectModal;
