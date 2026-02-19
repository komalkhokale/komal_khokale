import "./webdev.css";

const projects = [
  {
    id: "webdev1",
    name: "Titutium",
    image: "/webdev1.png",
    live: "https://titanium-1qd9irmt8-komalkhokales-projects.vercel.app/",
  },
  {
    id: "webdev2",
    name: "Spylt",
    image: "/webdev2.png",
    live: "https://spylt-clone-imw4dw83e-komalkhokales-projects.vercel.app/",
  },
  {
    id: "webdev3",
    name: "Vintage",
    image: "/webdev3.png",
    live: "https://komalkhokale.github.io/Vintage-Camera/",
  },
  {
    id: "webdev4",
    name: "miranda",
    image: "/webdev4.png",
    live: "https://komalkhokale.github.io/Miranda/",
  },
];

export default function WebDesignPage() {
  return (
    <div>
      <h1 className="projects-heading">
        Web &nbsp;
        <span className="curve-text">
          Development
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
            <a
              key={proj.id}
              href={proj.live}
              target="_blank"
              rel="noopener noreferrer"
              className="case-card"
            >
              <img src={proj.image} alt={proj.name} />

              <div className="case-overlay">
                <button className="case-btn">
                  View Details <span>↗</span>
                </button>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}