import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCheck,
  FiCopy,
  FiArrowRight,
  FiCloud,
  FiLinkedin,
  FiMapPin,
} from "react-icons/fi";
import {
  SiFirebase,
  SiFlutter,
  SiKotlin,
} from "react-icons/si";
import { useNavigate } from "react-router-dom";

import { contactChannels, heroContent, projects } from "../../constants";
import { fadeInUp, staggered } from "../../utils/animations";

const getCapabilityTags = (value) =>
  value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const techHighlights = [
  { label: "Flutter", Icon: SiFlutter },
  { label: "Kotlin", Icon: SiKotlin },
  { label: "AWS", Icon: FiCloud },
  { label: "Firebase", Icon: SiFirebase },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [emailCopied, setEmailCopied] = useState(false);
  const {
    eyebrow,
    role,
    bio = [],
    workflow = [],
    availability,
    location,
    linkedin,
    secondaryAction,
  } = heroContent;

  const featuredProjects = projects.slice(0, 3);
  const capabilityTags = getCapabilityTags(availability);
  const visibleCapabilityTags = capabilityTags.slice(0, 3);
  const hiddenCapabilityCount = Math.max(0, capabilityTags.length - visibleCapabilityTags.length);
  const visibleTechHighlights = techHighlights.slice(0, 4);
  const primaryBio = bio[0];
  const visibleFeaturedProjects = featuredProjects.slice(0, 2);
  const emailAddress =
    contactChannels.find((channel) => channel.type === "email")?.value ||
    "priyanshubej2001@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 1400);
    } catch {
      setEmailCopied(false);
    }
  };

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
          className="flex flex-col justify-between px-5 py-12 sm:px-8 lg:px-12 lg:py-16 xl:px-14"
        >
          <div>
            <motion.div
              variants={fadeInUp(0, 14)}
              className="max-w-4xl"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-primary dark:text-brand-secondary">
                  {eyebrow}
                </p>
                <div className="hidden h-px w-10 bg-line-light dark:bg-line-dark sm:block" />
                <div className="flex flex-wrap gap-2">
                  {visibleCapabilityTags.map((item) => (
                    <span
                      key={item}
                      className="rounded-sm border border-line-light px-2.5 py-1 text-xs font-semibold text-ink-muted dark:border-line-dark dark:text-ink-inverse/80"
                    >
                      {item}
                    </span>
                  ))}
                  {hiddenCapabilityCount > 0 && (
                    <span className="rounded-sm border border-line-light px-2.5 py-1 text-xs font-semibold text-ink-muted dark:border-line-dark dark:text-ink-inverse/80">
                      +{hiddenCapabilityCount}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>

            <motion.h1
              id="hero-title"
              variants={fadeInUp(0.04, 18)}
              className="mt-11 max-w-5xl text-balance text-[clamp(2.6rem,8.5vw,7rem)] font-extrabold leading-[0.92] lg:mt-12"
            >
              Products engineered for performance, reliability, and scale.
            </motion.h1>

            <motion.div
              variants={fadeInUp(0.1, 18)}
              className="mt-9 grid gap-7 lg:grid-cols-[0.92fr,1.08fr] lg:items-start lg:gap-10"
            >
              <div className="border-l border-brand-primary pl-6 pr-1 dark:border-brand-secondary lg:pr-3">
                <p className="max-w-2xl text-pretty text-base leading-relaxed text-ink-muted dark:text-ink-inverse/80 md:text-lg">
                  {role}
                </p>
                {primaryBio && (
                  <div className="mt-5 max-w-xl text-sm leading-relaxed text-ink-muted dark:text-ink-inverse/80 md:text-base">
                    <p>{primaryBio}</p>
                  </div>
                )}
              </div>

              <div className="lg:pl-1">
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
                  {visibleTechHighlights.map(({ label, Icon }) => (
                    <div
                      key={label}
                      className="group flex min-h-[5.4rem] flex-col items-center justify-center gap-2 rounded-md border border-line-light bg-surface-elevated p-3 text-center text-[11px] font-bold text-ink-strong transition hover:-translate-y-0.5 hover:border-brand-primary hover:text-brand-primary dark:border-white/15 dark:bg-surface-dark-elevated dark:text-ink-inverse dark:hover:border-brand-secondary dark:hover:text-brand-secondary"
                      title={label}
                    >
                      <Icon className="h-6 w-6 transition group-hover:scale-110" aria-hidden />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp(0.18, 16)}
            className="mt-10"
          >
            <div className="grid gap-3.5 lg:grid-cols-[auto,1fr] lg:items-center">
              <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => navigate(secondaryAction.href)}
                  className="button-primary"
                >
                  {secondaryAction.label}
                  <FiArrowRight />
                </button>
              </div>

              <p className="rounded-md border border-line-light bg-canvas-light px-5 py-3.5 text-sm font-semibold leading-relaxed text-ink-muted dark:border-white/15 dark:bg-surface-dark-elevated dark:text-ink-inverse/80">
                From architecture to release, I turn complex workflows into dependable products teams can trust.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.aside
          variants={fadeInUp(0.22, 18)}
          initial="hidden"
          animate="show"
          className="border-t border-line-light bg-surface-elevated p-5 dark:border-line-dark dark:bg-surface-dark sm:p-6 lg:border-l lg:border-t-0"
        >
          <div className="sticky top-7 space-y-7">
            <div>
              <p className="eyebrow">Current Signal</p>
              <p className="mt-5 text-lg font-bold text-ink-strong dark:text-ink-inverse">
                {workflow.join(" / ")}
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink-muted dark:text-ink-inverse/90">
                <FiMapPin />
                {location}
              </p>
            </div>

            <div className="space-y-3.5">
              {visibleFeaturedProjects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => navigate("/projects")}
                  className="group grid w-full grid-cols-[3.75rem,1fr] gap-3.5 rounded-md border border-line-light bg-canvas-light p-2.5 text-left transition hover:border-brand-primary dark:border-white/20 dark:bg-surface-dark-elevated dark:hover:border-brand-secondary dark:hover:bg-surface-dark-muted"
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
              <button
                type="button"
                onClick={() => navigate("/projects")}
                className="w-full rounded-md border border-dashed border-line-light px-3 py-2 text-left text-xs font-semibold text-ink-muted transition hover:border-brand-primary hover:text-brand-primary dark:border-white/20 dark:text-ink-inverse/80 dark:hover:border-brand-secondary dark:hover:text-brand-secondary"
              >
                See full engineered work library
              </button>
            </div>

            {linkedin && (
              <div className="pt-1">
                <div className="relative mb-3 h-px bg-line-light/60 dark:bg-line-dark/70">
                  <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/70 dark:bg-brand-secondary/70" />
                </div>

                <div className="overflow-hidden border border-line-light bg-surface-elevated dark:border-line-dark dark:bg-surface-dark">
                  <p className="border-b border-line-light px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-primary dark:border-line-dark dark:text-brand-secondary">
                    Connect
                  </p>

                  <div className="grid divide-y divide-line-light dark:divide-line-dark">
                    <a
                      href={linkedin.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex w-full items-center gap-3 px-3 py-3 text-left text-sm font-semibold text-ink-muted transition hover:bg-surface-muted hover:text-brand-primary dark:text-ink-inverse dark:hover:bg-surface-dark-muted dark:hover:text-brand-secondary"
                    >
                      <span className="icon-button h-8 w-8">
                        <FiLinkedin />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold">LinkedIn</span>
                        <span className="block text-xs font-medium opacity-80">{linkedin.handle}</span>
                      </span>
                    </a>

                    <button
                      type="button"
                      onClick={copyEmail}
                      className="group inline-flex w-full items-center gap-3 px-3 py-3 text-left text-sm font-semibold text-ink-muted transition hover:bg-surface-muted hover:text-brand-primary dark:text-ink-inverse/85 dark:hover:bg-surface-dark-muted dark:hover:text-brand-secondary"
                      aria-label="Copy email address"
                    >
                      <span className="icon-button h-8 w-8">
                        {emailCopied ? <FiCheck /> : <FiCopy />}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold">
                          {emailCopied ? "Email copied" : "Copy email"}
                        </span>
                        <span className="block text-xs font-medium opacity-80 break-all sm:break-words">
                          {emailAddress}
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default HeroSection;
