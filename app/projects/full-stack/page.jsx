"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from "lucide-react";

import { FaGithub } from "react-icons/fa";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const GITHUB_PROFILE = "https://github.com/komalkhokale";

const projects = [
  {
    id: "queryverse-ai",
    number: "01",
    name: "QueryVerse AI",
    type: "Full Stack AI Platform",
    image: "/ai.png",
    description:
      "An AI-powered web platform that brings chat, image generation and code generation into one responsive application. It includes secure authentication, protected routes and persistent user data.",
    features: [
      "AI chat with conversational responses",
      "AI-powered image generation",
      "Code generation for development queries",
      "Secure JWT authentication",
      "Protected dashboard and user routes",
      "Responsive application interface",
    ],
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Gemini API",
      "LangChain",
      "Mistral AI",
    ],
    live: "https://queryverseai.onrender.com",
    github: GITHUB_PROFILE,
  },
  {
    id: "pehrawa",
    number: "02",
    name: "Pehrawa",
    type: "Fashion E-commerce Platform",
    image: "/pehrawa.png",
    description:
      "A modern fashion e-commerce platform with separate buyer and seller experiences. It supports product variants, cart, wishlist, secure payments, order tracking and seller management.",
    features: [
      "Buyer and seller authentication",
      "Product and variant management",
      "Cart and wishlist functionality",
      "Razorpay payment integration",
      "Order history and order tracking",
      "Seller dashboard and analytics",
      "Product reviews and ratings",
      "Responsive fashion-store interface",
    ],
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Razorpay",
      "Multer",
    ],
    live: "https://pehrawa.onrender.com",
    github: GITHUB_PROFILE,
  },
  {
    id: "video-buddy",
    number: "03",
    name: "Video Buddy",
    type: "Video Collaboration Platform",
    image: "/video.png",
    description:
      "A video-focused web application designed for discovering, sharing and interacting with video content through a clean and responsive interface.",
    features: [
      "Video browsing and playback",
      "User authentication",
      "Responsive video interface",
      "Dynamic video data rendering",
      "User-focused content experience",
      "Modern frontend interactions",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT",
    ],
    live: "https://frontend-videobuddy.onrender.com/",
    github: GITHUB_PROFILE,
  },
  {
    id: "zoom-job-portal",
    number: "04",
    name: "Job Portal",
    type: "Job Search Platform",
    image: "/job.png",
    description:
      "A job portal inspired by modern recruitment platforms where candidates can discover opportunities and employers can manage job listings through role-based workflows.",
    features: [
      "Candidate and recruiter accounts",
      "Job listing creation and management",
      "Search and filter functionality",
      "Job application workflow",
      "Role-based protected routes",
      "Responsive dashboard interface",
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST APIs",
    ],
    live: "",
    github: GITHUB_PROFILE,
  },
  {
    id: "docvita",
    number: "05",
    name: "DocVita",
    type: "Healthcare Web Platform",
    image: "/doc.png",
    description:
      "A healthcare-focused platform designed to make doctor discovery and appointment-related interactions simple, structured and accessible for users.",
    features: [
      "Doctor discovery interface",
      "Doctor profile pages",
      "Specialization-based browsing",
      "Appointment-oriented user flow",
      "Secure user authentication",
      "Responsive healthcare interface",
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST APIs",
    ],
    live: "",
    github: GITHUB_PROFILE,
  },
  {
    id: "linkora",
    number: "06",
    name: "Linkora",
    type: "Professional Networking Platform",
    image: "/link.png",
    description:
      "A LinkedIn-inspired professional networking platform where users can build profiles, connect with professionals and share career-focused content.",
    features: [
      "Professional user profiles",
      "Create and manage posts",
      "Like and comment interactions",
      "Connection and networking flow",
      "Dynamic activity feed",
      "Secure authentication",
      "Responsive social interface",
    ],
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST APIs",
    ],
    live: "",
    github: GITHUB_PROFILE,
  },
];

export default function FullStackProjectsPage() {
  const pageRef = useRef(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      timeline
        .from(".fullstack-navbar", {
          opacity: 0,
          y: -20,
          duration: 0.7,
        })
        .from(
          ".fullstack-label",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.35",
        )
        .from(
          ".fullstack-heading-line",
          {
            opacity: 0,
            y: 70,
            stagger: 0.12,
            duration: 0.85,
          },
          "-=0.3",
        )
        .from(
          ".fullstack-copy",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
          },
          "-=0.45",
        );

      gsap.from(".fullstack-project-card", {
        opacity: 0,
        y: 45,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".fullstack-project-grid",
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
      <header className="fullstack-navbar relative z-50 px-5 pt-5 sm:px-8 sm:pt-7 lg:px-10">
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

            <span className="hidden text-sm font-medium sm:inline">Komal</span>
          </Link>
        </nav>
      </header>

      <div className="relative z-10 mx-auto max-w-[1650px] px-5 pb-24 pt-16 sm:px-8 sm:pb-28 sm:pt-20 lg:px-10 lg:pb-32">
        {/* Header */}
        <section>
          <div className="fullstack-label flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#ff632f]" />

              <p className="text-[10px] uppercase tracking-[0.3em] text-white/45 sm:text-xs">
                Full Stack Projects
              </p>
            </div>

            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
              06 Selected Works
            </p>
          </div>

          <div className="grid gap-8 border-b border-white/10 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:py-14">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-white/35 sm:text-xs">
                Complete Web Products
              </p>

              <h1 className="text-[clamp(3.7rem,8vw,8rem)] font-medium uppercase leading-[0.82] tracking-[-0.065em]">
                <span className="block overflow-hidden">
                  <span className="fullstack-heading-line block">
                    Full Stack
                  </span>
                </span>

                <span className="block overflow-hidden">
                  <span className="fullstack-heading-line block text-white/20">
                    Projects
                  </span>
                </span>
              </h1>
            </div>

            <div className="fullstack-copy max-w-xl lg:justify-self-end">
              <p className="text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                Full-stack products combining responsive interfaces, backend
                APIs, databases, authentication, payments and AI integrations.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "MERN Stack",
                  "Authentication",
                  "REST APIs",
                  "Payments",
                  "Generative AI",
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

        {/* Project grid */}
        <section className="fullstack-project-grid grid gap-x-6 gap-y-16 pt-12 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-20 lg:pt-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>

        {/* Bottom */}
        <section className="mt-20 border-y border-white/10 py-9 sm:mt-28">
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
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    gsap.to(imageRef.current, {
      x: x * 10,
      y: y * 8,
      scale: 1.035,
      duration: 0.7,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;

    gsap.to(imageRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.7,
      ease: "power3.out",
    });
  };

  return (
    <motion.article className="fullstack-project-card group">
      {/* Thumbnail */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-[#222220]"
      >
        <div
          ref={imageRef}
          className="absolute -inset-[2%] will-change-transform"
        >
          <img
            src={project.image}
            alt={`${project.name} project thumbnail`}
            className="h-full w-full object-cover object-top"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent opacity-30 transition duration-500 group-hover:opacity-80" />

        <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/35 text-[10px] text-white/70 backdrop-blur-md sm:left-5 sm:top-5">
          {project.number}
        </span>

        <div className="absolute inset-x-5 bottom-5 flex translate-y-3 items-center justify-between opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/75">
            {project.live ? "View Live Project" : "View Source Code"}
          </p>

          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff632f]">
            <ArrowUpRight size={19} />
          </span>
        </div>

        <a
          href={project.live || project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.name}`}
          className="absolute inset-0 z-20"
        />
      </div>

      {/* Main information */}
      <div className="pt-6">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#ff632f] sm:text-xs">
              {project.type}
            </p>

            <h2 className="mt-2 text-3xl font-medium tracking-[-0.045em] sm:text-4xl">
              {project.name}
            </h2>
          </div>

          <span className="font-barlow text-3xl font-semibold text-white/12">
            {project.number}
          </span>
        </div>

        <p className="mt-5 text-sm leading-7 text-white/48 sm:text-[15px]">
          {project.description}
        </p>

        {/* Features */}
        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="text-[9px] uppercase tracking-[0.27em] text-white/28">
            Key Features
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div key={feature} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff632f]/12 text-[#ff632f]">
                  <Check size={12} />
                </span>

                <p className="text-xs leading-5 text-white/45 sm:text-[13px]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="text-[9px] uppercase tracking-[0.27em] text-white/28">
            Technologies
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-[10px] text-white/45 transition hover:border-[#ff632f]/40 hover:text-white sm:text-xs"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-7 flex flex-wrap gap-3">
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

          {project.live && (
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
          )}
        </div>
      </div>
    </motion.article>
  );
}
