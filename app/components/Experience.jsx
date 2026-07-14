"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  Minus,
  Plus,
} from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const experiences = [
  {
    id: 1,
    number: "01",
    role: "Frontend Developer",
    company: "CognexiaAI",
    duration: "Feb 2026 — May 2026",
    location: "Mumbai",
    category: "Development",
    skills: ["React", "Next.js", "Tailwind CSS", "REST APIs"],
    description: [
      "Developed responsive web applications using React, Next.js and Tailwind CSS.",
      "Built reusable UI components and improved website responsiveness across devices.",
      "Integrated APIs and handled dynamic data rendering on frontend applications.",
      "Collaborated with team members to develop and debug application features.",
    ],
  },
  {
    id: 2,
    number: "02",
    role: "Web Development Intern",
    company: "Solution Tech Media",
    duration: "Aug 2025 — Jan 2026",
    location: "Thane, Mumbai",
    category: "Full Stack",
    skills: ["Frontend", "Backend", "REST APIs", "MongoDB", "Git"],
    description: [
      "Worked on full-stack web application development across frontend and backend functionalities.",
      "Developed responsive user interfaces and integrated APIs for dynamic data handling.",
      "Assisted in backend development, database operations and feature implementation.",
      "Collaborated through Git-based workflows, debugging and code reviews.",
    ],
  },
  {
    id: 3,
    number: "03",
    role: "Web Development Intern",
    company: "Probity",
    duration: "Jan 2024 — Mar 2024",
    location: "Nashik",
    category: "MERN Stack",
    skills: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    description: [
      "Developed responsive user interfaces using React.js and Tailwind CSS.",
      "Built REST APIs using Node.js and Express.js.",
      "Integrated MongoDB for database management and CRUD operations.",
      "Implemented user authentication using JWT.",
    ],
  },
  {
    id: 4,
    number: "04",
    role: "UI/UX Design Intern",
    company: "Kreativity",
    duration: "Feb 2024 — Aug 2024",
    location: "Nashik",
    category: "Product Design",
    skills: ["Figma", "Adobe XD", "Wireframes", "Prototypes", "User Research"],
    description: [
      "Designed user-friendly and visually appealing UI layouts for web applications.",
      "Created wireframes, user flows and interactive prototypes using Figma and Adobe XD.",
      "Improved interface consistency and the overall user experience.",
      "Collaborated with team members on real project designs.",
      "Applied design improvements based on feedback and basic user research.",
    ],
  },
  {
    id: 5,
    number: "05",
    role: "UI/UX Design Intern",
    company: "Probity",
    duration: "Jan 2024 — Feb 2024",
    location: "Nashik",
    category: "UI Design",
    skills: [
      "UI Design",
      "Wireframing",
      "Design Systems",
      "Feedback Iteration",
    ],
    description: [
      "Assisted in UI design and wireframing for web projects.",
      "Worked on design improvements based on feedback.",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const railRef = useRef(null);
  const toggleRefs = useRef([]);
  const [activeExperience, setActiveExperience] = useState(1);

  const activeItem = experiences.find((item) => item.id === activeExperience);

  useGSAP(
    () => {
      gsap.from(".experience-corner", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.07,
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      });

      gsap.from(".experience-topbar", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
        },
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

      gsap.from(".experience-heading .char", {
        opacity: 0,
        y: 42,
        filter: "blur(6px)",
        stagger: 0.02,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experience-heading",
          start: "top 84%",
        },
      });

      gsap.from(".experience-copy", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experience-copy",
          start: "top 84%",
        },
      });

      gsap.from(".experience-item", {
        opacity: 0,
        y: 38,
        stagger: 0.1,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experience-list",
          start: "top 82%",
        },
      });
    },
    {
      scope: sectionRef,
    },
  );

  const toggleExperience = (id) => {
    setActiveExperience((current) => (current === id ? null : id));
  };

  const handleToggleMove = (event, index) => {
    if (window.innerWidth < 1024) return;
    const el = toggleRefs.current[index];
    if (!el) return;
    const bounds = el.getBoundingClientRect();
    const x = (event.clientX - bounds.left - bounds.width / 2) * 0.4;
    const y = (event.clientY - bounds.top - bounds.height / 2) * 0.4;
    gsap.to(el, { x, y, duration: 0.35, ease: "power3.out" });
  };

  const handleToggleLeave = (index) => {
    const el = toggleRefs.current[index];
    if (!el) return;
    gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative overflow-hidden bg-[#100E0C] px-5 py-24 text-[#F4EFE6] sm:px-8 sm:py-28 lg:px-10 lg:py-32"
    >
      <style>{`
        .font-display { font-family: var(--font-fraunces, ui-serif, Georgia, serif); }
        .font-code { font-family: var(--font-mono, ui-monospace, "SF Mono", monospace); }
      `}</style>

      {/* Giant background number — reflects whichever role is open */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden pr-2 sm:pr-6">
        <AnimatePresence mode="wait">
          <motion.span
            key={activeItem ? activeItem.number : "00"}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.05, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display select-none text-[42vw] italic leading-none"
            style={{ WebkitTextStroke: "1px #F4EFE6", color: "transparent" }}
          >
            {activeItem ? activeItem.number : "00"}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Background lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[7.5%] top-0 h-full w-px bg-[#F4EFE6]/[0.04]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-[#F4EFE6]/[0.025]" />
        <div className="absolute right-[7.5%] top-0 h-full w-px bg-[#F4EFE6]/[0.04]" />

        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.06, 0.14, 0.06] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 top-[30%] h-[420px] w-[420px] rounded-full bg-[#E8B94B] blur-[165px]"
        />
      </div>

      {/* Scroll progress rail */}
      <div className="pointer-events-none absolute left-[7.5%] top-0 hidden h-full w-px lg:block">
        <div ref={railRef} className="h-full w-px bg-[#E8B94B]" />
      </div>

      {/* Corner registration marks */}
      <span className="experience-corner pointer-events-none absolute left-4 top-4 h-5 w-5 border-l-2 border-t-2 border-[#E8B94B]/50 sm:left-7 sm:top-6" />
      <span className="experience-corner pointer-events-none absolute right-4 top-4 h-5 w-5 border-r-2 border-t-2 border-[#E8B94B]/50 sm:right-7 sm:top-6" />

      <div className="relative z-10 mx-auto max-w-[1650px]">
        {/* Section label */}
        <div className="experience-topbar flex items-center justify-between border-b border-[#F4EFE6]/10 pb-5">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#E8B94B]" />
            <p className="font-code text-[10px] uppercase tracking-[0.3em] text-[#F4EFE6]/45 sm:text-xs">
              Work Experience
            </p>
          </div>

          <p className="font-code text-[10px] uppercase tracking-[0.25em] text-[#F4EFE6]/30">
            03 / experience
          </p>
        </div>

        {/* Compact intro */}
        <div className="grid gap-8 border-b border-[#F4EFE6]/10 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:py-14">
          <div className="experience-heading" style={{ perspective: "600px" }}>
            <p className="font-code mb-4 text-[10px] uppercase tracking-[0.3em] text-[#F4EFE6]/35 sm:text-xs">
              my journey
            </p>

            <h2 className="font-display max-w-[760px] text-[clamp(3rem,5.8vw,6rem)] font-normal italic leading-[0.94] tracking-[-0.03em]">
              {"Experience".split("").map((char, i) => (
                <span
                  key={i}
                  className="char inline-block will-change-transform"
                >
                  {char}
                </span>
              ))}
              <span className="ml-2 text-[#F4EFE6]/22 sm:ml-3">
                {"& Growth".split("").map((char, i) => (
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

          <div className="experience-copy max-w-xl lg:justify-self-end">
            <p className="text-sm leading-7 text-[#F4EFE6]/50 sm:text-base sm:leading-8">
              My journey spans frontend development, full-stack engineering and
              interface design, with a focus on building polished and practical
              digital products.
            </p>

            <div className="font-code mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.22em] text-[#F4EFE6]/30 sm:text-xs">
              <BriefcaseBusiness size={15} className="text-[#E8B94B]" />
              <span>Development</span>
              <span className="text-[#F4EFE6]/15">•</span>
              <span>Design</span>
              <span className="text-[#F4EFE6]/15">•</span>
              <span>Collaboration</span>
            </div>
          </div>
        </div>

        {/* Experience accordion */}
        <div className="experience-list">
          {experiences.map((experience, index) => {
            const isActive = activeExperience === experience.id;

            return (
              <article
                key={experience.id}
                className="experience-item relative border-b border-[#F4EFE6]/10"
              >
                {/* Active-row indicator, glides between rows via shared layout id */}
                {isActive && (
                  <motion.span
                    layoutId="experience-active-bar"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    className="absolute -left-4 top-0 hidden h-full w-[3px] bg-[#E8B94B] sm:-left-7 lg:block"
                  />
                )}

                <button
                  type="button"
                  onClick={() => toggleExperience(experience.id)}
                  aria-expanded={isActive}
                  className="group grid w-full cursor-pointer gap-5 py-7 text-left transition-colors duration-300 sm:py-8 lg:grid-cols-[0.1fr_0.38fr_1fr_0.45fr_0.1fr] lg:items-center lg:gap-6"
                >
                  <span
                    className={`font-code text-xl font-semibold transition-colors duration-300 ${
                      isActive
                        ? "text-[#E8B94B]"
                        : "text-[#F4EFE6]/25 group-hover:text-[#E8B94B]/70"
                    }`}
                  >
                    {experience.number}
                  </span>

                  <div className="font-code flex items-center gap-2 text-xs text-[#F4EFE6]/35">
                    <CalendarDays size={14} />
                    <span>{experience.duration}</span>
                  </div>

                  <div>
                    <p className="font-code text-[10px] uppercase tracking-[0.24em] text-[#E8B94B] sm:text-xs">
                      {experience.company}
                    </p>

                    <h3 className="font-display mt-2 text-2xl italic tracking-[-0.02em] text-[#F4EFE6] transition duration-300 group-hover:translate-x-1 sm:text-[2rem] lg:text-[2.15rem]">
                      {experience.role}
                    </h3>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-sm text-[#F4EFE6]/45">
                      <MapPin size={14} />
                      <span>{experience.location}</span>
                    </div>

                    <p className="font-code mt-2 text-[10px] uppercase tracking-[0.24em] text-[#F4EFE6]/25">
                      {experience.category}
                    </p>
                  </div>

                  <div className="flex justify-end">
                    <span
                      ref={(el) => (toggleRefs.current[index] = el)}
                      onMouseMove={(event) => handleToggleMove(event, index)}
                      onMouseLeave={() => handleToggleLeave(index)}
                      className={`flex h-10 w-10 items-center justify-center rounded-md border transition-colors duration-300 ${
                        isActive
                          ? "border-[#E8B94B] bg-[#E8B94B] text-[#100E0C]"
                          : "border-[#F4EFE6]/15 bg-[#F4EFE6]/[0.03] text-[#F4EFE6]/55 group-hover:border-[#E8B94B]/40 group-hover:text-[#F4EFE6]"
                      }`}
                    >
                      {isActive ? <Minus size={17} /> : <Plus size={17} />}
                    </span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                        opacity: { duration: 0.3 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 sm:pb-10">
                        <div className="relative mx-auto max-w-[1220px] rounded-md border border-[#F4EFE6]/10 bg-[#1B1815] p-5 sm:p-7 lg:p-8">
                          <span className="pointer-events-none absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-[#E8B94B]/70" />
                          <span className="pointer-events-none absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-[#E8B94B]/70" />

                          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
                            {/* Skills */}
                            <div>
                              <p className="font-code text-[10px] uppercase tracking-[0.28em] text-[#F4EFE6]/30">
                                tools &amp; technologies
                              </p>

                              <div className="mt-4 flex flex-wrap gap-2">
                                {experience.skills.map((skill, i) => (
                                  <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.04 }}
                                    className="font-code rounded-sm border border-[#F4EFE6]/10 bg-[#100E0C] px-3.5 py-2 text-xs text-[#F4EFE6]/60 transition-colors hover:border-[#E8B94B]/40 hover:text-[#F4EFE6]"
                                  >
                                    {skill}
                                  </motion.span>
                                ))}
                              </div>
                            </div>

                            {/* Contributions */}
                            <div>
                              <p className="font-code text-[10px] uppercase tracking-[0.28em] text-[#F4EFE6]/30">
                                key contributions
                              </p>

                              <div className="mt-5 space-y-3">
                                {experience.description.map((item, i) => (
                                  <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: 14 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex gap-3 rounded-md border border-[#F4EFE6]/[0.06] bg-[#100E0C] px-4 py-3"
                                  >
                                    <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8B94B]" />
                                    <p className="text-sm leading-6 text-[#F4EFE6]/55 sm:text-[15px]">
                                      {item}
                                    </p>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
