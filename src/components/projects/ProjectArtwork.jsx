import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const logoTileSizes = {
  card: "max-w-[220px] md:max-w-[250px]",
  modal: "max-w-[200px] sm:max-w-[230px] lg:max-w-[260px]",
};

const wrapperSizes = {
  card: "min-h-[380px] md:min-h-[500px]",
  modal: "min-h-[300px] lg:min-h-full",
};

const cardHover = {
  whileHover: { y: -8, rotate: -1 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
};

const defaultLogoProfile = {
  tone: "light",
  accent: "37 99 235",
};

const detectLogoSurfaceProfile = (imageSrc, onResolved) => {
  const image = new Image();

  image.onload = () => {
    try {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (!context) {
        onResolved(defaultLogoProfile);
        return;
      }

      const sampleSize = 32;
      canvas.width = sampleSize;
      canvas.height = sampleSize;
      context.drawImage(image, 0, 0, sampleSize, sampleSize);

      const { data } = context.getImageData(0, 0, sampleSize, sampleSize);
      let luminanceTotal = 0;
      let visiblePixels = 0;
      let accentRed = 0;
      let accentGreen = 0;
      let accentBlue = 0;
      let accentWeightTotal = 0;

      for (let index = 0; index < data.length; index += 4) {
        const r = data[index];
        const g = data[index + 1];
        const b = data[index + 2];
        const a = data[index + 3];

        if (a < 40) continue;

        luminanceTotal += 0.2126 * r + 0.7152 * g + 0.0722 * b;
        visiblePixels += 1;

        const maxChannel = Math.max(r, g, b);
        const minChannel = Math.min(r, g, b);
        const saturation = maxChannel - minChannel;
        const weight = Math.max(10, saturation);

        accentRed += r * weight;
        accentGreen += g * weight;
        accentBlue += b * weight;
        accentWeightTotal += weight;
      }

      if (visiblePixels === 0) {
        onResolved(defaultLogoProfile);
        return;
      }

      const averageLuminance = luminanceTotal / visiblePixels;
      const tone = averageLuminance < 128 ? "dark" : "light";

      if (accentWeightTotal === 0) {
        onResolved({ tone, accent: defaultLogoProfile.accent });
        return;
      }

      const avgRed = Math.round(accentRed / accentWeightTotal);
      const avgGreen = Math.round(accentGreen / accentWeightTotal);
      const avgBlue = Math.round(accentBlue / accentWeightTotal);

      onResolved({ tone, accent: `${avgRed} ${avgGreen} ${avgBlue}` });
    } catch {
      onResolved(defaultLogoProfile);
    }
  };

  image.onerror = () => onResolved(defaultLogoProfile);
  image.src = imageSrc;
};

const ProjectArtwork = ({ project, variant = "card" }) => {
  const isLogoPreview = project.preview === "app-icon";
  const motionProps = variant === "card" ? cardHover : {};
  const altText = `${project.title} app ${isLogoPreview ? "logo" : "preview"}`;
  const [logoProfile, setLogoProfile] = useState(defaultLogoProfile);

  useEffect(() => {
    if (!isLogoPreview || !project.image) return undefined;

    let isMounted = true;
    detectLogoSurfaceProfile(project.image, (profile) => {
      if (isMounted) setLogoProfile(profile);
    });

    return () => {
      isMounted = false;
    };
  }, [isLogoPreview, project.image]);

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-surface-muted/75 p-6 dark:bg-surface-dark-muted ${wrapperSizes[variant]}`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-line-light dark:bg-line-dark" />
      <div className="absolute left-0 top-0 h-24 w-px bg-brand-primary dark:bg-brand-secondary" />
      <div className="absolute bottom-0 right-0 h-24 w-px bg-brand-secondary dark:bg-brand-primary" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(37,99,235,0.12),transparent_44%),radial-gradient(circle_at_86%_84%,rgba(20,184,166,0.14),transparent_42%)]" />

      {isLogoPreview ? (
        <motion.div
          className={`relative mx-auto flex h-full w-full ${logoTileSizes[variant]} items-center justify-center`}
          {...motionProps}
        >
          <div className="pointer-events-none absolute -inset-6 rounded-[2.8rem] bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-secondary/10 blur-2xl" />
          <div className="relative w-full rounded-[2.5rem] border-[7px] border-ink-strong/92 bg-ink-strong p-1 shadow-[0_24px_54px_-38px_rgba(17,17,17,0.56)] dark:border-black">
            <div className="absolute left-1/2 top-2 z-10 h-1 w-14 -translate-x-1/2 rounded-full bg-white/20" />
            <div className="pointer-events-none absolute inset-x-10 top-2.5 h-2 rounded-full bg-white/10 blur-sm" />
            <div
              className={`relative aspect-[9/16] overflow-hidden rounded-[1.88rem] border ${
                logoProfile.tone === "dark"
                  ? "border-white/10 bg-ink-strong"
                  : "border-line-light/55 bg-white"
              }`}
            >
              <div
                className="pointer-events-none absolute inset-0 scale-110 blur-2xl"
                style={{
                  background: `radial-gradient(circle at 18% 16%, rgb(${logoProfile.accent} / 0.34), transparent 46%), radial-gradient(circle at 82% 84%, rgb(${logoProfile.accent} / 0.20), transparent 42%)`,
                }}
              />
              <img
                src={project.image}
                alt={altText}
                loading="lazy"
                className="absolute inset-0 z-[1] m-auto aspect-square w-[76%] rounded-[20%] object-contain drop-shadow-[0_10px_18px_rgba(17,17,17,0.14)]"
              />
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="mx-auto flex h-full max-w-[285px] items-center justify-center"
          {...motionProps}
        >
          <div className="relative w-full rounded-[2.35rem] border-[9px] border-ink-strong/95 bg-ink-strong p-1 shadow-[0_24px_54px_-38px_rgba(17,17,17,0.56)] dark:border-black">
            <div className="absolute left-1/2 top-2 z-10 h-1 w-14 -translate-x-1/2 rounded-full bg-white/20" />
            <div className="aspect-[9/16] overflow-hidden rounded-[1.72rem] bg-white">
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
