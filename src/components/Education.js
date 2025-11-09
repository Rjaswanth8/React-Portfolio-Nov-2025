

// Data for education
const educationData = [
  {
    time: "2019 - 2023",
    title: "B.Tech - Mechanical Engineering",
    institute: "Indian Institute of Information Technology (IIIT), Kadapa",
  },
  {
    time: "2017 - 2019",
    title: "PUC",
    institute: "Indian Institute of Information Technology (IIIT), Kadapa",
  },
  {
    time: "2016 - 2017",
    title: "SSC",
    institute: "Z.P.H.S Pullur",
  },
  // {
  //   time: "2010 - 2011",
  //   title: "Design & Technology",
  //   institute: "Parsons, The New School",
  // },
];

// Reusable EducationItem component
const EducationItem = ({ time, title, institute, order }) => (
  <div className="paralax-image">
    <div
      className={`resume-single tmponhover single-animation tmp-scroll-trigger tmp-fade-in animation-order-${order}`}
    >
      <div className="time">
        <i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> {time}
      </div>
      <h3 className="resume-title">{title}</h3>
      <div className="institute">{institute}</div>
    </div>
  </div>
);

const Education = () => {
  return (
    <section className="resume-section tmp-section-gapTop" id="education">
      <div className="container">
        <div className="row justify-content-center animation-action-3">
          <div className="col-md-12">
            {/* Section Header */}
            <div className="section-header mb--50 tmp-scroll-trigger tmp-fade-in animation-order-1 text-center">
              <div className="section-head text-align-left mb--50">
          <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle theme-gradient">My Education</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            The foundation that shaped my passion <br /> for technology and design. 
          </h2>
        </div>
            </div>

            {/* Education Items */}
            <div className="resume-widget">
              {educationData.map((edu, index) => (
                <EducationItem
                  key={index}
                  {...edu}
                  order={index + 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
