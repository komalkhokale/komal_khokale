import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import SmoothScroll from "./components/SmoothScroll";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  
  title: "Komal Khokale",
  description: "Komal Khokale is a software engineer and web developer with a passion for creating innovative and user-friendly applications. With expertise in front-end and back-end development, Komal has worked on various projects, delivering high-quality solutions that meet client needs. In addition to technical skills, Komal is known for strong problem-solving abilities and a collaborative approach to teamwork.",
icons: {
  icon: "/favicon.png",
  shortcut: "/favicon.png",
  apple: "/favicon.png",
},
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning> 
        <SmoothScroll>{children}</SmoothScroll>
        </body>
    </html>
  );
}
