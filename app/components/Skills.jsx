"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Code2,
  Database,
  Palette,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";

import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

import {
  SiExpress,
  SiFramer,
  SiGreensock,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiPostman,
  SiRedux,
  SiRender,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const marqueeSkills = [
  "React.js",
  "Next.js",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Redux Toolkit",
  "GSAP",
  "Framer Motion",
  "GenAI APIs",
  "REST APIs",
  "Figma",
];

const skillGroups = [
  {
    id: "01",
    title: "Frontend",
    description:
      "Responsive, accessible and interactive interfaces with clean component architecture.",
    icon: Code2,
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: FaJs },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "Redux Toolkit", icon: SiRedux },
    ],
  },
  {
    id: "02",
    title: "Backend",
    description:
      "Secure APIs, authentication, business logic, AI integrations and scalable server-side applications.",
    icon: Server,
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: Server },
      { name: "JWT Auth", icon: Sparkles },
      { name: "GenAI APIs", icon: Sparkles },
      { name: "Java", icon: FaJava },
    ],
  },
  {
    id: "03",
    title: "Database",
    description:
      "Structured database models, CRUD operations, aggregation and efficient data handling.",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: SiMongoose },
      { name: "Aggregation", icon: Database },
      { name: "Indexing", icon: Sparkles },
    ],
  },
  {
    id: "04",
    title: "Motion & UI",
    description:
      "Smooth interactions, scroll experiences and polished interface animations.",
    icon: Sparkles,
    skills: [
      { name: "GSAP", icon: SiGreensock },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Responsive UI", icon: Code2 },
      { name: "UI Animation", icon: Sparkles },
    ],
  },
  {
    id: "05",
    title: "Design",
    description:
      "Wireframes, prototypes, user flows and clean visual systems for web products.",
    icon: Palette,
    skills: [
      { name: "Figma", icon: FaFigma },
      { name: "Adobe XD", icon: Palette },
      { name: "Wireframing", icon: Palette },
      { name: "Prototyping", icon: Sparkles },
    ],
  },
  {
    id: "06",
    title: "Tools",
    description:
      "Development, testing, collaboration and deployment tools used in real projects.",
    icon: Wrench,
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const railRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeTweenRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".skills-corner", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.07,
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      });

      gsap.from(".skills-topbar", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
      });

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

      gsap.from(".skills-heading .char", {
        opacity: 0,
        y: 46,
        filter: "blur(6px)",
        stagger: 0.015,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ".skills-heading", start: "top 84%" },
      });

      gsap.from(".skills-copy", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".skills-copy", start: "top 84%" },
      });

      const track = marqueeRef.current;
      if (track) {
        marqueeTweenRef.current = gsap.to(track, {
          xPercent: -50,
          duration: 26,
          ease: "none",
          repeat: -1,
        });
      }

      gsap.from(".skill-card", {
        opacity: 0,
        y: 45,
        rotateX: -14,
        transformOrigin: "top center",
        stagger: 0.1,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: { trigger: ".skills-grid", start: "top 80%" },
      });

      gsap.from(".skill-corner", {
        opacity: 0,
        scale: 0.6,
        stagger: 0.1,
        delay: 0.25,
        duration: 0.5,
        ease: "back.out(3)",
        scrollTrigger: { trigger: ".skills-grid", start: "top 80%" },
      });
    },
    {
      scope: sectionRef,
    },
  );

  const handleCardMove = (event) => {
    if (window.innerWidth < 1024) return;
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    gsap.to(card, {
      rotateY: x * 8,
      rotateX: -y * 8,
      duration: 0.5,
      ease: "power3.out",
      transformPerspective: 700,
    });
  };

  const handleCardLeave = (event) => {
    gsap.to(event.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden bg-[#100E0C] px-5 py-24 text-[#F4EFE6] sm:px-8 sm:py-28 lg:px-10 lg:py-32"
    >
      <style>{`
        .font-display { font-family: var(--font-fraunces, ui-serif, Georgia, serif); }
        .font-code { font-family: var(--font-mono, ui-monospace, "SF Mono", monospace); }
      `}</style>

      {/* Background lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[7.5%] top-0 h-full w-px bg-[#F4EFE6]/[0.04]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-[#F4EFE6]/[0.025]" />
        <div className="absolute right-[7.5%] top-0 h-full w-px bg-[#F4EFE6]/[0.04]" />

        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.06, 0.14, 0.06] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-44 top-[35%] h-[440px] w-[440px] rounded-full bg-[#E8B94B] blur-[170px]"
        />
      </div>

      {/* Scroll progress rail */}
      <div className="pointer-events-none absolute left-[7.5%] top-0 hidden h-full w-px lg:block">
        <div ref={railRef} className="h-full w-px bg-[#E8B94B]" />
      </div>

      {/* Corner registration marks */}
      <span className="skills-corner pointer-events-none absolute left-4 top-4 h-5 w-5 border-l-2 border-t-2 border-[#E8B94B]/50 sm:left-7 sm:top-6" />
      <span className="skills-corner pointer-events-none absolute right-4 top-4 h-5 w-5 border-r-2 border-t-2 border-[#E8B94B]/50 sm:right-7 sm:top-6" />

      <div className="relative z-10 mx-auto max-w-[1650px]">
        {/* Top label */}
        <div className="skills-topbar flex items-center justify-between border-b border-[#F4EFE6]/10 pb-5">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#E8B94B]" />
            <p className="font-code text-[10px] uppercase tracking-[0.3em] text-[#F4EFE6]/45 sm:text-xs">
              Skills &amp; Technologies
            </p>
          </div>

          <p className="font-code text-[10px] uppercase tracking-[0.25em] text-[#F4EFE6]/30">
            04 / skills
          </p>
        </div>

        {/* Heading */}
        <div className="grid gap-8 border-b border-[#F4EFE6]/10 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:py-14">
          <div className="skills-heading" style={{ perspective: "600px" }}>
            <p className="font-code mb-4 text-[10px] uppercase tracking-[0.3em] text-[#F4EFE6]/35 sm:text-xs">
              my toolkit
            </p>

            <h2 className="font-display max-w-[760px] text-[clamp(3rem,5.8vw,6rem)] font-normal italic leading-[0.94] tracking-[-0.03em]">
              {"Skills that".split("").map((char, i) => (
                <span
                  key={i}
                  className="char inline-block will-change-transform"
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
              <span className="block text-[#F4EFE6]/22">
                {"power my work.".split("").map((char, i) => (
                  <span
                    key={i}
                    className="char inline-block will-change-transform"
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </h2>
          </div>

          <div className="skills-copy max-w-xl lg:justify-self-end">
            <p className="text-sm leading-7 text-[#F4EFE6]/50 sm:text-base sm:leading-8">
              I work across frontend, backend, databases, motion and UI design
              to build complete web applications from idea to deployment.
            </p>
          </div>
        </div>

        {/* Moving marquee, pausable on hover */}
        <div
          className="overflow-hidden border-b border-[#F4EFE6]/10 py-5 sm:py-6"
          onMouseEnter={() => marqueeTweenRef.current?.timeScale(0.15)}
          onMouseLeave={() => marqueeTweenRef.current?.timeScale(1)}
        >
          <div ref={marqueeRef} className="flex w-max items-center">
            {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
              <div key={`${skill}-${index}`} className="flex items-center">
                <span className="font-code px-6 text-xs uppercase tracking-[0.25em] text-[#F4EFE6]/40 sm:px-9 sm:text-sm">
                  {skill}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#E8B94B]/60" />
              </div>
            ))}
          </div>
        </div>

        {/* Skill cards */}
        <div
          className="skills-grid grid gap-4 pt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 lg:pt-12"
          style={{ perspective: "900px" }}
        >
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;

            return (
              <motion.article
                key={group.id}
                onMouseMove={handleCardMove}
                onMouseLeave={handleCardLeave}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="skill-card group relative overflow-hidden rounded-md border border-[#F4EFE6]/10 bg-[#1B1815] p-5 will-change-transform sm:p-6 lg:p-7"
              >
                <span className="skill-corner pointer-events-none absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-[#E8B94B]/70" />
                <span className="skill-corner pointer-events-none absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-[#E8B94B]/70" />

                {/* Hover background */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#E8B94B]/12 blur-[55px]" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#F4EFE6]/10 bg-[#F4EFE6]/[0.04] text-[#E8B94B] transition duration-300 group-hover:border-[#E8B94B]/40 group-hover:bg-[#E8B94B] group-hover:text-[#100E0C]">
                      <GroupIcon size={21} />
                    </div>

                    <span className="font-code text-xl font-semibold text-[#F4EFE6]/20 transition duration-300 group-hover:text-[#E8B94B]">
                      {group.id}
                    </span>
                  </div>

                  <h3 className="font-display mt-7 text-2xl italic tracking-[-0.02em] sm:text-[1.75rem]">
                    {group.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#F4EFE6]/42">
                    {group.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => {
                      const SkillIcon = skill.icon;

                      return (
                        <motion.div
                          key={skill.name}
                          whileHover={{ scale: 1.04, y: -2 }}
                          className="font-code flex items-center gap-2 rounded-sm border border-[#F4EFE6]/10 bg-[#100E0C] px-3.5 py-2 text-xs text-[#F4EFE6]/55 transition duration-300 hover:border-[#E8B94B]/45 hover:text-[#F4EFE6]"
                        >
                          <SkillIcon size={14} className="text-[#E8B94B]" />
                          <span>{skill.name}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-12 border-y border-[#F4EFE6]/10 py-8 sm:mt-16 sm:py-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-code text-[10px] uppercase tracking-[0.28em] text-[#F4EFE6]/30">
                currently exploring
              </p>

              <p className="font-display mt-3 text-lg italic tracking-[-0.01em] sm:text-xl">
                Advanced animations, system design and Generative AI.
              </p>
            </div>

            <div className="font-code flex items-center gap-2 rounded-md border border-[#F4EFE6]/10 bg-[#F4EFE6]/[0.03] px-4 py-2.5 text-xs text-[#F4EFE6]/50">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#E8B94B]" />
              always learning
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
