import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import {
    About,
    Blog,
    BlogPost,
    Contact,
    Experience,
    Feedbacks,
    Hero,
    Navbar,
    StarsCanvas,
    Tech,
    Works,
} from "./components";
import Resume from "./components/Resume";

function MainApp() {
  const location = useLocation();
  const isBlogRoute = location.pathname.startsWith("/blog");

  if (isBlogRoute) {
    return (
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    );
  }

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </div>
      <About />
      <Resume />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
};

export default App;
