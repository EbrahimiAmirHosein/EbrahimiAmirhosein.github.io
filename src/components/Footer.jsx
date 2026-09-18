import { profile } from "../data/content.js";
import { IconGithub, IconLinkedin, IconScholar, IconMail } from "./icons.jsx";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <h2 className="footer__cta reveal">
          Let’s build AI that matters.{" "}
          <a href={`mailto:${profile.email}`}>Get in touch.</a>
        </h2>

        <div className="footer__row">
          <p className="footer__meta">
            © {new Date().getFullYear()} Amirhosein Ebrahimi · {profile.location}
          </p>
          <div className="footer__links">
            <a className="icon-btn" href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <IconGithub />
            </a>
            <a className="icon-btn" href="https://www.linkedin.com/in/amirhosein-ebrahimi" target="_blank" rel="noreferrer" aria-label="LinkedIn">
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
    </footer>
  );
}
