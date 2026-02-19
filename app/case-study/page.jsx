import Link from "next/link";
import "./case.css";

const projects = [
  { id: "case1", name: "Human Safety Mobile Application", image: "/cs2.png" },
  { id: "case2", name: "Game Page", image: "/cs1.png" },
  
];

export default function CaseStudyPage() {
  return (
    <div>
      <h1 className="projects-heading">
        Case &nbsp;
        <span className="curve-text">
          Study&apos;s
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
              href={`/case-study/${proj.id}`}
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
