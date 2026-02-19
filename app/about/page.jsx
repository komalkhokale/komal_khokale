"use client";

import React, { useRef } from "react";
import "./about.css";
import { FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { BiArrowFromTop, BiArrowToBottom } from "react-icons/bi";
import { BsArrowDown } from "react-icons/bs";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, SplitText);

const AboutContent = () => {
  const aboutRef = useRef(null);
  const goalRef = useRef(null);
  const skillsRef = useRef(null);
  const eduRef = useRef(null);
  const skillImgsRef = useRef([]);

  const data = [
    { id: 1, img: "/1.png" },
    { id: 2, img: "/2.png" },
    { id: 3, img: "/1.png" },
    { id: 4, img: "/2.png" },
  ];

  // useGSAP(() => {
  //   /* ================= ABOUT TEXT (HEAVY PRO) ================= */
  //   const aboutSplit = SplitText.create(".about p", {
  //     type: "words",
  //   });

  //   gsap.fromTo(
  //     aboutSplit.words,
  //     {
  //       yPercent: 160,
  //       rotateX: 90,
  //       opacity: 0,
  //       filter: "blur(6px)",
  //     },
  //     {
  //       yPercent: 0,
  //       rotateX: 0,
  //       opacity: 1,
  //       filter: "blur(0px)",
  //       stagger: 0.015,
  //       ease: "power4.out",
  //       scrollTrigger: {
  //         trigger: aboutRef.current,
  //         start: "top 75%",
  //         end: "bottom 40%",
  //         scrub: true,
  //       },
  //     }
  //   );

  //   gsap.to(aboutSplit.words, {
  //     color: "#faeade",
  //     stagger: 0.02,
  //     scrollTrigger: {
  //       trigger: aboutRef.current,
  //       start: "top 70%",
  //       end: "bottom 45%",
  //       scrub: true,
  //     },
  //   });

  //   /* ================= REPO BUTTON ================= */
  //   gsap.fromTo(
  //     ".repo-btn",
  //     { opacity: 0, y: 50, scale: 0.9 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       scale: 1,
  //       duration: 0.8,
  //       ease: "expo.out",
  //       scrollTrigger: {
  //         trigger: ".repo-btn",
  //         start: "top 85%",
  //       },
  //     }
  //   );

  //   /* ================= HEADINGS ================= */
  //   gsap.fromTo(
  //     ".about-goal h2, .skills-head h1, .edu-heading",
  //     {
  //       y: 80,
  //       scale: 0.9,
  //       opacity: 0,
  //     },
  //     {
  //       y: 0,
  //       scale: 1,
  //       opacity: 1,
  //       duration: 1,
  //       ease: "expo.out",
  //       stagger: 0.25,
  //       scrollTrigger: {
  //         trigger: ".about-container",
  //         start: "top 70%",
  //       },
  //     }
  //   );

  //   /* ================= GOAL ================= */
  //   gsap.fromTo(
  //     goalRef.current,
  //     { opacity: 0, y: 100 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       ease: "power4.out",
  //       scrollTrigger: {
  //         trigger: goalRef.current,
  //         start: "top 80%",
  //       },
  //     }
  //   );

  //   /* ================= SKILLS SECTION ================= */
  //   gsap.fromTo(
  //     skillsRef.current,
  //     { opacity: 0, y: 100 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       ease: "power4.out",
  //       scrollTrigger: {
  //         trigger: skillsRef.current,
  //         start: "top 80%",
  //       },
  //     }
  //   );

  //   /* ================= EDUCATION ================= */
  //   gsap.fromTo(
  //     ".timeline-item",
  //     {
  //       y: 120,
  //       scale: 0.85,
  //       opacity: 0,
  //     },
  //     {
  //       y: 0,
  //       scale: 1,
  //       opacity: 1,
  //       duration: 1,
  //       ease: "power4.out",
  //       stagger: 0.25,
  //       scrollTrigger: {
  //         trigger: eduRef.current,
  //         start: "top 80%",
  //       },
  //     }
  //   );

  //   /* ================= SKILL IMAGES — SCROLL SCRUB (BOX WISE) ================= */

  //   const skillBoxes = gsap.utils.toArray(".skill-box");

  //   skillBoxes.forEach((box) => {
  //     const imgs = box.querySelectorAll("img");

  //     if (!imgs.length) return;

  //     gsap.fromTo(
  //       imgs,
  //       {
  //         y: 60,
  //         opacity: 0,
  //       },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         ease: "power2.out",
  //         stagger: 0.12,
  //         scrollTrigger: {
  //           trigger: box, // 👈 har skill box ka apna trigger
  //           start: "top 85%",
  //           end: "top 45%",
  //           scrub: true, // 👈 SCROLL = ANIMATION
  //         },
  //       }
  //     );
  //   });
  // });

  return (
    <div className="about-container">
      {/* ================= ABOUT ================= */}

      <div className="about-section" ref={aboutRef}>
        <div className="about-right">
          <img src="/about.png" alt="Profile" />
        </div>
        <div className="about-left">
          <h1 className="about-title">Meet Komal</h1>

          <p className="about-desc">
            I'm Komal, a passionate <b>UI/UX & Frontend Designer</b> based in
            India. UI/UX Designer with 7 months of internship experience in
            designing user-centric and responsive web interfaces. Skilled in
            wireframing, prototyping, and visual design using Figma and Adobe
            XD. Experienced in collaborating with developers to deliver
            intuitive and engaging digital experiences
          </p>

          <div className="about-divider" />

          {/* TAGS */}
          <div className="about-tags">
            <span>UI/UX Design</span>
            <span>App Design</span>
            <span>Web Design</span>
            <span>UX Design</span>
            <span>Prototyping</span>
            <span>Wireframing</span>
            <span>Figma</span>
            <span>Photoshop</span>
            <span>Frontend Developer</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JS</span>
            <span>React</span>
            <span>GSAP</span>
            <span>Framer</span>
          </div>

          <div className="about-divider" />

          {/* EXPERIENCE */}
          <div className="about-exp">
            <div className="exp-row">
              <span>UI/UX Designer</span>
              <span>Solution Tech Media</span>
              <span>Oct 2025 - Dec 2025</span>
            </div>
            <div className="exp-row">
              <span>UI/UX Designer</span>
              <span>Kreativity</span>
              <span>March 2024 - Aug 2024</span>
            </div>
            <div className="exp-row">
              <span>UI/UX Designer</span>
              <span>Probity</span>
              <span>Jan 20024 - Feb 2024</span>
            </div>
          </div>
        </div>
      </div>

      <div className="about-divider" />

      <button className="recent">
        Recent Works <BsArrowDown />{" "}
      </button>

      <section className="case-section">
        <div className="case-grid">
          <Link href="/case-study/case1" className="case-card">
            <img src="/2.png" alt="case study" />
            <div className="case-overlay">
              <button className="case-btn">
                View Case Study <span>↗</span>
              </button>
            </div>
          </Link>

          <Link href="/case-study/case2" className="case-card">
            <img src="/1.png" alt="case study" />
            <div className="case-overlay">
              <button className="case-btn">
                View Case Study <span>↗</span>
              </button>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
