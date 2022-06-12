import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Tindog Website",
    github: "https://github.com/sanjayhjp121/tindog",
    demo: "https://sanjayhjp121.github.io/tindog/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Live CSS Updater",
    github: "https://github.com/sanjayhjp121/css-updater",
    demo: "https://sanjayhjp121.github.io/css-updater/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Drum Kit",
    github: "https://github.com/sanjayhjp121/js-drum-kit",
    demo: "https://sanjayhjp121.github.io/js-drum-kit/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Drawing Canvas",
    github: "https://github.com/sanjayhjp121/drawing-canvas",
    demo: "https://sanjayhjp121.github.io/drawing-canvas/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Apple Watch Landing Page",
    github: "https://github.com/sanjayhjp121/apple-watch-landing-page",
    demo: "https://sanjayhjp121.github.io/apple-watch-landing-page/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Ajax Type Dropdown",
    github: "https://github.com/sanjayhjp121/ajax-type-ahead",
    demo: "https://sanjayhjp121.github.io/ajax-type-ahead/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
