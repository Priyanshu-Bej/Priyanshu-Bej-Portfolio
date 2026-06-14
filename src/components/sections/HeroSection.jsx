import { motion } from "framer-motion";
import { FiArrowRight, FiLinkedin, FiMapPin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { heroContent, projects, resumeResource } from "../../constants";
import { fadeInUp, staggered } from "../../utils/animations";

const HeroSection = () => {
  const navigate = useNavigate();
  const {
    eyebrow,
    name,
    role,
    bio = [],
    toolbox = [],
    workflow = [],
    availability,
    location,
    stats,
    linkedin,
    primaryAction,
    secondaryAction,
  } = heroContent;

  const featuredProjects = projects.slice(0, 3);

  return (
    <section
      id="hero"
      className="relative min-h-screen border-b border-line-light dark:border-line-dark"
      aria-labelledby="hero-title"
    >
      <div className="grid min-h-screen lg:grid-cols-[minmax(0,1fr),17rem]">
        <motion.div
          variants={staggered(0.08, 0.08)}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-between px-5 py-12 sm:px-8 lg:px-12 lg:py-14"
        >
          <div>
            <motion.div
              variants={fadeInUp(0, 14)}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="eyebrow">{eyebrow}</span>
              <span className="chip">
                {availability}
              </span>
            </motion.div>

            <motion.h1
              id="hero-title"
              variants={fadeInUp(0.04, 18)}
              className="mt-10 max-w-6xl text-balance text-[clamp(3.6rem,12vw,9.5rem)] font-extrabold leading-[0.88]"
            >
              Mobile products with release discipline.
            </motion.h1>

            <motion.div
              variants={fadeInUp(0.1, 18)}
              className="mt-10 grid gap-8 lg:grid-cols-[0.9fr,1.1fr]"
            >
              <div>
                <p className="font-display text-2xl font-bold leading-tight md:text-3xl">
                  {name}
                </p>
                <p className="mt-4 text-pretty text-lg text-ink-muted dark:text-ink-inverse/80">
                  {role}
                </p>
              </div>

              <div className="space-y-3 text-base text-ink-muted dark:text-ink-inverse/80 md:text-lg">
                {bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp(0.18, 16)}
            className="mt-12 grid gap-8 xl:grid-cols-[1fr,1.1fr]"
          >
            <div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => navigate(primaryAction.href)}
                  className="button-primary"
                >
                  {primaryAction.label}
                  <FiArrowRight />
                </button>
                <button
                  type="button"
                  onClick={() => navigate(secondaryAction.href)}
                  className="button-secondary"
                >
                  {secondaryAction.label}
                </button>
                <a
                  href={resumeResource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary"
                >
                  Resume
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {toolbox.map((item) => (
                  <span
                    key={item}
                    className="chip chip-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-t border-line-light pt-4 dark:border-line-dark"
                >
                  <p className="text-3xl font-extrabold text-ink-strong dark:text-ink-inverse">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-ink-muted dark:text-ink-inverse/80">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.aside
          variants={fadeInUp(0.22, 18)}
          initial="hidden"
          animate="show"
          className="border-t border-line-light bg-surface-elevated p-5 dark:border-line-dark dark:bg-surface-dark lg:border-l lg:border-t-0"
        >
          <div className="sticky top-6 space-y-6">
            <div>
              <p className="eyebrow">Current Signal</p>
              <p className="mt-4 text-lg font-bold text-ink-strong dark:text-ink-inverse">
                {workflow.join(" / ")}
              </p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-ink-muted dark:text-ink-inverse/90">
                <FiMapPin />
                {location}
              </p>
            </div>

            <div className="space-y-3">
              {featuredProjects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => navigate("/projects")}
                  className="group grid w-full grid-cols-[3.75rem,1fr] gap-3 rounded-md border border-line-light bg-canvas-light p-2 text-left transition hover:border-brand-primary dark:border-white/20 dark:bg-surface-dark-elevated dark:hover:border-brand-secondary dark:hover:bg-surface-dark-muted"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="aspect-square rounded object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <span>
                    <span className="block text-sm font-bold text-ink-strong dark:text-ink-inverse">
                      {project.title}
                    </span>
                    <span className="mt-1 block text-xs font-semibold text-ink-muted dark:text-ink-inverse/80">
                      {project.category}
                    </span>
                  </span>
                </button>
              ))}
            </div>

            {linkedin && (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-ink-muted transition hover:text-brand-primary dark:text-ink-inverse dark:hover:text-brand-secondary"
              >
                <span className="icon-button">
                  <FiLinkedin />
                </span>
                <span>{linkedin.handle}</span>
              </a>
            )}
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default HeroSection;
