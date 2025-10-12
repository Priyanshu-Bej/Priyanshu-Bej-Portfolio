import { useCallback } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FiLinkedin } from "react-icons/fi";

import { heroContent, resumeResource } from "../../constants";
import { fadeInUp, staggered } from "../../utils/animations";
import { smoothScrollTo } from "../../utils/smoothScroll";
import FloatingParticles from "../ui/FloatingParticles";

const HeroSection = () => {
  const {
    eyebrow,
    title,
    highlight,
    bio = [],
    toolbox = [],
    workflow = [],
    passion = "",
    stats,
    linkedin = null,
    heroLogos,
    primaryAction,
    secondaryAction,
    portrait,
  } = heroContent;

  const bioIntro = bio.slice(0, 2).filter(Boolean);
  const toolboxLine = bio[2];
  const workflowLine = bio[3];
  const loveLine = passion?.trim();
  const hasToolboxContent = (toolboxLine && toolboxLine.trim()) || toolbox.length > 0;
  const hasWorkflowContent = (workflowLine && workflowLine.trim()) || workflow.length > 0 || loveLine;
  const showMetaCard = hasToolboxContent || hasWorkflowContent;

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const tiltTransform = useMotionTemplate`
    perspective(900px)
    rotateX(${tiltY}deg)
    rotateY(${tiltX}deg)
  `;

  const handleMouseMove = useCallback(
    (event) => {
      const bounds = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 18;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -18;
      tiltX.set(x);
      tiltY.set(y);
    },
    [tiltX, tiltY]
  );

  const handleMouseLeave = useCallback(() => {
    tiltX.set(0);
    tiltY.set(0);
  }, [tiltX, tiltY]);

  return (
    <section
      id="hero"
      className="section-wrapper relative overflow-hidden pb-16 pt-28 sm:pt-32"
      aria-labelledby="hero-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-gradient opacity-90 dark:bg-hero-dark" />
      <FloatingParticles className="opacity-75" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 md:grid-cols-[1.1fr,0.9fr] md:px-6">
        <motion.div
          variants={staggered(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.45 }}
          className="relative flex flex-col gap-8"
        >
          <motion.span
            variants={fadeInUp(0.1)}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.48em] text-neutral-900 shadow-card-light backdrop-blur-md dark:border-white/10 dark:text-neutral-100"
          >
            {eyebrow}
          </motion.span>

          <motion.div variants={fadeInUp(0.16)} className="relative max-w-xl">
            <h1
              id="hero-title"
              className="font-display text-[clamp(2.7rem,5vw,4.35rem)] font-semibold leading-[1.05] text-neutral-900 drop-shadow-[0_18px_45px_rgba(0,0,0,0.12)] dark:text-white"
            >
              {title.replace(
                highlight,
                `__${highlight}__`
              )
                .split("__")
                .map((chunk, index) =>
                  index % 2 === 1 ? (
                    <motion.span
                      key={chunk}
                      className="relative inline-block text-transparent"
                      animate={{
                        textShadow: [
                          "0 0 24px rgba(0, 174, 239, 0.35)",
                          "0 0 46px rgba(147, 51, 234, 0.35)",
                          "0 0 24px rgba(0, 174, 239, 0.35)",
                        ],
                      }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 6,
                      }}
                    >
                      <span className="bg-gradient-to-r from-brand-primary via-brand-secondary-soft to-brand-accent bg-clip-text text-transparent">
                        {chunk}
                      </span>
                    </motion.span>
                  ) : (
                    <span key={chunk}>{chunk}</span>
                  )
                )}
            </h1>
            <div className="absolute -left-16 top-6 hidden h-24 w-24 rounded-full bg-brand-primary/35 blur-[85px] sm:block" />
          </motion.div>

          {bioIntro.length > 0 && (
            <motion.div
              variants={fadeInUp(0.24)}
              className="space-y-3 text-base leading-relaxed text-neutral-600 dark:text-neutral-200 md:text-lg"
            >
              {bioIntro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </motion.div>
          )}

          {showMetaCard && (
            <motion.div
              variants={fadeInUp(0.3)}
              className="grid gap-4 rounded-3xl border border-white/25 bg-white/12 p-5 shadow-card-light backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:shadow-card-dark"
            >
              {hasToolboxContent && (
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-400">
                    🛠 My Toolbox
                  </p>
                  {toolboxLine && (
                    <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                      {toolboxLine}
                    </p>
                  )}
                  {toolbox.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {toolbox.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-brand-primary shadow-inner backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-neutral-100"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
              {hasWorkflowContent && (
                <div className="grid gap-3 rounded-2xl border border-white/15 bg-white/8 p-4 shadow-inner backdrop-blur dark:border-white/10 dark:bg-white/5">
                  <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-400">
                    🔧 How I Work
                  </p>
                  {workflowLine && (
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {workflowLine}
                    </p>
                  )}
                  {workflow.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {workflow.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-brand-secondary-soft/15 px-3 py-1 text-xs font-semibold text-brand-primary dark:bg-brand-secondary-soft/25 dark:text-neutral-100"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                  {loveLine && (
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                      {loveLine}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          )}

          <motion.div
            variants={fadeInUp(0.32)}
            className="relative flex flex-col gap-3 sm:flex-row"
          >
            <button
              type="button"
              onClick={() => smoothScrollTo(primaryAction.href)}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brand-primary px-7 py-3 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-brand-primary-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
            >
              <span className="relative z-10">{primaryAction.label}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-brand-secondary-soft/45 to-brand-accent/40 opacity-0 blur-xl transition group-hover:opacity-100" />
            </button>
            <button
              type="button"
              onClick={() => smoothScrollTo(secondaryAction.href)}
              className="group inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3 text-sm font-semibold text-brand-primary backdrop-blur-lg transition duration-300 hover:-translate-y-0.5 hover:border-brand-primary/60 hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary dark:text-white"
            >
              {secondaryAction.label}
            </button>
          </motion.div>

          {linkedin && (
            <motion.a
              variants={fadeInUp(0.36)}
              href={linkedin.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-3 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-xs uppercase tracking-[0.35em] text-neutral-600 shadow-card-light backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-primary/50 hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary dark:border-white/10 dark:bg-white/10 dark:text-neutral-200"
            >
              <FiLinkedin className="text-brand-primary" />
              <span className="flex flex-col text-left tracking-normal">
                <span className="text-[10px] uppercase text-neutral-500 dark:text-neutral-400">
                  {linkedin.label}
                </span>
                <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-100">
                  {linkedin.handle}
                </span>
              </span>
            </motion.a>
          )}

          <motion.dl
            variants={staggered(0.05, 0.35)}
            className="grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {stats.map(({ value, label }) => (
              <motion.div
                key={label}
                variants={fadeInUp(0.18)}
                className="relative overflow-hidden rounded-2xl border border-white/25 bg-white/10 p-4 text-left shadow-card-light backdrop-blur-xl transition duration-500 hover:-translate-y-1.5 hover:shadow-soft-xl dark:border-white/5 dark:bg-white/5 dark:shadow-card-dark"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-brand-primary/15 opacity-0 transition-opacity duration-500 hover:opacity-100" />
                <dt className="text-[10px] uppercase tracking-[0.45em] text-neutral-500 dark:text-neutral-400">
                  {label}
                </dt>
                <dd className="mt-3 text-2xl font-semibold text-neutral-900 dark:text-white">
                  {value}
                </dd>
              </motion.div>
            ))}
          </motion.dl>

          <motion.div
            variants={fadeInUp(0.4)}
            className="flex flex-wrap items-center gap-4"
          >
            {heroLogos.map((logo) => (
              <span
                key={logo.name}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-neutral-600 shadow-card-light backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-neutral-200"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  loading="lazy"
                  className="h-6 w-6 rounded-full object-contain"
                />
                {logo.name}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center"
        >
          <motion.div
            style={{ transform: tiltTransform }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative w-full max-w-[420px] overflow-hidden rounded-[2.75rem] border border-white/25 bg-white/10 p-6 shadow-glow backdrop-blur-2xl transition duration-500 dark:border-white/10 dark:bg-white/5"
          >
            <span className="absolute inset-0 rounded-[2.75rem] border border-white/20 opacity-70" />
            <span className="absolute inset-12 rounded-[2rem] bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-accent/20 opacity-0 transition duration-700 group-hover:opacity-100" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/25">
              <img
                src={portrait}
                alt="Portrait of Priyanshu Pritam Bej"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative mt-6 rounded-2xl border border-white/25 bg-white/20 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                Mobile-first Specialist
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-300">
                Flutter · Kotlin · Realtime Ops
              </p>
              <a
                href={resumeResource.href}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-brand-primary transition hover:text-brand-primary-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary dark:text-white"
              >
                Tiny resume ↓
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
