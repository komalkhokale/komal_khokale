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

  useGSAP(
    () => {
      gsap.from(".contact-topbar", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
        },
      });

      gsap.from(".contact-heading-line", {
        opacity: 0,
        y: 85,
        stagger: 0.12,
        duration: 0.9,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".contact-heading",
          start: "top 82%",
        },
      });

      gsap.from(".contact-copy", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-copy",
          start: "top 84%",
        },
      });

      gsap.from(".contact-link-row", {
        opacity: 0,
        y: 35,
        stagger: 0.1,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-links",
          start: "top 82%",
        },
      });

      gsap.from(".contact-footer", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-footer",
          start: "top 92%",
        },
      });
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#171716] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-10 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[7.5%] top-0 h-full w-px bg-white/[0.04]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.025]" />
        <div className="absolute right-[7.5%] top-0 h-full w-px bg-white/[0.04]" />

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.05, 0.13, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#ff632f] blur-[180px]"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-12rem)] max-w-[1650px] flex-col">
        {/* Top label */}
        <div className="contact-topbar flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#ff632f]" />

            <p className="text-[10px] uppercase tracking-[0.3em] text-white/45 sm:text-xs">
              Contact
            </p>
          </div>

          <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
            06 / Let&apos;s Talk
          </p>
        </div>

        {/* Main content */}
        <div className="grid flex-1 gap-14 py-14 lg:grid-cols-[1.18fr_0.82fr] lg:items-center lg:gap-20 lg:py-20">
          {/* Heading */}
          <div className="contact-heading">
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/35 sm:text-xs">
              Have an idea or opportunity?
            </p>

            <h2 className="font-barlow text-[clamp(4.2rem,10vw,11rem)] font-semibold uppercase leading-[0.76] tracking-[-0.07em]">
              <span className="block overflow-hidden">
                <span className="contact-heading-line block">
                  Let&apos;s build
                </span>
              </span>

              <span className="block overflow-hidden">
                <span className="contact-heading-line block text-white/20">
                  something great.
                </span>
              </span>
            </h2>

            <div className="contact-copy mt-9 max-w-2xl">
              <p className="text-base leading-8 text-white/50 sm:text-lg">
                I&apos;m open to full-time roles, freelance projects and
                collaborations involving full-stack development, frontend
                experiences or modern web products.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <motion.a
                  href="mailto:kkhokale29@gmail.com"
                  whileHover={{
                    y: -4,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="group flex items-center gap-4 rounded-full bg-[#ff632f] py-2 pl-2 pr-6 text-sm font-medium text-white transition hover:bg-[#ff7547]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#ff632f]">
                    <Mail size={18} />
                  </span>
                  Send an email
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </motion.a>

                <motion.a
                  href="/komal-khokale-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -4,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm text-white/65 transition hover:border-white/35 hover:bg-white/10 hover:text-white"
                >
                  <Download size={17} />
                  Download Resume
                </motion.a>
              </div>
            </div>
          </div>

          {/* Contact links */}
          <div className="contact-links border-t border-white/10 lg:border-t-0">
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
                  className="contact-link-row group relative block overflow-hidden border-b border-white/10"
                >
                  <motion.div
                    variants={{
                      initial: {
                        scaleX: 0,
                      },
                      hover: {
                        scaleX: 1,
                      },
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      transformOrigin: "left center",
                    }}
                    className="pointer-events-none absolute inset-0 bg-[#ff632f]"
                  />

                  <div className="relative z-10 flex items-center justify-between gap-5 py-6 sm:py-7">
                    <div className="flex items-center gap-4">
                      <motion.span
                        variants={{
                          initial: {
                            backgroundColor: "rgba(255,255,255,0.04)",
                            color: "rgba(255,255,255,0.55)",
                          },
                          hover: {
                            backgroundColor: "#ffffff",
                            color: "#ff632f",
                          },
                        }}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15"
                      >
                        <Icon size={18} />
                      </motion.span>

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-white/35 transition group-hover:text-white/65">
                          {item.label}
                        </p>

                        <motion.p
                          variants={{
                            initial: {
                              x: 0,
                            },
                            hover: {
                              x: 8,
                            },
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                          className="mt-2 text-base font-medium text-white/70 sm:text-lg"
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
                        },
                        hover: {
                          rotate: 45,
                          scale: 1.08,
                        },
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/55 group-hover:bg-white group-hover:text-[#ff632f]"
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
        <footer className="contact-footer flex flex-col gap-5 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.24em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Komal Khokale</p>

          <p>Full Stack · Frontend · Creative</p>

          <motion.a
            href="#top"
            whileHover={{
              y: -3,
            }}
            className="group inline-flex items-center gap-2 text-white/40 transition hover:text-white"
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
