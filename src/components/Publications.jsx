import { publications } from "../data/content.js";
import { IconArrow } from "./icons.jsx";

function Authors({ authors, highlight }) {
  if (!highlight || !authors.includes(highlight)) return <>{authors}</>;
  const [before, after] = authors.split(highlight);
  return (
    <>
      {before}
      <b>{highlight}</b>
      {after}
    </>
  );
}

export default function Publications() {
  return (
    <section id="publications">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-num">03</span>
          <h2 className="section-title">Publications</h2>
        </div>

        {publications.map((group) => (
          <div className="pub-group reveal" key={group.group}>
            <p className="pub-group__title">{group.group}</p>
            {group.items.map((pub, i) => (
              <div className="pub" key={i}>
                <div>
                  <h4 className="pub__title">{pub.title}</h4>
                  <p className="pub__authors">
                    <Authors authors={pub.authors} highlight={pub.highlightAuthor} />
                  </p>
                  <p className="pub__source">{pub.source}</p>
                </div>
                {pub.link && (
                  <a className="pub__link" href={pub.link} target="_blank" rel="noreferrer">
                    {pub.linkLabel} <IconArrow />
                  </a>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
