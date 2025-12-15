// "use client"

// import Lenis from "lenis";
import ClientWrapper from "./ClientWrapper";
import "./globals.css";
import { Barlow_Condensed, Poppins, Saira } from "next/font/google";
// import { useEffect } from "react";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-barlow",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
});

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-saira",
});

export default function RootLayout({ children }) {

  // useEffect(()=>{
  //   const lenis = new Lenis()

  //   function raf(time){
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }

  //   requestAnimationFrame(raf)

  // },[])
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${barlow.variable} ${poppins.variable} ${saira.variable}`}
      >
        <ClientWrapper>{children}</ClientWrapper>

        <footer>
          <p>Made with ❤️ by Me.</p>
        </footer>
      </body>
    </html>
  );
}
