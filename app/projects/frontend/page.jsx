"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    id: "titanium",
    number: "01",
    name: "Titanium",
    image: "/webdev1.png",
    category: "Creative Frontend",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    live:
      "https://titanium-1qd9irmt8-komalkhokales-projects.vercel.app/",
    github: "",
  },
  {
    id: "spylt",
    number: "02",
    name: "Spylt",
    image: "/webdev2.png",
    category: "Animated Website",
    technologies: ["React", "CSS", "GSAP", "Responsive UI"],
    live:
      "https://spylt-clone-imw4dw83e-komalkhokales-projects.vercel.app/",
    github: "",
  },
  {
    id: "vintage",
    number: "03",
    name: "Vintage",
    image: "/webdev3.png",
    category: "Editorial Website",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
    live: "https://komalkhokale.github.io/Vintage-Camera/",
    github: "",
  },
  {
    id: "miranda",
    number: "04",
    name: "Miranda",
    image: "/webdev4.png",
    category: "Creative Editorial",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    live: "https://komalkhokale.github.io/Miranda/",
    github: "",
  },
];

export default function FrontendProjectsPage() {
  const pageRef = useRef(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      timeline
        .from(".frontend-nav", {
          opacity: 0,
          y: -20,
          duration: 0.7,
        })
        .from(
          ".frontend-label",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.35",
        )
        .from(
          ".frontend-heading-line",
          {
            opacity: 0,
            y: 70,
            stagger: 0.12,
            duration: 0.85,
          },
          "-=0.3",
        )
        .from(
          ".frontend-copy",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
          },
          "-=0.45",
        );

      gsap.from(".frontend-project-card", {
        opacity: 0,
        y: 50,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".frontend-project-grid",
          start: "top 82%",
        },
      });
    },
    {
      scope: pageRef,
    },
  );

  return (
    <main
      ref={pageRef}
      className="relative min-h-screen overflow-hidden bg-[#171716] text-white"
    >
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[7.5%] top-0 h-full w-px bg-white/[0.04]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.025]" />
        <div className="absolute right-[7.5%] top-0 h-full w-px bg-white/[0.04]" />

        <motion.div
          animate={{
            opacity: [0.04, 0.1, 0.04],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-[18%] h-[430px] w-[430px] rounded-full bg-[#ff632f] blur-[170px]"
        />
      </div>

      {/* Navbar */}
      <header className="frontend-nav relative z-50 px-5 pt-5 sm:px-8 sm:pt-7 lg:px-10">
        <nav className="mx-auto flex max-w-[1650px] items-center justify-between">
          <Link
            href="/#projects"
            className="group flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.055] px-4 py-3 text-xs text-white/65 backdrop-blur-xl transition hover:border-white/25 hover:bg-white/10 hover:text-white sm:text-sm"
          >
            <ArrowLeft
              size={17}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            <span className="hidden sm:inline">Back to portfolio</span>
            <span className="sm:hidden">Back</span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.055] px-3.5 py-2.5 backdrop-blur-xl sm:px-4 sm:py-3"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#ff632f] text-[10px] font-semibold text-[#ff632f]">
              KK
            </span>

            <span className="hidden text-sm font-medium sm:inline">
              Komal
            </span>
          </Link>
        </nav>
      </header>

      <div className="relative z-10 mx-auto max-w-[1650px] px-5 pb-24 pt-16 sm:px-8 sm:pb-28 sm:pt-20 lg:px-10 lg:pb-32">
        {/* Page heading */}
        <section>
          <div className="frontend-label flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#ff632f]" />

              <p className="text-[10px] uppercase tracking-[0.3em] text-white/45 sm:text-xs">
                Frontend Projects
              </p>
            </div>

            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
              04 Selected Works
            </p>
          </div>

          <div className="grid gap-8 border-b border-white/10 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:py-14">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-white/35 sm:text-xs">
                Selected Work
              </p>

              <h1 className="text-[clamp(3.7rem,8vw,8rem)] font-medium uppercase leading-[0.82] tracking-[-0.065em]">
                <span className="block overflow-hidden">
                  <span className="frontend-heading-line block">
                    Frontend
                  </span>
                </span>

                <span className="block overflow-hidden">
                  <span className="frontend-heading-line block text-white/20">
                    Projects
                  </span>
                </span>
              </h1>
            </div>

            <div className="frontend-copy max-w-xl lg:justify-self-end">
              <p className="text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                Creative frontend projects focused on responsive layouts,
                smooth animation and clean visual experiences.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Responsive UI",
                  "JavaScript",
                  "React",
                  "GSAP",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] text-white/45 sm:text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects grid */}
        <section className="frontend-project-grid grid gap-x-6 gap-y-14 pt-12 md:grid-cols-2 lg:gap-x-8 lg:gap-y-20 lg:pt-16">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </section>

        {/* Bottom */}
        <section className="mt-20 border-y border-white/10 py-9 sm:mt-24">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/30">
                More work
              </p>

              <h2 className="mt-3 text-2xl font-medium tracking-[-0.035em] sm:text-3xl">
                Explore other project categories.
              </h2>
            </div>

            <Link
              href="/#projects"
              className="group inline-flex items-center gap-3 self-start rounded-full bg-[#ff632f] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#ff7547] sm:self-auto"
            >
              All Projects

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function ProjectCard({ project }) {
  const imageRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!imageRef.current || window.innerWidth < 768) return;

    const bounds = event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - bounds.left) / bounds.width - 0.5;

    const y =
      (event.clientY - bounds.top) / bounds.height - 0.5;

    gsap.to(imageRef.current, {
      x: x * 10,
      y: y * 8,
      scale: 1.035,
      duration: 0.75,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;

    gsap.to(imageRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.75,
      ease: "power3.out",
    });
  };

  return (
    <motion.article
      whileHover="hover"
      initial="initial"
      className="frontend-project-card group"
    >
      {/* Project image */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative aspect-[16/11] overflow-hidden border border-white/10 bg-[#232321] sm:aspect-[16/10]"
      >
        <div
          ref={imageRef}
          className="absolute -inset-[2%] will-change-transform"
        >
          <img
            src={project.image}
            alt={`${project.name} frontend project`}
            className="h-full w-full object-cover object-top"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent opacity-30 transition duration-500 group-hover:opacity-80" />

        <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 text-[10px] text-white/65 backdrop-blur-md sm:left-5 sm:top-5">
          {project.number}
        </div>

        <motion.div
          variants={{
            initial: {
              opacity: 0,
              y: 15,
            },
            hover: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            duration: 0.3,
          }}
          className="pointer-events-none absolute inset-x-5 bottom-5 flex items-center justify-between"
        >
          <span className="text-[10px] uppercase tracking-[0.26em] text-white/75">
            View Live Project
          </span>

          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff632f] text-white">
            <ArrowUpRight size={19} />
          </span>
        </motion.div>

        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.name} live project`}
          className="absolute inset-0 z-20"
        />
      </div>

      {/* Project information */}
      <div className="pt-5 sm:pt-6">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#ff632f] sm:text-xs">
              {project.category}
            </p>

            <h2 className="mt-2 text-3xl font-medium tracking-[-0.045em] sm:text-4xl">
              {project.name}
            </h2>
          </div>

          <span className="font-barlow text-3xl font-semibold text-white/12 sm:text-4xl">
            {project.number}
          </span>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-[10px] text-white/45 transition hover:border-[#ff632f]/40 hover:text-white sm:text-xs"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.035] px-5 py-3 text-sm text-white/65 transition hover:border-white/35 hover:bg-white/10 hover:text-white"
            >
              <FaGithub size={17} />
              GitHub
            </motion.a>
          )}

          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3 rounded-full bg-[#ff632f] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#ff7547]"
          >
            <ExternalLink size={16} />
            Live Demo

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}