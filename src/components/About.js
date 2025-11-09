import React from "react";

import Popups from "./Popups";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Reusable SkillBar component
const SkillBar = ({ name, level }) => (
  <div className="progress-charts">
    <h6 className="heading heading-h6">{name}</h6>
    <div className="progress">
      <div
        className="progress-bar wow fadeInLeft"
        role="progressbar"
        style={{
          width: `${level}%`,
          visibility: "visible",
          animationDuration: "0.5s",
          animationDelay: "0.3s",
        }}
        aria-valuenow={level}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <span className="percent-label">{level}%</span>
      </div>
    </div>
  </div>
);

function About() {
  const devSkills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 75 },
    { name: "jQuery", level: 75 },
    { name: "React.Js", level: 70 },
    { name: "MySQL", level: 80 },
    { name: "Devops - AWS", level: 40 },
  ];
  const designSkills = [
    { name: "Node.Js", level: 70 },
    { name: "Express.Js", level: 65 },
    { name: "MongoDB", level: 60 },
    { name: "SQL", level: 70 },
    { name: "Bootstrap", level: 90 },
    { name: "PHP", level: 40 },
    { name: "WordPress", level: 60 },
  ];
  return (
    <>
      {/* ===== About Section Start ===== */}
      <section className="about-us-area tmp-section-gapBottom pt-5" id="about">
        <div className="container">
          <div className="row align-items-center animation-action-3">
            {/* Left Image Section */}
            <div className="col-lg-6 pr--50 pr_lg--10 pr_md--10 pr_sm--10">
              <div className="about-us-left-content-wrap paralax-image">
                <div className="about-thumbnail-large-style-two about-us-card tmponhover single-animation active">
                  <img src="/images/profile_image.png" alt="about" />
                  <div className="tmp-light light-center"></div>
                </div>
              </div>
            </div>

            {/* Right Content Section */}
            <div className="col-lg-6">
              <div className="about-us-right-content-wrap">
                <div className="section-head text-align-left mb--50">
                  <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <span className="subtitle theme-gradient">About Me</span>
                  </div>

                  <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                    Front-end Developer — UI, <br /> Performance & Accessibility
                  </h2>

                  <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                    Turning design into delightful, fast, and maintainable web
                    apps.
                  </p>
                </div>

                {/* Cards Section */}
                <div className="about-us-section-card row g-5">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="about-us-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-4">
                      <div className="card-head with-flex">
                        <div className="logo-img">
                          <i className="fa-regular fa-briefcase"></i>
                        </div>
                        <h3 className="card-title">Experience</h3>
                      </div>
                      <p className="card-para">
                        1.6+ years of experience in front-end development,
                        building responsive and user-friendly web applications.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="about-us-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-5">
                      <div className="card-head with-flex">
                        <div className="logo-img">
                          <img src="/images/about/logo-2.svg" alt="logo" />
                        </div>
                        <h3 className="card-title">Projects</h3>
                      </div>
                      <p className="card-para">
                        Developed responsive web applications using React.js,
                        Node.js, and modern UI frameworks.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Button Section */}
                <div
                  className="about-btn mt--40 tmp-scroll-trigger tmp-fade-in animation-order-6"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalCenters"
                >
                  <a
                    className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon"
                    href="#more"
                  >
                    <div className="icon-reverse-wrapper">
                      <span className="btn-text">Read More About Me</span>
                      <div className="btn-hack"></div>
                      <img
                        src="/images/button/btg-bg.svg"
                        alt=""
                        className="btn-bg"
                      />
                      <img
                        src="/images/button/btg-bg-2.svg"
                        alt=""
                        className="btn-bg-hover"
                      />
                      <span className="btn-icon">
                        <i className="fa-regular fa-arrow-down"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="fa-regular fa-arrow-down"></i>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Counter Area (Static Values) ===== */}
      <div className="counter-funfacts-area tmp-section-gapBottom">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="counter-card tmp-scroll-trigger tmp-fade-in tmponhover animation-order-1">
                <h3 className="counter counter-title">100+</h3>
                <p className="counter-para">Our Project Complete</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-12">
              <div className="counter-card tmp-scroll-trigger tmp-fade-in tmponhover animation-order-3">
                <h3 className="counter counter-title">200+</h3>
                <p className="counter-para">Clients Reviews</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-12">
              <div className="counter-card tmp-scroll-trigger tmp-fade-in tmponhover animation-order-4">
                <h3 className="counter counter-title">200+</h3>
                <p className="counter-para">Our Satisfied Client</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="counter-card tmp-scroll-trigger tmp-fade-in tmponhover animation-order-2">
                <h3 className="counter counter-title">3</h3>
                <p className="counter-para">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Skills Section ===== */}
      <section className="tmp-skill-area" id="about">
        <div className="container">
          <div className="section-head text-align-left mb--50">
            <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
              <span className="subtitle theme-gradient">
                Skills & Expertise
              </span>
            </div>
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
              A balanced mix of creative design <br /> and front-end
              engineering.
            </h2>
          </div>
          <div className="row g-5">
            {/* Development Skills */}
            <div className="col-lg-6">
              <div className="progress-wrapper">
                {/* <h2 className="custom-title mb--30 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Development Skills
                </h2> */}
                {devSkills.map((skill, i) => (
                  <SkillBar key={i} {...skill} />
                ))}
              </div>
            </div>
            {/* Design Skills */}
            <div className="col-lg-6">
              <div className="progress-wrapper">
                {/* <h2 className="custom-title mb--30 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Design Skills
                </h2> */}
                {designSkills.map((skill, i) => (
                  <SkillBar key={i} {...skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Popups />
      </section>
    </>
  );
}

export default About;
