// import { forwardRef } from 'react';
// import './style.css';
// import Magnetic from '../magnetic';

// const Header = forwardRef(function index(props, ref) {
//   return (
//     <div className="header">
//         <Magnetic>
//           <div className="burger">
//             <div ref={ref} className="bounds"></div>
//           </div>
//         </Magnetic>
//     </div>
//   )}
// )

// export default Header


"use client";

import { forwardRef, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import Magnetic from "../magnetic";
import "./style.css";

gsap.registerPlugin(CSSRulePlugin);

const Navbar = forwardRef(function Navbar(props, forwardedRef) {

  // 🔵 burger button refs
  const burgerRef = useRef(null);
  const timeline = useRef(null);

  const router = useRouter();
  const pathname = usePathname();

  // forwardRef + burgerRef merge
  const setMergedRef = (el) => {
    burgerRef.current = el;
    if (forwardedRef) forwardedRef.current = el;
  };

  useEffect(() => {
    const activeRule = CSSRulePlugin.getRule(".menu-item.active-link p::after");

    gsap.set(".menu-item p", { y: 120, opacity: 0, rotateX: -45 });

    const tl = gsap.timeline({ paused: true });

    tl.to(".overlay", {
      duration: 1.3,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ease: "power4.inOut",
      backdropFilter: "blur(8px)",
    });

    tl.to(
      ".menu-item p",
      {
        duration: 1.3,
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.15,
        ease: "power4.out",
      },
      "-=0.9"
    );

    tl.to(
      activeRule,
      {
        width: "100%",
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4"
    );

    tl.to(
      ".sub-nav",
      {
        bottom: "10%",
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.2"
    );

    timeline.current = tl;
  }, []);

  // Navigate
  const handleNav = (path) => {
    router.push(path);

    const btn = burgerRef.current;
    btn.classList.remove("active");
    timeline.current.reverse();
  };

  // Toggle GSAP menu
  const toggleMenu = () => {
    const btn = burgerRef.current;
    btn.classList.toggle("active");

    if (timeline.current.isActive()) return;

    btn.classList.contains("active")
      ? timeline.current.play()
      : timeline.current.reverse();
  };

  return (
    <>
      {/* 🔵 TOP FIXED HEADER */}
      <div className="header">
        <h1>KOMAL.</h1>
        <Magnetic>
          <div className="burger">
            <div
              ref={(el) => {
                setMergedRef(el);
              }}
              className="bounds"
              onClick={toggleMenu}
            ></div>
          </div>
        </Magnetic>
      </div>

      {/* 🔵 NAV MENU (GSAP Animated Overlay) */}
      <div className="overlay">
        <div className="overlay-menu">
          <div
            className={`menu-item ${pathname === "/" ? "active-link" : ""}`}
            onClick={() => handleNav("/")}
          >
            <p>Home</p>
          </div>

          <div
            className={`menu-item ${pathname === "/about" ? "active-link" : ""}`}
            onClick={() => handleNav("/about")}
          >
            <p>About</p>
          </div>

          <div
            className={`menu-item ${
              pathname === "/projects" ? "active-link" : ""
            }`}
            onClick={() => handleNav("/projects")}
          >
            <p>Projects</p>
          </div>

          <div
            className={`menu-item ${
              pathname === "/contact" ? "active-link" : ""
            }`}
            onClick={() => handleNav("/contact")}
          >
            <p>Contact</p>
          </div>
        </div>

    
      </div>
    </>
  );
});

export default Navbar;


