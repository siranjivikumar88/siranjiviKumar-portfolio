import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./page/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import NotFound from "./page/NotFound";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Page */}
        <Route index element={<Home />} />

        {/* Page Routes */}
                <Route path="/home" element={<HeroSection />} />

        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
