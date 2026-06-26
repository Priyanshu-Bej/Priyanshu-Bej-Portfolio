import { HeroSection } from "../components";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import NotesSection from "../components/sections/NotesSection";
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
    <NotesSection />
    <ContactSection />
  </>
);

export default Home;
