"use client";

import React, { useState } from "react";
import "./project.css";
// import { useState } from "react";
import Project from "../../components/project";
import Modal from "../../components/model";

const projectsContent = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  const projects = [
    {
      title: "LinkOra",
      src: "/linkora.png",
      color: "#000",
      link: "https://link-ora-linked-in-clone-6zz2jbwhb-komalkhokales-projects.vercel.app/",
    },
    {
      title: "VideoBuddy",
      src: "/videobuddy.png",
      color: "#fff",
      link: "https://frontend-videobuddy.onrender.com/",
    },
    {
      title: "Spylt-Clone",
      src: "/spylt.png",
      color: "#DE5E58",
      link: "https://spylt-clone-imw4dw83e-komalkhokales-projects.vercel.app/",
    },
    {
      title: "K72",
      src: "/k72.png",
      color: "#fff",
      link: "https://k72-website-dsx4ph855-komalkhokales-projects.vercel.app/",
    },
    {
      title: "Titanium",
      src: "/titanium.png",
      color: "#000",
      link: "https://titanium-1qd9irmt8-komalkhokales-projects.vercel.app/",
    },
    {
      title: "Fruit-Juice",
      src: "/juice.png",
      color: "#F2F2F2",
      link: "https://fruit-juice-animation.vercel.app/",
    },
    {
      title: "Vintage-Camera",
      src: "/vintage.png",
      color: "#1A1A1A",
      link: "https://komalkhokale.github.io/Vintage-Camera/",
    },
    {
      title: "Nike-Shoe",
      src: "/nike.png",
      color: "#fff",
      link: "https://nike-style-five.vercel.app/",
    },
    
    {
      title: "Ochi",
      src: "/ochi.png",
      color: "#fff",
      link: "https://komalkhokale.github.io/Ochii/",
    },
    {
      title: "Miranda",
      src: "/miranda.png",
      color: "#fff",
      link: "https://komalkhokale.github.io/Miranda/",
    }
  ];

  return (
    <div>
      <div className="projects-container">
        <h1 className="projects-heading">
          Things I’ve &nbsp;
          <span className="curve-text">
            Built
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

        <h2 className="projects-subheading">My Design works.</h2>
        <p>
          Where Ideas Turn Design <span>Code</span>
        </p>

        <div className="ui_projects">
          <img src="/animal.png" alt="" />
          <img src="motor.png" alt="" />
          <img src="/bu.png" alt="" />
          <img src="/food.png" alt="" />
          <img src="game.png" alt="" />
          <img src="plant.png" alt="" />
        </div>
        <div className="all-work-wrap">
          <a href="https://www.linkedin.com/in/komal-khokale-4a3ba7278/" target="_blank" className="all-work-btn">
            See My All Works
            <span className="arrow">→</span>
          </a>
        </div>

        <h2 className="projects-subheading">My Coding works.</h2>
        <p>
          From Concept to <span>Code</span>
        </p>
      </div>

      <main className="main">
        <div className="body">
          {projects.map((project, index) => {
            return (
              <Project
                index={index}
                title={project.title}
                setModal={setModal}
                project={project}
                key={index}
              />
            );
          })}
        </div>
        <Modal modal={modal} projects={projects} />
        <div className="all-work-wrap">
          <a href="https://github.com/komalkhokale" target="_blank"  className="all-work-btn">
            See My All Works
            <span className="arrow">→</span>
          </a>
        </div>
      </main>
    </div>
  );
};

export default projectsContent;
