import React from "react";

const projects = [
  {
    id: 1,
    title: "SRM Dashboard",
    image: "/images/srm.png",
    tags: ["React", "Redux", "Node.Js", "MongoDB"],
    detailsModal: "#portfolio-project-srm",
  },
  {
    id: 2,
    title: "IIT Madras Dashboard",
    image: "/images/madras.png",
    tags: ["React", "Redux", "Node.Js", "MongoDB"],
    detailsModal: "#portfolio-tech-iit",
  },
];

const Projects = () => {
  return (
    <section
      className="latest-portfolio-area custom-column-grid tmp-section-gap"
      id="project"
    >
      <div className="container">
        {/* ===== Section Header ===== */}
        <div className="section-head mb--60 text-center">
          <div className="section-sub-title center-title">
            <span className="subtitle theme-gradient">Latest Projects</span>
          </div>

          <h2 className="title">Transforming Ideas into Exceptional</h2>

          <p className="description section-sm">
            Business consulting consultants provide expert advice and guidance
            to help organizations improve performance and efficiency.
          </p>
        </div>

        {/* ===== Portfolio Grid ===== */}
        <div className="row animation-action-3">
          {projects.map((project, index) => (
            <div key={project.id} className="col-lg-6 col-md-6">
              <div
                className={`latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-${
                  index + 1
                }`}
              >
                {/* Image */}
                <div className="portfoli-card-img">
                  <div className="img-box v2">
                    <img
                      className="w-100"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="portfolio-card-content-wrap">
                  <div className="content-left">
                    <h3 className="portfolio-card-title">{project.title}</h3>

                    <div className="tag-items">
                      <ul>
                        {project.tags.map((tag, i) => (
                          <li key={i}>
                            <a className="tag-item">{tag}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* ===== Popup Trigger Button ===== */}
                  <a
                    className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md"
                    data-bs-toggle="modal"
                    data-bs-target={project.detailsModal}
                    href="#"
                  >
                    <div className="icon-reverse-wrapper">
                      <span className="btn-text">View Details</span>
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
                        <i className="ffa-sharp fa-regular fa-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="ffa-sharp fa-regular fa-arrow-right"></i>
                      </span>
                    </div>
                  </a>
                </div>

                <div className="tmp-light light-center"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
