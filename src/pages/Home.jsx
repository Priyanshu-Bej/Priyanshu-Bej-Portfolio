import { HeroSection } from "../components";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import SkillsSection from "../components/sections/SkillsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";

const Home = () => (
  <>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <TestimonialsSection />
    <ContactSection />
  </>
);

export default Home;
