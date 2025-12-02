import { AnimatePresence } from "framer-motion";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Footer, Navbar } from "./components";
import AnimatedBackground from "./components/layout/AnimatedBackground";
import PageTransitionLoader from "./components/layout/PageTransitionLoader";
import ScrollProgress from "./components/layout/ScrollProgress";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Skills = lazy(() => import("./pages/Skills"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
};

const App = () => (
  <div className="relative min-h-screen overflow-x-hidden bg-neutral-50 text-neutral-700 antialiased dark:bg-surface-base dark:text-neutral-200">
    <AnimatedBackground />
    <ScrollProgress />
    <Navbar />
    <PageTransitionLoader />

    <a
      href="#app-content"
      className="absolute left-4 top-4 z-[90] -translate-y-16 rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition focus:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
    >
      Skip to content
    </a>

    <main id="app-content" className="relative z-10 flex flex-col pt-20">
      <Suspense fallback={null}>
        <ScrollManager />
        <AppRoutes />
      </Suspense>
      <Footer />
    </main>
  </div>
);

export default App;
