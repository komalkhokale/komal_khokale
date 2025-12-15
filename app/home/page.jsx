"use client";

import React from "react";
import "./home.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const HeroContent = () => {
  return (
    <div className="hero">

      {/* Floating Image */}
      <motion.div
        className="img-wrapper"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        whileInView={{
          y: [0, -15, 0],
        }}
        viewport={{ once: false }}
      >
        <img src="/pic.png" alt="Komal's Photo" width={400} height={450} />
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="right"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          <span className="hero_heading">Hello, I&apos;M</span> <br /> KOMAL.
        </h1>

        {/* Typing Text */}
        <h4 className="typing-text">
          <Typewriter
            words={[
              "A Full-Stack Developer.",
              "A UI/UX Designer.",
              "I Build Clean & Smooth Interfaces.",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h4>

        {/* Social Icons */}
        <div className="social-links">
          <a href="https://github.com/komalkhokale" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/komal-khokale-4a3ba7278/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://x.com/komalkhokale" target="_blank">
            <FaTwitter />
          </a>
        </div>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
           <a
            href="/komal_khokale.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >Download Resume</a>
        </motion.button>
      </motion.div>

    </div>
  );
};

export default HeroContent;
