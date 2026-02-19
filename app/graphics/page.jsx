import "./graph.css";

const graphicsData = [
  "/g1.png",
  "/g2.png",
  "/g3.png",
  "/g4.png",
  "/g5.png",
];

export default function GraphicsPage() {
  return (
    <div className="graphics-container">
      <h1 className="graphics-heading">Graphics Design</h1>

      <div className="graphics-wrapper">
        {graphicsData.map((img, index) => (
          <div key={index} className="graphics-item">
            <img src={img} alt={`graphic-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}