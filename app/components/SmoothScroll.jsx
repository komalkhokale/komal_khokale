"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function LenisController() {
  const pathname = usePathname();

  const lenis = useLenis((data) => {
    ScrollTrigger.update();

    // Temporary test
    console.log("Lenis scroll:", Math.round(data.scroll));
  });

  useEffect(() => {
    if (!lenis) return;

    // console.log("Lenis instance running:", lenis);

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
        lerp: 0.025,
        smoothWheel: true,
        wheelMultiplier: 0.55,
        touchMultiplier: 1,
        syncTouch: false,
      }}
    >
      <LenisController />
      {children}
    </ReactLenis>
  );
}
