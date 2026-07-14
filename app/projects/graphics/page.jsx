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
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ArrowLeft, ArrowUpRight, Maximize2, X } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const graphics = [
  {
    id: "graphic-1",
    number: "01",
    name: "Graphic Design 01",
    category: "Poster Design",
    image: "/g1.png",
  },
  {
    id: "graphic-2",
    number: "02",
    name: "Graphic Design 02",
    category: "Social Media Design",
    image: "/g2.png",
  },
  {
    id: "graphic-3",
    number: "03",
    name: "Graphic Design 03",
    category: "Brand Visual",
    image: "/g3.png",
  },
  {
    id: "graphic-4",
    number: "04",
    name: "Graphic Design 04",
    category: "Poster Design",
    image: "/g4.png",
  },
  {
    id: "graphic-5",
    number: "05",
    name: "Graphic Design 05",
    category: "Social Media Design",
    image: "/g5.png",
  },
];

export default function GraphicsPage() {
  const pageRef = useRef(null);
  const [selectedGraphic, setSelectedGraphic] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedGraphic ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedGraphic]);

  useGSAP(
    () => {
      const timeline = gsap.timeline({ defaults: { ease: "power4.out" } });

      timeline
        .from(".graphics-navbar", { opacity: 0, y: -20, duration: 0.7 })
        .from(".graphics-label", { opacity: 0, y: 20, duration: 0.6 }, "-=0.35")
        .from(
          ".graphics-heading-line",
          { opacity: 0, y: 65, stagger: 0.12, duration: 0.85 },
          "-=0.3",
        )
        .from(".graphics-copy", { opacity: 0, y: 25, duration: 0.7 }, "-=0.45");

      gsap.from(".graphic-card", {
        opacity: 0,
        y: 42,
        stagger: 0.1,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: { trigger: ".graphics-grid", start: "top 82%" },
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

      {/* Navbar — matches Hero.jsx pill nav */}
      <header className="graphics-navbar relative z-50 px-5 pt-5 sm:px-8 sm:pt-7 lg:px-10">
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
          <div className="graphics-label flex items-center justify-between border-b border-[#F4EFE6]/10 pb-5">
            <div className="font-code inline-flex items-center gap-2 text-[11px] text-[#F4EFE6]/55">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#E8B94B]" />
              <span className="text-[#E8B94B]/80">$</span> ls --category
              <span className="text-[#F4EFE6]/35">→</span>
              <span className="uppercase tracking-[0.25em] text-[#F4EFE6]/60">
                graphic design
              </span>
            </div>

            <p className="font-code text-[10px] uppercase tracking-[0.25em] text-[#F4EFE6]/30">
              {String(graphics.length).padStart(2, "0")} Selected Works
            </p>
          </div>

          <div className="grid gap-8 border-b border-[#F4EFE6]/10 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:py-14">
            <div>
              <p className="font-code mb-4 text-[10px] uppercase tracking-[0.3em] text-[#F4EFE6]/35 sm:text-xs">
                const category =
              </p>

              <h1 className="font-display text-[clamp(3.7rem,8vw,8rem)] font-normal italic leading-[0.82] tracking-[-0.03em]">
                <span className="block overflow-hidden">
                  <span className="graphics-heading-line block">Graphic</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="graphics-heading-line block text-[#F4EFE6]/20">
                    Design
                  </span>
                </span>
              </h1>
            </div>

            <div className="graphics-copy max-w-xl lg:justify-self-end">
              <p className="text-sm leading-7 text-[#F4EFE6]/55 sm:text-base sm:leading-8">
                A collection of posters, social media creatives, visual
                compositions and brand-focused graphic design work.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Posters",
                  "Social Media",
                  "Brand Visuals",
                  "Creative Design",
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

        {/* Gallery */}
        <section className="graphics-grid grid gap-x-6 gap-y-14 pt-12 md:grid-cols-2 lg:gap-x-8 lg:gap-y-20 lg:pt-16">
          {graphics.map((graphic) => (
            <GraphicCard
              key={graphic.id}
              graphic={graphic}
              onOpen={() => setSelectedGraphic(graphic)}
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
        {selectedGraphic && (
          <GraphicModal
            graphic={selectedGraphic}
            onClose={() => setSelectedGraphic(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

function GraphicCard({ graphic, onOpen }) {
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
      className="graphic-card group"
    >
      <button
        type="button"
        onClick={onOpen}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative block aspect-[4/5] w-full overflow-hidden border border-[#F4EFE6]/10 bg-[#1B1815] text-left"
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
            src={graphic.image}
            alt={graphic.name}
            className="h-full w-full object-cover object-center grayscale-[10%]"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#100E0C]/90 via-transparent to-transparent opacity-30 transition duration-500 group-hover:opacity-90" />

        <span className="font-code absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-sm border border-[#F4EFE6]/15 bg-[#100E0C]/40 text-[10px] text-[#F4EFE6]/70 backdrop-blur-md sm:left-5 sm:top-5">
          {graphic.number}
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
            View Artwork
          </span>

          <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#E8B94B] text-[#100E0C]">
            <Maximize2 size={18} />
          </span>
        </motion.div>
      </button>

      <div className="flex items-start justify-between gap-5 pt-5 sm:pt-6">
        <div>
          <p className="font-code text-[10px] uppercase tracking-[0.25em] text-[#E8B94B] sm:text-xs">
            {graphic.category}
          </p>

          <h2 className="font-display mt-2 text-3xl italic tracking-[-0.03em] sm:text-4xl">
            {graphic.name}
          </h2>
        </div>

        <span className="font-code text-3xl font-semibold text-[#F4EFE6]/10">
          {graphic.number}
        </span>
      </div>
    </motion.article>
  );
}

function GraphicModal({ graphic, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] overflow-y-auto bg-[#100E0C]/92 p-4 backdrop-blur-xl sm:p-7"
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.985 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
        className="relative mx-auto max-w-[1200px] border border-[#F4EFE6]/10 bg-[#1B1815]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close artwork"
          className="fixed right-7 top-7 z-[120] flex h-11 w-11 items-center justify-center rounded-full border border-[#F4EFE6]/15 bg-[#100E0C]/60 text-[#F4EFE6] backdrop-blur-md transition hover:bg-[#E8B94B] hover:text-[#100E0C] sm:right-10 sm:top-10"
        >
          <X size={19} />
        </button>

        <div className="flex items-center justify-center bg-[#0B0A08] sm:p-8">
          <img
            src={graphic.image}
            alt={graphic.name}
            className="max-h-[50vh] w-auto max-w-full object-contain"
          />
        </div>

        <div className="flex flex-col gap-3 border-t border-[#F4EFE6]/10 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-8">
          <div>
            <p className="font-code text-[10px] uppercase tracking-[0.26em] text-[#E8B94B]">
              {graphic.category}
            </p>

            <h2 className="font-display mt-2 text-3xl italic tracking-[-0.03em] sm:text-5xl">
              {graphic.name}
            </h2>
          </div>

          <span className="font-code text-4xl font-semibold text-[#F4EFE6]/10">
            {graphic.number}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
