import { motion } from "framer-motion";

import {
  aboutContent,
  educationTimeline,
  experienceTimeline,
  heroContent,
} from "../../constants";
import { fadeInUp, staggered } from "../../utils/animations";

const TimelineItem = ({ item, index }) => (
  <motion.li
    variants={fadeInUp(0.08 * index)}
    className="relative pl-12"
    key={`${item.company ?? item.school}-${item.period}`}
  >
    <span className="absolute left-4 top-3 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-white/30 bg-white/20 shadow-card-light backdrop-blur-lg dark:border-white/10 dark:bg-white/10">
      {item.icon ? (
        <img
          src={item.icon}
          alt={item.company ?? item.school}
          className="h-6 w-6 rounded-full object-contain"
          loading="lazy"
        />
      ) : (
        <span className="h-2.5 w-2.5 rounded-full bg-brand-primary" />
      )}
    </span>
    <div className="relative overflow-hidden rounded-3xl border border-white/25 bg-white/12 p-6 shadow-card-light backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:shadow-soft-xl dark:border-white/10 dark:bg-white/8 dark:shadow-card-dark">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-brand-primary/15 opacity-0 transition-opacity duration-500 hover:opacity-100" />
      <p className="text-[11px] uppercase tracking-[0.42em] text-brand-primary/80 dark:text-brand-primary/70">
        {item.period}
      </p>
      <h3 className="mt-3 text-lg font-semibold text-neutral-900 dark:text-white">
        {item.title ?? item.program}
      </h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-300">
        {item.company ?? item.school}
        {item.location ? ` · ${item.location}` : ""}
      </p>
      {item.bullets && (
        <ul className="mt-4 space-y-2 text-sm text-neutral-500 dark:text-neutral-300">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="text-brand-primary">▹</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </motion.li>
);

const AboutSection = () => {
  const { headline, body, qualities } = aboutContent;
  const { portrait } = heroContent;

  return (
    <section
      id="about"
      className="section-wrapper relative overflow-hidden"
      aria-labelledby="about-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-70 dark:bg-grid-dark" />
      <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-white/60 via-white/20 to-transparent dark:from-white/10 dark:via-white/5" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          variants={staggered()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="grid gap-10 md:grid-cols-[1.15fr,0.85fr]"
        >
          <div>
            <motion.p variants={fadeInUp(0.1)} className="eyebrow">
              About
            </motion.p>
            <motion.h2
              id="about-title"
              variants={fadeInUp(0.18)}
              className="mt-4 font-display text-[clamp(2rem,3vw,2.85rem)] text-neutral-900 dark:text-white"
            >
              {headline}
            </motion.h2>
            <motion.p
              variants={fadeInUp(0.26)}
              className="mt-6 text-base leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-lg"
            >
              {body}
            </motion.p>
          </div>

          <motion.div
            variants={fadeInUp(0.24)}
            className="relative overflow-hidden rounded-[2.5rem] border border-white/25 bg-white/12 p-6 shadow-card-light backdrop-blur-2xl dark:border-white/10 dark:bg-white/8 dark:shadow-card-dark"
          >
            <span className="absolute inset-0 rounded-[2.5rem] border border-white/25 opacity-80" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/30">
              <img
                src={portrait}
                alt="Priyanshu smiling in professional attire"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative mt-5 space-y-3 text-sm text-neutral-600 dark:text-neutral-200">
              <div className="flex items-center justify-between">
                <span className="text-neutral-500 dark:text-neutral-400">
                  Current base
                </span>
                <span className="font-semibold text-neutral-900 dark:text-white">
                  Bengaluru, India
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-500 dark:text-neutral-400">
                  Collaboration
                </span>
                <span className="font-semibold text-brand-primary">
                  Open for product partnerships
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-500 dark:text-neutral-400">
                  Focus
                </span>
                <span className="font-semibold text-neutral-900 dark:text-white">
                  Flutter ecosystems · Growth ops
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggered()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {qualities.map(({ title, description }) => (
            <motion.div
              key={title}
              variants={fadeInUp(0.12)}
              className="group relative overflow-hidden rounded-3xl border border-white/25 bg-white/12 p-6 shadow-card-light backdrop-blur-xl transition duration-500 hover:-translate-y-1.5 hover:shadow-soft-xl dark:border-white/10 dark:bg-white/8 dark:shadow-card-dark"
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <span className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-accent/20" />
              </div>
              <div className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/15 text-brand-primary shadow-inner dark:bg-brand-primary/20 dark:text-white">
                <span className="text-lg">✦</span>
              </div>
              <h3 className="relative text-lg font-semibold text-neutral-900 dark:text-white">
                {title}
              </h3>
              <p className="relative mt-3 text-sm text-neutral-600 dark:text-neutral-300">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <motion.div
            variants={fadeInUp(0.18)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="eyebrow">Experience</p>
            <div className="mt-6">
              <div className="relative">
                <span className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-brand-primary/45 via-brand-secondary-soft/40 to-transparent" />
                <ol className="space-y-6">
                  {experienceTimeline.map((item, index) => (
                    <TimelineItem key={item.company} item={item} index={index} />
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp(0.22)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="eyebrow">Education</p>
            <div className="mt-6">
              <div className="relative">
                <span className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-brand-primary/45 via-brand-secondary-soft/40 to-transparent" />
                <ol className="space-y-6">
                  {educationTimeline.map((item, index) => (
                    <TimelineItem
                      key={item.school}
                      item={item}
                      index={index}
                    />
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
