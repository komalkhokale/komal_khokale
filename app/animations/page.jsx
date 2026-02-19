import Link from "next/link";
import "./ani.css";

const projects = [
  { id: "ani1", name: "car", image: "/anim1.png" },
  { id: "ani2", name: "city", image: "/anim2.png" },
  { id: "ani3", name: "juice", image: "/anim3.png" },
  { id: "ani4", name: "travel", image: "/anim4.png" },
];

export default function AnimationDesignPage() {
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
              href={`/animations/${proj.id}`}
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
 