import Link from "next/link";
import "./web.css";

const projects = [
  { id: "web1", name: "E-Bike Website", image: "/web7.png" },
  { id: "web2", name: "Game Page", image: "/web6.png" },
  { id: "web3", name: "Travel Website", image: "/web88.png" },
  { id: "web4", name: "Pet Design", image: "/web4.png" }, // example repeat
];

export default function WebDesignPage() {
  return (
    <div>
      <h1 className="projects-heading">
        Web &nbsp;
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
              href={`/web-design/${proj.id}`}
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
