import {
  AboutSection,
  ContactSection,
  Footer,
  HeroSection,
  Navbar,
  NotesSection,
  ProjectsSection,
  SkillsSection,
  TestimonialsSection,
} from "./components";

const App = () => (
  <div className="min-h-screen bg-neutral-50 text-neutral-700 antialiased dark:bg-surface-base dark:text-neutral-200">
    <a
      href="#hero"
      className="absolute left-4 top-4 -translate-y-16 rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition focus:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
    >
      Skip to content
    </a>
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <NotesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default App;
