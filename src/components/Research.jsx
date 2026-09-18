import { researchIntro, currentResearch, experience } from "../data/content.js";
import { IconArrow } from "./icons.jsx";

export default function Research() {
  return (
    <section id="research">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-num">02</span>
          <h2 className="section-title">Research</h2>
        </div>

        <p className="research__intro reveal">
          I work at the intersection of <b>artificial intelligence</b> and <b>pathology</b>,
          focusing on building models that help interpret histology slides and extract meaningful
          patterns from tissue samples. My work involves developing training pipelines, designing
          practical AI workflows for researchers, and exploring new ways deep learning can support
          biological discovery.
        </p>

        <div className="feature-card reveal">
          <span className="feature-card__tag">Current Research</span>
          <h3>{currentResearch.title.replace("Current Research: ", "")}</h3>
          <p>{currentResearch.body}</p>
          <a href={currentResearch.link} target="_blank" rel="noreferrer" className="btn btn--primary">
            {currentResearch.linkLabel} <IconArrow />
          </a>
        </div>

        <div className="timeline reveal">
          <p className="timeline__title">Research Experience</p>
          {experience.map((exp, i) => (
            <article className="exp" key={i}>
              <div className="exp__date">{exp.date}</div>
              <div>
                <h4 className="exp__role">{exp.role}</h4>
                <p className="exp__org">
                  {exp.orgLink ? (
                    <a href={exp.orgLink} target="_blank" rel="noreferrer">
                      {exp.org}
                    </a>
                  ) : (
                    exp.org
                  )}
                </p>
                <p className="exp__meta">{exp.meta}</p>
                {exp.supervisors && (
                  <p className="exp__sup">
                    Supervised by:{" "}
                    {exp.supervisors.map((s, idx) => (
                      <span key={s.name}>
                        {idx > 0 && ", "}
                        <a href={s.link} target="_blank" rel="noreferrer">
                          {s.name}
                        </a>
                      </span>
                    ))}
                  </p>
                )}
                <ul>
                  {exp.points.map((p, idx) => (
                    <li key={idx}>
                      {p.link ? (
                        <a href={p.link} target="_blank" rel="noreferrer">
                          {p.text}
                        </a>
                      ) : (
                        p.text
                      )}
                    </li>
                  ))}
                  {exp.subPoints && (
                    <ul className="exp__sublist">
                      {exp.subPoints.map((sp) => (
                        <li key={sp}>{sp}</li>
                      ))}
                    </ul>
                  )}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
