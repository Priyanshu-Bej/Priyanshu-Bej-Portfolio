import PageContainer from "../components/layout/PageContainer";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";

const About = () => (
  <PageContainer className="gap-0">
    <AboutSection />
    <SkillsSection />
    <TestimonialsSection />
  </PageContainer>
);

export default About;
