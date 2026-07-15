"use client";

/**
 * Font setup (add once in app/layout.js and pass the className down,
 * or add these two <link> tags in your <head>):
 *
 *   import { Fraunces, JetBrains_Mono } from "next/font/google";
 *   const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", style: ["normal", "italic"] });
 *   const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
 *   // <body className={`${fraunces.variable} ${mono.variable}`}>
 *
 * Everything below falls back to font-serif / font-mono if you skip this,
 * so it still works out of the box.
 */

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ArrowUpRight, Download, Mail, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

gsap.registerPlugin(useGSAP);

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const roles = ["Full Stack Dev", "Frontend Engineer", "Creative Coder"];

export default function Hero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const glowRef = useRef(null);
  const navWrapRef = useRef(null);
  const navHighlightRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  /*
   * Terminal-style typewriter
   */
  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (isPaused) {
      const pauseTimer = window.setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1200);

      return () => window.clearTimeout(pauseTimer);
    }

    const typingTimer = window.setTimeout(
      () => {
        if (!isDeleting) {
          const nextValue = currentRole.slice(0, typedRole.length + 1);
          setTypedRole(nextValue);

          if (nextValue === currentRole) {
            setIsPaused(true);
          }
        } else {
          const nextValue = currentRole.slice(0, typedRole.length - 1);
          setTypedRole(nextValue);

          if (nextValue === "") {
            setIsDeleting(false);
            setRoleIndex((previous) => (previous + 1) % roles.length);
          }
        }
      },
      isDeleting ? 38 : 78,
    );

    return () => window.clearTimeout(typingTimer);
  }, [typedRole, isDeleting, isPaused, roleIndex]);

  /*
   * Opening GSAP sequence
   */
  useGSAP(
    () => {
      const timeline = gsap.timeline({
        defaults: { ease: "power4.out" },
      });

      timeline
        .from(".hero-navbar", { opacity: 0, y: -24, duration: 0.7 })
        .from(".hero-left", { opacity: 0, x: -40, duration: 0.85 }, "-=0.35")
        .from(
          ".hero-frame",
          { opacity: 0, scale: 0.94, duration: 0.9 },
          "-=0.6",
        )
        .from(
          imageRef.current,
          { opacity: 0, y: 60, scale: 1.06, duration: 1.05 },
          "-=0.75",
        )
        .from(".hero-right", { opacity: 0, x: 40, duration: 0.85 }, "-=0.85")
        .from(
          ".corner-mark",
          { opacity: 0, duration: 0.5, stagger: 0.08 },
          "-=0.4",
        )
        .from(
          ".hero-name-row",
          { opacity: 0, y: 110, duration: 0.95 },
          "-=0.5",
        );
    },
    { scope: heroRef },
  );

  /*
   * Desktop image parallax
   */
  const handleMouseMove = (event) => {
    if (!heroRef.current) return;

    const bounds = heroRef.current.getBoundingClientRect();

    if (glowRef.current && window.innerWidth >= 1024) {
      gsap.to(glowRef.current, {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      });
    }

    if (!imageRef.current || window.innerWidth < 1024) return;

    const xPosition = (event.clientX - bounds.left) / bounds.width - 0.5;
    const yPosition = (event.clientY - bounds.top) / bounds.height - 0.5;

    gsap.to(imageRef.current, {
      x: xPosition * 14,
      y: yPosition * 9,
      duration: 1,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "power3.out",
      });
    }
    if (glowRef.current) {
      gsap.to(glowRef.current, { opacity: 0, duration: 0.4 });
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#100E0C]">
      <style>{`
        .font-display { font-family: var(--font-fraunces, ui-serif, Georgia, serif); }
        .font-code { font-family: var(--font-mono, ui-monospace, "SF Mono", monospace); }

        @keyframes sweep {
          0% { background-position: -120% 0; }
          60%, 100% { background-position: 220% 0; }
        }
        .name-sweep {
          background-image: linear-gradient(
            100deg,
            #f4efe6 0%,
            #f4efe6 42%,
            #e8b94b 50%,
            #f4efe6 58%,
            #f4efe6 100%
          );
          background-size: 260% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: sweep 5.5s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .name-sweep { animation: none; }
        }
      `}</style>

      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative min-h-screen overflow-hidden bg-[#100E0C] text-[#F4EFE6]"
      >
        {/* Oversized angle-bracket watermark, replacing the flat grid */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-1 sm:px-3">
          <motion.span
            animate={{ opacity: [0.045, 0.08, 0.045] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="font-display select-none text-[28vw] italic leading-none"
            style={{ WebkitTextStroke: "1px #F4EFE6", color: "transparent" }}
          >
            &lt;
          </motion.span>
          <motion.span
            animate={{ opacity: [0.045, 0.08, 0.045] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
            className="font-display select-none text-[28vw] italic leading-none"
            style={{ WebkitTextStroke: "1px #F4EFE6", color: "transparent" }}
          >
            /&gt;
          </motion.span>
        </div>

        {/* Drifting code glyphs */}
        {[
          { text: "const dev = true;", style: { top: "15%", left: "3%" } },
          { text: "npm run dev", style: { bottom: "24%", left: "2%" } },
          { text: '{ status: "live" }', style: { top: "17%", right: "3%" } },
          { text: "01101", style: { bottom: "28%", right: "2%" } },
        ].map((g) => (
          <motion.span
            key={g.text}
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="font-code pointer-events-none absolute hidden select-none text-[11px] tracking-wide text-[#F4EFE6]/15 sm:block"
            style={g.style}
          >
            {g.text}
          </motion.span>
        ))}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#100E0C]" />

      

        {/* Navbar */}
        <header className="hero-navbar absolute left-0 top-0 z-50 w-full px-4 pt-4 sm:px-7 sm:pt-6 lg:px-10">
          <nav className="mx-auto flex max-w-[1650px] items-center justify-between">
            <Link
              href="/"
              aria-label="Go to home"
              className="group flex items-center gap-2.5 rounded-md border border-[#F4EFE6]/10 bg-[#F4EFE6]/[0.04] px-3.5 py-2.5 backdrop-blur-xl transition duration-300 hover:border-[#E8B94B]/40"
            >
              <span className="font-code flex h-6 items-center rounded-sm bg-[#E8B94B] px-1.5 text-[10px] font-semibold text-[#100E0C]">
                KK
              </span>
              <span className="font-code text-xs text-[#F4EFE6]/70">
                komal<span className="text-[#E8B94B]">.dev</span>
              </span>
            </Link>

            <div
              ref={navWrapRef}
              onMouseLeave={() =>
                gsap.to(navHighlightRef.current, { opacity: 0, duration: 0.25 })
              }
              className="relative hidden items-center gap-1 rounded-md border border-[#F4EFE6]/10 bg-[#F4EFE6]/[0.03] px-2 py-2 backdrop-blur-xl md:flex"
            >
              <span
                ref={navHighlightRef}
                className="pointer-events-none absolute inset-y-2 left-0 z-0 rounded-sm bg-[#F4EFE6]/[0.07] opacity-0"
              />
              {navLinks.map((link, i) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onMouseEnter={(event) => {
                    if (!navWrapRef.current || !navHighlightRef.current) return;
                    const wrapBounds =
                      navWrapRef.current.getBoundingClientRect();
                    const linkBounds =
                      event.currentTarget.getBoundingClientRect();

                    gsap.to(navHighlightRef.current, {
                      x: linkBounds.left - wrapBounds.left,
                      width: linkBounds.width,
                      opacity: 1,
                      duration: 0.35,
                      ease: "power3.out",
                    });
                  }}
                  className="group relative z-10 flex items-center gap-1.5 rounded-sm px-3.5 py-1.5 text-[13px] text-[#F4EFE6]/55 transition duration-300 hover:text-[#F4EFE6]"
                >
                  <span className="font-code text-[10px] text-[#E8B94B]/70 group-hover:text-[#E8B94B]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((previous) => !previous)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-[#F4EFE6]/10 bg-[#F4EFE6]/[0.04] text-[#F4EFE6] backdrop-blur-xl transition hover:border-[#E8B94B]/40 md:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </nav>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.22 }}
                className="mx-auto mt-3 max-w-[1650px] rounded-2xl border border-[#F4EFE6]/10 bg-[#1B1815]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
              >
                {navLinks.map((link, i) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-code flex items-center gap-2 rounded-xl px-4 py-3 text-sm text-[#F4EFE6]/65 transition hover:bg-[#F4EFE6]/10 hover:text-[#F4EFE6]"
                  >
                    <span className="text-[10px] text-[#E8B94B]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Main content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1650px] flex-col px-5 pb-5 pt-20 sm:px-8 sm:pt-24 lg:px-10 lg:pt-28">
          <div className="relative flex flex-1 items-center">
            <div className="grid w-full items-center gap-4 lg:grid-cols-[0.86fr_1.28fr_0.86fr] lg:gap-4">
              {/* Left content */}
              <div className="hero-left relative z-30 order-2 -mt-4 text-center sm:-mt-6 lg:order-1 lg:mt-0 lg:text-left">
                {/* Terminal-style status line, this is the signature detail */}
                <div className="font-code mb-4 inline-flex items-center gap-2 rounded-sm border border-[#F4EFE6]/10 bg-[#1B1815] px-3.5 py-2 text-[11px] text-[#F4EFE6]/55">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#E8B94B]" />
                  <span className="text-[#E8B94B]/80">$</span> status --check
                  <span className="text-[#F4EFE6]/35">→</span>
                  <span className="text-[#F4EFE6]/80">open to work</span>
                </div>

                <p className="font-code mb-2 text-[11px] uppercase tracking-[0.25em] text-[#F4EFE6]/35">
                  const role =
                </p>

                <div className="relative mx-auto flex min-h-[70px] max-w-[480px] items-start justify-center sm:min-h-[86px] lg:mx-0 lg:min-h-[96px] lg:justify-start">
                  <h1 className="font-display text-[clamp(2.5rem,4vw,4.4rem)] font-normal italic leading-[0.98] tracking-[-0.03em]">
                    {typedRole}
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{
                        duration: 0.75,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="ml-1.5 inline-block h-[0.8em] w-[3px] translate-y-[0.05em] bg-[#E8B94B] not-italic"
                    />
                  </h1>
                </div>

                <p className="mt-4 max-w-[360px] text-[15px] leading-7 text-[#F4EFE6]/55 lg:hidden">
                  I build web apps with clean interfaces, scalable architecture
                  and smooth interactions.
                </p>

                <div className="mt-5 flex flex-wrap justify-center gap-3 lg:hidden">
                  <PrimaryButton />
                  <ResumeButton />
                </div>

                <div className="mt-5 flex items-center justify-center gap-3 lg:justify-start">
                  <SocialLink
                    href="https://github.com/komalkhokale"
                    label="GitHub"
                    icon={<FaGithub size={16} />}
                  />
                  <SocialLink
                    href="https://www.linkedin.com/in/komal-khokale-4a3ba7278/"
                    label="LinkedIn"
                    icon={<FaLinkedinIn size={15} />}
                  />
                  <SocialLink
                    href="mailto:kkhokale29@gmail.com"
                    label="Email"
                    icon={<Mail size={16} />}
                  />
                </div>
              </div>

              {/* Center image, framed like a design-tool selection with inspector labels — click jumps to work */}
              <a
                href="#projects"
                aria-label="Jump to projects"
                className="hero-frame group relative order-1 flex min-h-[300px] cursor-pointer items-end justify-center sm:min-h-[420px] md:min-h-[480px] lg:order-2 lg:min-h-[560px] xl:min-h-[630px] 2xl:min-h-[675px]"
              >
                <div className="pointer-events-none absolute inset-x-[6%] inset-y-[4%] sm:inset-x-[10%]">
                  <span className="corner-mark absolute -left-1 -top-1 h-5 w-5 border-l-2 border-t-2 border-[#E8B94B]/70 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
                  <span className="corner-mark absolute -right-1 -top-1 h-5 w-5 border-r-2 border-t-2 border-[#E8B94B]/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <span className="corner-mark absolute -bottom-1 -left-1 h-5 w-5 border-b-2 border-l-2 border-[#E8B94B]/70 transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1" />
                  <span className="corner-mark absolute -bottom-1 -right-1 h-5 w-5 border-b-2 border-r-2 border-[#E8B94B]/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />

                  <span className="corner-mark font-code absolute -top-7 left-0 text-[10px] tracking-wider text-[#F4EFE6]/35">
                    PORTRAIT_01
                  </span>
                  <span className="corner-mark font-code absolute -bottom-7 right-0 text-[10px] tracking-wider text-[#F4EFE6]/35">
                    KOMAL.KHOKALE
                  </span>
                </div>

                <motion.div
                  animate={{
                    scale: [1.04, 1.08, 1.04],
                    opacity: [0.1, 0.18, 0.1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute bottom-0 left-1/2 z-0 -translate-x-1/2 blur-[34px]"
                >
                  <img
                    src="/about.png"
                    alt=""
                    aria-hidden="true"
                    className="h-[305px] w-auto max-w-none object-contain object-bottom sm:h-[440px] md:h-[500px] lg:h-[575px] xl:h-[645px] 2xl:h-[685px]"
                  />
                </motion.div>

                <div
                  ref={imageRef}
                  className="pointer-events-none absolute bottom-0 left-1/2 z-10 -translate-x-1/2 will-change-transform"
                >
                  <img
                    src="/about.png"
                    alt="Komal Khokale"
                    className="h-[305px] w-auto max-w-none object-contain object-bottom grayscale-[15%] sm:h-[440px] md:h-[500px] lg:h-[575px] xl:h-[645px] 2xl:h-[685px]"
                  />
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[20%] bg-gradient-to-t from-[#100E0C] via-[#100E0C]/50 to-transparent" />

               
              </a>

              {/* Right content */}
              <div className="hero-right relative z-30 order-3 hidden lg:block">
                <p className="max-w-[300px] text-[15px] leading-7 text-[#F4EFE6]/55">
                  Hi, I&apos;m Komal. I build modern web applications with clean
                  interfaces, scalable architecture and smooth interactions.
                </p>

                <div className="mt-7 flex flex-col items-start gap-3">
                  <PrimaryButton />
                  <ResumeButton />
                </div>

                <div className="font-code mt-10 border-t border-[#F4EFE6]/10 pt-4 text-[11px] text-[#F4EFE6]/35">
                  based in India — remote friendly
                </div>
              </div>
            </div>
          </div>

          {/* Large bottom name with a slow light sweep instead of a static block */}
          <div className="pointer-events-none relative z-30 -mt-3 overflow-hidden sm:-mt-8 lg:-mt-[100px] xl:-mt-[130px] 2xl:-mt-[145px]">
            <div className="hero-name-row flex items-baseline justify-center gap-3 whitespace-nowrap text-center sm:gap-5">
              <span className="name-sweep font-display text-[clamp(4.6rem,15vw,15.5rem)] font-medium leading-[0.8] tracking-[-0.04em]">
                Komal
              </span>
              <span className="font-code hidden translate-y-[-0.4em] text-[clamp(0.8rem,1.3vw,1.05rem)] text-[#F4EFE6]/30 sm:inline-flex sm:items-center sm:gap-2">
                <ArrowUpRight size={16} className="text-[#E8B94B]/50" />
                dev
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function PrimaryButton() {
  const ref = useRef(null);

  const handleMove = (event) => {
    if (window.innerWidth < 1024 || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left - bounds.width / 2) * 0.35;
    const y = (event.clientY - bounds.top - bounds.height / 2) * 0.35;
    gsap.to(ref.current, { x, y, duration: 0.4, ease: "power3.out" });
  };

  const handleLeave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
    });
  };

  return (
    <motion.a
      ref={ref}
      href="#projects"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.97 }}
      className="group flex items-center gap-3 rounded-md bg-[#E8B94B] py-2 pl-4 pr-2 text-sm font-medium text-[#100E0C] transition-colors hover:bg-[#F0C868]"
    >
      See my work
      <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#100E0C] text-[#E8B94B]">
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </motion.a>
  );
}

function ResumeButton() {
  const ref = useRef(null);

  const handleMove = (event) => {
    if (window.innerWidth < 1024 || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left - bounds.width / 2) * 0.3;
    const y = (event.clientY - bounds.top - bounds.height / 2) * 0.3;
    gsap.to(ref.current, { x, y, duration: 0.4, ease: "power3.out" });
  };

  const handleLeave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
    });
  };

  return (
    <motion.a
      ref={ref}
      href="/Full-Stack-Komal.pdf"
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.97 }}
      className="font-code flex items-center gap-2.5 rounded-md border border-[#F4EFE6]/15 bg-[#F4EFE6]/[0.03] px-5 py-3 text-[13px] text-[#F4EFE6]/70 backdrop-blur-md transition-colors hover:border-[#E8B94B]/40 hover:text-[#F4EFE6]"
    >
      <Download size={15} />
      Resume
    </motion.a>
  );
}

function SocialLink({ href, label, icon }) {
  const external = href.startsWith("http");
  const ref = useRef(null);

  const handleMove = (event) => {
    if (window.innerWidth < 1024 || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left - bounds.width / 2) * 0.4;
    const y = (event.clientY - bounds.top - bounds.height / 2) * 0.4;
    gsap.to(ref.current, { x, y, duration: 0.35, ease: "power3.out" });
  };

  const handleLeave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
    });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.94 }}
      className="flex h-10 w-10 items-center justify-center rounded-md border border-[#F4EFE6]/15 bg-[#F4EFE6]/[0.04] text-[#F4EFE6]/60 transition-colors duration-300 hover:border-[#E8B94B]/60 hover:bg-[#E8B94B] hover:text-[#100E0C] sm:h-11 sm:w-11"
    >
      {icon}
    </motion.a>
  );
}
