import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FiChevronDown, FiX } from "react-icons/fi";

import { certificationImagesByFile } from "../../assets";
import { certificationShowcase } from "../../constants";
import { fadeInUp, staggered } from "../../utils/animations";

const getCertificateImage = (imageFile) =>
  imageFile ? certificationImagesByFile[imageFile] : null;

const CertificatePreview = ({ certification, image, size = "card" }) => {
  const Icon = certification.icon;
  const isModal = size === "modal";

  return (
    <div
      className={`relative overflow-hidden rounded-md border border-line-light bg-white shadow-subtle dark:border-white/15 dark:bg-surface-dark-elevated ${
        isModal
          ? "h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-[420px] lg:flex-1"
          : "aspect-[4/3]"
      }`}
    >
      {image ? (
        <img
          src={image}
          alt={`${certification.title} certificate preview`}
          loading="lazy"
          className="h-full w-full object-contain p-3"
        />
      ) : (
        <div className="flex h-full min-h-[210px] flex-col justify-between bg-[linear-gradient(135deg,#ffffff_0%,#f4f7fb_54%,#e7f7f5_100%)] p-4 dark:bg-[linear-gradient(135deg,#11151c_0%,#151a22_58%,#102a2b_100%)]">
          <div className="flex items-center justify-between gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md border border-line-light bg-white text-lg text-brand-primary dark:border-white/15 dark:bg-surface-dark-muted dark:text-brand-secondary">
              <Icon aria-hidden />
            </span>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] meta-text">
              Certificate
            </span>
          </div>
          <div>
            <p className="text-sm font-extrabold text-ink-strong dark:text-ink-inverse">
              {certification.title}
            </p>
            <p className="mt-2 text-xs font-semibold text-ink-muted dark:text-ink-inverse/80">
              {certification.issuer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const CertificationCard = ({ certification, index, onSelect }) => {
  const image = getCertificateImage(certification.imageFile);
  const Icon = certification.icon;

  return (
    <motion.button
      type="button"
      variants={fadeInUp(0.04 * index, 14)}
      onClick={() => onSelect(certification)}
      className="premium-card premium-card-hover flex h-full flex-col p-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
    >
      <CertificatePreview certification={certification} image={image} />

      <div className="flex flex-1 flex-col p-2 pt-4">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-line-light bg-white text-brand-primary dark:border-white/15 dark:bg-surface-dark-muted dark:text-brand-secondary">
            <Icon aria-hidden />
          </span>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] meta-text">
            {certification.issued}
          </p>
        </div>

        <h3 className="mt-4 text-pretty text-base font-extrabold leading-snug text-ink-strong dark:text-ink-inverse">
          {certification.title}
        </h3>
        <p className="mt-2 text-sm font-semibold text-ink-muted dark:text-ink-inverse/80">
          {certification.issuer}
        </p>

        {certification.credentialId && (
          <div className="mt-4 space-y-2 text-xs text-ink-muted dark:text-ink-inverse/80">
            <p className="break-words">
              <span className="font-bold text-ink-strong dark:text-ink-inverse">
                ID:
              </span>{" "}
              {certification.credentialId}
            </p>
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {certification.skills.slice(0, 3).map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
};

const CertificationModal = ({ certification, onClose }) => {
  useEffect(() => {
    if (!certification) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [certification, onClose]);

  if (typeof document === "undefined") return null;

  const image = certification ? getCertificateImage(certification.imageFile) : null;
  const Icon = certification?.icon;
  const facts = certification
    ? [
        { label: "Issuer", value: certification.issuer },
        { label: "Issued", value: certification.issued },
        certification.credentialId && {
          label: "Credential ID",
          value: certification.credentialId,
        },
      ].filter(Boolean)
    : [];

  return createPortal(
    <AnimatePresence>
      {certification && (
        <motion.div
          key={certification.id}
          className="fixed inset-0 z-[100] flex min-h-[100dvh] items-start justify-center overflow-y-auto overscroll-contain bg-black/58 px-4 py-5 backdrop-blur-sm sm:px-6 lg:items-center lg:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="certification-modal-title"
            className="premium-card relative my-auto grid w-full max-w-5xl overflow-hidden lg:max-h-[calc(100dvh-4rem)] lg:grid-cols-[minmax(0,1.05fr),minmax(0,0.95fr)]"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              aria-label="Close certification details"
              onClick={onClose}
              className="icon-button absolute right-4 top-4 z-10"
            >
              <FiX className="text-lg" />
            </button>

            <div className="bg-surface-muted p-4 dark:bg-surface-dark-muted sm:p-6 lg:flex lg:min-h-0 lg:p-8">
              <CertificatePreview
                certification={certification}
                image={image}
                size="modal"
              />
            </div>

            <div className="scrollbar-premium min-h-0 p-5 sm:p-6 md:p-8 lg:max-h-[calc(100dvh-4rem)] lg:overflow-y-auto">
              <p className="eyebrow">Credential Detail</p>
              <div className="mt-5 flex items-start gap-3 pr-12 sm:pr-0">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-line-light bg-white text-xl text-brand-primary dark:border-white/15 dark:bg-surface-dark-muted dark:text-brand-secondary">
                  <Icon aria-hidden />
                </span>
                <div>
                  <h3
                    id="certification-modal-title"
                    className="text-balance text-2xl font-extrabold leading-tight text-ink-strong dark:text-ink-inverse sm:text-3xl"
                  >
                    {certification.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-ink-muted dark:text-ink-inverse/80">
                    {certification.issuer}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-pretty text-base text-ink-muted dark:text-ink-inverse/80">
                {certification.summary}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-md border border-line-light bg-surface-muted p-3 dark:border-white/20 dark:bg-surface-dark-elevated"
                  >
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] meta-text">
                      {fact.label}
                    </p>
                    <p className="mt-1 break-words text-sm font-bold text-ink-strong dark:text-ink-inverse">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-line-light pt-6 dark:border-line-dark">
                <p className="text-sm font-bold text-ink-strong dark:text-ink-inverse">
                  Skills
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {certification.skills.map((skill) => (
                    <span key={skill} className="chip px-3 py-1.5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const [showAll, setShowAll] = useState(false);
  const [selectedCertification, setSelectedCertification] = useState(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [28, -34]);

  const { featuredCertifications, additionalCertifications } = useMemo(
    () => ({
      featuredCertifications: certificationShowcase.filter(
        (certification) => certification.featured,
      ),
      additionalCertifications: certificationShowcase.filter(
        (certification) => !certification.featured,
      ),
    }),
    [],
  );

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="section-grid-lines section-wrapper bg-canvas-light dark:bg-canvas-dark"
      aria-labelledby="certifications-title"
    >
      <div className="section-shell">
        <motion.div
          variants={staggered()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="section-grid-lines grid gap-6 bg-canvas-light dark:bg-canvas-dark lg:sticky lg:top-0 lg:z-10 lg:grid-cols-[0.8fr,1.2fr] lg:items-end lg:pb-8 lg:pt-4"
        >
          <div>
            <motion.p variants={fadeInUp(0.05, 14)} className="eyebrow">
              Certifications
            </motion.p>
            <motion.h2
              id="certifications-title"
              variants={fadeInUp(0.1, 16)}
              className="mt-4 text-balance text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.05]"
              style={{ y: shouldReduceMotion ? 0 : titleY }}
            >
              Certifications that support the work, not distract from it.
            </motion.h2>
          </div>
          <motion.p
            variants={fadeInUp(0.16, 16)}
            className="text-pretty text-lg text-ink-muted dark:text-ink-inverse/80"
          >
            The strongest signals stay visible first: AI platforms, cloud, security,
            Flutter, IoT, and systems thinking.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggered(0.06, 0.16)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {featuredCertifications.map((certification, index) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
              index={index}
              onSelect={setSelectedCertification}
            />
          ))}
        </motion.div>

        <div className="mt-10 border-t border-line-light pt-6 dark:border-line-dark">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="eyebrow">Additional credentials</p>
              <p className="mt-2 max-w-xl text-sm text-ink-muted dark:text-ink-inverse/80">
                More proof from competitions, early AI learning, business systems,
                and extra Flutter training.
              </p>
            </div>
            <button
              type="button"
              aria-expanded={showAll}
              onClick={() => setShowAll((current) => !current)}
              className="button-secondary w-full px-4 py-2.5 sm:w-auto"
            >
              {showAll ? "Show fewer" : "View all credentials"}
              <FiChevronDown
                className={`transition ${showAll ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
          </div>

          <AnimatePresence initial={false}>
            {showAll && (
              <motion.div
                key="additional-certifications"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="grid gap-4 pt-6 md:grid-cols-2 xl:grid-cols-4">
                  {additionalCertifications.map((certification, index) => (
                    <CertificationCard
                      key={certification.id}
                      certification={certification}
                      index={index}
                      onSelect={setSelectedCertification}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <CertificationModal
        certification={selectedCertification}
        onClose={() => setSelectedCertification(null)}
      />
    </section>
  );
};

export default TestimonialsSection;
