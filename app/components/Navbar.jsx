"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Experience",
    href: "#experience",
  },
];

const Navbar = () => {
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12 xl:px-16">
        <Link
          href="/"
          className="font-barlow text-3xl font-semibold uppercase tracking-[-0.05em] text-[#111111]"
        >
          KK<span className="text-black/30">.</span>
        </Link>

        <nav className="hidden items-center gap-8 rounded-full border border-black/10 bg-[#ede9df]/70 px-6 py-3 backdrop-blur-xl md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-black/55 transition duration-300 hover:text-black"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-[#111111] px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-black/70"
        >
          Let&apos;s Talk
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </motion.header>
  );
};

export default Navbar;
