"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function LenisController() {
  const pathname = usePathname();

  const lenis = useLenis(() => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    if (!lenis) return;

    lenis.scrollTo(0, {
      immediate: true,
    });

    const timer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname, lenis]);

  return null;
}

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.055,
        smoothWheel: true,
        wheelMultiplier: 0.85,
        touchMultiplier: 1.2,
        syncTouch: false,
        orientation: "vertical",
        gestureOrientation: "vertical",
      }}
    >
      <LenisController />
      {children}
    </ReactLenis>
  );
}
