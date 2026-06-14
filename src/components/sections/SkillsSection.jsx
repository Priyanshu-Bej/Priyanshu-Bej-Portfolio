import { motion } from "framer-motion";

import { skillGroups, skillIcons } from "../../constants";
import { fadeInUp, staggered } from "../../utils/animations";

const SkillsSection = () => (
  <section id="skills" className="border-b border-line-light dark:border-line-dark" aria-labelledby="skills-title">
    <div className="grid lg:grid-cols-[17rem,1fr]">
      <motion.div
        variants={fadeInUp(0.06, 14)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="border-b border-line-light px-5 py-12 dark:border-line-dark sm:px-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-16"
      >
        <p className="eyebrow">Capability Index</p>
        <h2
          id="skills-title"
          className="mt-5 text-balance text-[clamp(2rem,5vw,4.5rem)] font-extrabold leading-[0.95] lg:[writing-mode:vertical-rl]"
        >
          Stack, systems, release.
        </h2>
      </motion.div>

      <div>
        <motion.div
          variants={staggered(0.08, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillGroups.map(({ title, description, items }, index) => (
            <motion.article
              key={title}
              variants={fadeInUp(0.04 * index, 14)}
              className="grid gap-8 border-b border-line-light px-5 py-10 dark:border-line-dark sm:px-8 lg:grid-cols-[0.55fr,1.45fr] lg:px-12"
            >
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] meta-text">
                  Module {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-3xl font-extrabold">{title}</h3>
                <p className="mt-4 max-w-md text-sm text-ink-muted dark:text-ink-inverse/80">
                  {description}
                </p>
              </div>
              <div className="flex flex-wrap content-start gap-3">
                {items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex min-h-12 items-center rounded-md border border-line-light bg-white px-4 py-3 text-sm font-extrabold text-ink-strong shadow-subtle transition hover:border-brand-primary hover:text-brand-primary dark:border-white/10 dark:bg-surface-dark-elevated dark:text-ink-inverse dark:shadow-dark-subtle dark:hover:border-brand-secondary dark:hover:text-brand-secondary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp(0.14, 16)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16"
        >
          <div className="grid gap-6 lg:grid-cols-[0.42fr,1fr] lg:items-end">
            <div>
              <p className="eyebrow">Tools I Reach For</p>
              <h3 className="mt-4 max-w-md text-balance text-[clamp(2rem,4vw,4rem)] font-extrabold leading-[0.95]">
                Practical tools for shipping stable mobile systems.
              </h3>
            </div>
            <p className="max-w-2xl text-pretty text-base text-ink-muted dark:text-ink-inverse/80">
              A focused stack I use across architecture, development, debugging,
              cloud integrations, automation, and product handoff.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-line-light bg-line-light dark:border-line-dark dark:bg-line-dark sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
            {skillIcons.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="group flex aspect-square flex-col items-center justify-center gap-3 bg-surface-elevated p-4 text-center text-xs font-bold text-ink-strong transition hover:bg-surface-muted hover:text-brand-primary dark:bg-surface-dark-elevated dark:text-ink-inverse dark:hover:bg-surface-dark-muted dark:hover:text-brand-secondary"
              >
                <Icon className="h-9 w-9 text-brand-primary transition group-hover:scale-110 dark:text-brand-secondary" aria-hidden />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
