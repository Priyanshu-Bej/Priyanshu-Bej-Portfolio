import { lazy, Suspense, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { projects } from "../../constants";
import { fadeInUp, staggered } from "../../utils/animations";
import ProjectCard from "../projects/ProjectCard";

const ProjectModal = lazy(() => import("../projects/ProjectModal"));

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const { featuredProjects, additionalProjects } = useMemo(
    () => ({
      featuredProjects: projects.filter((project) => project.featured !== false),
      additionalProjects: projects.filter((project) => project.featured === false),
    }),
    [],
  );

  return (
    <section id="projects" className="bg-surface-elevated dark:bg-surface-dark" aria-labelledby="projects-title">
      <div className="border-y border-line-light dark:border-line-dark">
        <motion.div
          variants={staggered()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="grid gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.75fr,1.25fr] lg:px-12 lg:py-20"
        >
          <div>
            <motion.p variants={fadeInUp(0.05, 14)} className="eyebrow">
              Engineered Work
            </motion.p>
            <motion.p
              variants={fadeInUp(0.1, 16)}
              className="mt-6 max-w-sm text-sm text-ink-muted dark:text-ink-inverse/80"
            >
              Product builds shaped through architecture, constraints, and real
              user workflows.
            </motion.p>
          </div>
          <motion.h2
            id="projects-title"
            variants={fadeInUp(0.12, 16)}
            className="max-w-5xl text-balance text-[clamp(2.6rem,7vw,7.5rem)] font-extrabold leading-[0.9]"
          >
            Case studies built around decisions, not decoration.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggered(0.08, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={setSelectedProject}
            />
          ))}
        </motion.div>

        {additionalProjects.length > 0 && (
          <div className="border-t border-line-light px-5 py-8 dark:border-line-dark sm:px-8 lg:px-12">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="eyebrow">Additional shipped apps</p>
                <p className="mt-3 max-w-2xl text-sm text-ink-muted dark:text-ink-inverse/80">
                  Smaller business utilities and early product work are kept here so
                  the main case studies stay focused.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowAllProjects((current) => !current)}
                aria-expanded={showAllProjects}
                className="button-secondary w-full sm:w-fit"
              >
                {showAllProjects ? "Show fewer projects" : "View all projects"}
                {showAllProjects ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            </div>
          </div>
        )}

        <AnimatePresence initial={false}>
          {showAllProjects && (
            <motion.div
              key="additional-projects"
              variants={staggered(0.06, 0.05)}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              {additionalProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={featuredProjects.length + index}
                  onOpen={setSelectedProject}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Suspense fallback={null}>
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </Suspense>
    </section>
  );
};

export default ProjectsSection;
