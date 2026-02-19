import Link from "next/link";
import "./app.css";

const projects = [
  { id: "app1", name: "Plant App", image: "/app4.png" },
  { id: "app2", name: "Shoes App", image: "/app7.png" },
  { id: "app3", name: "Recipe App", image: "/app6.png" },
  { id: "app4", name: "Animal App", image: "/app5.png" },
];

export default function AppDesignPage() {
  return (
    <div>
      <h1 className="projects-heading">
        Mobile App &nbsp;
        <span className="curve-text">
          Design's
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

      <section className="case-section">
        <div className="case-grid">
          {projects.map((proj) => (
            <Link
              key={proj.id}
              href={`/app-design/${proj.id}`}
              className="case-card"
            >
              <img src={proj.image} alt={proj.name} />
              <div className="case-overlay">
                <button className="case-btn">
                  View Details <span>↗</span>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
