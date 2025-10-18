import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";

import { projects } from "../../constants";
import useMediaQuery from "../../hooks/useMediaQuery";
import { fadeInUp, staggered } from "../../utils/animations";
import ProjectCard from "../projects/ProjectCard";

const ProjectModal = lazy(() => import("../projects/ProjectModal"));

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const scrollRef = useRef(null);
  const autoScrollFrame = useRef(null);
  const resumePauseTimeout = useRef(null);

  const pauseAutoScroll = useCallback(() => {
    if (resumePauseTimeout.current) {
      clearTimeout(resumePauseTimeout.current);
      resumePauseTimeout.current = null;
    }
    setIsPaused(true);
  }, []);

  const resumeAutoScroll = useCallback(() => {
    if (resumePauseTimeout.current) {
      clearTimeout(resumePauseTimeout.current);
      resumePauseTimeout.current = null;
    }
    setIsPaused(false);
  }, []);

  const handleHorizontalScroll = useCallback(
    (event) => {
      if (isMobile || !scrollRef.current) return;
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();
        scrollRef.current.scrollLeft += event.deltaY;
        pauseAutoScroll();
        resumePauseTimeout.current = setTimeout(resumeAutoScroll, 2000);
      }
    },
    [isMobile, pauseAutoScroll, resumeAutoScroll]
  );

  useEffect(() => {
    if (isMobile) return undefined;
    const container = scrollRef.current;
    if (!container) return undefined;

    const step = () => {
      if (!isPaused) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (maxScroll > 0) {
          if (container.scrollLeft >= maxScroll - 1) {
            container.scrollLeft = 0;
          } else {
            container.scrollLeft += 0.7;
          }
        }
      }
      autoScrollFrame.current = requestAnimationFrame(step);
    };

    autoScrollFrame.current = requestAnimationFrame(step);

    return () => {
      if (autoScrollFrame.current) {
        cancelAnimationFrame(autoScrollFrame.current);
      }
      if (resumePauseTimeout.current) {
        clearTimeout(resumePauseTimeout.current);
        resumePauseTimeout.current = null;
      }
    };
  }, [isMobile, isPaused, resumeAutoScroll]);

  const projectsList = useMemo(() => projects, []);

  return (
    <section
      id="projects"
      className="section-wrapper relative overflow-hidden border border-white/15 bg-white/12 backdrop-blur-2xl dark:border-white/10 dark:bg-white/8"
      aria-labelledby="projects-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-35 dark:bg-grid-dark/70" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-brand-secondary-soft/20 via-transparent to-transparent dark:from-brand-secondary-soft/28" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          variants={staggered()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.p variants={fadeInUp(0.1)} className="eyebrow">
            Projects
          </motion.p>
          <motion.h2
            id="projects-title"
            variants={fadeInUp(0.18)}
            className="mt-4 font-display text-[clamp(2rem,3vw,2.85rem)] text-neutral-900 dark:text-white"
          >
            A premium carousel of shipped work — glide through my favorite builds.
          </motion.h2>
          <motion.p
            variants={fadeInUp(0.26)}
            className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-lg"
          >
            Each launch balances delightful visual craft with battle-tested engineering.
            Scroll the carousel (or drag with your trackpad) to explore every project end-to-end, then tap a card for the full story.
          </motion.p>
        </motion.div>

        {isMobile ? (
          <motion.div
            variants={staggered(0.08, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid gap-6"
          >
            {projectsList.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpen={setSelectedProject}
              />
            ))}
          </motion.div>
        ) : (
          <div className="relative mt-12">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/70 to-transparent dark:from-surface-base dark:via-surface-base/80" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/70 to-transparent dark:from-surface-base dark:via-surface-base/80" />
            <motion.div
              ref={scrollRef}
              onWheel={handleHorizontalScroll}
              variants={fadeInUp(0.28)}
              onPointerEnter={pauseAutoScroll}
              onPointerLeave={resumeAutoScroll}
              onPointerDown={pauseAutoScroll}
              onPointerUp={resumeAutoScroll}
              onFocusCapture={pauseAutoScroll}
              onBlurCapture={resumeAutoScroll}
              className="flex gap-7 overflow-x-auto scroll-smooth scrollbar-glass snap-x snap-mandatory px-1 py-2"
              data-auto-scroll
            >
              {projectsList.map((project, index) => (
                <div key={project.id} className="snap-start last:snap-end">
                  <ProjectCard
                    project={project}
                    index={index}
                    onOpen={setSelectedProject}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        )}
      </div>

      <Suspense fallback={null}>
        <ProjectModal
          project={selectedProject}
          onClose={() => {
            setSelectedProject(null);
          }}
        />
      </Suspense>
    </section>
  );
};

export default ProjectsSection;
