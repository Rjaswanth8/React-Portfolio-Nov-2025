import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* ===============================
     Theme Toggle
  =============================== */
  useEffect(() => {
    const body = document.body;
    if (isLightTheme) {
      body.classList.add("tmp-white-version");
    } else {
      body.classList.remove("tmp-white-version");
    }
  }, [isLightTheme]);

  const toggleTheme = () => setIsLightTheme((prev) => !prev);

  /* ===============================
     Sticky Header
  =============================== */
  useEffect(() => {
    const header = document.querySelector(".header--sticky");

    const handleScroll = () => {
      if (!header) return;
      if (window.scrollY > 150) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===============================
     Mobile Menu Open / Close
  =============================== */
  useEffect(() => {
    const body = document.body;
    if (isMobileMenuOpen) {
      body.classList.add("tmp-mobile-menu-open");
    } else {
      body.classList.remove("tmp-mobile-menu-open");
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  /* ===============================
     Scroll Animations + Rotating Text
  =============================== */
  useEffect(() => {
    // Scroll-based fade-ins
    gsap.utils.toArray(".tmp-scroll-trigger").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Rotating text animation
    const words = document.querySelectorAll(".cd-words-wrapper b");
    let current = 0;
    const rotateWords = () => {
      words[current].classList.remove("is-visible");
      words[current].classList.add("is-hidden");
      current = (current + 1) % words.length;
      words[current].classList.remove("is-hidden");
      words[current].classList.add("is-visible");
    };
    const interval = setInterval(rotateWords, 2000);
    return () => clearInterval(interval);
  }, []);

  /* ===============================
     JSX
  =============================== */
  return (
    <>
      {/* ===== Header Area Start ===== */}
      <header className="tmp-header-area-start header-one header--sticky header--transparent">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-content d-flex justify-content-between align-items-center">
                {/* ===== Navigation ===== */}
                <div className="tmp-mainmenu-nav d-none d-xl-block">
                  <nav className="navbar-example2 onepagenav">
                    <ul className="tmp-mainmenu nav nav-pills">
                      <li>
                        <a className="smoth-animation" href="#home">
                          Home
                        </a>
                      </li>
                      <li>
                        <a className="smoth-animation" href="#about">
                          About
                        </a>
                      </li>
                      <li>
                        <a className="smoth-animation" href="#education">
                          Education
                        </a>
                      </li>
                      <li>
                        <a className="smoth-animation" href="#experience">
                          Experience
                        </a>
                      </li>
                      <li>
                        <a className="smoth-animation" href="#project">
                          Projects
                        </a>
                      </li>
                      <li>
                        <a className="smoth-animation" href="#contact">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                {/* ===== Right Side Icons ===== */}
                <div className="tmp-header-right d-flex align-items-center gap-3">
                  {/* Social Links (Hidden on small) */}
                  <div className="social-share-wrapper d-none d-md-block">
                    <div className="social-link d-flex align-items-center gap-3">
                      <a
                        href="https://www.instagram.com/_.kittuchowdary._?igsh=YmVkNmoxcXhjYmRp"
                        target="__blank"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/jaswanth-r-9285b2239"
                        target="__blank"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                      <a
                        href="https://x.com/jaswanth_kittu?t=IdwY31PZDMmmoIIH3YPK8Q&s=09"
                        target="__blank"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a
                        href="https://www.facebook.com/share/1BHiaGtf6U/"
                        target="__blank"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      {/* ===== Theme Toggle (Visible everywhere) ===== */}
                    </div>
                  </div>
                  <a
                    onClick={toggleTheme}
                    className="theme-toggle-btn tmp-round-action-btn mobile-mode"
                    title={
                      isLightTheme
                        ? "Switch to Dark Mode"
                        : "Switch to Light Mode"
                    }
                    href="#!"
                  >
                    {isLightTheme ? (
                      <i className="fa-solid fa-moon"></i>
                    ) : (
                      <i className="fa-solid fa-sun-bright"></i>
                    )}
                  </a>

                  {/* ===== Mobile Menu Button ===== */}
                  <div className="tmp-side-collups-area d-block d-xl-none">
                    <button
                      className="hamberger-menu humberger_menu_active"
                      onClick={toggleMobileMenu}
                    >
                      <i className="fa-solid fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* ===== Header Area End ===== */}

      {/* ===== Mobile Menu ===== */}
      {isMobileMenuOpen && (
        <div className="tmp-popup-mobile-menu active">
          <div className="inner">
            <div className="header-top d-flex justify-content-between align-items-center">
              {/* <div className="logo">
                <a href="/">
                  <img src="/images/logo/white-logo-reeni.png" alt="logo" width={120} />
                </a>
              </div> */}
              <div className="close-menu">
                <button
                  className="close-button tmp-round-action-btn"
                  onClick={closeMobileMenu}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>

            <ul className="tmp-mainmenu onepagenav-click">
              <li>
                <a href="#home" onClick={closeMobileMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={closeMobileMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="#education" onClick={closeMobileMenu}>
                  Education
                </a>
              </li>
              <li>
                <a href="#experience" onClick={closeMobileMenu}>
                  Experience
                </a>
              </li>
              <li>
                <a href="#project" onClick={closeMobileMenu}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={closeMobileMenu}>
                  Contact
                </a>
              </li>
            </ul>

            <div className="social-wrapper mt--40">
              <span className="subtitle">Find me on</span>
              <div className="social-link">
                <a
                  href="https://www.instagram.com/_.kittuchowdary._"
                  target="__blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/jaswanth-r-9285b2239"
                  target="__blank"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://x.com/jaswanth_kittu" target="__blank">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="https://www.facebook.com/share/1BHiaGtf6U/"
                  target="__blank"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== Banner Section ===== */}
      <div className="tmp-banner-one-area add-pattern" id="home">
        <div className="container">
          <div className="banner-one-main-wrapper">
            <div className="row align-items-center">
              {/* === Right Side (Image) === */}
              <div className="col-lg-6 order-lg-2">
                <h2 className="banner-big-text-1 up-down text-center">
                  FRONT-END DEVELOPER
                </h2>
                <div className="banner-right-content">
                  {/* <img
                    className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                    src="/images/home_image.png"
                    alt="banner-img"
                  /> */}

                  {/* <h2 className="banner-big-text-2 up-down-2">
                    FRONT-END DEVELOPER
                  </h2> */}
                </div>
              </div>

              {/* === Left Side (Text) === */}
              <div className="col-lg-6 order-lg-1">
                <div className="inner">
                  <span className="sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                    Hello
                  </span>
                  <h1 className="title tmp-scroll-trigger tmp-fade-in animation-order-2 mt--5">
                    I’m <br />
                    <span className="name-highlight">
                      Ramineni Jaswanth
                    </span>{" "}
                    <br /> A{" "}
                    <span className="header-caption">
                      <span className="cd-headline clip is-full-width">
                        <span className="cd-words-wrapper">
                          <b className="is-visible theme-gradient">
                            Front-End Developer.
                          </b>
                          <b className="is-hidden theme-gradient">
                            Web Developer.
                          </b>
                          <b className="is-hidden theme-gradient">
                            Full-Stack Developer.
                          </b>
                        </span>
                      </span>
                    </span>
                  </h1>

                  <p className="disc tmp-scroll-trigger tmp-fade-in animation-order-3">
                    I build clean, responsive, and interactive web experiences
                    using React.js, modern CSS, and smooth animations.
                    Passionate about crafting UIs that are fast, accessible, and
                    visually engaging.
                  </p>

                  <div className="button-area-banner-one tmp-scroll-trigger tmp-fade-in animation-order-4">
                    <a
                      className="tmp-btn hover-icon-reverse btn-border btn-md tmp-modern-button radius-round download-icon"
                      href="Jaswanth_R.pdf"
                      download="Jaswanth_R.pdf"
                      target="__blank"
                    >
                      <div className="icon-reverse-wrapper">
                        <span className="btn-text">Download Resume</span>
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
              {/* === End Left Side === */}
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="slider-bg-light">
          <img
            className="blocksync-scroll-trigger fade_in animation-order-8"
            src="/images/banner/shape/light.svg"
            alt="Top Light Shape"
          />
        </div>
        <div className="slider-bg-dot-shape">
          <div className="wrapper blocksync-scroll-trigger blocksync-stars-area fade_in animation-order-16">
            <div className="blocksync-stars"></div>
            <div className="blocksync-stars2"></div>
            <div className="blocksync-stars3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
