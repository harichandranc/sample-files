import { Link } from "react-router-dom";
import "../styles/home.css";

const categories = [
  {
    title: "PDF Files",
    icon: "📄",
    path: "/pdf-files",
  },
  {
    title: "Word Files",
    icon: "📝",
    path: "/word-files",
  },
  {
    title: "Excel Files",
    icon: "📊",
    path: "/excel-files",
  },
  {
    title: "CSV Files",
    icon: "📋",
    path: "/csv-files",
  },
  {
    title: "Image Files",
    icon: "🖼️",
    path: "/image-files",
  },
  {
    title: "Audio Files",
    icon: "🎵",
    path: "/audio-files",
  },
  {
    title: "Video Files",
    icon: "🎬",
    path: "/video-files",
  },
  {
    title: "PowerPoint Files",
    icon: "📽️",
    path: "/ppt-files",
  },
];

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Download Free Sample Files</h1>

          <p>
            Download sample PDF, Word, Excel, CSV,
            Image, Audio and Video files for testing.
          </p>
        </div>
      </section>

      <section className="categories">
        <div className="container">
          <h2>Browse Categories</h2>

          <div className="category-grid">
            {categories.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="category-card"
              >
                <div className="icon">{item.icon}</div>

                <h3>{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;