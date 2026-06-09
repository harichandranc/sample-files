import { Link } from "react-router-dom";
import "../styles/home.css";
import "../styles/global.css";

const categories = [
  { title: "PDF Files", icon: "📄", path: "/pdf-files" },
  { title: "Word Files", icon: "📝", path: "/word-files" },
  { title: "Excel Files", icon: "📊", path: "/excel-files" },
  { title: "CSV Files", icon: "📋", path: "/csv-files" },
  { title: "Image Files", icon: "🖼️", path: "/image-files" },
  { title: "Audio Files", icon: "🎵", path: "/audio-files" },
  { title: "Video Files", icon: "🎬", path: "/video-files" },
  { title: "PowerPoint Files", icon: "📽️", path: "/ppt-files" },
];

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <span className="hero-badge">
            Free Testing Resources
          </span>

          <h1>
            Download Free
            <span> Sample Files</span>
          </h1>

          <p>
            Get high-quality sample PDF, Word, Excel, CSV,
            Image, Audio, Video and PowerPoint files for
            testing, development, learning and demos.
          </p>

          <div className="hero-buttons">
            <a href="#categories" className="btn-primary">
              Browse Files
            </a>

            <Link to="/pdf-files" className="btn-secondary">
              Popular Downloads
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <strong>Multiple Types</strong>
              <span>Sample Files</span>
            </div>

            <div>
              <strong>8</strong>
              <span>Categories</span>
            </div>

            <div>
              <strong>Free</strong>
              <span>Downloads</span>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="categories">
        <div className="container">
          <div className="section-header">
            <h2>Browse Categories</h2>

            <p>
              Select a category and download sample files
              instantly.
            </p>
          </div>

          <div className="category-grid">
            {categories.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="category-card"
              >
                <div className="icon">{item.icon}</div>

                <h3>{item.title}</h3>

                <span>View Files →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;