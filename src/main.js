// src/utils/main.js
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";

gsap.registerPlugin(ScrollTrigger);

/* ===============================
   1️⃣ Scroll-based CSS Animation Trigger (Smooth & No Blink)
   =============================== */
export const initScrollAnimations = () => {
  const elements = document.querySelectorAll(".tmp-scroll-trigger");

  // Ensure offscreen state before intersection starts
  elements.forEach((el) => el.classList.add("tmp-scroll-trigger--offscreen"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("tmp-scroll-trigger--visible");
          entry.target.classList.remove("tmp-scroll-trigger--offscreen");
          // Animate only once for smoothness
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 } // trigger when 20% visible
  );

  elements.forEach((el) => observer.observe(el));

  // Cleanup
  return () => observer.disconnect();
};

/* ===============================
   2️⃣ Odometer Number Counter (No Blink)
   =============================== */
export const initOdometer = () => {
  const odometers = document.querySelectorAll(".odometer");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const odometer = entry.target;
        if (entry.isIntersecting && !odometer.classList.contains("odometer-triggered")) {
          const count = odometer.getAttribute("data-count");
          odometer.textContent = count;
          odometer.classList.add("odometer-triggered");
        }
      });
    },
    { threshold: 0.3 }
  );

  odometers.forEach((odo) => observer.observe(odo));

  return () => observer.disconnect();
};

/* ===============================
   3️⃣ VanillaTilt (3D Hover)
   =============================== */
export const initTilt = () => {
  const tiltEls = document.querySelectorAll(".paralax-image, .tilt-container");
  tiltEls.forEach((el) => {
    VanillaTilt.init(el, {
      max: 3,          // very small tilt
  speed: 300,      // slower, smoother animation
  perspective: 800, // moderate depth
  scale: 1.02,     // small scaling effect
  glare: false,    // turn off glare for subtlety
  easing: "cubic-bezier(.03,.98,.52,.99)"
    });
  });
};

/* ===============================
   4️⃣ Gradient Background Animation
   =============================== */
export const initGradientAnimation = () => {
  const gradients = document.querySelectorAll(".tmp-gradient-wrapper");
  const rotating = document.querySelectorAll(".tmp-gradient-animation");

  if (gradients.length) {
    gsap.to(gradients, {
      scale: 0.9,
      repeat: -1,
      duration: 4,
      yoyo: true,
      ease: Linear.easeNone,
    });
  }

  if (rotating.length) {
    gsap.to(rotating, {
      rotation: 360,
      repeat: -1,
      duration: 8,
      ease: Linear.easeNone,
    });
  }
};

/* ===============================
   5️⃣ Initialize All Animations (React-safe)
   =============================== */
export const initMainAnimations = () => {
  const cleanupScroll = initScrollAnimations();
  const cleanupOdometer = initOdometer();
  initTilt();
  initGradientAnimation();

  // Cleanup for React useEffect
  return () => {
    cleanupScroll && cleanupScroll();
    cleanupOdometer && cleanupOdometer();
  };
};
