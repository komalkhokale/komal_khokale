"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ArrowUpRight, Download, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const contactLinks = [
  {
    label: "Email",
    value: "kkhokale29@gmail.com",
    href: "mailto:kkhokale29@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 9322686370",
    href: "tel:+919322686370",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/komal-khokale-4a3ba7278/",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    value: "View my repositories",
    href: "https://github.com/komalkhokale",
    icon: FaGithub,
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const railRef = useRef(null);
  const primaryRef = useRef(null);
  const resumeRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".contact-corner", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.07,
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      });

      gsap.from(".contact-topbar", {
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

      gsap.from(".contact-heading-line", {
        opacity: 0,
        y: 85,
        stagger: 0.12,
        duration: 0.9,
        ease: "power4.out",
        scrollTrigger: { trigger: ".contact-heading", start: "top 82%" },
      });

      gsap.from(".contact-copy", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".contact-copy", start: "top 84%" },
      });

      gsap.from(".contact-link-row", {
        opacity: 0,
        y: 35,
        stagger: 0.1,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: { trigger: ".contact-links", start: "top 82%" },
      });

      gsap.from(".contact-footer", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ".contact-footer", start: "top 92%" },
      });
    },
    {
      scope: sectionRef,
    },
  );

  const magnetic = (ref, strength = 0.3) => ({
    onMouseMove: (event) => {
      if (window.innerWidth < 1024 || !ref.current) return;
      const bounds = ref.current.getBoundingClientRect();
      const x = (event.clientX - bounds.left - bounds.width / 2) * strength;
      const y = (event.clientY - bounds.top - bounds.height / 2) * strength;
      gsap.to(ref.current, { x, y, duration: 0.4, ease: "power3.out" });
    },
    onMouseLeave: () => {
      if (!ref.current) return;
      gsap.to(ref.current, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
      });
    },
  });

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#100E0C] px-5 py-24 text-[#F4EFE6] sm:px-8 sm:py-28 lg:px-10 lg:py-32"
    >
      <span
        ref={railRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[2px] origin-top bg-[#E8B94B]/70"
      />
      <style>{`
        .font-display { font-family: var(--font-fraunces, ui-serif, Georgia, serif); }
        .font-code { font-family: var(--font-mono, ui-monospace, "SF Mono", monospace); }

        @keyframes sweep {
          0% { background-position: -120% 0; }
          60%, 100% { background-position: 220% 0; }
        }
        .contact-sweep {
          background-image: linear-gradient(
            100deg,
            rgba(244,239,230,0.22) 0%,
            rgba(244,239,230,0.22) 42%,
            #e8b94b 50%,
            rgba(244,239,230,0.22) 58%,
            rgba(244,239,230,0.22) 100%
          );
          background-size: 260% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: sweep 6s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .contact-sweep { animation: none; }
        }
      `}</style>

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[7.5%] top-0 h-full w-px bg-[#F4EFE6]/[0.04]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-[#F4EFE6]/[0.025]" />
        <div className="absolute right-[7.5%] top-0 h-full w-px bg-[#F4EFE6]/[0.04]" />

        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.06, 0.15, 0.06] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#E8B94B] blur-[180px]"
        />
      </div>

      {/* Oversized "@" watermark, echoing the brace/bracket motif from earlier sections */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.05]">
        <span
          className="font-display select-none text-[55vw] italic leading-none"
          style={{ WebkitTextStroke: "1px #F4EFE6", color: "transparent" }}
        >
          @
        </span>
      </div>

      {/* Corner registration marks */}
      <span className="contact-corner pointer-events-none absolute left-4 top-4 h-5 w-5 border-l-2 border-t-2 border-[#E8B94B]/50 sm:left-7 sm:top-6" />
      <span className="contact-corner pointer-events-none absolute right-4 top-4 h-5 w-5 border-r-2 border-t-2 border-[#E8B94B]/50 sm:right-7 sm:top-6" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-12rem)] max-w-[1650px] flex-col">
        {/* Top label */}
        <div className="contact-topbar flex items-center justify-between border-b border-[#F4EFE6]/10 pb-5">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#E8B94B]" />
            <p className="font-code text-[10px] uppercase tracking-[0.3em] text-[#F4EFE6]/45 sm:text-xs">
              Contact
            </p>
          </div>

          <p className="font-code text-[10px] uppercase tracking-[0.25em] text-[#F4EFE6]/30">
            06 / let&apos;s talk
          </p>
        </div>

        {/* Main content */}
        <div className="grid flex-1 gap-14 py-14 lg:grid-cols-[1.18fr_0.82fr] lg:items-center lg:gap-20 lg:py-20">
          {/* Heading */}
          <div className="contact-heading">
            <div className="font-code mb-5 inline-flex items-center gap-2 rounded-sm border border-[#F4EFE6]/10 bg-[#1B1815] px-3.5 py-2 text-[11px] text-[#F4EFE6]/55">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#E8B94B]" />
              <span className="text-[#E8B94B]/80">$</span> have an idea or
              opportunity?
            </div>

            <h2 className="font-display text-[clamp(3.4rem,9vw,9.5rem)] font-normal italic leading-[0.92] tracking-[-0.02em]">
              <span className="block overflow-hidden">
                <span className="contact-heading-line block">
                  Let&apos;s build
                </span>
              </span>

              <span className="block overflow-hidden">
                <span className="contact-heading-line contact-sweep block">
                  something great.
                </span>
              </span>
            </h2>

            <div className="contact-copy mt-9 max-w-2xl">
              <p className="text-base leading-8 text-[#F4EFE6]/50 sm:text-lg">
                I&apos;m open to full-time roles, freelance projects and
                collaborations involving full-stack development, frontend
                experiences or modern web products.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <motion.a
                  ref={primaryRef}
                  href="mailto:kkhokale29@gmail.com"
                  {...magnetic(primaryRef, 0.3)}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center gap-4 rounded-md bg-[#E8B94B] py-2 pl-2 pr-6 text-sm font-medium text-[#100E0C] transition-colors hover:bg-[#F0C868]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#100E0C] text-[#E8B94B]">
                    <Mail size={18} />
                  </span>
                  Send an email
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </motion.a>

                <motion.a
                  ref={resumeRef}
                  href="/komal-khokale-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...magnetic(resumeRef, 0.25)}
                  whileTap={{ scale: 0.97 }}
                  className="font-code flex items-center gap-3 rounded-md border border-[#F4EFE6]/15 bg-[#F4EFE6]/[0.04] px-6 py-3.5 text-sm text-[#F4EFE6]/65 backdrop-blur-md transition-colors hover:border-[#E8B94B]/40 hover:text-[#F4EFE6]"
                >
                  <Download size={17} />
                  Download Resume
                </motion.a>
              </div>
            </div>
          </div>

          {/* Contact links */}
          <div className="contact-links border-t border-[#F4EFE6]/10 lg:border-t-0">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              const external = item.href.startsWith("http");

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  whileHover="hover"
                  initial="initial"
                  className="contact-link-row group relative block overflow-hidden border-b border-[#F4EFE6]/10"
                >
                  <motion.div
                    variants={{ initial: { scaleX: 0 }, hover: { scaleX: 1 } }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: "left center" }}
                    className="pointer-events-none absolute inset-0 bg-[#E8B94B]"
                  />

                  <div className="relative z-10 flex items-center justify-between gap-5 py-6 sm:py-7">
                    <div className="flex items-center gap-4">
                      <motion.span
                        variants={{
                          initial: {
                            backgroundColor: "rgba(244,239,230,0.04)",
                            color: "rgba(244,239,230,0.55)",
                          },
                          hover: {
                            backgroundColor: "#100E0C",
                            color: "#E8B94B",
                          },
                        }}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#F4EFE6]/15"
                      >
                        <Icon size={18} />
                      </motion.span>

                      <div>
                        <motion.p
                          variants={{
                            initial: { color: "rgba(244,239,230,0.35)" },
                            hover: { color: "rgba(16,14,12,0.65)" },
                          }}
                          className="font-code text-[10px] uppercase tracking-[0.25em]"
                        >
                          {item.label}
                        </motion.p>

                        <motion.p
                          variants={{
                            initial: { x: 0, color: "rgba(244,239,230,0.7)" },
                            hover: { x: 8, color: "#100E0C" },
                          }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 text-base font-medium sm:text-lg"
                        >
                          {item.value}
                        </motion.p>
                      </div>
                    </div>

                    <motion.span
                      variants={{
                        initial: {
                          rotate: 0,
                          scale: 1,
                          backgroundColor: "rgba(244,239,230,0)",
                          color: "rgba(244,239,230,0.55)",
                        },
                        hover: {
                          rotate: 45,
                          scale: 1.08,
                          backgroundColor: "#100E0C",
                          color: "#E8B94B",
                        },
                      }}
                      transition={{ duration: 0.35 }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#F4EFE6]/15"
                    >
                      <ArrowUpRight size={19} />
                    </motion.span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <footer className="contact-footer font-code flex gap-5 border-t border-[#F4EFE6]/10 pt-6 text-[14px] uppercase tracking-[0.24em] text-[#F4EFE6] sm:flex-row sm:items-center sm:justify-between">
          <h4>© {new Date().getFullYear()} Made with ❤️ by Komal Khokale</h4>

          <motion.a
            href="#top"
            whileHover={{ y: -3 }}
            className="group inline-flex items-center gap-2 text-[#F4EFE6]/40 transition hover:text-[#E8B94B]"
          >
            Back to top
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </motion.a>
        </footer>
      </div>
    </section>
  );
}
