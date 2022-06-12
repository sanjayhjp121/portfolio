import React from "react";
import "./services.css";
import { BsCheck } from "react-icons/bs";

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Designing websites</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Creating responsive website wireframes</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Designing app wireframes</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Creating infographics</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Editing videos</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Designing motion graphics</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX*/}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Know HTML, CSS, JavaScript and other web languages</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Create and test applications for websites</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Present design specs</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Work with graphics and other designers</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Troubleshoot website problems</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Maintain and update websites</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Monitor website traffic</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT*/}
        <article className="service">
          <div className="service__head">
            <h3>Content Writing</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Excellent writing and editing skills</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Proficient in all Microsoft Office applications</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Working knowledge of content management systems</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>The ability to work in a fast-paced environment</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>The ability to handle multiple projects concurrently</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Effective communication skills</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION*/}
      </div>
    </section>
  );
}

export default Services;
