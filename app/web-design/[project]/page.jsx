"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import "../web.css"; // Adjust the path if your CSS is in a different folder

// Project data
const projectData = {
  web1: {
    name: "Video Game Website Hero Section",
    font: "Barlow",
    colors: ["#D83A3A", "#0C0F23"],
    images: ["/web7.png"],
    description: "A clean and modern Video Game website.",
  },
  web2: {
    name: "E-Bike Hero Page",
    font: "Inter",
    colors: ["#6BAABF", "#292D32"],
    images: ["/web6.png"],
    description: "Landing page with strong call-to-action.",
  },
  web3: {
    name: "Travel Website Design",
    font: "Urbanist, Unlock, Bernard MT Condensed",
    colors: ["#025219", "#ffffff"],
    images: ["/Travel.png"],
    description: "Modern travel website design where users can explore destinations, check travel packages, read blogs, and plan their trips easily. I focused on clean layout, nature vibe visuals, and simple user flow so people can quickly find and book their dream travel.",
  },
  web4: {
    name: "Pet Adoption Website Design",
    font: "Baskerville Old Face",
    colors: ["#ffaa00", "#44372A"],
    images: ["/web4.png"],
    description: "Pet adoption website hero section design focused on helping users find and adopt pets easily. Used friendly visuals, clear call-to-action, and a clean layout to create a warm and trustworthy first impression for pet lovers.",
  },
};

export default function ProjectPage() {
  const params = useParams();
  const project = projectData[params.project];

  if (!project) return <p style={{ padding: "2rem" }}>Project not found!</p>;

  return (
    <div style={{ padding: "2rem" }} className="project-page">
      {/* Back button */}
      <Link href="/web-design" className="back-btn">
        ← Back to Projects
      </Link>

      <h1 className="project-title"><b>{project.name}</b></h1>

      <div className="bottom">
        <div className="left">
          <h4>
            <strong>Description:</strong> {project.description}
          </h4> <br />
          <h4>
            <strong>Font:</strong> {project.font}
          </h4>
        </div>

        <div className="right">
          <p>
            <strong>Colors:</strong>{" "} <br />
            {project.colors.map((c, i) => (
              <span
                key={i}
                className="color-box"
                style={{ backgroundColor: c }}
              ></span>
            ))}
          </p>
        </div>
      </div>

      <div className="project-images">
        {project.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${project.name}-${i}`}
            className="project-img"
          />
        ))}
      </div>
    </div>
  );
}
