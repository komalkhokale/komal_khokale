"use client";

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
      const timeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      timeline
        .from(".graphics-navbar", {
          opacity: 0,
          y: -20,
          duration: 0.7,
        })
        .from(
          ".graphics-label",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.35",
        )
        .from(
          ".graphics-heading-line",
          {
            opacity: 0,
            y: 65,
            stagger: 0.12,
            duration: 0.85,
          },
          "-=0.3",
        )
        .from(
          ".graphics-copy",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
          },
          "-=0.45",
        );

      gsap.from(".graphic-card", {
        opacity: 0,
        y: 42,
        stagger: 0.1,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".graphics-grid",
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
      <header className="graphics-navbar relative z-50 px-5 pt-5 sm:px-8 sm:pt-7 lg:px-10">
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
          <div className="graphics-label flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#ff632f]" />

              <p className="text-[10px] uppercase tracking-[0.3em] text-white/45 sm:text-xs">
                Graphic Design
              </p>
            </div>

            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
              {String(graphics.length).padStart(2, "0")} Selected Works
            </p>
          </div>

          <div className="grid gap-8 border-b border-white/10 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:py-14">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-white/35 sm:text-xs">
                Visual Collection
              </p>

              <h1 className="text-[clamp(3.7rem,8vw,8rem)] font-medium uppercase leading-[0.82] tracking-[-0.065em]">
                <span className="block overflow-hidden">
                  <span className="graphics-heading-line block">Graphic</span>
                </span>

                <span className="block overflow-hidden">
                  <span className="graphics-heading-line block text-white/20">
                    Design
                  </span>
                </span>
              </h1>
            </div>

            <div className="graphics-copy max-w-xl lg:justify-self-end">
              <p className="text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
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
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] text-white/45 sm:text-xs"
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
        className="relative block aspect-[4/5] w-full overflow-hidden border border-white/10 bg-[#222220] text-left"
      >
        <div
          ref={imageRef}
          className="absolute -inset-[2%] will-change-transform"
        >
          <img
            src={graphic.image}
            alt={graphic.name}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-25 transition duration-500 group-hover:opacity-85" />

        <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/35 text-[10px] text-white/70 backdrop-blur-md sm:left-5 sm:top-5">
          {graphic.number}
        </span>

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
          className="absolute inset-x-5 bottom-5 flex items-center justify-between"
        >
          <span className="text-[10px] uppercase tracking-[0.26em] text-white/80">
            View Artwork
          </span>

          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff632f] text-white">
            <Maximize2 size={18} />
          </span>
        </motion.div>
      </button>

      <div className="flex items-start justify-between gap-5 pt-5 sm:pt-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#ff632f] sm:text-xs">
            {graphic.category}
          </p>

          <h2 className="mt-2 text-3xl font-medium tracking-[-0.045em] sm:text-4xl">
            {graphic.name}
          </h2>
        </div>

        <span className="font-barlow text-3xl font-semibold text-white/12">
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
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/92 p-4 backdrop-blur-xl sm:p-7"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.985,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 20,
          scale: 0.985,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        onClick={(event) => event.stopPropagation()}
        className="relative mx-auto max-w-[1200px] border border-white/10 bg-[#1b1b19]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close artwork"
          className="fixed right-7 top-7 z-[120] flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-md transition hover:bg-[#ff632f] sm:right-10 sm:top-10"
        >
          <X size={19} />
        </button>

        <div className="flex min-h-[70vh] items-center justify-center bg-[#10100f] p-4 sm:p-8">
          <img
            src={graphic.image}
            alt={graphic.name}
            className="max-h-[82vh] w-auto max-w-full object-contain"
          />
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.26em] text-[#ff632f]">
              {graphic.category}
            </p>

            <h2 className="mt-2 text-3xl font-medium tracking-[-0.045em] sm:text-5xl">
              {graphic.name}
            </h2>
          </div>

          <span className="font-barlow text-4xl font-semibold text-white/12">
            {graphic.number}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
