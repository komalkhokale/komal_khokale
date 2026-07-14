// "use client";

// import Link from "next/link";
// import { useRef } from "react";
// import { motion } from "framer-motion";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ArrowUpRight } from "lucide-react";

// gsap.registerPlugin(useGSAP, ScrollTrigger);

// const projectCategories = [
//   {
//     number: "01",
//     title: "Full Stack",
//     href: "/projects/full-stack",
//     count: "Full Stack Projects",
//     skills: ["React", "Node.js", "MongoDB", "Express", "GenAI"],
//   },
//   {
//     number: "02",
//     title: "Frontend",
//     href: "/projects/frontend",
//     count: "Frontend Projects",
//     skills: ["React", "Next.js", "Redux", "GSAP", "Tailwind"],
//   },
//   {
//     number: "03",
//     title: "Web Design",
//     href: "/projects/web-design",
//     count: "Website Designs",
//     skills: ["Figma", "Wireframes", "Prototype", "Design System"],
//   },
//   {
//     number: "04",
//     title: "App Design",
//     href: "/projects/app-design",
//     count: "Mobile App Designs",
//     skills: ["UI Design", "UX Flow", "Prototype", "Research"],
//   },
//   {
//     number: "05",
//     title: "Graphics",
//     href: "/projects/graphics",
//     count: "Graphic Designs",
//     skills: ["Branding", "Posters", "Social Media", "Visual Design"],
//   },
// ];

// export default function Projects() {
//   const sectionRef = useRef(null);

//   useGSAP(
//     () => {
//       gsap.from(".projects-topbar", {
//         opacity: 0,
//         y: 25,
//         duration: 0.7,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 82%",
//         },
//       });

//       gsap.from(".projects-heading", {
//         opacity: 0,
//         y: 45,
//         duration: 0.9,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: ".projects-heading",
//           start: "top 84%",
//         },
//       });

//       gsap.from(".projects-description", {
//         opacity: 0,
//         y: 35,
//         duration: 0.8,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".projects-description",
//           start: "top 84%",
//         },
//       });

//       gsap.from(".project-category-row", {
//         opacity: 0,
//         y: 45,
//         stagger: 0.12,
//         duration: 0.8,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".project-category-list",
//           start: "top 80%",
//         },
//       });
//     },
//     {
//       scope: sectionRef,
//     },
//   );

//   return (
//     <section
//       ref={sectionRef}
//       id="projects"
//       className="relative overflow-hidden bg-[#171716] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-10 lg:py-32"
//     >
//       {/* Background lines */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-[7.5%] top-0 h-full w-px bg-white/[0.04]" />
//         <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.025]" />
//         <div className="absolute right-[7.5%] top-0 h-full w-px bg-white/[0.04]" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-[1650px]">
//         {/* Section label */}
//         <div className="projects-topbar flex items-center justify-between border-b border-white/10 pb-5">
//           <div className="flex items-center gap-3">
//             <span className="h-2 w-2 rounded-full bg-[#ff632f]" />

//             <p className="text-[10px] uppercase tracking-[0.3em] text-white/45 sm:text-xs">
//               Selected Work
//             </p>
//           </div>

//           <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
//             05 / Projects
//           </p>
//         </div>

//         {/* Heading */}
//         <div className="grid gap-8 border-b border-white/10 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:py-14">
//           <div className="projects-heading">
//             <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-white/35 sm:text-xs">
//               Explore My Work
//             </p>

//             <h2 className="max-w-[760px] text-[clamp(3rem,5.8vw,6rem)] font-medium leading-[0.94] tracking-[-0.055em]">
//               Projects across
//               <span className="block text-white/22">code & design.</span>
//             </h2>
//           </div>

//           <div className="projects-description max-w-xl lg:justify-self-end">
//             <p className="text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
//               Explore my work across full-stack development, frontend
//               experiences, website interfaces, mobile applications and visual
//               design.
//             </p>

//             <p className="mt-5 text-[10px] uppercase tracking-[0.25em] text-white/28">
//               Select a category to view projects
//             </p>
//           </div>
//         </div>

//         {/* Categories */}
//         <div className="project-category-list">
//           {projectCategories.map((category) => (
//             <ProjectCategory key={category.number} category={category} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function ProjectCategory({ category }) {
//   return (
//     <motion.div
//       whileHover="hover"
//       initial="initial"
//       className="project-category-row group relative border-b border-white/10"
//     >
//       <Link
//         href={category.href}
//         className="relative block overflow-hidden px-1 py-8 sm:py-10 lg:px-6 lg:py-12"
//       >
//         {/* Orange hover background */}
//         <motion.div
//           variants={{
//             initial: {
//               scaleX: 0,
//             },
//             hover: {
//               scaleX: 1,
//             },
//           }}
//           transition={{
//             duration: 0.55,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           style={{
//             transformOrigin: "left center",
//           }}
//           className="pointer-events-none absolute inset-0 bg-[#ff632f]"
//         />

//         <div className="relative z-10 grid gap-5 lg:grid-cols-[0.12fr_0.95fr_0.8fr_0.12fr] lg:items-center lg:gap-8">
//           {/* Number */}
//           <motion.span
//             variants={{
//               initial: {
//                 color: "rgba(255,255,255,0.22)",
//               },
//               hover: {
//                 color: "rgba(255,255,255,0.75)",
//               },
//             }}
//             className="font-barlow text-2xl font-semibold"
//           >
//             {category.number}
//           </motion.span>

//           {/* Title */}
//           <motion.div
//             variants={{
//               initial: {
//                 x: 0,
//               },
//               hover: {
//                 x: 16,
//               },
//             }}
//             transition={{
//               duration: 0.4,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//           >
//             <h3 className="text-[clamp(2.4rem,5vw,5.5rem)] font-medium uppercase leading-none tracking-[-0.055em]">
//               {category.title}
//             </h3>

//           </motion.div>

//           {/* Arrow */}
//           <div className="flex justify-start lg:justify-end">
//             <motion.span
//               variants={{
//                 initial: {
//                   rotate: 0,
//                   scale: 1,
//                   backgroundColor: "rgba(255,255,255,0.04)",
//                 },
//                 hover: {
//                   rotate: 45,
//                   scale: 1.08,
//                   backgroundColor: "#ffffff",
//                 },
//               }}
//               transition={{
//                 duration: 0.4,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 text-white sm:h-16 sm:w-16 group-hover:text-[#ff632f]"
//             >
//               <ArrowUpRight size={26} strokeWidth={1.6} />
//             </motion.span>
//           </div>
//         </div>
//       </Link>
//     </motion.div>
//   );
// }

"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projectCategories = [
  {
    number: "01",
    title: "Full Stack",
    href: "/projects/full-stack",
    count: "Full Stack Projects",
    skills: ["React", "Node.js", "MongoDB", "Express", "GenAI"],
  },
  {
    number: "02",
    title: "Frontend",
    href: "/projects/frontend",
    count: "Frontend Projects",
    skills: ["React", "Next.js", "Redux", "GSAP", "Tailwind"],
  },
  {
    number: "03",
    title: "Web Design",
    href: "/projects/web-design",
    count: "Website Designs",
    skills: ["Figma", "Wireframes", "Prototype", "Design System"],
  },
  {
    number: "04",
    title: "App Design",
    href: "/projects/app-design",
    count: "Mobile App Designs",
    skills: ["UI Design", "UX Flow", "Prototype", "Research"],
  },
  {
    number: "05",
    title: "Graphics",
    href: "/projects/graphics",
    count: "Graphic Designs",
    skills: ["Branding", "Posters", "Social Media", "Visual Design"],
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const railRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".projects-corner", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.07,
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      });

      gsap.from(".projects-topbar", {
        opacity: 0,
        y: 25,
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

      gsap.from(".projects-heading .char", {
        opacity: 0,
        y: 46,
        filter: "blur(6px)",
        stagger: 0.015,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ".projects-heading", start: "top 84%" },
      });

      gsap.from(".projects-description", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".projects-description", start: "top 84%" },
      });

      gsap.from(".project-category-row", {
        opacity: 0,
        y: 45,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".project-category-list", start: "top 80%" },
      });
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden bg-[#100E0C] px-5 py-24 text-[#F4EFE6] sm:px-8 sm:py-28 lg:px-10 lg:py-32"
    >
      <style>{`
        .font-display { font-family: var(--font-fraunces, ui-serif, Georgia, serif); }
        .font-code { font-family: var(--font-mono, ui-monospace, "SF Mono", monospace); }
      `}</style>

      {/* Background lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[7.5%] top-0 h-full w-px bg-[#F4EFE6]/[0.04]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-[#F4EFE6]/[0.025]" />
        <div className="absolute right-[7.5%] top-0 h-full w-px bg-[#F4EFE6]/[0.04]" />

        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 top-[15%] h-[420px] w-[420px] rounded-full bg-[#E8B94B] blur-[170px]"
        />
      </div>

      {/* Scroll progress rail */}
      <div className="pointer-events-none absolute left-[7.5%] top-0 hidden h-full w-px lg:block">
        <div ref={railRef} className="h-full w-px bg-[#E8B94B]" />
      </div>

      {/* Corner registration marks */}
      <span className="projects-corner pointer-events-none absolute left-4 top-4 h-5 w-5 border-l-2 border-t-2 border-[#E8B94B]/50 sm:left-7 sm:top-6" />
      <span className="projects-corner pointer-events-none absolute right-4 top-4 h-5 w-5 border-r-2 border-t-2 border-[#E8B94B]/50 sm:right-7 sm:top-6" />

      <div className="relative z-10 mx-auto max-w-[1650px]">
        {/* Section label */}
        <div className="projects-topbar flex items-center justify-between border-b border-[#F4EFE6]/10 pb-5">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#E8B94B]" />
            <p className="font-code text-[10px] uppercase tracking-[0.3em] text-[#F4EFE6]/45 sm:text-xs">
              Selected Work
            </p>
          </div>

          <p className="font-code text-[10px] uppercase tracking-[0.25em] text-[#F4EFE6]/30">
            05 / projects
          </p>
        </div>

        {/* Heading */}
        <div className="grid gap-8 border-b border-[#F4EFE6]/10 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:py-14">
          <div className="projects-heading" style={{ perspective: "600px" }}>
            <p className="font-code mb-4 text-[10px] uppercase tracking-[0.3em] text-[#F4EFE6]/35 sm:text-xs">
              explore my work
            </p>

            <h2 className="font-display max-w-[760px] text-[clamp(3rem,5.8vw,6rem)] font-normal italic leading-[0.94] tracking-[-0.03em]">
              {"Projects across".split("").map((char, i) => (
                <span
                  key={i}
                  className="char inline-block will-change-transform"
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
              <span className="block text-[#F4EFE6]/22">
                {"code & design.".split("").map((char, i) => (
                  <span
                    key={i}
                    className="char inline-block will-change-transform"
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </h2>
          </div>

          <div className="projects-description max-w-xl lg:justify-self-end">
            <p className="text-sm leading-7 text-[#F4EFE6]/50 sm:text-base sm:leading-8">
              Explore my work across full-stack development, frontend
              experiences, website interfaces, mobile applications and visual
              design.
            </p>

            <p className="font-code mt-5 text-[10px] uppercase tracking-[0.25em] text-[#F4EFE6]/28">
              select a category to view projects
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="project-category-list">
          {projectCategories.map((category) => (
            <ProjectCategory key={category.number} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCategory({ category }) {
  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      className="project-category-row group relative border-b border-[#F4EFE6]/10"
    >
      <Link
        href={category.href}
        className="relative block overflow-hidden px-1 py-8 sm:py-10 lg:px-6 lg:py-12"
      >
        {/* Amber hover background */}
        <motion.div
          variants={{ initial: { scaleX: 0 }, hover: { scaleX: 1 } }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left center" }}
          className="pointer-events-none absolute inset-0 bg-[#E8B94B]"
        />

        {/* Corner marks that tighten in on hover */}
        <motion.span
          variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }}
          className="pointer-events-none absolute left-1 top-3 h-3 w-3 border-l-2 border-t-2 border-[#100E0C]/40 lg:left-4"
        />
        <motion.span
          variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }}
          className="pointer-events-none absolute bottom-3 left-1 h-3 w-3 border-b-2 border-l-2 border-[#100E0C]/40 lg:left-4"
        />

        <div className="relative z-10 grid gap-3 lg:grid-cols-[0.12fr_0.95fr_0.8fr_0.12fr] lg:items-center lg:gap-8">
          {/* Number */}
          <motion.span
            variants={{
              initial: { color: "rgba(244,239,230,0.22)" },
              hover: { color: "#100E0C" },
            }}
            className="font-code text-xl font-semibold"
          >
            {category.number}
          </motion.span>

          {/* Title + revealed skills */}
          <motion.div
            variants={{ initial: { x: 0 }, hover: { x: 16 } }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h3
              variants={{
                initial: { color: "#F4EFE6" },
                hover: { color: "#100E0C" },
              }}
              className="font-display text-[clamp(2.4rem,5vw,5.5rem)] italic leading-none tracking-[-0.02em]"
            >
              {category.title}
            </motion.h3>

            <motion.div
              variants={{
                initial: { opacity: 0, y: 8 },
                hover: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="font-code mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] uppercase tracking-[0.15em] text-[#100E0C]/60"
            >
              {category.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </motion.div>
          </motion.div>

          {/* Count label */}
          <motion.span
            variants={{
              initial: { color: "rgba(244,239,230,0.28)" },
              hover: { color: "rgba(16,14,12,0.55)" },
            }}
            className="font-code hidden text-xs uppercase tracking-[0.2em] lg:block"
          >
            {category.count}
          </motion.span>

          {/* Arrow */}
          <div className="flex justify-start lg:justify-end">
            <motion.span
              variants={{
                initial: {
                  rotate: 0,
                  scale: 1,
                  backgroundColor: "rgba(244,239,230,0.04)",
                  color: "#F4EFE6",
                },
                hover: {
                  rotate: 45,
                  scale: 1.08,
                  backgroundColor: "#100E0C",
                  color: "#E8B94B",
                },
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-[#F4EFE6]/15 sm:h-16 sm:w-16"
            >
              <ArrowUpRight size={26} strokeWidth={1.6} />
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}