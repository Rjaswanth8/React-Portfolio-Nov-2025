import { useEffect } from "react";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Popups from "./Popups";

const ExperienceData = [
  {
    icon: "fa-regular fa-briefcase",
    title: "Font-End Developer",
    subTitle: "NoPaperForms Solutions Limited",
    description:
      "Meritto – A SaaS CRM built for student enrollment and recruitment.",
    modalId: "meritto",
  },
  {
    icon: "fa-regular fa-briefcase",
    title: "Web Developer Intern",
    subTitle: "G - Rank Digital Marketing",
    description:
      "Developed and maintained interactive UI components with React.js and modern CSS frameworks.",
    modalId: "g-rank",
  },
  {
    icon: "fa-regular fa-briefcase",
    title: "Front-End - Consultant",
    subTitle: "NewTo Solutions Pvt Ltd",
    description:
      "Contributed to front-end development using HTML, CSS, JavaScript, and React.js for Briclay technologies.",
    modalId: "briclay",
  },
];

const ExperienceCard = ({
  icon,
  title,
  subTitle,
  description,
  order,
  modalId,
}) => (
  <div
    className={`service-item tmp-scroll-trigger tmp-fade-in animation-order-${order} ${
      order === 1 ? "current" : ""
    }`}
  >
    <div className="my-skill-card">
      <div className="card-icon">
        <i className={icon}></i>
      </div>
      <div className="card-title">
        <h3 className="main-title">{title}</h3>
        <p className="sub-title">{subTitle}</p>
      </div>
      <p className="card-para">{description}</p>
      <a
        href="#more"
        className="read-more-btn"
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
      >
        Read More{" "}
        <span className="read-more-icon">
          <i className="fa-solid fa-angle-right"></i>
        </span>
      </a>
    </div>
    <button className="service-link modal-popup"></button>
  </div>
);

const Experience = () => {
  useEffect(() => {
    // Service animation logic
    function serviceAnimation() {
      const $servicesWidget = $(".services-widget");
      const $activeBg = $servicesWidget.find(".active-bg");

      function updateActiveService($element) {
        if (!$element.length) return;

        const rect = $element[0].getBoundingClientRect();
        const topOff =
          rect.top - $servicesWidget[0].getBoundingClientRect().top;
        const height = $element.outerHeight();

        const $closestServiceItem = $element.closest(".service-item");
        if ($closestServiceItem.length) {
          $closestServiceItem.removeClass("mleave");
        }

        $servicesWidget.find(".service-item").each(function () {
          const $item = $(this);
          if (!$item.is($closestServiceItem)) {
            $item.addClass("mleave");
          }
        });

        $activeBg.css({
          top: topOff + "px",
          height: height + "px",
        });
      }

      $servicesWidget.on("mouseenter", ".service-item", function () {
        updateActiveService($(this));
      });

      $servicesWidget.on("mouseleave", function () {
        const $currentElement = $servicesWidget.find(".current");
        updateActiveService($currentElement);

        $servicesWidget.find(".service-item").each(function () {
          const $item = $(this);
          if (!$item.is($currentElement.closest(".service-item"))) {
            $item.removeClass("mleave");
          }
        });
      });

      // Initial call
      updateActiveService($servicesWidget.find(".current"));

      $servicesWidget.on("click", ".service-item", function () {
        $servicesWidget.find(".service-item").removeClass("current");
        $(this).addClass("current");
      });
    }

    // Initialize animation
    serviceAnimation();

    // Cleanup on unmount (to prevent duplicate handlers)
    return () => {
      $(".services-widget").off("mouseenter mouseleave click");
    };
  }, []);

  return (
    <section className="my-skill tmp-section-gapTop" id="experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-align-left mb--50">
          <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle theme-gradient">My Experience</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            A journey of building engaging, <br /> user-focused web interfaces.
          </h2>
        </div>

        {/* Skills Cards */}
        <div className="services-widget v1">
          {ExperienceData.map((skill, index) => (
            <ExperienceCard key={index} {...skill} order={index + 1} />
          ))}
          <div className="active-bg wow fadeInUp mleave"></div>
        </div>
      </div>
      <Popups />
    </section>
  );
};

export default Experience;
