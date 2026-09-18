import { profile } from "../data/content.js";
import {
  IconGithub,
  IconLinkedin,
  IconScholar,
  IconMail,
  IconArrow,
  IconDownload,
} from "./icons.jsx";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div>
          <div className="hero__kicker">
            <span />
            <p className="eyebrow">AI &times; Healthcare</p>
          </div>

          <h1 className="hero__name">
            Amirhosein
            <br />
            <em>Ebrahimi</em>
          </h1>

          <p className="hero__role">{profile.role}</p>

          <div className="hero__actions">
            <a href={profile.cv} target="_blank" rel="noreferrer" className="btn btn--primary">
              <IconDownload /> Download CV
            </a>
            <a href="#research" className="btn btn--ghost">
              View research <IconArrow />
            </a>

            <div className="hero__socials">
              <a className="icon-btn" href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <IconGithub />
              </a>
              <a className="icon-btn" href={`https://www.linkedin.com/in/amirhosein-ebrahimi`} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <IconLinkedin />
              </a>
              <a className="icon-btn" href={profile.links.scholar} target="_blank" rel="noreferrer" aria-label="Google Scholar">
                <IconScholar />
              </a>
              <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email">
                <IconMail />
              </a>
            </div>
          </div>
        </div>

        <div className="hero__portrait">
          <div className="hero__portrait-frame">
            <img src={profile.avatar} alt="Amirhosein Ebrahimi" />
          </div>
          <div className="hero__badge">
            <b>University of Ottawa</b>
            <span>M.A.Sc. · Bioinformatics</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll">Scroll</div>
    </section>
  );
}
