"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./styel.css";

export default function Contact() {
  const linksRef = useRef([]);
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    /* ---------- Custom Cursor ---------- */
    const moveCursor = (e) => {
      gsap.to(dot.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });

      gsap.to(ring.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.25,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    /* ---------- Magnetic Links ---------- */
    linksRef.current.forEach((link) => {
      const strength = 25;

      const move = (e) => {
        const rect = link.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        gsap.to(link, {
          x: x / strength,
          y: y / strength,
          duration: 0.3,
          ease: "power3.out",
        });
      };

      const reset = () => {
        gsap.to(link, {
          x: 0,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        });
      };

      link.addEventListener("mousemove", move);
      link.addEventListener("mouseleave", reset);

      /* cursor interaction */
      link.addEventListener("mouseenter", () => {
        gsap.to(ring.current, { scale: 2, opacity: 0.5 });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(ring.current, { scale: 1, opacity: 1 });
      });
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Cursor */}
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />

      {/* Contact */}
      <div className="contact">
        <h1>
          You can get in touch with me via{" "}
          <a
            ref={(el) => (linksRef.current[0] = el)}
            className="link mail"
            href="mailto:kkhokale15@gmail.com"
          >
            Mail
          </a>{" "}
          or{" "}
          <a
            ref={(el) => (linksRef.current[1] = el)}
            className="link x"
            href="https://x.com/"
            target="_blank"
          >
            X
          </a>{" "}
          or{" "}
          <a
            ref={(el) => (linksRef.current[2] = el)}
            className="link linkedin"
            href="https://www.linkedin.com/in/komal-khokale-4a3ba7278/"
            target="_blank"
          >
            LinkedIn
          </a>
          .
        </h1>
      </div>
    </>
  );
}
