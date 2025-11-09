import React from "react";

const Popups = () => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModalCenters"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-news"
          role="document"
        >
          <div className="modal-content">
            {/* ===== Modal Header ===== */}
            <div className="modal-header">
              <h4 className="modal-title">More About Me</h4>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-x"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </span>
              </button>
            </div>

            {/* ===== Modal Body ===== */}
            <div className="modal-body">
              {/* <img
          className="img-fluid mb--30"
          src="/images/about/profile-banner.jpg"
          alt="Profile Banner"
        /> */}

              <div className="news-details">
                <h2>R Jaswanth — Front-End Developer</h2>
                <p className="mt--10">
                  I’m a <strong>Front-End Developer</strong> with 1.5+ years of
                  experience in building responsive dashboards and full-stack
                  applications using{" "}
                  <strong>
                    React.js, Redux, JavaScript (ES6+), HTML5, CSS3, Tailwind
                    CSS, and Bootstrap
                  </strong>
                  . Skilled in UI/UX optimization, RESTful API integration, and
                  MERN stack development.
                </p>

                <h4 className="mt--20">Professional Highlights</h4>
                <ul>
                  <li>
                    Developed responsive student dashboards for{" "}
                    <strong>IIT Madras</strong> and
                    <strong> SRM Institutions</strong>, managing over 8,000
                    applicants.
                  </li>
                  <li>
                    Improved performance using <strong>Redux Toolkit</strong>{" "}
                    and optimized component rendering, reducing UI delays by
                    8ms.
                  </li>
                  <li>
                    Collaborated in Agile teams, ensuring clean code,
                    performance, and accessibility across devices.
                  </li>
                </ul>

                <h4 className="mt--20">Technical Skills</h4>
                <ul>
                  <li>
                    <strong>Frontend:</strong> React.js, Redux, HTML5, CSS3,
                    Tailwind CSS, Bootstrap
                  </li>
                  <li>
                    <strong>Backend:</strong> Node.js, Express.js, REST APIs,
                    JWT Auth
                  </li>
                  <li>
                    <strong>Database:</strong> MongoDB, MySQL
                  </li>
                  <li>
                    <strong>Languages:</strong> JavaScript (ES6+), Python
                  </li>
                  <li>
                    <strong>Tools:</strong> Git, VS Code, Vercel, Docker,
                    Jenkins, AWS (basic)
                  </li>
                </ul>

                <h4 className="mt--20">Project Spotlight</h4>
                <p>
                  <strong>SRM & IIT Madras Student Dashboard</strong>
                  <br />
                  Built a responsive admission management portal serving over
                  8,000+ applicants annually. Designed dynamic dashboards for
                  application tracking, document verification, and payment
                  handling. Improved performance using{" "}
                  <strong>lazy loading</strong> and reusable components,
                  boosting load speed by 25%.
                </p>

                <h4 className="mt--20">Education</h4>
                <p>
                  <strong>B.Tech in Mechanical Engineering</strong>
                  <br />
                  Indian Institute of Information Technology (IIIT), Kadapa
                  <br />
                  <small>Aug 2019 – Jun 2023</small>
                </p>

                <h4 className="mt--20">Certifications</h4>
                <ul>
                  <li>Front-End Developer Intern – 3 Months</li>
                  <li>Full-Stack Development Course – Coursera</li>
                </ul>

                <h4 className="mt--20">Let’s Connect</h4>
                <p>
                  📧{" "}
                  <a href="mailto:raminenijaswanth26@gmail.com">
                    raminenijaswanth26@gmail.com
                  </a>
                  <br />
                  💼{" "}
                  <a href="https://www.linkedin.com/in/jaswanth-r-9285b2239/">
                    LinkedIn
                  </a>
                </p>

                <div className="button-area-banner-one tmp-scroll-trigger tmp-fade-in animation-order-4">
                  <a
                    className="tmp-btn hover-icon-reverse btn-border btn-md tmp-modern-button radius-round download-icon"
                    href="#downloadresume"
                  >
                    <div className="icon-reverse-wrapper">
                      <span className="btn-text">
                        <a
                          href="Jaswanth_R.pdf"
                          download="Jaswanth_R.pdf"
                          target="__blank"
                        >
                          Download Resume
                        </a>
                      </span>
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* experience popups */}

      <div className="modal fade" id="meritto" tabIndex="-1" aria-hidden="true">
        <div
          className="modal-dialog modal-dialog-centered modal-news"
          role="document"
        >
          <div className="modal-content">
            {/* ===== Modal Header ===== */}
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-x"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </span>
              </button>
            </div>

            {/* ===== Meritto Experience Content ===== */}
            <div className="modal-body">
              <div className="experience-details">
                <h3 className="title">Front-End Developer | Meritto</h3>
                <p className="subtitle">
                  A SaaS CRM built for student enrollment —{" "}
                  <strong>June 2024 – Present</strong>
                </p>

                <h5>Roles and Responsibilities</h5>
                <ul>
                  <li>
                    <i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i>
                    Developed and maintained a responsive student dashboard for
                    IIT Madras and SRM Group of Institutions, managing over{" "}
                    <strong>8,000 applicants annually</strong>.
                  </li>
                  <li>
                    <i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i>
                    Built pixel-perfect, responsive UIs using{" "}
                    <strong>React.js</strong> and implemented efficient global
                    state management with <strong>Redux</strong> and{" "}
                    <strong>Context API</strong>, leveraging
                    <strong> HTML5, CSS3, and Tailwind CSS</strong> for seamless
                    performance across devices.
                  </li>
                  <li>
                    <i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i>
                    Improved the dashboard’s responsiveness by refactoring state
                    management with
                    <strong> Redux Toolkit</strong>, reducing UI update delays
                    by <strong>8ms</strong> for over 8,000 active applicants.
                  </li>
                  <li>
                    <i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i>
                    Created secure RESTful APIs using <strong>Node.js</strong>{" "}
                    and <strong>Express.js</strong>, integrating with{" "}
                    <strong>MongoDB</strong> for database connectivity.
                  </li>
                  <li>
                    <i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i>
                    Helped improve code quality and maintainability through
                    regular code reviews and best practices, resulting in a{" "}
                    <strong>50% reduction in post-release bugs</strong>.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* g rank popup */}
      <div className="modal fade" id="g-rank" tabIndex="-1" aria-hidden="true">
        <div
          className="modal-dialog modal-dialog-centered modal-news"
          role="document"
        >
          <div className="modal-content">
            {/* ===== Modal Header ===== */}
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-x"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </span>
              </button>
            </div>

            {/* ===== G-Rank Experience Content ===== */}
            <div className="modal-body">
              <div className="experience-details">
                <h3 className="title">
                  Front-End Developer Intern | G-Rank Digital Marketing
                </h3>
                <p className="subtitle">
                  Hyderabad, India — <strong>Feb 2024 – May 2024</strong>
                </p>

                <h5>Roles and Responsibilities</h5>
                <ul>
                  <li>
                    <i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i>
                    Developed responsive and interactive web pages using{" "}
                    <strong>
                      HTML5, CSS3, JavaScript, jQuery, and Bootstrap
                    </strong>{" "}
                    according to client requirements.
                  </li>
                  <li>
                    <i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i>
                    Optimized website performance and SEO using tools such as{" "}
                    <strong>W3C Validator</strong>,{" "}
                    <strong>Google PageSpeed Insights</strong>, and{" "}
                    <strong>SEMrush</strong>.
                  </li>
                  <li>
                    <i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i>
                    Implemented <strong>CRUD operations</strong> in SQL
                    databases for managing and monitoring client-side
                    application data efficiently.
                  </li>
                  <li>
                    <i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i>
                    Collaborated with a team to integrate{" "}
                    <strong>Google reCAPTCHA</strong>,{" "}
                    <strong>QR code functionality</strong>, and{" "}
                    <strong>mail automation</strong> for brochure and contact
                    forms using <strong>PHP</strong>.
                  </li>
                  <li>
                    <i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i>
                    Assisted in <strong>UX improvements</strong> by simplifying
                    form interactions and enhancing mobile responsiveness across
                    multiple client projects.
                  </li>
                  <li>
                    <i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i>
                    Participated in{" "}
                    <strong>cross-browser compatibility testing</strong> to
                    ensure consistent performance across Chrome, Firefox, Edge,
                    and Safari.
                  </li>
                  <li>
                    <i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i>
                    Supported digital marketing efforts by creating landing
                    pages optimized for lead generation and conversion tracking.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* briclay */}

      <div className="modal fade" id="briclay" tabIndex="-1" aria-hidden="true">
        <div
          className="modal-dialog modal-dialog-centered modal-news"
          role="document"
        >
          <div className="modal-content">
            {/* ===== Modal Header ===== */}
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-x"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </span>
              </button>
            </div>

            {/* ===== Briclay Experience Content ===== */}
            <div className="modal-body">
              <div className="experience-details">
                <h3 className="title">
                  Front-End Consultant | NewTo Solutions Pvt Ltd
                </h3>
                <p className="subtitle">
                  <strong>Briclay Technologies</strong> —{" "}
                  <strong>July 2023 – July 2024</strong>
                </p>

                <h5>Roles and Responsibilities</h5>
                <ul>
                  <li>
                    <i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i>
                    Developed and deployed <strong>client websites</strong>{" "}
                    using <strong>React.js</strong> based on provided business
                    requirements, ensuring responsive and modern UI design.
                  </li>
                  <li>
                    <i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i>
                    Translated <strong>Figma</strong> into reusable and scalable
                    React components with <strong>Tailwind CSS</strong> and{" "}
                    <strong>Bootstrap</strong> for fast iteration.
                  </li>
                  <li>
                    <i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i>
                    Collaborated with backend developers to integrate{" "}
                    <strong>RESTful APIs</strong> and manage dynamic content
                    efficiently using <strong>Axios</strong> and{" "}
                    <strong>React Query</strong>.
                  </li>
                  <li>
                    <i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i>
                    Ensured <strong>cross-browser compatibility</strong> and
                    optimized load times through lazy loading, minification, and
                    asset compression.
                  </li>
                  <li>
                    <i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i>
                    Implemented form validation, modal interactions, and smooth
                    animations with React hooks and third-party libraries to
                    enhance user experience.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popups;
