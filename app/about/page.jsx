"use client";

import React, { useRef } from "react";
import "./about.css";
import { FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const AboutContent = () => {
  const aboutRef = useRef(null);
  const goalRef = useRef(null);
  const skillsRef = useRef(null);
  const eduRef = useRef(null);
  const skillImgsRef = useRef([]);

  useGSAP(() => {
    /* ================= ABOUT TEXT (HEAVY PRO) ================= */
    const aboutSplit = SplitText.create(".about p", {
      type: "words",
    });

    gsap.fromTo(
      aboutSplit.words,
      {
        yPercent: 160,
        rotateX: 90,
        opacity: 0,
        filter: "blur(6px)",
      },
      {
        yPercent: 0,
        rotateX: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.015,
        ease: "power4.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 75%",
          end: "bottom 40%",
          scrub: true,
        },
      }
    );

    gsap.to(aboutSplit.words, {
      color: "#faeade",
      stagger: 0.02,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 70%",
        end: "bottom 45%",
        scrub: true,
      },
    });

    /* ================= REPO BUTTON ================= */
    gsap.fromTo(
      ".repo-btn",
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".repo-btn",
          start: "top 85%",
        },
      }
    );

    /* ================= HEADINGS ================= */
    gsap.fromTo(
      ".about-goal h2, .skills-head h1, .edu-heading",
      {
        y: 80,
        scale: 0.9,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "expo.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: ".about-container",
          start: "top 70%",
        },
      }
    );

    /* ================= GOAL ================= */
    gsap.fromTo(
      goalRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: goalRef.current,
          start: "top 80%",
        },
      }
    );

    /* ================= SKILLS SECTION ================= */
    gsap.fromTo(
      skillsRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
        },
      }
    );

    /* ================= EDUCATION ================= */
    gsap.fromTo(
      ".timeline-item",
      {
        y: 120,
        scale: 0.85,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: eduRef.current,
          start: "top 80%",
        },
      }
    );

    /* ================= SKILL IMAGES — SCROLL SCRUB (BOX WISE) ================= */

    const skillBoxes = gsap.utils.toArray(".skill-box");

    skillBoxes.forEach((box) => {
      const imgs = box.querySelectorAll("img");

      if (!imgs.length) return;

      gsap.fromTo(
        imgs,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: box, // 👈 har skill box ka apna trigger
            start: "top 85%",
            end: "top 45%",
            scrub: true, // 👈 SCROLL = ANIMATION
          },
        }
      );
    });
  });

  return (
    <div className="about-container">
      {/* ================= ABOUT ================= */}
      <div className="about" ref={aboutRef}>
        <p>
          Hello, I&apos;m Komal..! <br />A{" "}
          <b>
            <i>Full-Stack Developer</i>
          </b>{" "}
          &{" "}
          <b>
            <i>UI/UX Designer</i>
          </b>
          . I focus on building robust, scalable applications with seamless user
          experiences.
        </p>

        <br />
        <br />

        <p>
          Design is my emotion, Code is my expression. I blend both to create
          projects that are visually appealing, meaningful, and practical.
        </p>

        <br />
        <br />

        <p>
          When I’m not coding, I explore design ideas, read tech trends, and
          find inspiration from the world around me.
        </p>

        <a
          href="https://github.com/komalkhokale"
          target="_blank"
          rel="noopener noreferrer"
          className="repo-btn"
        >
          Watch My Repo <FaGithub size={22} />
        </a>
      </div>

      {/* ================= GOAL ================= */}
      <div className="about-goal" ref={goalRef}>
        <h2>What I&apos;m Looking For</h2>
        <p>
          I&apos;m looking for opportunities as a{" "}
          <b>Full-Stack / Frontend Developer / UI/UX Designer</b> where I can
          work on real-world products, learn from experienced teams, and grow as
          a developer & designer.
        </p>
      </div>

      <div className="section-divider"></div>

      {/* ================= SKILLS ================= */}
      <div className="skills" ref={skillsRef}>
        <div className="skills-head">
          <h1>
            Things I&apos;m <span>good</span> at.
          </h1>
          <p>Skills, interests, passion and hobbies.</p>
        </div>

        <div className="skill-box">
          <h4 className="sub_heading">Programming</h4>
          <div className="img">
            <img
              src="/js.png"
              ref={(el) => el && skillImgsRef.current.push(el)}
            />
            <img
              src="/java.png"
              ref={(el) => el && skillImgsRef.current.push(el)}
            />
          </div>
        </div>

        <div className="skill-box">
          <h4 className="sub_heading">Web Development</h4>
          <div className="img">
            <img
              src="/react.png"
              ref={(el) => el && skillImgsRef.current.push(el)}
            />
            <img
              src="/htmk.png"
              ref={(el) => el && skillImgsRef.current.push(el)}
            />
            <img
              src="/css.png"
              ref={(el) => el && skillImgsRef.current.push(el)}
            />
            <img
              src="/tailwind.png"
              ref={(el) => el && skillImgsRef.current.push(el)}
            />
            <img
              src="/next.png"
              ref={(el) => el && skillImgsRef.current.push(el)}
            />
          </div>
        </div>

        <div className="skill-box">
          <h4 className="sub_heading">Backend & Database</h4>
          <div className="img">
            <img
              src="/node.png"
              ref={(el) => el && skillImgsRef.current.push(el)}
            />
            <img
              src="/express.png"
              ref={(el) => el && skillImgsRef.current.push(el)}
            />
            <img
              src="/docker.png"
              ref={(el) => el && skillImgsRef.current.push(el)}
            />
            <img
              src="/mongo.png"
              ref={(el) => el && skillImgsRef.current.push(el)}
            />
          </div>
        </div>

        <div className="skill-box">
          <h4 className="sub_heading">Version Control & Tools</h4>
          <div className="img">
            <img
              src="/git.png"
              ref={(el) => el && skillImgsRef.current.push(el)}
            />
            <img
              src="/github.png"
              ref={(el) => el && skillImgsRef.current.push(el)}
            />
            <img
              src="/postman.png"
              ref={(el) => el && skillImgsRef.current.push(el)}
            />
            <img
              src="/vs.png"
              ref={(el) => el && skillImgsRef.current.push(el)}
            />
            <img
              src="/cursor.png"
              ref={(el) => el && skillImgsRef.current.push(el)}
            />
            <img
              src="/figma.png"
              ref={(el) => el && skillImgsRef.current.push(el)}
            />
            <img
              src="/adobe.png"
              ref={(el) => el && skillImgsRef.current.push(el)}
            />
            <img
              src="/canva.png"
              ref={(el) => el && skillImgsRef.current.push(el)}
            />
          </div>
        </div>

        <div className="skill-box">
          <h4 className="sub_heading">Designing Techniques</h4>
          <p>- Prototyping, - Wireframing, - UI Design.</p>
        </div>

        <div className="skill-box">
          <h4 className="sub_heading">Deployment</h4>
          <p>- Render, - Vercel, - CI/CD.</p>
        </div>

        <div className="skill-box">
          <h4 className="sub_heading">My Strengths</h4>
          <p>
            - Clean, scalable & maintainable code <br />
            - Strong UI sense with UX thinking <br />
            - Quick learner & team-friendly mindset <br />- Detail-oriented
            design approach
          </p>
        </div>

        <div className="skill-box">
          <h4 className="sub_heading">Hobbies</h4>
          <p>- Cooking, - Drawing, - Traveling.</p>
        </div>
      </div>

      <div className="section-divider"></div>

      {/* ================= EDUCATION ================= */}
      <div className="education-section" ref={eduRef}>
        <h1 className="edu-heading">
          My <span>Education</span>
        </h1>

        <div className="timeline">
          <div className="timeline-item">
            <div className="circle"></div>
            <div className="content">
              <h3 className="edu-title">BE — Computer Engineering</h3>
              <p className="year">2022 – 2025</p>
              <p className="college">
                Brahma Valley College of Engineering & Research Institute
              </p>
              <p className="grade">
                CGPA <span>8.10</span>
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="circle"></div>
            <div className="content">
              <h3 className="edu-title">Diploma — Computer Engineering</h3>
              <p className="year">2020 – 2022</p>
              <p className="college">SND College</p>
              <p className="grade">
                Percentage <span>81.94%</span>
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="circle"></div>
            <div className="content">
              <h3 className="edu-title">SSC</h3>
              <p className="year">2018 – 2019</p>
              <p className="college">ZP School</p>
              <p className="grade">
                Percentage <span>81.20%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
