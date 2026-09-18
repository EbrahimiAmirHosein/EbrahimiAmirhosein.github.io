import { about } from "../data/content.js";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-num">01</span>
          <h2 className="section-title">About</h2>
        </div>

        <div className="about__grid">
          <div className="reveal">
            <p className="about__lead">
              {about.intro}
            </p>
            <p className="about__body">
              {about.narrative}
            </p>
          </div>

          <div className="about__card reveal">
            <h3>Research Interests</h3>
            <p className="about__body" style={{ marginBottom: "1.4rem", fontSize: "1rem" }}>
              {about.interestsLead}
            </p>
            <div className="tags">
              {about.interests.map((i) => (
                <span className="tag" key={i}>
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
