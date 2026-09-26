import { AnimatePresence } from "framer-motion";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import BackToTopButton from "./components/layout/BackToTopButton";
import ScrollProgress from "./components/layout/ScrollProgress";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Skills = lazy(() => import("./pages/Skills"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));

// Mount scrolling with the page, after its lazy content and any exit transition.
const RoutedPage = ({ component: Component }) => (
  <>
    <ScrollManager />
    <Component />
  </>
);

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<RoutedPage component={Home} />} />
        <Route path="/about" element={<RoutedPage component={About} />} />
        <Route path="/projects" element={<RoutedPage component={Projects} />} />
        <Route path="/skills" element={<RoutedPage component={Skills} />} />
        <Route path="/contact" element={<RoutedPage component={Contact} />} />
        <Route path="/privacy-policy" element={<RoutedPage component={PrivacyPolicy} />} />
        <Route path="/terms-and-conditions" element={<RoutedPage component={Terms} />} />
        <Route path="*" element={<RoutedPage component={Home} />} />
      </Routes>
    </AnimatePresence>
  );
};

const ScrollManager = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const frame = requestAnimationFrame(() => {
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth";
      if (hash) {
        let id = hash.slice(1);
        try {
          id = decodeURIComponent(id);
        } catch {
          // An invalid URL escape should not prevent the page from rendering.
        }
        document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
};

const App = () => (
  <div className="relative min-h-screen overflow-x-clip bg-canvas-light text-ink-base antialiased dark:bg-canvas-dark dark:text-ink-inverse">
    <ScrollProgress />
    <BackToTopButton />
    <Navbar />

    <a
      href="#app-content"
      className="absolute left-4 top-4 z-[90] -translate-y-16 rounded-md bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition focus:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
    >
      Skip to content
    </a>

    <main
      id="app-content"
      className="relative flex min-h-screen flex-col pt-20 lg:pl-[19rem] lg:pt-0"
    >
      <Suspense fallback={null}>
        <AppRoutes />
      </Suspense>
      <Footer />
    </main>
  </div>
);

export default App;
