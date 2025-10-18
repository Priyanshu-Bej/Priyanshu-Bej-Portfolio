import { lazy } from "react";

import PageContainer from "../components/layout/PageContainer";
import LazySection from "../components/layout/LazySection";
import { HeroSection } from "../components";

const AboutSection = lazy(() => import("../components/sections/AboutSection"));
const SkillsSection = lazy(() => import("../components/sections/SkillsSection"));
const ProjectsSection = lazy(() => import("../components/sections/ProjectsSection"));
const NotesSection = lazy(() => import("../components/sections/NotesSection"));
const TestimonialsSection = lazy(() => import("../components/sections/TestimonialsSection"));
const ContactSection = lazy(() => import("../components/sections/ContactSection"));

const Home = () => (
  <>
    <HeroSection />
    <PageContainer className="gap-0 pt-16">
      <LazySection>
        <AboutSection />
      </LazySection>
      <LazySection>
        <SkillsSection />
      </LazySection>
      <LazySection>
        <ProjectsSection />
      </LazySection>
      <LazySection>
        <NotesSection />
      </LazySection>
      <LazySection>
        <TestimonialsSection />
      </LazySection>
      <LazySection>
        <ContactSection />
      </LazySection>
    </PageContainer>
  </>
);

export default Home;
