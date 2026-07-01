import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { aboutContent, educationTimeline, experienceTimeline } from "../../constants";
import { fadeInUp, staggered } from "../../utils/animations";

const TimelineIcon = ({ icon: Icon }) =>
  Icon ? (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-line-light bg-surface-elevated text-lg text-brand-primary dark:border-line-dark dark:bg-surface-dark dark:text-brand-secondary">
      <Icon aria-hidden />
    </span>
  ) : null;

const ExperienceRoleCard = ({ role }) => (
  <div className="rounded-md border border-line-light bg-canvas-light p-5 dark:border-line-dark dark:bg-canvas-dark">
    <div className="flex flex-wrap items-center justify-between gap-3">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary dark:text-brand-secondary">
        {role.label}
      </p>
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] meta-text">
        {role.period}
      </p>
    </div>
    <h4 className="mt-4 text-2xl font-extrabold leading-tight text-ink-strong dark:text-ink-inverse">
      {role.title}
    </h4>
    <div className="mt-4 grid gap-2">
      {role.bullets?.map((bullet) => (
        <p
          key={bullet}
          className="border-l border-line-light pl-4 text-sm leading-relaxed text-ink-muted dark:border-line-dark dark:text-ink-inverse/80"
        >
          {bullet}
        </p>
      ))}
    </div>
  </div>
);

const ExperienceRow = ({ item, index }) => (
  <motion.article
    variants={fadeInUp(0.04 * index, 14)}
    className="grid gap-6 border-t border-line-light px-5 py-8 dark:border-line-dark sm:px-8 lg:grid-cols-[0.7fr,1fr,1.35fr] lg:px-12 xl:grid-cols-[0.6fr,0.9fr,1.7fr]"
  >
    <div className="flex items-start justify-between gap-4 lg:block">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] meta-text">
        {item.period}
      </p>
      <div className="lg:mt-6">
        <TimelineIcon icon={item.icon} />
      </div>
    </div>

    <div>
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary dark:text-brand-secondary">
        {String(index + 1).padStart(2, "0")} / Experience
      </p>
      <h3 className="mt-4 text-balance text-3xl font-extrabold leading-none md:text-4xl">
        {item.roles ? item.company : item.title}
      </h3>
      <p className="mt-4 text-base font-semibold text-ink-muted dark:text-ink-inverse/80">
        {item.roles ? item.title : item.company}
      </p>
      <p className="mt-2 text-sm meta-text">{item.location}</p>
      {item.summary && (
        <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted dark:text-ink-inverse/80">
          {item.summary}
        </p>
      )}
    </div>

    <div className="grid content-start gap-3">
      {item.roles
        ? item.roles.map((role) => <ExperienceRoleCard key={role.title} role={role} />)
        : item.bullets?.map((bullet) => (
            <p
              key={bullet}
              className="border-l border-line-light pl-4 text-sm leading-relaxed text-ink-muted dark:border-line-dark dark:text-ink-inverse/80"
            >
              {bullet}
            </p>
          ))}
    </div>
  </motion.article>
);

const EducationItem = ({ item, index }) => (
  <motion.article
    variants={fadeInUp(0.04 * index, 12)}
    className="grid gap-4 border-t border-line-light py-5 dark:border-line-dark md:grid-cols-[3rem,1fr]"
  >
    <TimelineIcon icon={item.icon} />
    <div>
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] meta-text">
        {item.period}
      </p>
      <h3 className="mt-3 text-lg font-extrabold leading-tight">{item.program}</h3>
      <p className="mt-2 text-sm text-ink-muted dark:text-ink-inverse/80">
        {item.school}
      </p>
    </div>
  </motion.article>
);

const ExperienceModelCard = () => {
  const journey = [
    { period: "2024 - Now", label: "IRISS", detail: "Enterprise mobile, IoT, AI." },
    { period: "2023 - 2024", label: "Product teams", detail: "Shipped at Bengaluru pace." },
    { period: "2022 - 2023", label: "Startup", detail: "Learned speed with real users." },
    { period: "2022", label: "Freelance", detail: "Built from zero-roadmap ideas." },
  ];

  return (
    <div className="border border-line-light bg-canvas-light dark:border-line-dark dark:bg-canvas-dark">
      <div className="grid min-h-[16rem] sm:grid-cols-[0.8fr,1.2fr]">
        <div className="flex flex-col justify-between border-b border-line-light p-5 dark:border-line-dark sm:border-b-0 sm:border-r">
          <div>
            <p className="eyebrow">Career Model</p>
            <p className="mt-3 text-sm font-bold text-ink-strong dark:text-ink-inverse">
              Journey in short
            </p>
          </div>
          <div>
            <p className="font-display text-5xl font-extrabold leading-none text-ink-strong dark:text-ink-inverse">
              Now
            </p>
            <p className="mt-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] meta-text">
              Back to start
            </p>
          </div>
        </div>
        <div className="grid divide-y divide-line-light dark:divide-line-dark">
          {journey.map(({ period, label, detail }) => (
            <div key={`${period}-${label}`} className="grid gap-2 p-4">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] meta-text">
                  {period}
                </span>
                <span className="text-sm font-extrabold text-ink-strong dark:text-ink-inverse">
                  {label}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-ink-muted dark:text-ink-inverse/80">
                {detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  const { headline, body, qualities } = aboutContent;
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [34, -38]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-grid-lines border-b border-line-light bg-canvas-light dark:border-line-dark dark:bg-canvas-dark"
      aria-labelledby="about-title"
    >
      <div className="grid lg:grid-cols-[0.9fr,1.1fr]">
        <motion.div
          variants={staggered()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="section-grid-lines border-b border-line-light bg-canvas-light px-5 py-14 dark:border-line-dark dark:bg-canvas-dark sm:px-8 lg:sticky lg:top-0 lg:self-start lg:border-b-0 lg:border-r lg:px-12 lg:py-20"
        >
          <motion.p variants={fadeInUp(0.05, 14)} className="eyebrow">
            Profile
          </motion.p>
          <motion.h2
            id="about-title"
            variants={fadeInUp(0.1, 16)}
            className="mt-6 text-balance text-[clamp(2.4rem,7vw,6.5rem)] font-extrabold leading-[0.9]"
            style={{ y: shouldReduceMotion ? 0 : titleY }}
          >
            {headline}
          </motion.h2>
          <motion.p
            variants={fadeInUp(0.16, 16)}
            className="mt-8 max-w-2xl text-pretty text-lg text-ink-muted dark:text-ink-inverse/80"
          >
            {body}
          </motion.p>
        </motion.div>

        <div className="px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
          <motion.div
            variants={fadeInUp(0.12, 16)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="border border-line-light bg-surface-elevated dark:border-line-dark dark:bg-surface-dark"
          >
            <div className="grid min-h-[20rem] grid-cols-2">
              <div className="flex flex-col justify-between border-r border-line-light p-6 dark:border-line-dark">
                <p className="eyebrow">Operating Model</p>
                <p className="font-display text-7xl font-extrabold leading-none text-ink-strong dark:text-ink-inverse">
                  PB
                </p>
              </div>
              <div className="grid divide-y divide-line-light dark:divide-line-dark">
                {["Discover", "Architect", "Build", "Release"].map((phase, index) => (
                  <div key={phase} className="flex items-center justify-between p-5">
                    <span className="font-semibold text-ink-strong dark:text-ink-inverse">
                      {phase}
                    </span>
                    <span className="font-mono text-xs meta-text">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggered(0.08, 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-8 grid gap-0 border-y border-line-light dark:border-line-dark"
          >
            {qualities.map(({ title, description }, index) => (
              <motion.div
                key={title}
                variants={fadeInUp(0.04 * index, 14)}
                className="grid gap-4 border-b border-line-light py-6 last:border-b-0 dark:border-line-dark md:grid-cols-[5rem,1fr]"
              >
                <p className="font-display text-4xl font-extrabold meta-text">
                  0{index + 1}
                </p>
                <div>
                  <h3 className="text-2xl font-extrabold">{title}</h3>
                  <p className="mt-3 text-sm text-ink-muted dark:text-ink-inverse/80">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div
        id="experience"
        className="scroll-mt-24 border-t border-line-light bg-surface-elevated dark:border-line-dark dark:bg-surface-dark lg:scroll-mt-0"
      >
        <motion.div
          variants={staggered(0.08, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="grid gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr),22rem] lg:items-end lg:px-12 lg:py-16">
            <div className="max-w-4xl">
              <p className="eyebrow">Experience Log</p>
              <h2 className="mt-5 max-w-3xl text-balance text-[clamp(2.3rem,5vw,4.75rem)] font-extrabold leading-[0.92]">
                Work history with real operating context.
              </h2>
              <p className="mt-6 max-w-2xl border-l border-brand-primary pl-5 text-pretty text-base leading-relaxed text-ink-muted dark:border-brand-secondary dark:text-ink-inverse/80 lg:text-lg">
                From freelance MVPs to startup pressure, Bengaluru product teams,
                and now hybrid IRISS work across Florida and Bengaluru, each step
                shaped how I build reliable mobile systems.
              </p>
            </div>
            <ExperienceModelCard />
          </div>

          <div>
            {experienceTimeline.map((item, index) => (
              <ExperienceRow
                key={`${item.company}-${item.period}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={staggered(0.06, 0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[17rem,1fr] lg:px-12 lg:py-16"
      >
        <div>
          <p className="eyebrow">Education</p>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight">
            Academic foundation.
          </h2>
        </div>
        <div className="grid gap-x-8 md:grid-cols-2">
          {educationTimeline.map((item, index) => (
            <EducationItem key={`${item.school}-${item.period}`} item={item} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
