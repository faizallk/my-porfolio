import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import MainLayout from "./Layouts/MainLayout";
import ClickSpark from "../ReactBits/ClickSpark/ClickSpark.jsx";
function App() {
  // App.jsx or SmoothScroll.jsx

  function SmoothScroll() {
    useEffect(() => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }, []);

    return null; // It's just for the side-effect
  }

  return (
    <div>
      <SmoothScroll />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
