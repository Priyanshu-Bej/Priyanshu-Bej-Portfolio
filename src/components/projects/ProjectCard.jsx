import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

import { fadeInUp } from "../../utils/animations";

const ProjectCard = ({
  project,
  index,
  onOpen,
  onHoverStart,
  onHoverEnd,
}) => {
  const { title, category, description, image, tags, links, timeframe } =
    project;

  return (
    <motion.article
      variants={fadeInUp(0.06 * index)}
      whileHover={{ scale: 1.02, y: -4 }}
      className="group relative flex h-full w-[min(340px,80vw)] flex-shrink-0 flex-col overflow-hidden rounded-[2.25rem] border border-white/25 bg-white/14 shadow-card-light backdrop-blur-2xl transition duration-500 hover:shadow-soft-xl dark:border-white/10 dark:bg-white/8 dark:shadow-card-dark"
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      onFocus={onHoverStart}
      onBlur={onHoverEnd}
    >
      <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <span className="absolute inset-0 bg-gradient-to-br from-brand-primary/18 via-transparent to-brand-secondary-soft/18" />
      </span>
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="group flex flex-1 flex-col text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
      >
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={`${title} project cover`}
            loading="lazy"
            className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.05]"
          />
          <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-brand-primary/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white shadow-soft-xl backdrop-blur">
            {timeframe}
          </span>
          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70" />
        </div>
        <div className="flex flex-1 flex-col gap-3 px-6 py-7">
          <p className="text-[11px] uppercase tracking-[0.34em] text-neutral-400 dark:text-neutral-500">
            {category}
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 transition group-hover:text-brand-primary dark:text-neutral-50">
            {title}
          </h3>
          <p className="line-clamp-3 text-sm text-neutral-600 dark:text-neutral-300">
            {description}
          </p>
          <div className="mt-auto flex flex-wrap gap-2 text-xs">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-brand-primary/30 bg-brand-primary/12 px-2.5 py-1 text-brand-primary shadow-inner dark:border-brand-primary/45 dark:bg-brand-primary/25 dark:text-neutral-100"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </button>

      <div className="flex items-center justify-between border-t border-white/15 px-6 py-4 text-sm text-neutral-500 dark:border-white/10">
        {links.live ? (
          <a
            href={links.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-brand-primary transition hover:text-brand-primary-soft"
          >
            View live <FiExternalLink />
          </a>
        ) : (
          <span className="text-neutral-400">Private launch</span>
        )}
        <span className="text-[10px] uppercase tracking-[0.45em] text-neutral-400 dark:text-neutral-500">
          Details
        </span>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
