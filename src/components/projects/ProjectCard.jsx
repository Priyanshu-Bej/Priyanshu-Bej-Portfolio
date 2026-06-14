import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import { fadeInUp } from "../../utils/animations";

const getPreviewImageClass = (project) =>
  project.preview === "app-icon" || project.id === "locky"
    ? "object-contain p-10"
    : "object-cover";

const DevicePreview = ({ project }) => (
  <div className="relative min-h-[380px] overflow-hidden bg-surface-muted p-6 dark:bg-surface-dark-muted md:min-h-[500px]">
    <div className="absolute inset-x-0 top-0 h-px bg-line-light dark:bg-line-dark" />
    <div className="absolute left-0 top-0 h-24 w-px bg-brand-primary dark:bg-brand-secondary" />
    <motion.div
      className="mx-auto flex h-full max-w-[285px] items-center justify-center"
      whileHover={{ y: -8, rotate: -1 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative w-full rounded-[2.2rem] border-[11px] border-ink-strong bg-ink-strong p-1 shadow-lift dark:border-black">
        <div className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/18" />
        <div className="aspect-[9/16] overflow-hidden rounded-[1.45rem] bg-white">
          <img
            src={project.image}
            alt={`${project.title} app preview`}
            loading="lazy"
            className={`h-full w-full ${getPreviewImageClass(project)}`}
          />
        </div>
      </div>
    </motion.div>
  </div>
);

const ProjectCard = ({ project, index, onOpen }) => {
  const {
    title,
    category,
    description,
    tags,
    links,
    timeframe,
    impact = [],
    tech = [],
    storeLinks = [],
  } = project;
  const reverse = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      variants={fadeInUp(0.04 * index, 18)}
      className="border-t border-line-light dark:border-line-dark"
    >
      <div className="grid lg:grid-cols-12">
        <div className={`${reverse ? "lg:order-2 lg:col-span-5" : "lg:col-span-5"}`}>
          <DevicePreview project={project} />
        </div>

        <div
          className={`flex min-h-[420px] flex-col justify-between px-5 py-8 sm:px-8 lg:col-span-7 lg:px-10 lg:py-12 ${
            reverse ? "lg:order-1" : ""
          }`}
        >
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] meta-text">
                Case {number}
              </p>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] meta-text">
                {timeframe}
              </p>
            </div>

            <p className="mt-8 text-sm font-semibold text-brand-primary dark:text-brand-secondary">
              {category}
            </p>
            <h3 className="mt-3 text-balance text-[clamp(2.25rem,5vw,5rem)] font-extrabold leading-[0.95]">
              {title}
            </h3>
            <p className="mt-6 max-w-2xl text-pretty text-lg text-ink-muted dark:text-ink-inverse/80">
              {description}
            </p>

            {impact.length > 0 && (
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {impact.slice(0, 3).map((item) => (
                  <p
                    key={item}
                    className="border-l border-line-light pl-4 text-sm text-ink-base dark:border-line-dark dark:text-ink-inverse/90"
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className="mt-10">
            <div className="flex flex-wrap gap-2">
              {[...tags, ...tech].slice(0, 8).map((tag) => (
                <span
                  key={tag}
                  className="chip"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onOpen(project)}
                className="button-primary px-4 py-2.5"
              >
                Read case study
                <FiArrowUpRight />
              </button>
              {storeLinks.length === 0 && links.live && (
                <a
                  href={links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary px-4 py-2.5"
                >
                  Open project
                </a>
              )}
              {storeLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary px-4 py-2.5"
                >
                  {link.label}
                  <FiArrowUpRight />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
