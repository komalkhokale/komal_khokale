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
  { value: 4, suffix: "+", label: "Major Projects", type: "count" },
  { value: 15, suffix: "+", label: "Technologies", type: "count" },
  { value: "MERN", label: "Core Stack", type: "text" },
  { value: 100, suffix: "%", label: "Responsive", type: "count" },
];

const stack = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "TypeScript",
  "Tailwind",
  "GSAP",
  "Framer Motion",
  "Redux",
];

export default function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const railRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeTweenRef = useRef(null);
  const cardRefs = useRef([]);

  const words = aboutText.split(" ");

  useGSAP(
    () => {
      /* Corner marks + top label */
      gsap.from(".about-corner", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.07,
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      });

      gsap.from(".about-label", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      /* Scroll progress rail on the left edge */
      gsap.fromTo(
        railRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 0.6,
          },
        },
      );

      /* Heading — per-character reveal, blur + rise */
      gsap.from(".heading-char", {
        opacity: 0,
        y: 46,
        rotateX: -40,
        filter: "blur(6px)",
        stagger: 0.018,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 82%" },
      });

      /* Quote block slide-in + its left rail growing */
      gsap.from(".about-side-content", {
        opacity: 0,
        x: 50,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-side-content", start: "top 82%" },
      });

      gsap.fromTo(
        ".side-rail",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 0.9,
          ease: "power3.out",
          transformOrigin: "top",
          scrollTrigger: { trigger: ".about-side-content", start: "top 82%" },
        },
      );

      /* Word-by-word scrub reveal, with an amber sweep trailing the reveal edge */
      gsap.fromTo(
        ".reveal-word",
        { color: "rgba(244,239,230,0.14)", filter: "blur(5px)", y: 12 },
        {
          color: "rgba(244,239,230,0.95)",
          filter: "blur(0px)",
          y: 0,
          stagger: 0.035,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-reveal-text",
            start: "top 78%",
            end: "bottom 48%",
            scrub: 1,
          },
        },
      );

      /* Stat cards — staggered rise with a slight 3D tilt-in */
      gsap.from(".about-stat", {
        opacity: 0,
        y: 50,
        rotateX: -18,
        transformOrigin: "top center",
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-stats", start: "top 84%" },
      });

      /* Stat corner brackets pop in just after each card */
      gsap.from(".stat-corner", {
        opacity: 0,
        scale: 0.6,
        stagger: 0.12,
        duration: 0.5,
        delay: 0.25,
        ease: "back.out(3)",
        scrollTrigger: { trigger: ".about-stats", start: "top 84%" },
      });

      /* Number counters */
      stats.forEach((stat, i) => {
        if (stat.type !== "count") return;

        const el = cardRefs.current[i];
        if (!el) return;

        const counter = { val: 0 };

        gsap.to(counter, {
          val: stat.value,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: ".about-stats", start: "top 84%" },
          onUpdate: () => {
            el.textContent = Math.round(counter.val) + stat.suffix;
          },
        });
      });

      /* MERN — letterform reveal instead of a counter */
      gsap.from(".mern-letter", {
        opacity: 0,
        y: 14,
        filter: "blur(4px)",
        stagger: 0.06,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: { trigger: ".about-stats", start: "top 84%" },
      });

      /* Infinite tech marquee */
      const track = marqueeRef.current;
      if (track) {
        const tween = gsap.to(track, {
          xPercent: -50,
          duration: 22,
          ease: "none",
          repeat: -1,
        });
        marqueeTweenRef.current = tween;

        gsap.from(track, {
          opacity: 0,
          duration: 1,
          scrollTrigger: { trigger: track, start: "top 95%" },
        });
      }

      /* Oversized brace watermark — settles in instead of a flat grid */
      gsap.from(".about-brace", {
        opacity: 0,
        scale: 0.9,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      });

      gsap.to(".about-brace", {
        yPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      /* Drifting code glyphs, each on its own float loop */
      gsap.utils.toArray(".about-glyph").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -16 : 16,
          rotate: i % 2 === 0 ? -2 : 2,
          duration: 3.4 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    },
    { scope: sectionRef },
  );

  /* Per-card magnetic tilt on mousemove (desktop only) */
  const handleCardMove = (event, index) => {
    if (window.innerWidth < 1024) return;
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
    });
  };

  const handleCardLeave = (event) => {
    gsap.to(event.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-[#100E0C] px-5 py-24 text-[#F4EFE6] sm:px-8 sm:py-32 lg:px-10 lg:py-40"
    >
      <style>{`
        .font-display { font-family: var(--font-fraunces, ui-serif, Georgia, serif); }
        .font-code { font-family: var(--font-mono, ui-monospace, "SF Mono", monospace); }
      `}</style>

      {/* Oversized brace watermark, replacing the flat grid */}
      <div className="about-brace pointer-events-none absolute inset-0 flex items-center justify-between px-1 sm:px-3">
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

      {/* Drifting code glyphs */}
      {[
        { text: "const skills = [...]", style: { top: "14%", left: "3%" } },
        { text: "</>", style: { bottom: "20%", left: "2%" } },
        { text: "npm run build", style: { top: "16%", right: "3%" } },
        { text: "{ ready: true }", style: { bottom: "18%", right: "2%" } },
      ].map((g) => (
        <span
          key={g.text}
          className="about-glyph font-code pointer-events-none absolute hidden select-none text-[11px] tracking-wide text-[#F4EFE6]/15 sm:block"
          style={g.style}
        >
          {g.text}
        </span>
      ))}

      {/* Background lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[7.5%] top-0 h-full w-px bg-[#F4EFE6]/[0.04]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-[#F4EFE6]/[0.025]" />
        <div className="absolute right-[7.5%] top-0 h-full w-px bg-[#F4EFE6]/[0.04]" />
      </div>

      {/* Scroll progress rail */}
      <div className="pointer-events-none absolute left-[7.5%] top-0 hidden h-full w-px lg:block">
        <div ref={railRef} className="h-full w-px bg-[#E8B94B]" />
      </div>

      {/* Glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-[#E8B94B] blur-[150px]"
      />

      {/* Corner registration marks, consistent with the hero */}
      <span className="about-corner pointer-events-none absolute left-4 top-4 h-5 w-5 border-l-2 border-t-2 border-[#E8B94B]/50 sm:left-7 sm:top-6" />
      <span className="about-corner pointer-events-none absolute right-4 top-4 h-5 w-5 border-r-2 border-t-2 border-[#E8B94B]/50 sm:right-7 sm:top-6" />

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
            02 / about
          </p>
        </div>

        <div className="grid gap-16 pt-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24 lg:pt-20">
          {/* Left side */}
          <div>
            <p className="font-code mb-5 text-[11px] uppercase tracking-[0.3em] text-[#F4EFE6]/35">
              who i am
            </p>

            <h2
              ref={headingRef}
              className="font-display max-w-[520px] text-[clamp(3rem,6vw,6.5rem)] font-normal italic leading-[0.95] tracking-[-0.03em]"
              style={{ perspective: "600px" }}
            >
              {headingLines.map((line, lineIndex) => (
                <span key={line} className="block overflow-hidden">
                  <span
                    className={
                      lineIndex === 1 ? "text-[#F4EFE6]/25" : "text-[#F4EFE6]"
                    }
                  >
                    {line.split("").map((char, i) => (
                      <span
                        key={`${char}-${i}`}
                        className="heading-char inline-block will-change-transform"
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </span>
                </span>
              ))}
            </h2>

            <div className="about-side-content relative mt-10 max-w-md pl-6">
              <span className="side-rail absolute left-0 top-0 h-full w-px bg-[#E8B94B]/60" />

              <p className="text-sm leading-7 text-[#F4EFE6]/50 sm:text-base">
                I&apos;m Komal Khokale, a Full Stack Developer focused on
                building polished interfaces and reliable web applications using
                modern JavaScript technologies.
              </p>

              <motion.a
                href="#projects"
                whileHover={{ x: 5 }}
                className="font-code group mt-7 inline-flex items-center gap-3 text-sm text-[#F4EFE6]"
              >
                explore my projects
                <ArrowUpRight
                  size={17}
                  className="text-[#E8B94B] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.a>
            </div>
          </div>

          {/* Reveal text */}
          <div className="flex items-center">
            <p className="about-reveal-text max-w-[950px] text-[clamp(2rem,4.3vw,5rem)] font-medium leading-[1.12] tracking-[-0.045em]">
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

        {/* Stats row */}
        <div
          className="about-stats mt-20 grid grid-cols-2 gap-3 lg:mt-28 lg:grid-cols-4 lg:gap-4"
          style={{ perspective: "800px" }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              onMouseMove={(e) => handleCardMove(e, i)}
              onMouseLeave={handleCardLeave}
              className="about-stat group relative overflow-hidden rounded-md border border-[#F4EFE6]/10 bg-[#1B1815] p-5 will-change-transform sm:p-7"
            >
              <span className="stat-corner pointer-events-none absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-[#E8B94B]/70" />
              <span className="stat-corner pointer-events-none absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-[#E8B94B]/70" />

              <div className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-normal italic tracking-[-0.02em] text-[#F4EFE6]">
                {stat.type === "count" ? (
                  <span ref={(el) => (cardRefs.current[i] = el)}>
                    0{stat.suffix}
                  </span>
                ) : (
                  <span className="not-italic">
                    {String(stat.value)
                      .split("")
                      .map((char, ci) => (
                        <span key={ci} className="mern-letter inline-block">
                          {char}
                        </span>
                      ))}
                  </span>
                )}
              </div>

              <p className="font-code mt-2 text-[10px] uppercase tracking-[0.2em] text-[#F4EFE6]/40">
                {stat.label}
              </p>

              <div className="pointer-events-none absolute inset-0 bg-[#E8B94B]/0 transition-colors duration-300 group-hover:bg-[#E8B94B]/[0.03]" />
            </div>
          ))}
        </div>

        {/* Infinite tech marquee */}
        <div
          className="relative mt-16 overflow-hidden border-t border-[#F4EFE6]/10 pt-8 lg:mt-20"
          onMouseEnter={() => marqueeTweenRef.current?.timeScale(0.15)}
          onMouseLeave={() => marqueeTweenRef.current?.timeScale(1)}
        >
          <div ref={marqueeRef} className="flex w-max items-center gap-10">
            {[...stack, ...stack].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="font-code flex items-center gap-10 text-sm uppercase tracking-[0.15em] text-[#F4EFE6]/35"
              >
                {tech}
                <span className="h-1 w-1 rounded-full bg-[#E8B94B]/50" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
