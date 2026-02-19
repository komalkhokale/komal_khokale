"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import "../ani.css"; // Adjust the path if your CSS is in a different folder

// Project data
const projectData = {
  ani1: {
    name: "City Web Animation",
    video: ["/ani1.mp4"],
  },
  ani2: {
    name: "Car Web Animation",
    video: ["/ani2.mp4"],
  },
  ani3: {
    name: "Juice Web Animation",
    video: ["/ani3.mp4"],
  },
  ani4: {
    name: "Travel Web Animation",
    video: ["/ani4.mp4"],
  },
};

export default function ProjectPage() {
  const params = useParams();
  const project = projectData[params.project];

  if (!project) return <p style={{ padding: "2rem" }}>Project not found!</p>;

  return (
    <div style={{ padding: "2rem" }} className="project-page">
      {/* Back button */}
      <Link href="/animations" className="back-btn">
        ← Back to Projects
      </Link>

      <h1 className="project-title">
        <b>{project.name}</b>
      </h1>

      <div className="project-images">
        {project.video.map((vid, i) => (
          <video
            key={i}
            src={vid}
            muted
            loop
            autoPlay
            controls
            className="project-img"
          />
        ))}
      </div>
    </div>
  );
}
