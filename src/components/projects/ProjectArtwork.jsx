import { motion } from "framer-motion";

const logoTileSizes = {
  card: "w-[min(58vw,13rem)] sm:w-56 md:w-64",
  modal: "w-44 sm:w-52 lg:w-64",
};

const wrapperSizes = {
  card: "min-h-[380px] md:min-h-[500px]",
  modal: "min-h-[300px] lg:min-h-full",
};

const cardHover = {
  whileHover: { y: -8, rotate: -1 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
};

const ProjectArtwork = ({ project, variant = "card" }) => {
  const isLogoPreview = project.preview === "app-icon";
  const motionProps = variant === "card" ? cardHover : {};
  const altText = `${project.title} app ${isLogoPreview ? "logo" : "preview"}`;

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-surface-muted p-6 dark:bg-surface-dark-muted ${wrapperSizes[variant]}`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-line-light dark:bg-line-dark" />
      <div className="absolute left-0 top-0 h-24 w-px bg-brand-primary dark:bg-brand-secondary" />
      <div className="absolute bottom-0 right-0 h-24 w-px bg-brand-secondary dark:bg-brand-primary" />

      {isLogoPreview ? (
        <motion.div
          className={`relative flex aspect-square ${logoTileSizes[variant]} items-center justify-center rounded-[1.75rem] border border-line-light bg-white p-5 shadow-lift dark:border-white/15`}
          {...motionProps}
        >
          <img
            src={project.image}
            alt={altText}
            loading="lazy"
            className="h-full w-full object-contain"
          />
        </motion.div>
      ) : (
        <motion.div
          className="mx-auto flex h-full max-w-[285px] items-center justify-center"
          {...motionProps}
        >
          <div className="relative w-full rounded-[2.2rem] border-[11px] border-ink-strong bg-ink-strong p-1 shadow-lift dark:border-black">
            <div className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/18" />
            <div className="aspect-[9/16] overflow-hidden rounded-[1.45rem] bg-white">
              <img
                src={project.image}
                alt={altText}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectArtwork;
