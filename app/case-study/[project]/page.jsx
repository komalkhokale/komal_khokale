"use client";
import { useParams } from "next/navigation";
import "../case.css";
import Link from "next/link";

const projectData = {
  case1: {
    title: "Human Safety App",
    description:
      "An AI-powered safety application designed to help users in emergency situations.",
    images: ["/human.png"],
  },

  case2: {
    title: "AI Dashboard Design",
    description:
      "A modern AI dashboard for analytics and real-time monitoring.",
    images: ["/cs1.png"],
  },
};

export default function ProjectPage() {
  const params = useParams();
  const project = projectData[params.project];

  if (!project) return <p style={{ padding: "5rem" }}>Project not found!</p>;

  return (
    <div className="project-container">
      {/* Glass Back Button */}
      <Link href="/case-study" className="back-btn">
        ← Back to Projects
      </Link>

      <h1>{project.title}</h1>
      <p className="project-desc">{project.description}</p>

      <div className="project-images">
        {project.images.map((img, i) => (
          <img key={i} src={img} alt={`project-${i}`} className="project-img" />
        ))}
      </div>
    </div>
  );
}
