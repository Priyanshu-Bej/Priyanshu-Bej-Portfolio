import PageContainer from "../components/layout/PageContainer";
import { AboutSection, SkillsSection, TestimonialsSection } from "../components";

const About = () => (
  <PageContainer className="gap-0">
    <AboutSection />
    <SkillsSection />
    <TestimonialsSection />
  </PageContainer>
);

export default About;
