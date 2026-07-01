import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  FiCheck,
  FiCopy,
  FiArrowRight,
  FiLinkedin,
  FiMapPin,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { contactChannels, heroContent, projects, skillGroups, skillIcons } from "../../constants";
import { fadeInUp, staggered } from "../../utils/animations";

const getCapabilityTags = (value) =>
  value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const HeroSection = () => {
  const navigate = useNavigate();
  const [emailCopied, setEmailCopied] = useState(false);
  const sectionRef = useRef(null);
  const marqueeShellRef = useRef(null);
  const marqueeTrackRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -28]);
  const asideY = useTransform(scrollYProgress, [0, 1], [0, -44]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -18]);
  const accentOpacity = useTransform(scrollYProgress, [0, 0.8], [0.9, 0.36]);
  const {
    eyebrow,
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
  const allSkills = [
    ...new Set([
      ...(heroContent.toolbox || []),
      ...skillGroups.flatMap((group) => group.items || []),
    ]),
  ];
  const iconBySkill = new Map(
    (skillIcons || []).map(({ name, icon }) => [name.toLowerCase(), icon]),
  );
  const marqueeSkills = allSkills.map((skill) => ({
    label: skill,
    Icon: iconBySkill.get(skill.toLowerCase()) || null,
  })).filter(({ Icon }) => Boolean(Icon));
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

  useEffect(() => {
    if (typeof window === "undefined") return;

    const shell = marqueeShellRef.current;
    const track = marqueeTrackRef.current;
    if (!shell || !track || typeof track.animate !== "function") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReducedMotion.matches) return;

    const animation = track.animate(
      [
        { transform: "translate3d(0, 0, 0)" },
        { transform: "translate3d(-50%, 0, 0)" },
      ],
      {
        duration: 20000,
        iterations: Infinity,
        easing: "linear",
      },
    );

    const slowDown = () => {
      animation.playbackRate = 0.55;
    };

    const speedUp = () => {
      animation.playbackRate = 1;
    };

    shell.addEventListener("mouseenter", slowDown);
    shell.addEventListener("mouseleave", speedUp);
    shell.addEventListener("focusin", slowDown);
    shell.addEventListener("focusout", speedUp);

    return () => {
      shell.removeEventListener("mouseenter", slowDown);
      shell.removeEventListener("mouseleave", speedUp);
      shell.removeEventListener("focusin", slowDown);
      shell.removeEventListener("focusout", speedUp);
      animation.cancel();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="section-grid-lines relative min-h-screen overflow-hidden border-b border-line-light bg-canvas-light dark:border-line-dark dark:bg-canvas-dark"
      aria-labelledby="hero-title"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-x-10 top-0 h-[135%] bg-[linear-gradient(115deg,rgba(37,99,235,0.16),transparent_36%),linear-gradient(245deg,rgba(249,115,22,0.10),transparent_42%)] dark:bg-[linear-gradient(115deg,rgba(20,184,166,0.18),transparent_36%),linear-gradient(245deg,rgba(37,99,235,0.12),transparent_42%)]"
        style={{ opacity: shouldReduceMotion ? 0.72 : accentOpacity, y: shouldReduceMotion ? 0 : backgroundY }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-x-8 -top-16 h-[145%] opacity-70 [background-image:linear-gradient(to_right,rgba(37,99,235,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,115,22,0.055)_1px,transparent_1px)] [background-size:96px_96px] dark:opacity-60 dark:[background-image:linear-gradient(to_right,rgba(20,184,166,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.06)_1px,transparent_1px)]"
        style={{ y: shouldReduceMotion ? 0 : gridY }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-canvas-light via-canvas-light/78 to-transparent dark:from-canvas-dark dark:via-canvas-dark/82"
      />

      <div className="relative grid min-h-screen lg:grid-cols-[minmax(0,1fr),17rem]">
        <motion.div
          variants={staggered(0.08, 0.08)}
          initial="hidden"
          animate="show"
          className="flex min-w-0 flex-col gap-4 px-4 py-10 sm:px-8 lg:gap-6 lg:px-12 lg:py-16 xl:px-14"
          style={{ y: shouldReduceMotion ? 0 : contentY }}
        >
          <div className="min-w-0">
            <motion.div
              variants={fadeInUp(0, 14)}
              className="w-full max-w-4xl"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-primary dark:text-brand-secondary">
                  {eyebrow}
                </p>
                <div className="hidden h-px w-10 bg-line-light dark:bg-line-dark md:block" />
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
              className="mt-9 max-w-5xl text-balance text-[clamp(1.95rem,8.2vw,7rem)] font-extrabold leading-[0.95] sm:mt-10 lg:mt-12"
              style={{ y: shouldReduceMotion ? 0 : titleY }}
            >
              Products engineered for performance, reliability, and scale.
            </motion.h1>

            <motion.div
              variants={fadeInUp(0.1, 18)}
              className={`mt-9 ${
                primaryBio
                  ? "grid min-w-0 gap-7 lg:grid-cols-[0.92fr,1.08fr] lg:items-start lg:gap-10"
                  : ""
              }`}
            >
              {primaryBio && (
                <div className="border-l border-brand-primary pl-6 pr-1 dark:border-brand-secondary lg:pr-3">
                  <div className="max-w-xl text-sm leading-relaxed text-ink-muted dark:text-ink-inverse/80 md:text-base">
                    <p>{primaryBio}</p>
                  </div>
                </div>
              )}

              <div className={`min-w-0 ${primaryBio ? "lg:pl-1" : ""}`}>
                <div
                  ref={marqueeShellRef}
                  className="skills-marquee relative w-full overflow-hidden rounded-md border border-line-light bg-surface-elevated px-2 py-2.5 dark:border-white/15 dark:bg-surface-dark-elevated"
                >
                  <div ref={marqueeTrackRef} className="skills-marquee-track">
                    {[...marqueeSkills, ...marqueeSkills].map(({ label, Icon }, idx) => (
                      <span
                        key={`${label}-${idx}`}
                        className="group inline-flex min-h-10 shrink-0 items-center gap-2 rounded-md border border-line-light bg-white px-2.5 py-1.5 text-[11px] font-extrabold whitespace-nowrap text-ink-strong shadow-subtle transition hover:border-brand-primary hover:text-brand-primary sm:min-h-11 sm:gap-2.5 sm:px-3 sm:py-2 sm:text-xs dark:border-white/10 dark:bg-surface-dark-elevated dark:text-ink-inverse dark:shadow-dark-subtle dark:hover:border-brand-secondary dark:hover:text-brand-secondary"
                        title={label}
                        aria-label={label}
                      >
                        <Icon className="h-4 w-4 shrink-0 text-brand-primary transition group-hover:scale-110 dark:text-brand-secondary" aria-hidden />
                        <span>{label}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp(0.18, 16)}
              className="mt-5 sm:mt-6"
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

                <p className="rounded-md border border-line-light bg-canvas-light px-4 py-3 text-sm font-semibold leading-relaxed text-ink-muted sm:px-5 sm:py-3.5 dark:border-white/15 dark:bg-surface-dark-elevated dark:text-ink-inverse/80">
                  I build end-to-end products across mobile, IoT, AI, and hybrid cloud to deliver reliable systems at scale.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.aside
          variants={fadeInUp(0.22, 18)}
          initial="hidden"
          animate="show"
          className="border-t border-line-light bg-surface-elevated p-5 dark:border-line-dark dark:bg-surface-dark sm:p-6 lg:border-l lg:border-t-0"
          style={{ y: shouldReduceMotion ? 0 : asideY }}
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
                  className="group grid w-full grid-cols-[3.25rem,minmax(0,1fr)] gap-3 rounded-md border border-line-light bg-canvas-light p-2.5 text-left transition hover:border-brand-primary sm:grid-cols-[3.75rem,1fr] sm:gap-3.5 dark:border-white/20 dark:bg-surface-dark-elevated dark:hover:border-brand-secondary dark:hover:bg-surface-dark-muted"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="aspect-square rounded object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-bold text-ink-strong dark:text-ink-inverse">
                      {project.title}
                    </span>
                    <span className="mt-1 block truncate text-xs font-semibold text-ink-muted dark:text-ink-inverse/80">
                      {project.category}
                    </span>
                  </span>
                </button>
              ))}
              <button
                type="button"
                onClick={() => navigate("/#projects")}
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
