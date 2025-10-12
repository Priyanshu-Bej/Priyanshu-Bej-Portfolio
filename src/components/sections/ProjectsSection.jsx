import { lazy, Suspense, useCallback, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

import { projects } from "../../constants";
import useMediaQuery from "../../hooks/useMediaQuery";
import { fadeInUp, staggered } from "../../utils/animations";
import ProjectCard from "../projects/ProjectCard";

const ProjectModal = lazy(() => import("../projects/ProjectModal"));

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const scrollRef = useRef(null);

  const handleHorizontalScroll = useCallback(
    (event) => {
      if (isMobile || !scrollRef.current) return;
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();
        scrollRef.current.scrollLeft += event.deltaY;
      }
    },
    [isMobile]
  );

  const projectsList = useMemo(() => projects, []);

  return (
    <section
      id="projects"
      className="section-wrapper relative overflow-hidden bg-white/15 backdrop-blur-2xl dark:bg-surface-base/45"
      aria-labelledby="projects-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-60 dark:bg-grid-dark" />
      <div className="absolute inset-x-0 top-12 h-52 bg-gradient-to-b from-brand-secondary-soft/25 via-transparent to-transparent dark:from-brand-secondary-soft/20" />

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
              className="flex gap-7 overflow-x-auto scroll-smooth scrollbar-glass snap-x snap-mandatory px-1 py-2"
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
