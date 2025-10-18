import PageContainer from "../components/layout/PageContainer";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  NotesSection,
  ProjectsSection,
  SkillsSection,
  TestimonialsSection,
} from "../components";

const Home = () => (
  <>
    <HeroSection />
    <PageContainer className="gap-0 pt-16">
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <NotesSection />
      <TestimonialsSection />
      <ContactSection />
    </PageContainer>
  </>
);

export default Home;
