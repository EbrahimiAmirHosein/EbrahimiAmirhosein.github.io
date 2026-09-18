import { useEffect, useState } from "react";
import { IconSun, IconMoon, IconMenu } from "./icons.jsx";

const sections = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "projects", label: "Projects" },
];

export default function Nav({ theme, toggleTheme, cv }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__monogram">AE</span>
          Amirhosein
        </a>

        <nav className={`nav__links${open ? " open" : ""}`}>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="nav__link" onClick={() => setOpen(false)}>
              {s.label}
            </a>
          ))}
          <a href={cv} target="_blank" rel="noreferrer" className="nav__cta" onClick={() => setOpen(false)}>
            CV
          </a>
        </nav>

        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            className="toggle"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
          >
            <span className="toggle__thumb">
              {theme === "dark" ? <IconMoon /> : <IconSun />}
            </span>
          </button>
          <button
            className="nav__burger"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={{ marginLeft: "0.5rem" }}
          >
            <IconMenu />
          </button>
        </div>
      </div>
    </header>
  );
}
