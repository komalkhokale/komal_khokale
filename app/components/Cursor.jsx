"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const GOLD = "#E8B94B";
const DARK = "#100E0C";

const INTERACTIVE_SELECTOR =
  "a, button, [data-cursor], input, textarea, select";

export default function Cursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const text = textRef.current;

    if (!cursor || !dot || !text) return;

    const pointerMedia = window.matchMedia("(pointer: fine)");

    const isDesktop = pointerMedia.matches && window.innerWidth >= 1024;

    if (!isDesktop) {
      cursor.style.display = "none";
      dot.style.display = "none";
      return;
    }

    /*
      Tailwind translate classes use karne ke bajay
      GSAP ke xPercent/yPercent se cursor center kar rahe hain.
    */
    gsap.set([cursor, dot], {
      xPercent: -50,
      yPercent: -50,
      x: 0,
      y: 0,
      autoAlpha: 0,
    });

    const cursorX = gsap.quickTo(cursor, "x", {
      duration: 0.35,
      ease: "power3.out",
    });

    const cursorY = gsap.quickTo(cursor, "y", {
      duration: 0.35,
      ease: "power3.out",
    });

    const dotX = gsap.quickTo(dot, "x", {
      duration: 0.08,
      ease: "power2.out",
    });

    const dotY = gsap.quickTo(dot, "y", {
      duration: 0.08,
      ease: "power2.out",
    });

    const showCursor = () => {
      gsap.to([cursor, dot], {
        autoAlpha: 1,
        duration: 0.2,
        overwrite: "auto",
      });
    };

    const handlePointerMove = (event) => {
      cursorX(event.clientX);
      cursorY(event.clientY);

      dotX(event.clientX);
      dotY(event.clientY);

      showCursor();
    };

    const resetCursor = () => {
      text.textContent = "";

      gsap.to(cursor, {
        width: 42,
        height: 42,
        scale: 1,
        backgroundColor: "rgba(232, 185, 75, 0)",
        borderColor: GOLD,
        duration: 0.3,
        ease: "power3.out",
        overwrite: "auto",
      });

      gsap.to(text, {
        autoAlpha: 0,
        scale: 0.8,
        duration: 0.2,
        overwrite: "auto",
      });

      gsap.to(dot, {
        scale: 1,
        backgroundColor: GOLD,
        duration: 0.25,
        overwrite: "auto",
      });
    };

    const handlePointerOver = (event) => {
      if (!(event.target instanceof Element)) return;

      const target = event.target.closest(INTERACTIVE_SELECTOR);

      if (!target) {
        resetCursor();
        return;
      }

      const cursorText = target.getAttribute("data-cursor");

      if (cursorText) {
        text.textContent = cursorText.toUpperCase();

        gsap.to(cursor, {
          width: 88,
          height: 88,
          backgroundColor: GOLD,
          borderColor: GOLD,
          duration: 0.35,
          ease: "power3.out",
          overwrite: "auto",
        });

        gsap.to(text, {
          autoAlpha: 1,
          scale: 1,
          color: DARK,
          duration: 0.25,
          overwrite: "auto",
        });

        gsap.to(dot, {
          scale: 0,
          duration: 0.2,
          overwrite: "auto",
        });

        return;
      }

      gsap.to(cursor, {
        width: 62,
        height: 62,
        backgroundColor: "rgba(232, 185, 75, 0.10)",
        borderColor: GOLD,
        duration: 0.3,
        ease: "power3.out",
        overwrite: "auto",
      });

      gsap.to(dot, {
        scale: 0.55,
        duration: 0.25,
        overwrite: "auto",
      });
    };

    const handlePointerOut = (event) => {
      if (!(event.target instanceof Element)) return;

      const fromTarget = event.target.closest(INTERACTIVE_SELECTOR);

      const relatedTarget =
        event.relatedTarget instanceof Element
          ? event.relatedTarget.closest(INTERACTIVE_SELECTOR)
          : null;

      if (fromTarget && fromTarget !== relatedTarget) {
        resetCursor();
      }
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, dot], {
        autoAlpha: 0,
        duration: 0.2,
        overwrite: "auto",
      });
    };

    /*
      pointermove mousemove se zyada reliable hai.
    */
    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );

      gsap.killTweensOf([cursor, dot, text]);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[99998] flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#E8B94B] opacity-0"
      >
        <span
          ref={textRef}
          className="font-code text-[10px] font-semibold uppercase tracking-[0.18em] opacity-0"
        />
      </div>

      <div
        ref={dotRef}
        aria-hidden="true"
        className="custom-cursor-dot pointer-events-none fixed left-0 top-0 z-[99999] h-[6px] w-[6px] rounded-full bg-[#E8B94B] opacity-0"
      />
    </>
  );
}
