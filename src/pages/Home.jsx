import { lazy } from "react";
import { useLocation } from "react-router-dom";

import { HeroSection } from "../components";
import LazySection from "../components/layout/LazySection";
import PageContainer from "../components/layout/PageContainer";

const AboutSection = lazy(() => import("../components/sections/AboutSection"));
const SkillsSection = lazy(() => import("../components/sections/SkillsSection"));
const ProjectsSection = lazy(() => import("../components/sections/ProjectsSection"));
const NotesSection = lazy(() => import("../components/sections/NotesSection"));
const TestimonialsSection = lazy(() => import("../components/sections/TestimonialsSection"));
const ContactSection = lazy(() => import("../components/sections/ContactSection"));

const Home = () => {
  const { hash } = useLocation();
  const normalizedHash = hash?.toLowerCase();

  const isTarget = (id) => normalizedHash === `#${id}`;

  return (
    <>
      <HeroSection />
      <PageContainer className="gap-0 pt-16">
        <LazySection forceRender={isTarget("about")}>
          <AboutSection />
        </LazySection>
        <LazySection forceRender={isTarget("skills")}>
          <SkillsSection />
        </LazySection>
        <LazySection forceRender={isTarget("projects")}>
          <ProjectsSection />
        </LazySection>
        <LazySection forceRender={isTarget("notes")}>
          <NotesSection />
        </LazySection>
        <LazySection forceRender={isTarget("certifications")}>
          <TestimonialsSection />
        </LazySection>
        <LazySection forceRender={isTarget("contact")}>
          <ContactSection />
        </LazySection>
      </PageContainer>
    </>
  );
};

export default Home;
