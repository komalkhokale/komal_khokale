// "use client";

// import React, { useState } from "react";
// import "./project.css";
// // import { useState } from "react";
// import Project from "../../components/project";
// import Modal from "../../components/model";

// const projectsContent = () => {
//   const [modal, setModal] = useState({ active: false, index: 0 });

//   const projects = [
//     {
//       title: "LinkOra",
//       src: "/linkora.png",
//       color: "#000",
//       link: "https://link-ora-linked-in-clone-6zz2jbwhb-komalkhokales-projects.vercel.app/",
//     },
//     {
//       title: "VideoBuddy",
//       src: "/videobuddy.png",
//       color: "#fff",
//       link: "https://frontend-videobuddy.onrender.com/",
//     },
//     {
//       title: "Spylt-Clone",
//       src: "/spylt.png",
//       color: "#DE5E58",
//       link: "https://spylt-clone-imw4dw83e-komalkhokales-projects.vercel.app/",
//     },
//     {
//       title: "K72",
//       src: "/k72.png",
//       color: "#fff",
//       link: "https://k72-website-dsx4ph855-komalkhokales-projects.vercel.app/",
//     },
//     {
//       title: "Titanium",
//       src: "/titanium.png",
//       color: "#000",
//       link: "https://titanium-1qd9irmt8-komalkhokales-projects.vercel.app/",
//     },
//     {
//       title: "Fruit-Juice",
//       src: "/juice.png",
//       color: "#F2F2F2",
//       link: "https://fruit-juice-animation.vercel.app/",
//     },
//     {
//       title: "Vintage-Camera",
//       src: "/vintage.png",
//       color: "#1A1A1A",
//       link: "https://komalkhokale.github.io/Vintage-Camera/",
//     },
//     {
//       title: "Nike-Shoe",
//       src: "/nike.png",
//       color: "#fff",
//       link: "https://nike-style-five.vercel.app/",
//     },

//     {
//       title: "Ochi",
//       src: "/ochi.png",
//       color: "#fff",
//       link: "https://komalkhokale.github.io/Ochii/",
//     },
//     {
//       title: "Miranda",
//       src: "/miranda.png",
//       color: "#fff",
//       link: "https://komalkhokale.github.io/Miranda/",
//     }
//   ];

//   return (
//     <div>
//       <div className="projects-container">
//         <h1 className="projects-heading">
//           Things I’ve &nbsp;
//           <span className="curve-text">
//             Built
//             <svg
//               className="curve-svg"
//               viewBox="0 0 220 22"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M8 12 C70 6, 150 6, 215 12"
//                 stroke="#fff"
//                 strokeWidth="4"
//                 fill="none"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </span>
//         </h1>

//         <h2 className="projects-subheading">My Design works.</h2>
//         <p>
//           Where Ideas Turn Design <span>Code</span>
//         </p>

//         <div className="ui_projects">
//           <img src="/animal.png" alt="" />
//           <img src="motor.png" alt="" />
//           <img src="/bu.png" alt="" />
//           <img src="/food.png" alt="" />
//           <img src="game.png" alt="" />
//           <img src="plant.png" alt="" />
//         </div>
//         <div className="all-work-wrap">
//           <a href="https://www.linkedin.com/in/komal-khokale-4a3ba7278/" target="_blank" className="all-work-btn">
//             See My All Works
//             <span className="arrow">→</span>
//           </a>
//         </div>

//         <h2 className="projects-subheading">My Coding works.</h2>
//         <p>
//           From Concept to <span>Code</span>
//         </p>
//       </div>

//       <main className="main">
//         <div className="body">
//           {projects.map((project, index) => {
//             return (
//               <Project
//                 index={index}
//                 title={project.title}
//                 setModal={setModal}
//                 project={project}
//                 key={index}
//               />
//             );
//           })}
//         </div>
//         <Modal modal={modal} projects={projects} />
//         <div className="all-work-wrap">
//           <a href="https://github.com/komalkhokale" target="_blank"  className="all-work-btn">
//             See My All Works
//             <span className="arrow">→</span>
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default projectsContent;

// "use client";
// import React, { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import "./folder.css";

// const folderData = [
//   {
//     id: "01",
//     name: "Case Study",
//     variant: "variant-1",
//     images: ["/cs1.png", "/cs2.png", "/cs3.png"],
//   },
//   {
//     id: "02",
//     name: "Web Design",
//     variant: "variant-2",
//     images: ["/web1.png", "/web2.png", "/web3.png"],
//   },
//   {
//     id: "03",
//     name: "App Design",
//     variant: "variant-2",
//     images: ["/app1.png", "/app2.png", "/app3.png"],
//   },
//   {
//     id: "04",
//     name: "Web Animations",
//     variant: "variant-3",
//     images: ["/anim1.png", "/anim2.png", "/anim3.png"],
//   },
//   {
//     id: "05",
//     name: "Graphics Design",
//     variant: "variant-1",
//     images: ["/gfx1.png", "/gfx2.png", "/gfx3.png"],
//   },
//   {
//     id: "06",
//     name: "Figures",
//     variant: "variant-2",
//     images: ["/fig1.png", "/fig2.png", "/fig3.png"],
//   },
// ];

// const FolderComponent = () => {
//   const containerRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const folders = gsap.utils.toArray(".folder");
//       const folderWrappers = gsap.utils.toArray(".folder-wrapper");

//       const updatePositions = () => {
//         const isMobile = window.innerWidth < 1000;
//         gsap.set(folderWrappers, { y: isMobile ? 0 : 25 });
//       };

//       updatePositions();
//       window.addEventListener("resize", updatePositions);

//       folders.forEach((folder, index) => {
//         const previewImages = folder.querySelectorAll(
//           ".folder-preview-img img"
//         );
//         const wrapper = folderWrappers[index];

//         folder.addEventListener("mouseenter", () => {
//           if (window.innerWidth < 1000) return;
//           folders.forEach((sib) => {
//             if (sib !== folder) sib.classList.add("disabled");
//           });

//           gsap.to(wrapper, { y: 0, duration: 0.25, ease: "back.out(1.7)" });

//           previewImages.forEach((img, imgIndex) => {
//             let rotation =
//               imgIndex === 0
//                 ? gsap.utils.random(-10, -5)
//                 : imgIndex === 1
//                 ? gsap.utils.random(-10, 10)
//                 : gsap.utils.random(10, 20);

//             gsap.to(img, {
//               y: "-100%",
//               rotation,
//               duration: 0.25,
//               ease: "back.out(1.7)",
//               delay: imgIndex * 0.025,
//             });
//           });
//         });

//         folder.addEventListener("mouseleave", () => {
//           if (window.innerWidth < 1000) return;
//           folders.forEach((sib) => sib.classList.remove("disabled"));
//           gsap.to(wrapper, { y: 25, duration: 0.25, ease: "back.out(1.7)" });

//           previewImages.forEach((img, imgIndex) => {
//             gsap.to(img, {
//               y: "0%",
//               rotation: 0,
//               duration: 0.25,
//               ease: "back.out(1.7)",
//               delay: imgIndex * 0.05,
//             });
//           });
//         });
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   const renderFolder = (f) => (
//     <div key={f.id} className={`folder ${f.variant}`}>
//       <div className="folder-preview">
//         {f.images.map((imgSrc, index) => (
//           <div key={index} className="folder-preview-img">
//             <img src={imgSrc} alt={`preview-${index}`} />
//           </div>
//         ))}
//       </div>
//       <div className="folder-wrapper">
//         <div className="folder-index">
//           <p>{f.id}</p>
//         </div>
//         <div className="folder-name">
//           <h1>{f.name}</h1>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="folders" ref={containerRef}>

//       <h1 className="projects-heading">
//         Things I’ve &nbsp;
//         <span className="curve-text">
//           Design
//           <svg
//             className="curve-svg"
//             viewBox="0 0 220 22"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M8 12 C70 6, 150 6, 215 12"
//               stroke="#fff"
//               strokeWidth="4"
//               fill="none"
//               strokeLinecap="round"
//             />
//           </svg>
//         </span>
//       </h1>

//       <div className="row">{folderData.slice(0, 2).map(renderFolder)}</div>
//       <div className="row">{folderData.slice(2, 4).map(renderFolder)}</div>
//       <div className="row">{folderData.slice(4, 6).map(renderFolder)}</div>
//     </div>
//   );
// };

// export default FolderComponent;




"use client";
import React, { useLayoutEffect, useRef } from "react";
import { useRouter } from "next/navigation"; // Next.js router use kiya hai
import gsap from "gsap";
import "./folder.css";

const folderData = [
  { 
    id: "01", name: "Case Study", variant: "variant-1", 
    link: "/case-study", // Add your page link here
    images: ["/cs1.png", "/cs2.png", "/cs3.png"] 
  },
  { 
    id: "02", name: "Web Design", variant: "variant-2", 
    link: "/web-design",
    images: ["/web1.png", "/web2.png", "/web3.png"] 
  },
  { 
    id: "03", name: "App Design", variant: "variant-2", 
    link: "/app-design",
    images: ["/app1.png", "/app2.png", "/app3.png"] 
  },
  { 
    id: "04", name: "Web Animations", variant: "variant-3", 
    link: "/animations",
    images: ["/anim1.png", "/anim2.png", "/anim3.png"] 
  },
  { 
    id: "05", name: "Graphics Design", variant: "variant-1", 
    link: "/graphics",
    images: ["/g1.png", "/g2.png", "/g3.png"] 
  },
  { 
    id: "06", name: "Website Development", variant: "variant-2", 
    link: "/web-dev",
    images: ["/webdev1.png", "/webdev2.png", "/webdev3.png"] 
  },
];

const FolderComponent = () => {
  const containerRef = useRef(null);
  const router = useRouter(); // Initialize router

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const folders = gsap.utils.toArray(".folder");
      const folderWrappers = gsap.utils.toArray(".folder-wrapper");

      const updatePositions = () => {
        const isMobile = window.innerWidth < 1000;
        gsap.set(folderWrappers, { y: isMobile ? 0 : 25 });
      };

      updatePositions();
      window.addEventListener("resize", updatePositions);

      folders.forEach((folder, index) => {
        const previewImages = folder.querySelectorAll(".folder-preview-img img");
        const wrapper = folderWrappers[index];

        folder.addEventListener("mouseenter", () => {
          if (window.innerWidth < 1000) return;
          folders.forEach((sib) => {
            if (sib !== folder) sib.classList.add("disabled");
          });

          gsap.to(wrapper, { y: 0, duration: 0.25, ease: "back.out(1.7)" });

          previewImages.forEach((img, imgIndex) => {
            let rotation = imgIndex === 0 ? gsap.utils.random(-10, -5) : 
                           imgIndex === 1 ? gsap.utils.random(-10, 10) : 
                           gsap.utils.random(10, 20);

            gsap.to(img, {
              y: "-100%",
              rotation,
              duration: 0.25,
              ease: "back.out(1.7)",
              delay: imgIndex * 0.025,
            });
          });
        });

        folder.addEventListener("mouseleave", () => {
          if (window.innerWidth < 1000) return;
          folders.forEach((sib) => sib.classList.remove("disabled"));
          gsap.to(wrapper, { y: 25, duration: 0.25, ease: "back.out(1.7)" });

          previewImages.forEach((img, imgIndex) => {
            gsap.to(img, {
              y: "0%",
              rotation: 0,
              duration: 0.25,
              ease: "back.out(1.7)",
              delay: imgIndex * 0.05,
            });
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderFolder = (f) => (
    <div 
      key={f.id} 
      className={`folder ${f.variant}`}
      onClick={() => router.push(f.link)} // Navigation logic added here
    >
      <div className="folder-preview">
        {f.images.map((imgSrc, index) => (
          <div key={index} className="folder-preview-img">
            <img src={imgSrc} alt={`preview-${index}`} />
          </div>
        ))}
      </div>
      <div className="folder-wrapper">
        <div className="folder-index"><p>{f.id}</p></div>
        <div className="folder-name"><h1>{f.name}</h1></div>
      </div>
    </div>
  );

  return (
    <div className="folders" ref={containerRef}>

     <h1 className="projects-heading">
       Things I’ve &nbsp;
       <span className="curve-text">
         Design
         <svg
           className="curve-svg"
           viewBox="0 0 220 22"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             d="M8 12 C70 6, 150 6, 215 12"
             stroke="#fff"
             strokeWidth="4"
             fill="none"
             strokeLinecap="round"
           />
         </svg>
       </span>
     </h1>

      <div className="row">{folderData.slice(0, 2).map(renderFolder)}</div>
      <div className="row">{folderData.slice(2, 4).map(renderFolder)}</div>
      <div className="row">{folderData.slice(4, 6).map(renderFolder)}</div>
    </div>
  );
};

export default FolderComponent;