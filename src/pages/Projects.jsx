import PageContainer from "../components/layout/PageContainer";
import ContactSection from "../components/sections/ContactSection";
import ProjectsSection from "../components/sections/ProjectsSection";

const Projects = () => (
  <PageContainer className="gap-0">
    <ProjectsSection />
    <ContactSection />
  </PageContainer>
);

export default Projects;
