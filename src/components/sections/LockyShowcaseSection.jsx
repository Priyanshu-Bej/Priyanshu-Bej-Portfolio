import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

import { lockyLogo } from "../../assets";
import { fadeInUp, staggered } from "../../utils/animations";

const LockyShowcaseSection = () => {
  return (
    <section
      id="locky"
      className="section-wrapper relative overflow-hidden border border-white/15 bg-white/12 backdrop-blur-2xl dark:border-white/10 dark:bg-white/8"
      aria-labelledby="locky-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-35 dark:bg-grid-dark/70" />
      <div className="pointer-events-none absolute -left-28 top-10 h-72 w-72 rounded-full bg-brand-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-brand-secondary-soft/25 blur-3xl" />

      <motion.div
        variants={staggered()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="relative mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[1.1fr,0.9fr] md:px-6"
      >
        <div className="space-y-5">
          <motion.p variants={fadeInUp(0.05)} className="eyebrow">
            New Launch
          </motion.p>
          <motion.h2
            id="locky-title"
            variants={fadeInUp(0.12)}
            className="font-display text-[clamp(2rem,3.2vw,3rem)] text-neutral-900 dark:text-white"
          >
            Locky — NFC Wallet &amp; Expenses
          </motion.h2>
          <motion.p
            variants={fadeInUp(0.18)}
            className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300"
          >
            Turn physical cards into smart digital keys. Instantly scan with NFC, save encrypted notes offline, and manage subscriptions plus daily spends with cloud sync.
          </motion.p>

          <motion.div
            variants={fadeInUp(0.22)}
            className="flex flex-wrap gap-2 text-xs font-semibold text-brand-primary"
          >
            {["Offline + AES-256", "Subscription manager", "Expense insights"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-brand-primary/35 bg-brand-primary/10 px-3 py-1 text-brand-primary dark:border-brand-primary/45 dark:bg-brand-primary/20 dark:text-neutral-100"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp(0.26)} className="flex flex-wrap items-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.locky.priyanshubej&ref=producthunt"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/15 px-5 py-2 text-sm font-semibold text-brand-primary transition hover:-translate-y-0.5 hover:border-brand-primary/60 hover:bg-brand-primary/25 hover:text-brand-primary dark:border-brand-primary/40 dark:bg-brand-primary/20 dark:text-neutral-100"
            >
              Download on Play Store <FiExternalLink />
            </a>
            <span className="text-xs uppercase tracking-[0.28em] text-neutral-400 dark:text-neutral-500">
              NFC vault offline · Cloud-synced insights
            </span>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp(0.2)} className="relative">
          <div className="glass-panel flex h-full flex-col items-center justify-center gap-4 text-center">
            <div className="relative">
              <span className="absolute -inset-6 rounded-full bg-brand-primary/20 blur-2xl" />
              <img
                src={lockyLogo}
                alt="Locky app logo"
                className="relative h-28 w-28 rounded-3xl border border-white/40 bg-white/70 object-contain p-4 shadow-soft-xl dark:border-white/10 dark:bg-white/10"
                loading="lazy"
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">
                Locky
              </p>
              <p className="text-base font-semibold text-neutral-900 dark:text-white">
                NFC wallet, encrypted notes, and expenses
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Tap, store, and retrieve card data instantly — zero latency.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LockyShowcaseSection;
