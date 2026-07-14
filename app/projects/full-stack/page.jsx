"use client";

/**
 * Uses the same font setup as Hero.jsx / GraphicsPage — add once in app/layout.js:
 *
 *   import { Fraunces, JetBrains_Mono } from "next/font/google";
 *   const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", style: ["normal", "italic"] });
 *   const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
 *   // <body className={`${fraunces.variable} ${mono.variable}`}>
 *
 * Falls back to font-serif / font-mono if skipped, so it still works out of the box.
 */

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
      const timeline = gsap.timeline({ defaults: { ease: "power4.out" } });

      timeline
        .from(".fullstack-navbar", { opacity: 0, y: -20, duration: 0.7 })
        .from(
          ".fullstack-label",
          { opacity: 0, y: 20, duration: 0.6 },
          "-=0.35",
        )
        .from(
          ".fullstack-heading-line",
          { opacity: 0, y: 70, stagger: 0.12, duration: 0.85 },
          "-=0.3",
        )
        .from(
          ".fullstack-copy",
          { opacity: 0, y: 25, duration: 0.7 },
          "-=0.45",
        );

      gsap.from(".fullstack-project-card", {
        opacity: 0,
        y: 45,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".fullstack-project-grid", start: "top 82%" },
      });
    },
    { scope: pageRef },
  );

  return (
    <main
      ref={pageRef}
      className="relative min-h-screen overflow-hidden bg-[#100E0C] text-[#F4EFE6]"
    >
      <style>{`
        .font-display { font-family: var(--font-fraunces, ui-serif, Georgia, serif); }
        .font-code { font-family: var(--font-mono, ui-monospace, "SF Mono", monospace); }
      `}</style>

      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[7.5%] top-0 h-full w-px bg-[#F4EFE6]/[0.04]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-[#F4EFE6]/[0.025]" />
        <div className="absolute right-[7.5%] top-0 h-full w-px bg-[#F4EFE6]/[0.04]" />

        <motion.div
          animate={{ opacity: [0.12, 0.24, 0.12], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 top-[18%] h-[430px] w-[430px] rounded-full bg-[#E8B94B]/40 blur-[170px]"
        />

        <motion.span
          animate={{ opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="font-display absolute -bottom-[10vw] -left-[4vw] select-none text-[26vw] italic leading-none"
          style={{ WebkitTextStroke: "1px #F4EFE6", color: "transparent" }}
        >
          &lt;/&gt;
        </motion.span>
      </div>

      {/* Navbar — matches Hero.jsx / GraphicsPage pill nav */}
      <header className="fullstack-navbar relative z-50 px-5 pt-5 sm:px-8 sm:pt-7 lg:px-10">
        <nav className="mx-auto flex max-w-[1650px] items-center justify-between">
          <Link
            href="/#projects"
            className="group flex items-center gap-2.5 rounded-md border border-[#F4EFE6]/10 bg-[#F4EFE6]/[0.04] px-4 py-3 text-xs text-[#F4EFE6]/65 backdrop-blur-xl transition duration-300 hover:border-[#E8B94B]/40 hover:text-[#F4EFE6] sm:text-sm"
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
            className="flex items-center gap-2.5 rounded-md border border-[#F4EFE6]/10 bg-[#F4EFE6]/[0.04] px-3.5 py-2.5 backdrop-blur-xl sm:px-4 sm:py-3"
          >
            <span className="font-code flex h-6 items-center rounded-sm bg-[#E8B94B] px-1.5 text-[10px] font-semibold text-[#100E0C]">
              KK
            </span>
            <span className="font-code hidden text-xs text-[#F4EFE6]/70 sm:inline">
              komal<span className="text-[#E8B94B]">.dev</span>
            </span>
          </Link>
        </nav>
      </header>

      <div className="relative z-10 mx-auto max-w-[1650px] px-5 pb-24 pt-16 sm:px-8 sm:pb-28 sm:pt-20 lg:px-10 lg:pb-32">
        {/* Header */}
        <section>
          <div className="fullstack-label flex items-center justify-between border-b border-[#F4EFE6]/10 pb-5">
            <div className="font-code inline-flex items-center gap-2 text-[11px] text-[#F4EFE6]/55">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#E8B94B]" />
              <span className="text-[#E8B94B]/80">$</span> ls --category
              <span className="text-[#F4EFE6]/35">→</span>
              <span className="uppercase tracking-[0.25em] text-[#F4EFE6]/60">
                full stack projects
              </span>
            </div>

            <p className="font-code text-[10px] uppercase tracking-[0.25em] text-[#F4EFE6]/30">
              {String(projects.length).padStart(2, "0")} Selected Works
            </p>
          </div>

          <div className="grid gap-8 border-b border-[#F4EFE6]/10 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:py-14">
            <div>
              <p className="font-code mb-4 text-[10px] uppercase tracking-[0.3em] text-[#F4EFE6]/35 sm:text-xs">
                const category =
              </p>

              <h1 className="font-display text-[clamp(3.7rem,8vw,8rem)] font-normal italic leading-[0.82] tracking-[-0.03em]">
                <span className="block overflow-hidden">
                  <span className="fullstack-heading-line block">
                    Full Stack
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="fullstack-heading-line block text-[#F4EFE6]/20">
                    Projects
                  </span>
                </span>
              </h1>
            </div>

            <div className="fullstack-copy max-w-xl lg:justify-self-end">
              <p className="text-sm leading-7 text-[#F4EFE6]/55 sm:text-base sm:leading-8">
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
                    className="font-code rounded-sm border border-[#F4EFE6]/10 bg-[#F4EFE6]/[0.03] px-4 py-2 text-[10px] text-[#F4EFE6]/45 sm:text-xs"
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

        {/* Bottom CTA */}
        <section className="mt-20 border-y border-[#F4EFE6]/10 py-9 sm:mt-28">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-code text-[10px] uppercase tracking-[0.28em] text-[#F4EFE6]/30">
                More work
              </p>

              <h2 className="font-display mt-3 text-2xl italic tracking-[-0.02em] sm:text-3xl">
                Explore other project categories.
              </h2>
            </div>

            <Link
              href="/#projects"
              className="group inline-flex items-center gap-3 self-start rounded-md bg-[#E8B94B] px-6 py-3.5 text-sm font-medium text-[#100E0C] transition hover:bg-[#F0C868] sm:self-auto"
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
        className="relative aspect-[16/10] overflow-hidden border border-[#F4EFE6]/10 bg-[#1B1815]"
      >
        {/* corner marks, echoing the graphic card frame */}
        <span className="pointer-events-none absolute left-2 top-2 z-20 h-4 w-4 border-l-2 border-t-2 border-[#E8B94B]/70 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
        <span className="pointer-events-none absolute right-2 top-2 z-20 h-4 w-4 border-r-2 border-t-2 border-[#E8B94B]/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        <span className="pointer-events-none absolute bottom-2 left-2 z-20 h-4 w-4 border-b-2 border-l-2 border-[#E8B94B]/70 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0.5" />
        <span className="pointer-events-none absolute bottom-2 right-2 z-20 h-4 w-4 border-b-2 border-r-2 border-[#E8B94B]/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />

        <div
          ref={imageRef}
          className="absolute -inset-[2%] will-change-transform"
        >
          <img
            src={project.image}
            alt={`${project.name} project thumbnail`}
            className="h-full w-full object-cover object-top grayscale-[10%]"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#100E0C]/90 via-transparent to-transparent opacity-30 transition duration-500 group-hover:opacity-90" />

        <span className="font-code absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-sm border border-[#F4EFE6]/15 bg-[#100E0C]/40 text-[10px] text-[#F4EFE6]/70 backdrop-blur-md sm:left-5 sm:top-5">
          {project.number}
        </span>

        <div className="absolute inset-x-5 bottom-5 flex translate-y-3 items-center justify-between opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="font-code text-[10px] uppercase tracking-[0.25em] text-[#F4EFE6]/80">
            {project.live ? "View Live Project" : "View Source Code"}
          </p>

          <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#E8B94B] text-[#100E0C]">
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
            <p className="font-code text-[10px] uppercase tracking-[0.25em] text-[#E8B94B] sm:text-xs">
              {project.type}
            </p>

            <h2 className="font-display mt-2 text-3xl italic tracking-[-0.03em] sm:text-4xl">
              {project.name}
            </h2>
          </div>

          <span className="font-code text-3xl font-semibold text-[#F4EFE6]/10">
            {project.number}
          </span>
        </div>

        <p className="mt-5 text-sm leading-7 text-[#F4EFE6]/48 sm:text-[15px]">
          {project.description}
        </p>

        {/* Features */}
        <div className="mt-6 border-t border-[#F4EFE6]/10 pt-5">
          <p className="font-code text-[9px] uppercase tracking-[0.27em] text-[#F4EFE6]/28">
            Key Features
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div key={feature} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm bg-[#E8B94B]/12 text-[#E8B94B]">
                  <Check size={12} />
                </span>

                <p className="text-xs leading-5 text-[#F4EFE6]/45 sm:text-[13px]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-6 border-t border-[#F4EFE6]/10 pt-5">
          <p className="font-code text-[9px] uppercase tracking-[0.27em] text-[#F4EFE6]/28">
            Technologies
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="font-code rounded-sm border border-[#F4EFE6]/10 bg-[#F4EFE6]/[0.03] px-3.5 py-2 text-[10px] text-[#F4EFE6]/45 transition hover:border-[#E8B94B]/40 hover:text-[#F4EFE6] sm:text-xs"
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
            className="flex items-center gap-3 rounded-md border border-[#F4EFE6]/15 bg-[#F4EFE6]/[0.035] px-5 py-3 text-sm text-[#F4EFE6]/65 transition hover:border-[#F4EFE6]/35 hover:bg-[#F4EFE6]/10 hover:text-[#F4EFE6]"
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
              className="group flex items-center gap-3 rounded-md bg-[#E8B94B] px-5 py-3 text-sm font-medium text-[#100E0C] transition hover:bg-[#F0C868]"
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
