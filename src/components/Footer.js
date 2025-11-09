import React from "react";
import { useEffect, useRef } from "react";
import Quotes from "./Quotes";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const boxRef = useRef(null);
  const waterRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;
    const water = waterRef.current;
    const documentHeight = document.body.scrollHeight - window.innerHeight;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const percent = Math.min(
        Math.floor((scrollPosition / documentHeight) * 100),
        100
      );

      if (water) {
        water.style.transform = `translate(0, ${100 - percent}%)`;
      }

      if (box) {
        box.style.display = scrollPosition >= 200 ? "block" : "none";
      }
    };

    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    if (box) box.addEventListener("click", handleClick);

    // Preloader (optional)
    document.body.classList.add("preloader-active");
    window.addEventListener("load", () =>
      document.body.classList.remove("preloader-active")
    );

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (box) box.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {});

  return (
    <div>
      <div className="footer-stars-animation-wrapper-footer-two quote-main">
        <footer className="footer-area footer-style-two-wrapper bg-color-footer bg_images">
          <div className="container">
            <div className="footer-main footer-style-two">
              <div className="row g-5">
                <span class="subtitle theme-gradient text-center quote">
                  Console.log('Motivation');
                </span>
                <Quotes />
              </div>
            </div>
          </div>

          <div className="separator-animated-border"></div>
        </footer>

        {/* Copyright */}
        <div className="copyright-area-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="main-wrapper">
                  <p className="copy-right-para">
                    © R Jaswanth {currentYear} | All Rights Reserved
                  </p>
                  <ul>
                    <li>
                      <a href="#terms">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#privacy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#contact">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Shapes */}
        <div className="slider-bg-light">
          <img
            className="blocksync-scroll-trigger fade_in"
            src="/images/banner/shape/light-left.svg"
            alt="Top Light Shape"
          />
        </div>
        <div className="slider-bg-dot-shape">
          <div className="wrapper blocksync-scroll-trigger fade_in">
            <div className="blocksync-stars"></div>
            <div className="blocksync-stars2"></div>
            <div className="blocksync-stars3"></div>
          </div>
        </div>
      </div>
      <div className="scrollToTop" ref={boxRef} style={{ display: "none" }}>
        <div className="arrowUp">
          <i className="fa-light fa-arrow-up"></i>
        </div>

        <div
          className="water"
          ref={waterRef}
          style={{ transform: "translate(0px, 87%)" }}
        >
          {/* Back wave */}
          <svg viewBox="0 0 560 20" className="water_wave water_wave_back">
            <use href="#wave"></use>
          </svg>

          {/* Front wave */}
          <svg viewBox="0 0 560 20" className="water_wave water_wave_front">
            <use href="#wave"></use>
          </svg>

          {/* Hidden SVG symbol */}
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 560 20"
            style={{ display: "none" }}
          >
            <symbol id="wave">
              <path
                d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7v20H420z"
                fill="#fff"
              ></path>
              <path
                d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0v20H420z"
                fill="#fff"
              ></path>
              <path
                d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7v20H140z"
                fill="#fff"
              ></path>
              <path
                d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0v20H140z"
                fill="#fff"
              ></path>
            </symbol>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
