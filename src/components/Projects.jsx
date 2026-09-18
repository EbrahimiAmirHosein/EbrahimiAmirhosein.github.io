import { projects } from "../data/content.js";
import { IconArrow } from "./icons.jsx";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-head reveal" style={{ marginBottom: "1.2rem" }}>
          <span className="section-num">04</span>
          <h2 className="section-title">Projects</h2>
        </div>
        <p className="proj-count reveal" style={{ marginBottom: "2.5rem" }}>
          {projects.length} selected repositories
        </p>

        <div className="projects">
          {projects.map((p) => (
            <a
              className="card reveal"
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="card__media">
                <img src={p.image} alt={p.title} loading="lazy" />
              </div>
              <div className="card__body">
                <h3 className="card__title">{p.title}</h3>
                <p className="card__desc">{p.description}</p>
                <span className="card__link">
                  View Project <IconArrow />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
