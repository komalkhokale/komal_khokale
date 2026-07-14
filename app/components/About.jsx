"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const aboutText =
  "I build modern digital experiences where clean design, scalable development and thoughtful motion come together. I enjoy turning ideas into responsive web applications that feel smooth, useful and memorable.";

const headingLines = ["Code with", "creativity."];

const stats = [
  {
    value: 6,
    suffix: "+",
    label: "Major Projects",
    type: "count",
  },
  {
    value: 15,
    suffix: "+",
    label: "Technologies",
    type: "count",
  },
  {
    value: "MERN",
    label: "Core Stack",
    type: "text",
  },
  {
    value: 100,
    suffix: "%",
    label: "Responsive",
    type: "count",
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const railRef = useRef(null);
  const headingRef = useRef(null);
  const sideContentRef = useRef(null);
  const sideRailRef = useRef(null);
  const revealTextRef = useRef(null);
  const statsRef = useRef(null);
  const braceRef = useRef(null);
  const counterRefs = useRef([]);

  const words = aboutText.split(" ");

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const corners = section.querySelectorAll(".about-corner");
      const labels = section.querySelectorAll(".about-label");
      const headingChars = section.querySelectorAll(".heading-char");
      const revealWords = section.querySelectorAll(".reveal-word");
      const statCards = section.querySelectorAll(".about-stat");
      const statCorners = section.querySelectorAll(".stat-corner");
      const mernLetters = section.querySelectorAll(".mern-letter");
      const glyphs = section.querySelectorAll(".about-glyph");

      /* Corner marks */
      if (corners.length) {
        gsap.from(corners, {
          autoAlpha: 0,
          duration: 0.5,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        });
      }

      /* Top label */
      if (labels.length) {
        gsap.from(labels, {
          autoAlpha: 0,
          y: 30,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
          },
        });
      }

      /* Left scroll-progress rail */
      if (railRef.current) {
        gsap.fromTo(
          railRef.current,
          {
            scaleY: 0,
          },
          {
            scaleY: 1,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 72%",
              end: "bottom 30%",
              scrub: 0.6,
            },
          },
        );
      }

      /* Heading character reveal */
      if (headingRef.current && headingChars.length) {
        gsap.from(headingChars, {
          autoAlpha: 0,
          y: 46,
          rotateX: -40,
          filter: "blur(6px)",
          stagger: 0.018,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 84%",
          },
        });
      }

      /* Side content */
      if (sideContentRef.current) {
        gsap.from(sideContentRef.current, {
          autoAlpha: 0,
          x: 45,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sideContentRef.current,
            start: "top 84%",
          },
        });
      }

      /* Side content rail */
      if (sideRailRef.current && sideContentRef.current) {
        gsap.fromTo(
          sideRailRef.current,
          {
            scaleY: 0,
          },
          {
            scaleY: 1,
            transformOrigin: "top center",
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sideContentRef.current,
              start: "top 84%",
            },
          },
        );
      }

      /* Word-by-word reveal */
      if (revealTextRef.current && revealWords.length) {
        gsap.fromTo(
          revealWords,
          {
            color: "rgba(244,239,230,0.14)",
            filter: "blur(5px)",
            y: 12,
          },
          {
            color: "rgba(244,239,230,0.95)",
            filter: "blur(0px)",
            y: 0,
            stagger: 0.035,
            ease: "none",
            scrollTrigger: {
              trigger: revealTextRef.current,
              start: "top 78%",
              end: "bottom 48%",
              scrub: 1,
            },
          },
        );
      }

      /* Stat card reveal */
      if (statsRef.current && statCards.length) {
        gsap.from(statCards, {
          autoAlpha: 0,
          y: 50,
          rotateX: -18,
          transformOrigin: "top center",
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 84%",
          },
        });
      }

      /* Stat corner animation */
      if (statsRef.current && statCorners.length) {
        gsap.from(statCorners, {
          autoAlpha: 0,
          scale: 0.6,
          stagger: 0.08,
          duration: 0.5,
          delay: 0.2,
          ease: "back.out(3)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 84%",
          },
        });
      }

      /* Number counters */
      stats.forEach((stat, index) => {
        if (stat.type !== "count") return;

        const element = counterRefs.current[index];

        if (!element || !statsRef.current) return;

        const counter = {
          value: 0,
        };

        gsap.to(counter, {
          value: stat.value,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 84%",
            once: true,
          },
          onUpdate: () => {
            element.textContent = `${Math.round(counter.value)}${
              stat.suffix || ""
            }`;
          },
        });
      });

      /* MERN letters */
      if (statsRef.current && mernLetters.length) {
        gsap.from(mernLetters, {
          autoAlpha: 0,
          y: 14,
          filter: "blur(4px)",
          stagger: 0.06,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 84%",
          },
        });
      }

      /* Large braces */
      if (braceRef.current) {
        gsap.from(braceRef.current, {
          autoAlpha: 0,
          scale: 0.92,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        });

        gsap.to(braceRef.current, {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      /* Floating code labels */
      if (glyphs.length) {
        glyphs.forEach((glyph, index) => {
          gsap.to(glyph, {
            y: index % 2 === 0 ? -16 : 16,
            rotate: index % 2 === 0 ? -2 : 2,
            duration: 3.4 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      }

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    },
    {
      scope: sectionRef,
    },
  );

  const handleCardMove = (event) => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();

    const x = (event.clientX - bounds.left) / bounds.width - 0.5;

    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    gsap.to(card, {
      rotateY: x * 10,
      rotateX: -y * 10,
      duration: 0.5,
      ease: "power3.out",
      transformPerspective: 600,
      overwrite: true,
    });
  };

  const handleCardLeave = (event) => {
    gsap.to(event.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out",
      overwrite: true,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-[#100E0C] px-5 py-24 text-[#F4EFE6] sm:px-8 sm:py-32 lg:px-10 lg:py-40"
    >
      <style>{`
        .font-display {
          font-family: var(--font-fraunces, ui-serif, Georgia, serif);
        }

        .font-code {
          font-family: var(
            --font-mono,
            ui-monospace,
            "SFMono-Regular",
            Consolas,
            monospace
          );
        }
      `}</style>

      {/* Scroll progress rail */}
      <span
        ref={railRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[2px] origin-top bg-[#E8B94B]/70"
      />

      {/* Large background braces */}
      <div
        ref={braceRef}
        aria-hidden="true"
        className="about-brace pointer-events-none absolute inset-0 flex items-center justify-between px-1 sm:px-3"
      >
        <span
          className="font-display select-none text-[26vw] italic leading-none"
          style={{
            WebkitTextStroke: "1px #F4EFE6",
            color: "transparent",
            opacity: 0.06,
          }}
        >
          {"{"}
        </span>

        <span
          className="font-display select-none text-[26vw] italic leading-none"
          style={{
            WebkitTextStroke: "1px #F4EFE6",
            color: "transparent",
            opacity: 0.06,
          }}
        >
          {"}"}
        </span>
      </div>

      {/* Floating code labels */}
      {[
        {
          text: "const skills = [...]",
          style: {
            top: "14%",
            left: "3%",
          },
        },
        {
          text: "</>",
          style: {
            bottom: "20%",
            left: "2%",
          },
        },
        {
          text: "npm run build",
          style: {
            top: "16%",
            right: "3%",
          },
        },
        {
          text: "{ ready: true }",
          style: {
            bottom: "18%",
            right: "2%",
          },
        },
      ].map((glyph) => (
        <span
          key={glyph.text}
          aria-hidden="true"
          className="about-glyph font-code pointer-events-none absolute hidden select-none text-[11px] tracking-wide text-[#F4EFE6]/15 sm:block"
          style={glyph.style}
        >
          {glyph.text}
        </span>
      ))}

      {/* Background grid lines */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[7.5%] top-0 h-full w-px bg-[#F4EFE6]/[0.04]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-[#F4EFE6]/[0.025]" />
        <div className="absolute right-[7.5%] top-0 h-full w-px bg-[#F4EFE6]/[0.04]" />
      </div>

      {/* Background glow */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-[#E8B94B] blur-[150px]"
      />

      {/* Corner marks */}
      <span
        aria-hidden="true"
        className="about-corner pointer-events-none absolute left-4 top-4 h-5 w-5 border-l-2 border-t-2 border-[#E8B94B]/50 sm:left-7 sm:top-6"
      />

      <span
        aria-hidden="true"
        className="about-corner pointer-events-none absolute right-4 top-4 h-5 w-5 border-r-2 border-t-2 border-[#E8B94B]/50 sm:right-7 sm:top-6"
      />

      <div className="relative z-10 mx-auto max-w-[1650px]">
        {/* Top label */}
        <div className="about-label flex items-center justify-between border-b border-[#F4EFE6]/10 pb-5">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#E8B94B]" />

            <p className="font-code text-[10px] uppercase tracking-[0.3em] text-[#F4EFE6]/45 sm:text-xs">
              About Me
            </p>
          </div>

          <p className="font-code text-[10px] uppercase tracking-[0.26em] text-[#F4EFE6]/30">
            02 / About
          </p>
        </div>

        {/* Main about content */}
        <div className="grid gap-16 pt-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24 lg:pt-20">
          {/* Left column */}
          <div>
            <p className="font-code mb-5 text-[11px] uppercase tracking-[0.3em] text-[#F4EFE6]/35">
              Who I Am
            </p>

            <h2
              ref={headingRef}
              className="font-display max-w-[520px] text-[clamp(3rem,6vw,6.5rem)] font-normal italic leading-[0.95] tracking-[-0.03em]"
              style={{
                perspective: "600px",
              }}
            >
              {headingLines.map((line, lineIndex) => (
                <span key={line} className="block overflow-hidden">
                  <span
                    className={
                      lineIndex === 1 ? "text-[#F4EFE6]/25" : "text-[#F4EFE6]"
                    }
                  >
                    {line.split("").map((character, index) => (
                      <span
                        key={`${line}-${index}`}
                        className="heading-char inline-block will-change-transform"
                      >
                        {character === " " ? "\u00A0" : character}
                      </span>
                    ))}
                  </span>
                </span>
              ))}
            </h2>

            <div
              ref={sideContentRef}
              className="about-side-content relative mt-10 max-w-md pl-6"
            >
              <span
                ref={sideRailRef}
                aria-hidden="true"
                className="side-rail absolute left-0 top-0 h-full w-px origin-top bg-[#E8B94B]/60"
              />

              <p className="text-sm leading-7 text-[#F4EFE6]/50 sm:text-base">
                I&apos;m Komal Khokale, a Full Stack Developer focused on
                building polished interfaces and reliable web applications using
                modern JavaScript technologies.
              </p>

              <motion.a
                href="#projects"
                whileHover={{
                  x: 5,
                }}
                className="font-code group mt-7 inline-flex items-center gap-3 text-sm text-[#F4EFE6]"
              >
                Explore my projects
                <ArrowUpRight
                  size={17}
                  className="text-[#E8B94B] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.a>
            </div>
          </div>

          {/* Scroll reveal paragraph */}
          <div className="flex items-center">
            <p
              ref={revealTextRef}
              className="about-reveal-text max-w-[950px] text-[clamp(2rem,4.3vw,5rem)] font-medium leading-[1.12] tracking-[-0.045em]"
            >
              {words.map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  className="reveal-word mr-[0.22em] inline-block will-change-transform"
                >
                  {word}
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="about-stats mt-20 grid grid-cols-2 gap-3 lg:mt-28 lg:grid-cols-4 lg:gap-4"
          style={{
            perspective: "800px",
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              onMouseMove={handleCardMove}
              onMouseLeave={handleCardLeave}
              className="about-stat group relative overflow-hidden rounded-md border border-[#F4EFE6]/10 bg-[#1B1815] p-5 will-change-transform sm:p-7"
            >
              <span
                aria-hidden="true"
                className="stat-corner pointer-events-none absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-[#E8B94B]/70"
              />

              <span
                aria-hidden="true"
                className="stat-corner pointer-events-none absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-[#E8B94B]/70"
              />

              <div className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-normal italic tracking-[-0.02em] text-[#F4EFE6]">
                {stat.type === "count" ? (
                  <span
                    ref={(element) => {
                      counterRefs.current[index] = element;
                    }}
                  >
                    0{stat.suffix}
                  </span>
                ) : (
                  <span className="not-italic">
                    {String(stat.value)
                      .split("")
                      .map((character, characterIndex) => (
                        <span
                          key={`${character}-${characterIndex}`}
                          className="mern-letter inline-block"
                        >
                          {character}
                        </span>
                      ))}
                  </span>
                )}
              </div>

              <p className="font-code mt-2 text-[10px] uppercase tracking-[0.2em] text-[#F4EFE6]/40">
                {stat.label}
              </p>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[#E8B94B]/0 transition-colors duration-300 group-hover:bg-[#E8B94B]/[0.03]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}