"use client";
import React from "react";
import "./style.css";

export default function index({ index, title, setModal,project }) {
  const handleClick = () => {
    window.open(project.link, "_blank");
  };
  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="project"
    >
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  );
}
