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
              Hi, I'm <span className="hl">Amirhossein Ebrahimi</span>, a Master's student in
              Biomedical Engineering, with a deep passion for{" "}
              <span className="hl">Artificial Intelligence in Healthcare</span>.
            </p>
            <p className="about__body">
              I am currently pursuing my Master’s degree at the University of Ottawa, where I am
              excited to engage in advanced research at the intersection of AI and healthcare. Under
              the mentorship of{" "}
              <a href={about.mentorLink} target="_blank" rel="noreferrer">
                Professor Arvind Mer
              </a>
              , I am dedicated to developing innovative solutions that drive meaningful social
              impact.
            </p>
            <p className="about__goal">{about.goal}</p>
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
