"use client";

/**
 * Uses the same font setup as Hero.jsx — add once in app/layout.js:
 *
 *   import { Fraunces, JetBrains_Mono } from "next/font/google";
 *   const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", style: ["normal", "italic"] });
 *   const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
 *   // <body className={`${fraunces.variable} ${mono.variable}`}>
 *
 * Falls back to font-serif / font-mono if skipped, so it still works out of the box.
 */

import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ArrowLeft, ArrowUpRight, Maximize2, Play, X } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const websiteDesigns = [
  {
    id: "web1",
    number: "01",
    name: "Video Game Website",
    image: "/web7.png",
    font: "Barlow",
    colors: ["#D83A3A", "#0C0F23"],
    description:
      "A clean and modern video game website hero section with strong visual hierarchy, bold typography and an immersive dark interface.",
  },
  {
    id: "web2",
    number: "02",
    name: "E-Bike Hero Page",
    image: "/web6.png",
    font: "Inter",
    colors: ["#6BAABF", "#292D32"],
    description:
      "A modern electric bike landing page with a focused call-to-action, clean product presentation and a minimal technology-inspired interface.",
  },
  {
    id: "web3",
    number: "03",
    name: "Travel Website",
    image: "/Travel.png",
    font: "Urbanist · Unlock · Bernard MT",
    colors: ["#025219", "#FFFFFF"],
    description:
      "A modern travel website where users can explore destinations, review packages, read travel blogs and plan trips through a clean and nature-inspired interface.",
  },
  {
    id: "web4",
    number: "04",
    name: "Pet Adoption Website",
    image: "/web4.png",
    font: "Baskerville Old Face",
    colors: ["#FFAA00", "#44372A"],
    description:
      "A warm and trustworthy pet adoption website focused on helping users discover and adopt pets through friendly visuals and clear calls-to-action.",
  },
];

const animatedDesigns = [
  { id: "ani1", number: "01", name: "City Web Animation", video: "/ani1.mp4" },
  { id: "ani2", number: "02", name: "Car Web Animation", video: "/ani2.mp4" },
  { id: "ani3", number: "03", name: "Juice Web Animation", video: "/ani3.mp4" },
  {
    id: "ani4",
    number: "04",
    name: "Travel Web Animation",
    video: "/ani4.mp4",
  },
];

export default function WebDesignPage() {
  const pageRef = useRef(null);
  const [selectedDesign, setSelectedDesign] = useState(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({ defaults: { ease: "power4.out" } });

      timeline
        .from(".design-navbar", { opacity: 0, y: -20, duration: 0.7 })
        .from(".design-label", { opacity: 0, y: 20, duration: 0.6 }, "-=0.35")
        .from(
          ".design-heading-line",
          { opacity: 0, y: 75, stagger: 0.12, duration: 0.85 },
          "-=0.3",
        )
        .from(
          ".design-intro-copy",
          { opacity: 0, y: 25, duration: 0.7 },
          "-=0.45",
        );

      gsap.utils.toArray(".design-section-heading").forEach((heading) => {
        gsap.from(heading, {
          opacity: 0,
          y: 35,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: heading, start: "top 84%" },
        });
      });

      gsap.from(".website-design-card", {
        opacity: 0,
        y: 45,
        stagger: 0.1,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: { trigger: ".website-design-grid", start: "top 82%" },
      });

      gsap.from(".animated-design-card", {
        opacity: 0,
        y: 45,
        stagger: 0.1,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: { trigger: ".animated-design-grid", start: "top 82%" },
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

      {/* Fixed background — same grid + glow language as the hero */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[7.5%] top-0 h-full w-px bg-[#F4EFE6]/[0.04]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-[#F4EFE6]/[0.025]" />
        <div className="absolute right-[7.5%] top-0 h-full w-px bg-[#F4EFE6]/[0.04]" />

        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.24, 0.12] }}
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

      {/* Navbar — matches Hero.jsx pill nav */}
      <header className="design-navbar relative z-50 px-5 pt-5 sm:px-8 sm:pt-7 lg:px-10">
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
        {/* Page introduction */}
        <section>
          <div className="design-label flex items-center justify-between border-b border-[#F4EFE6]/10 pb-5">
            <div className="font-code inline-flex items-center gap-2 text-[11px] text-[#F4EFE6]/55">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#E8B94B]" />
              <span className="text-[#E8B94B]/80">$</span> ls --category
              <span className="text-[#F4EFE6]/35">→</span>
              <span className="uppercase tracking-[0.25em] text-[#F4EFE6]/60">
                web design
              </span>
            </div>

            <p className="font-code text-[10px] uppercase tracking-[0.25em] text-[#F4EFE6]/30">
              08 Selected Works
            </p>
          </div>

          <div className="grid gap-8 border-b border-[#F4EFE6]/10 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:py-14">
            <div>
              <p className="font-code mb-4 text-[10px] uppercase tracking-[0.3em] text-[#F4EFE6]/35 sm:text-xs">
                const category =
              </p>

              <h1 className="font-display text-[clamp(3.7rem,8vw,8rem)] font-normal italic leading-[0.82] tracking-[-0.03em]">
                <span className="block overflow-hidden">
                  <span className="design-heading-line block">Web</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="design-heading-line block text-[#F4EFE6]/20">
                    Design
                  </span>
                </span>
              </h1>
            </div>

            <div className="design-intro-copy max-w-xl lg:justify-self-end">
              <p className="text-sm leading-7 text-[#F4EFE6]/55 sm:text-base sm:leading-8">
                A collection of website interfaces and animated web concepts
                focused on visual storytelling, clear user flows and modern
                digital experiences.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "UI Design",
                  "Visual Direction",
                  "Prototyping",
                  "Web Animation",
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

        {/* Website UI designs */}
        <section className="pt-16 sm:pt-20 lg:pt-24">
          <div className="design-section-heading mb-10 flex flex-col gap-5 border-b border-[#F4EFE6]/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-code text-[10px] uppercase tracking-[0.28em] text-[#E8B94B]">
                01 / Website Interfaces
              </p>

              <h2 className="font-display mt-3 text-3xl italic tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Website UI Designs
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#F4EFE6]/40">
              Static website concepts focused on layout, typography, color and
              visual hierarchy.
            </p>
          </div>

          <div className="website-design-grid grid gap-x-6 gap-y-14 md:grid-cols-2 lg:gap-x-8 lg:gap-y-20">
            {websiteDesigns.map((design) => (
              <WebsiteDesignCard
                key={design.id}
                design={design}
                onOpen={() => setSelectedDesign(design)}
              />
            ))}
          </div>
        </section>

        {/* Animated web designs */}
        <section className="pt-24 sm:pt-28 lg:pt-36">
          <div className="design-section-heading mb-10 flex flex-col gap-5 border-b border-[#F4EFE6]/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-code text-[10px] uppercase tracking-[0.28em] text-[#E8B94B]">
                02 / Motion Concepts
              </p>

              <h2 className="font-display mt-3 text-3xl italic tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Animated Web Designs
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#F4EFE6]/40">
              Interactive web concepts exploring motion, composition and
              engaging visual transitions.
            </p>
          </div>

          <div className="animated-design-grid grid gap-x-6 gap-y-14 md:grid-cols-2 lg:gap-x-8 lg:gap-y-20">
            {animatedDesigns.map((design) => (
              <AnimatedDesignCard key={design.id} design={design} />
            ))}
          </div>
        </section>

        {/* Bottom navigation */}
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

      <AnimatePresence>
        {selectedDesign && (
          <DesignModal
            design={selectedDesign}
            onClose={() => setSelectedDesign(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

function WebsiteDesignCard({ design, onOpen }) {
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
    <motion.article
      whileHover="hover"
      initial="initial"
      className="website-design-card group"
    >
      <button
        type="button"
        onClick={onOpen}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative block aspect-[16/11] w-full overflow-hidden border border-[#F4EFE6]/10 bg-[#1B1815] text-left sm:aspect-[16/10]"
      >
        {/* corner marks, echoing the hero portrait frame */}
        <span className="pointer-events-none absolute left-2 top-2 z-20 h-4 w-4 border-l-2 border-t-2 border-[#E8B94B]/70 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
        <span className="pointer-events-none absolute right-2 top-2 z-20 h-4 w-4 border-r-2 border-t-2 border-[#E8B94B]/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        <span className="pointer-events-none absolute bottom-2 left-2 z-20 h-4 w-4 border-b-2 border-l-2 border-[#E8B94B]/70 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0.5" />
        <span className="pointer-events-none absolute bottom-2 right-2 z-20 h-4 w-4 border-b-2 border-r-2 border-[#E8B94B]/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />

        <div
          ref={imageRef}
          className="absolute -inset-[2%] will-change-transform"
        >
          <img
            src={design.image}
            alt={design.name}
            className="h-full w-full object-cover object-top grayscale-[10%]"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#100E0C]/85 via-[#100E0C]/5 to-transparent opacity-30 transition duration-500 group-hover:opacity-90" />

        <span className="font-code absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-sm border border-[#F4EFE6]/15 bg-[#100E0C]/40 text-[10px] text-[#F4EFE6]/65 backdrop-blur-md sm:left-5 sm:top-5">
          {design.number}
        </span>

        <motion.div
          variants={{
            initial: { opacity: 0, y: 15 },
            hover: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-x-5 bottom-5 flex items-center justify-between"
        >
          <span className="font-code text-[10px] uppercase tracking-[0.26em] text-[#F4EFE6]/80">
            View Design
          </span>

          <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#E8B94B] text-[#100E0C]">
            <Maximize2 size={18} />
          </span>
        </motion.div>
      </button>

      <div className="pt-5 sm:pt-6">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="font-code text-[10px] uppercase tracking-[0.25em] text-[#E8B94B] sm:text-xs">
              Website UI Design
            </p>

            <h3 className="font-display mt-2 text-3xl italic tracking-[-0.03em] sm:text-4xl">
              {design.name}
            </h3>
          </div>

          <span className="font-code text-3xl font-semibold text-[#F4EFE6]/10">
            {design.number}
          </span>
        </div>

        <div className="mt-5 flex flex-col gap-4 border-t border-[#F4EFE6]/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-code text-[9px] uppercase tracking-[0.25em] text-[#F4EFE6]/25">
              Typography
            </p>
            <p className="mt-2 text-sm text-[#F4EFE6]/55">{design.font}</p>
          </div>

          <div className="flex items-center gap-2">
            {design.colors.map((color) => (
              <span
                key={color}
                title={color}
                className="h-7 w-7 rounded-full border border-[#F4EFE6]/20"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function AnimatedDesignCard({ design }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const playVideo = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      await video.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  const resetVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    setPlaying(false);
  };

  const toggleVideo = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      await playVideo();
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="animated-design-card group"
    >
      <div
        onMouseEnter={playVideo}
        onMouseLeave={resetVideo}
        className="relative aspect-video overflow-hidden border border-[#F4EFE6]/10 bg-[#1B1815]"
      >
        <video
          ref={videoRef}
          src={design.video}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#100E0C]/80 via-transparent to-[#100E0C]/5 opacity-70 transition duration-500 group-hover:opacity-35" />

        <span className="font-code absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-sm border border-[#F4EFE6]/15 bg-[#100E0C]/40 text-[10px] text-[#F4EFE6]/65 backdrop-blur-md sm:left-5 sm:top-5">
          {design.number}
        </span>

        <button
          type="button"
          onClick={toggleVideo}
          aria-label={playing ? "Pause video" : "Play video"}
          className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#F4EFE6]/20 bg-[#100E0C]/40 text-[#F4EFE6] backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-[#E8B94B] hover:text-[#100E0C] sm:h-16 sm:w-16"
        >
          <Play size={21} fill="currentColor" className="translate-x-0.5" />
        </button>

        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
          <div>
            <p className="font-code text-[9px] uppercase tracking-[0.25em] text-[#F4EFE6]/50">
              Hover to preview
            </p>
            <p className="font-display mt-2 text-lg italic">{design.name}</p>
          </div>

          <span
            className={`h-2.5 w-2.5 rounded-full ${
              playing ? "animate-pulse bg-[#E8B94B]" : "bg-[#F4EFE6]/35"
            }`}
          />
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-[#F4EFE6]/10 py-5">
        <div>
          <p className="font-code text-[10px] uppercase tracking-[0.25em] text-[#E8B94B]">
            Animated Website
          </p>

          <h3 className="font-display mt-2 text-2xl italic tracking-[-0.025em] sm:text-3xl">
            {design.name}
          </h3>
        </div>

        <span className="font-code text-3xl font-semibold text-[#F4EFE6]/10">
          {design.number}
        </span>
      </div>
    </motion.article>
  );
}

function DesignModal({ design, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] overflow-y-auto bg-[#100E0C]/90 p-4 backdrop-blur-xl sm:p-7"
    >
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
        className="relative mx-auto max-w-[1400px] overflow-hidden border border-[#F4EFE6]/10 bg-[#1B1815]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close design"
          className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-[#F4EFE6]/15 bg-[#100E0C]/50 text-[#F4EFE6] backdrop-blur-md transition hover:bg-[#E8B94B] hover:text-[#100E0C] sm:right-6 sm:top-6"
        >
          <X size={19} />
        </button>

        <div className="relative max-h-[72vh] overflow-auto bg-[#0B0A08]">
          <img
            src={design.image}
            alt={design.name}
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_0.8fr] lg:p-10">
          <div>
            <p className="font-code text-[10px] uppercase tracking-[0.28em] text-[#E8B94B]">
              Website Design
            </p>

            <h2 className="font-display mt-3 text-3xl italic tracking-[-0.03em] sm:text-5xl">
              {design.name}
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-[#F4EFE6]/55 sm:text-base">
              {design.description}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <p className="font-code text-[10px] uppercase tracking-[0.25em] text-[#F4EFE6]/30">
                Typography
              </p>
              <p className="mt-3 text-lg font-medium">{design.font}</p>
            </div>

            <div>
              <p className="font-code text-[10px] uppercase tracking-[0.25em] text-[#F4EFE6]/30">
                Color Palette
              </p>

              <div className="mt-3 flex flex-wrap gap-3">
                {design.colors.map((color) => (
                  <div
                    key={color}
                    className="flex items-center gap-2 rounded-full border border-[#F4EFE6]/10 px-3 py-2"
                  >
                    <span
                      className="h-6 w-6 rounded-full border border-[#F4EFE6]/20"
                      style={{ backgroundColor: color }}
                    />
                    <span className="font-code text-xs text-[#F4EFE6]/50">
                      {color}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
