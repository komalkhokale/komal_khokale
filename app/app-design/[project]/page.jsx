"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import "../app.css"; // Adjust the path if your CSS is in a different folder

// Project data
const projectData = {
  app1: {
    name: "Plant Mobile Application",
    font: "Podkova",
    colors: ["#03C303", "#3B3B3B", "#ffffff"],
    images: ["/p1.png", "/p2.png"],
    description:
      "This is my modern Plant Shopping App UI design with dark theme and green eco style. In this app users can explore different plants, check plant details and easily add plants to cart. I added features like search, categories and simple product cards for smooth experience. My main focus was to keep the design clean, fresh and easy to use for plant lovers. 🌿",
  },

  app2: {
    name: "Nike Mobile Application",
    font: "Inter",
    colors: ["#FF8A00", "#0A0A0D", "#ffffff"],
    images: ["/s1.png", "/s2.png"],
    description:
      "This is my modern Shoes Shopping Mobile App UI with a clean and stylish look. In this app users can explore different shoe collections, check product details and easily add items to cart. I focused on a simple layout, clear product cards and smooth shopping experience to make browsing easy and attractive. 👟",
  },

  app3: {
    name: "Recipe Mobile Application",
    font: "Poppins",
    colors: ["#EE8B02", "#3B3B3B", "#ffffff"],
    images: ["/r1.png"],
    description:
  "This is my modern Recipe Mobile App UI with a clean and fresh design style. In this app users can explore different recipes, check ingredients and cooking steps, and discover new food ideas easily. I focused on simple layout, clear visuals and smooth user flow so users can quickly find and follow recipes."    
  },

  app4: {
    name: "Animal Article Mobile App",
    font: "Poppins",
    colors: ["#83FF04", "#232323", "#ffffff"],
    images: ["/a1.png", "/a2.png"],
    description:
      "This is my modern Animal Articles Mobile App UI with dark theme and nature style. In this app users can explore animal articles, read information about different species, and discover wildlife through categories like wild, birds and pets. I focused on strong visuals, clean layout and simple reading experience so users can easily explore and learn about animals. 🐾",
  },
};

export default function ProjectPage() {
  const params = useParams();
  const project = projectData[params.project];

  if (!project) return <p style={{ padding: "2rem" }}>Project not found!</p>;

  return (
    <div style={{ padding: "2rem" }} className="project-page">
      {/* Back button */}
      <Link href="/app-design" className="back-btn">
        ← Back to Projects
      </Link>

      <h1 className="project-title">
        <b>{project.name}</b>
      </h1>

      <div className="bottom">
        <div className="left">
          <h4>
            <strong>
              <b>Description:</b>
            </strong>{" "}
            <br /> {project.description}
          </h4>{" "}
          <br />
          <h4>
            <strong>
              <b>Font:</b>
            </strong>{" "}
            {project.font}
          </h4>
        </div>

        <div className="right">
          <p>
            <strong>Colors:</strong> <br />
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
