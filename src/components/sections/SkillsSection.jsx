import { motion } from "framer-motion";

import { heroContent, skillGroups, skillIcons, skillKeywords } from "../../constants";
import { fadeInUp, staggered } from "../../utils/animations";

const SkillTag = ({ label, index }) => (
  <motion.span
    variants={fadeInUp(0.02 * index, 18)}
    className="inline-flex items-center rounded-full border border-brand-primary/40 bg-white/15 px-3 py-1 text-xs font-semibold text-brand-primary shadow-card-light backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:shadow-soft-xl dark:border-brand-primary/40 dark:bg-white/10 dark:text-neutral-100"
  >
    {label}
  </motion.span>
);

const SkillsSection = () => (
  <section
    id="skills"
    className="section-wrapper relative overflow-hidden bg-white/20 backdrop-blur-xl dark:bg-surface-base/50"
    aria-labelledby="skills-title"
  >
    <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-60 dark:bg-grid-dark" />
    <div className="absolute inset-x-0 top-16 h-48 bg-gradient-to-b from-brand-primary/10 via-transparent to-transparent dark:from-brand-primary/15" />

    <div className="mx-auto max-w-6xl px-4 md:px-6">
      <motion.div
        variants={staggered()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.p variants={fadeInUp(0.1)} className="eyebrow">
          Skills
        </motion.p>
        <motion.h2
          id="skills-title"
          variants={fadeInUp(0.18)}
          className="mt-4 font-display text-[clamp(2rem,3vw,2.75rem)] text-neutral-900 dark:text-neutral-50"
        >
          Pragmatic tooling for reliable, beautiful mobile experiences.
        </motion.h2>
        <motion.p
          variants={fadeInUp(0.26)}
          className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-lg"
        >
          I obsess over the invisible details that make apps feel effortless —
          well-structured architecture, resilient networking, thoughtful
          animation, and a design system mindset that keeps teams aligned.
        </motion.p>
      </motion.div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
        <motion.div
          variants={staggered()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          {skillGroups.map(({ title, description, items }) => (
            <motion.div
              key={title}
              variants={fadeInUp(0.12)}
              className="group relative overflow-hidden rounded-3xl border border-white/25 bg-white/12 p-6 shadow-card-light backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:shadow-soft-xl dark:border-white/10 dark:bg-white/8 dark:shadow-card-dark"
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <span className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-brand-primary/25 via-transparent to-brand-secondary-soft/20" />
              </div>
              <h3 className="relative text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                {title}
              </h3>
              <p className="relative mt-3 text-sm text-neutral-600 dark:text-neutral-300">
                {description}
              </p>
              <div className="relative mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-brand-primary/12 px-3 py-1 text-xs font-medium text-brand-primary shadow-inner dark:bg-brand-primary/20 dark:text-neutral-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            variants={fadeInUp(0.15)}
            className="relative overflow-hidden rounded-3xl border border-white/25 bg-white/12 p-6 shadow-card-light backdrop-blur-xl dark:border-white/10 dark:bg-white/8 dark:shadow-card-dark"
            aria-label="Tooling & platforms"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-neutral-400 dark:text-neutral-500">
              Everyday toolkit
            </p>
            <div className="mt-4 grid grid-cols-3 gap-4 sm:grid-cols-6">
              {skillIcons.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-white/25 bg-white/15 p-3 text-center text-xs text-neutral-600 shadow-card-light backdrop-blur-lg transition duration-500 hover:-translate-y-1 hover:shadow-soft-xl dark:border-white/10 dark:bg-white/10 dark:text-neutral-200"
                >
                  <img
                    src={icon}
                    alt={name}
                    loading="lazy"
                    className="h-10 w-10 object-contain"
                  />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggered()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          <motion.div
            variants={fadeInUp(0.1)}
            className="relative overflow-hidden rounded-3xl border border-white/25 bg-white/15 p-6 shadow-card-light backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:shadow-card-dark"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-neutral-400 dark:text-neutral-500">
              Skill cloud
            </p>
            <motion.div
              variants={staggered(0.04, 0)}
              className="mt-4 flex flex-wrap gap-2"
            >
              {skillKeywords.map((keyword, index) => (
                <SkillTag key={keyword} label={keyword} index={index} />
              ))}
            </motion.div>
          </motion.div>
          {(heroContent.workflow.length > 0 || heroContent.passion?.trim()) && (
            <motion.div
              variants={fadeInUp(0.18)}
              className="relative overflow-hidden rounded-3xl border border-white/25 bg-white/15 p-6 shadow-card-light backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:shadow-card-dark"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-neutral-400 dark:text-neutral-500">
                Workflow DNA
              </p>
              <div className="mt-4 space-y-4">
                {heroContent.workflow.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {heroContent.workflow.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold text-neutral-700 shadow-inner backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-neutral-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
                {heroContent.passion?.trim() && (
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    {heroContent.passion}
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
