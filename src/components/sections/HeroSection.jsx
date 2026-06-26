import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCloud,
  FiCpu,
  FiLayers,
  FiLinkedin,
  FiMapPin,
  FiShield,
} from "react-icons/fi";
import {
  SiDart,
  SiFirebase,
  SiFlutter,
  SiGithubactions,
  SiOpenai,
} from "react-icons/si";
import { useNavigate } from "react-router-dom";

import { heroContent, projects } from "../../constants";
import { fadeInUp, staggered } from "../../utils/animations";

const getCapabilityTags = (value) =>
  value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const techHighlights = [
  { label: "Flutter", Icon: SiFlutter },
  { label: "Dart", Icon: SiDart },
  { label: "Firebase", Icon: SiFirebase },
  { label: "Actions", Icon: SiGithubactions },
  { label: "OpenAI", Icon: SiOpenai },
];

const engineeringBoxes = [
  {
    label: "App Craft",
    value: "Clean, smooth, native-feeling",
    Icon: FiLayers,
  },
  {
    label: "Systems",
    value: "IoT flows, APIs, cloud logic",
    Icon: FiCpu,
  },
  {
    label: "Delivery",
    value: "Readable code, CI, store-ready",
    Icon: FiShield,
  },
  {
    label: "Scale",
    value: "Performance-minded architecture",
    Icon: FiCloud,
  },
];

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
  const capabilityTags = getCapabilityTags(availability);

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
              className="max-w-5xl"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-primary dark:text-brand-secondary">
                  {eyebrow}
                </p>
                <div className="hidden h-px w-10 bg-line-light dark:bg-line-dark sm:block" />
                <div className="flex flex-wrap gap-2">
                  {capabilityTags.map((item) => (
                    <span
                      key={item}
                      className="rounded-sm border border-line-light px-2.5 py-1 text-xs font-semibold text-ink-muted dark:border-line-dark dark:text-ink-inverse/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.h1
              id="hero-title"
              variants={fadeInUp(0.04, 18)}
              className="mt-10 max-w-6xl text-balance text-[clamp(2.6rem,8.5vw,7rem)] font-extrabold leading-[0.92]"
            >
              Products engineered for performance, reliability, and scale.
            </motion.h1>

            <motion.div
              variants={fadeInUp(0.1, 18)}
              className="mt-8 grid gap-6 lg:grid-cols-[0.85fr,1.15fr] lg:items-start"
            >
              <div className="border-l border-brand-primary pl-5 dark:border-brand-secondary">
                <p className="font-display text-2xl font-bold leading-tight md:text-3xl">
                  {name}
                </p>
                <p className="mt-3 max-w-xl text-pretty text-base leading-relaxed text-ink-muted dark:text-ink-inverse/80 md:text-lg">
                  {role}
                </p>
                <div className="mt-4 space-y-2 text-sm leading-relaxed text-ink-muted dark:text-ink-inverse/80 md:text-base">
                  {bio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                  {techHighlights.map(({ label, Icon }) => (
                    <div
                      key={label}
                      className="group flex min-h-20 flex-col items-center justify-center gap-2 rounded-md border border-line-light bg-surface-elevated p-3 text-center text-[11px] font-bold text-ink-strong transition hover:-translate-y-0.5 hover:border-brand-primary hover:text-brand-primary dark:border-white/15 dark:bg-surface-dark-elevated dark:text-ink-inverse dark:hover:border-brand-secondary dark:hover:text-brand-secondary"
                      title={label}
                    >
                      <Icon className="h-6 w-6 transition group-hover:scale-110" aria-hidden />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {engineeringBoxes.map(({ label, value, Icon }) => (
                    <div
                      key={label}
                      className="rounded-md border border-line-light bg-canvas-light p-4 dark:border-white/15 dark:bg-surface-dark-elevated"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line-light bg-surface-elevated text-brand-primary dark:border-white/15 dark:bg-surface-dark-muted dark:text-brand-secondary">
                          <Icon aria-hidden />
                        </span>
                        <div>
                          <p className="text-sm font-extrabold text-ink-strong dark:text-ink-inverse">
                            {label}
                          </p>
                          <p className="mt-1 text-xs font-semibold leading-relaxed text-ink-muted dark:text-ink-inverse/75">
                            {value}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp(0.18, 16)}
            className="mt-8 grid gap-6 xl:grid-cols-[1fr,1.1fr]"
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
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
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
                  className="rounded-md border border-line-light bg-surface-elevated p-4 dark:border-white/15 dark:bg-surface-dark-elevated"
                >
                  <p className="text-2xl font-extrabold text-ink-strong dark:text-ink-inverse">
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
