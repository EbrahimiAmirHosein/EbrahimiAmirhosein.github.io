import { useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Research from "./components/Research.jsx";
import Publications from "./components/Publications.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import { profile } from "./data/content.js";
import { useReveal } from "./components/useReveal.js";

function getInitialTheme() {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useReveal();

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <>
      <div className="bg-layer" />
      <div className="bg-grid" />
      <div className="bg-noise" />
      <Nav theme={theme} toggleTheme={toggleTheme} cv={profile.cv} />
      <main>
        <Hero />
        <About />
        <Research />
        <Publications />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
