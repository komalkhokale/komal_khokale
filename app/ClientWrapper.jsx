// "use client";

// import Header from "../components/header";
// import StickyCursor from "../components/stickyCursor";

// export default function ClientWrapper({ children }) {
//   return (
//     <>
//       <Header />
//       <StickyCursor />
//       {children}
//     </>
//   );

"use client";

import { useRef } from "react";
// import Navbar from "./Navbar";
import StickyCursor from "../components/stickyCursor";
import Navbar from "@/components/header";

export default function ClientWrapper({ children }) {
  const stickyRef = useRef(null);   // 🔵 yahi main ref hai

  return (
    <>
      <Navbar ref={stickyRef} />     {/* navbar ko ref mil gaya */}
      <StickyCursor stickyElement={stickyRef} />  {/* cursor ko bhi mil gaya */}
      {children}
    </>
  );
}
