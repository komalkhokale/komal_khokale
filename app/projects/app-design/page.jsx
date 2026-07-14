"use client";

/**
 * Uses the same font setup as Hero.jsx / FullStackProjectsPage — add once in app/layout.js:
 *
 *   import { Fraunces, JetBrains_Mono } from "next/font/google";
 *   const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", style: ["normal", "italic"] });
 *   const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
 *   // <body className={`${fraunces.variable} ${mono.variable}`}>
 *
 * Falls back to font-serif / font-mono if skipped, so it still works out of the box.
 */

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ArrowLeft, ArrowUpRight, Maximize2, X } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const appDesigns = [
  {
    id: "plant",
    number: "01",
    name: "Plant Mobile Application",
    category: "Shopping App",
    thumbnail: "/app4.png",
    images: ["/p1.png", "/p2.png"],
    font: "Podkova",
    colors: ["#03C303", "#3B3B3B", "#FFFFFF"],
    description:
      "A modern plant shopping application with a dark interface and fresh green visual direction. Users can explore plant collections, search products, view product details and add plants to their cart through a clean and simple shopping flow.",
  },
  {
    id: "nike",
    number: "02",
    name: "Nike Mobile Application",
    category: "E-commerce App",
    thumbnail: "/app7.png",
    images: ["/s1.png", "/s2.png"],
    font: "Inter",
    colors: ["#FF8A00", "#0A0A0D", "#FFFFFF"],
    description:
      "A modern shoe shopping application with a stylish dark interface. The design helps users explore shoe collections, check product details and add products to the cart through a clear and smooth shopping experience.",
  },
  {
    id: "recipe",
    number: "03",
    name: "Recipe Mobile Application",
    category: "Food App",
    thumbnail: "/app6.png",
    images: ["/r1.png"],
    font: "Poppins",
    colors: ["#EE8B02", "#3B3B3B", "#FFFFFF"],
    description:
      "A clean recipe mobile application designed to help users discover food ideas, explore ingredients and follow cooking steps through strong food visuals and a simple user flow.",
  },
  {
    id: "animal",
    number: "04",
    name: "Animal Article Mobile App",
    category: "Article App",
    thumbnail: "/app5.png",
    images: ["/a1.png", "/a2.png"],
    font: "Poppins",
    colors: ["#83FF04", "#232323", "#FFFFFF"],
    description:
      "A dark-themed animal article application where users can explore wildlife content, read information about different species and browse categories such as wild animals, birds and pets.",
  },
];

export default function AppDesignPage() {
  const pageRef = useRef(null);
  const [selectedApp, setSelectedApp] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedApp ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedApp]);

  useGSAP(
    () => {
      const timeline = gsap.timeline({ defaults: { ease: "power4.out" } });

      timeline
        .from(".app-navbar", { opacity: 0, y: -20, duration: 0.7 })
        .from(".app-label", { opacity: 0, y: 20, duration: 0.6 }, "-=0.35")
        .from(
          ".app-heading-line",
          { opacity: 0, y: 70, stagger: 0.12, duration: 0.85 },
          "-=0.3",
        )
        .from(
          ".app-intro-copy",
          { opacity: 0, y: 25, duration: 0.7 },
          "-=0.45",
        );

      gsap.from(".app-design-card", {
        opacity: 0,
        y: 45,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".app-design-grid", start: "top 82%" },
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

        {/* signature glyph — a faint phone bezel, echoing the </> mark on the full-stack page */}
        <svg
          viewBox="0 0 200 400"
          className="absolute -bottom-[10vw] -left-[5vw] h-[62vw] w-auto opacity-[0.05] sm:h-[46vw]"
        >
          <rect
            x="10"
            y="10"
            width="180"
            height="380"
            rx="28"
            fill="none"
            stroke="#F4EFE6"
            strokeWidth="3"
          />
          <rect
            x="30"
            y="42"
            width="140"
            height="316"
            rx="4"
            fill="none"
            stroke="#F4EFE6"
            strokeWidth="2"
          />
          <circle cx="100" cy="24" r="3" fill="#F4EFE6" />
        </svg>
      </div>

      {/* Navbar — matches Hero.jsx / FullStackProjectsPage pill nav */}
      <header className="app-navbar relative z-50 px-5 pt-5 sm:px-8 sm:pt-7 lg:px-10">
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
          <div className="app-label flex items-center justify-between border-b border-[#F4EFE6]/10 pb-5">
            <div className="font-code inline-flex items-center gap-2 text-[11px] text-[#F4EFE6]/55">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#E8B94B]" />
              <span className="text-[#E8B94B]/80">$</span> ls --category
              <span className="text-[#F4EFE6]/35">→</span>
              <span className="uppercase tracking-[0.25em] text-[#F4EFE6]/60">
                app design
              </span>
            </div>

            <p className="font-code text-[10px] uppercase tracking-[0.25em] text-[#F4EFE6]/30">
              {String(appDesigns.length).padStart(2, "0")} Selected Works
            </p>
          </div>

          <div className="grid gap-8 border-b border-[#F4EFE6]/10 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:py-14">
            <div>
              <p className="font-code mb-4 text-[10px] uppercase tracking-[0.3em] text-[#F4EFE6]/35 sm:text-xs">
                const category =
              </p>

              <h1 className="font-display text-[clamp(3.7rem,8vw,8rem)] font-normal italic leading-[0.82] tracking-[-0.03em]">
                <span className="block overflow-hidden">
                  <span className="app-heading-line block">App</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="app-heading-line block text-[#F4EFE6]/20">
                    Design
                  </span>
                </span>
              </h1>
            </div>

            <div className="app-intro-copy max-w-xl lg:justify-self-end">
              <p className="text-sm leading-7 text-[#F4EFE6]/55 sm:text-base sm:leading-8">
                Mobile application concepts focused on simple navigation,
                polished visuals and clear user experiences.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Mobile UI", "User Flow", "Prototyping", "Visual Design"].map(
                  (item) => (
                    <span
                      key={item}
                      className="font-code rounded-sm border border-[#F4EFE6]/10 bg-[#F4EFE6]/[0.03] px-4 py-2 text-[10px] text-[#F4EFE6]/45 sm:text-xs"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="app-design-grid grid gap-x-6 gap-y-16 pt-12 md:grid-cols-2 lg:gap-x-8 lg:gap-y-20 lg:pt-16">
          {appDesigns.map((app) => (
            <AppDesignCard
              key={app.id}
              app={app}
              onOpen={() => setSelectedApp(app)}
            />
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

      <AnimatePresence>
        {selectedApp && (
          <AppDesignModal
            app={selectedApp}
            onClose={() => setSelectedApp(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

function AppDesignCard({ app, onOpen }) {
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
    <motion.article className="app-design-card group">
      <button
        type="button"
        onClick={onOpen}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative block aspect-[16/11] w-full overflow-hidden border border-[#F4EFE6]/10 bg-[#1B1815] text-left sm:aspect-[16/10]"
      >
        {/* corner marks, echoing the graphic/full-stack card frame */}
        <span className="pointer-events-none absolute left-2 top-2 z-20 h-4 w-4 border-l-2 border-t-2 border-[#E8B94B]/70 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
        <span className="pointer-events-none absolute right-2 top-2 z-20 h-4 w-4 border-r-2 border-t-2 border-[#E8B94B]/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        <span className="pointer-events-none absolute bottom-2 left-2 z-20 h-4 w-4 border-b-2 border-l-2 border-[#E8B94B]/70 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0.5" />
        <span className="pointer-events-none absolute bottom-2 right-2 z-20 h-4 w-4 border-b-2 border-r-2 border-[#E8B94B]/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />

        <div
          ref={imageRef}
          className="absolute -inset-[2%] will-change-transform"
        >
          <img
            src={app.thumbnail}
            alt={`${app.name} thumbnail`}
            className="h-full w-full object-cover object-center grayscale-[10%]"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#100E0C]/90 via-transparent to-transparent opacity-30 transition duration-500 group-hover:opacity-90" />

        <span className="font-code absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-sm border border-[#F4EFE6]/15 bg-[#100E0C]/40 text-[10px] text-[#F4EFE6]/70 backdrop-blur-md sm:left-5 sm:top-5">
          {app.number}
        </span>

        <div className="absolute inset-x-5 bottom-5 flex translate-y-3 items-center justify-between opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="font-code text-[10px] uppercase tracking-[0.25em] text-[#F4EFE6]/80">
            View Case Study
          </p>

          <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#E8B94B] text-[#100E0C]">
            <Maximize2 size={18} />
          </span>
        </div>
      </button>

      <div className="pt-6">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="font-code text-[10px] uppercase tracking-[0.25em] text-[#E8B94B] sm:text-xs">
              {app.category}
            </p>

            <h2 className="font-display mt-2 text-3xl italic tracking-[-0.03em] sm:text-4xl">
              {app.name}
            </h2>
          </div>

          <span className="font-code text-3xl font-semibold text-[#F4EFE6]/10">
            {app.number}
          </span>
        </div>

        <div className="mt-6 flex flex-col gap-5 border-t border-[#F4EFE6]/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-code text-[9px] uppercase tracking-[0.27em] text-[#F4EFE6]/28">
              Typography
            </p>

            <p className="mt-3 text-sm text-[#F4EFE6]/55">{app.font}</p>
          </div>

          <div className="flex items-center gap-2">
            {app.colors.map((color) => (
              <span
                key={color}
                title={color}
                className="h-7 w-7 rounded-sm border border-[#F4EFE6]/15"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function AppDesignModal({ app, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] overflow-y-auto bg-[#100E0C]/95 p-4 backdrop-blur-xl sm:p-7"
    >
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.985 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
        className="relative mx-auto max-w-[1400px] border border-[#F4EFE6]/10 bg-[#171310]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close case study"
          className="fixed right-7 top-7 z-[120] flex h-11 w-11 items-center justify-center rounded-sm border border-[#F4EFE6]/15 bg-[#100E0C]/60 text-[#F4EFE6] backdrop-blur-md transition hover:border-[#E8B94B]/40 hover:bg-[#E8B94B] hover:text-[#100E0C] sm:right-10 sm:top-10"
        >
          <X size={19} />
        </button>

        {/* Top information */}
        <div className="grid gap-8 border-b border-[#F4EFE6]/10 p-5 sm:p-8 lg:grid-cols-[1fr_0.75fr] lg:p-10">
          <div>
            <p className="font-code text-[10px] uppercase tracking-[0.28em] text-[#E8B94B]">
              {app.category}
            </p>

            <h2 className="font-display mt-3 text-3xl italic tracking-[-0.03em] sm:text-5xl">
              {app.name}
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-[#F4EFE6]/50 sm:text-base">
              {app.description}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <p className="font-code text-[10px] uppercase tracking-[0.25em] text-[#F4EFE6]/30">
                Typography
              </p>

              <p className="font-display mt-3 text-lg italic">{app.font}</p>
            </div>

            <div>
              <p className="font-code text-[10px] uppercase tracking-[0.25em] text-[#F4EFE6]/30">
                Color Palette
              </p>

              <div className="mt-3 flex flex-wrap gap-3">
                {app.colors.map((color) => (
                  <div
                    key={color}
                    className="flex items-center gap-2 rounded-sm border border-[#F4EFE6]/10 px-3 py-2"
                  >
                    <span
                      className="h-6 w-6 rounded-sm border border-[#F4EFE6]/20"
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

        {/* Actual screens */}
        <div
          className={`grid gap-5 bg-[#100E0C] p-5 sm:gap-7 sm:p-8 lg:p-10 ${
            app.images.length > 1 ? "md:grid-cols-2" : "mx-auto max-w-[760px]"
          }`}
        >
          {app.images.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden border border-[#F4EFE6]/10 bg-[#171310]"
            >
              <img
                src={image}
                alt={`${app.name} screen ${index + 1}`}
                className="h-auto w-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
