import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../templates/Hero";
import About from "./About";
import Projects from "./Projects";
import Blog from "./Blog";
import ClickSpark from "../../ReactBits/ClickSpark/ClickSpark.jsx";
import Contact from "./Contact.jsx";

function Home() {
  return (
    <div className="w-full min-h-screen ">
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}

export default Home;
