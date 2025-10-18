import { motion } from "framer-motion";

import { certificationShowcase } from "../../constants";
import { fadeInUp, staggered } from "../../utils/animations";

const TestimonialsSection = () => (
  <section
    id="certifications"
    className="section-wrapper relative overflow-hidden border border-white/15 bg-white/12 backdrop-blur-2xl dark:border-white/10 dark:bg-white/8"
    aria-labelledby="certifications-title"
  >
    <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-35 dark:bg-grid-dark/70" />
    <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-brand-secondary-soft/18 via-transparent to-transparent dark:from-brand-secondary-soft/26" />
    <div className="mx-auto max-w-6xl px-4 md:px-6">
      <motion.div
        variants={staggered()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.p variants={fadeInUp(0.1)} className="eyebrow">
          Certifications
        </motion.p>
        <motion.h2
          id="certifications-title"
          variants={fadeInUp(0.18)}
          className="mt-4 font-display text-[clamp(2rem,3vw,2.75rem)] text-neutral-900 dark:text-neutral-50"
        >
          Recognised by the ecosystems that shape my craft.
        </motion.h2>
        <motion.p
          variants={fadeInUp(0.26)}
          className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-lg"
        >
          Certifications and accolades reflecting my commitment to staying sharp
          with emerging practices, cloud platforms, and applied AI.
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggered(0.1, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-10 grid gap-6 md:grid-cols-4"
      >
        {certificationShowcase.map(({ title, issuer, logo }) => (
          <motion.article
            key={title}
            variants={fadeInUp(0.1)}
            className="group relative h-full overflow-hidden rounded-3xl border border-white/25 bg-white/14 p-6 shadow-card-light backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:shadow-soft-xl dark:border-white/10 dark:bg-white/8 dark:shadow-card-dark"
          >
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt={issuer}
                loading="lazy"
                className="h-12 w-12 rounded-full border border-white/40 object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                  {title}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-300">
                  {issuer}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;
