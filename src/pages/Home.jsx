import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>
          Free Sample Files Download | PDF, Word, Excel, CSV,
          Images, Audio & Video
        </title>

        <meta
          name="description"
          content="Download free sample files for testing and development. Get PDF sample files, Word documents, Excel spreadsheets, CSV files, images, audio, video and PowerPoint files instantly."
        />

        <meta
          name="keywords"
          content="sample files, test files, dummy files, pdf sample file, word sample file, excel sample file, csv sample file, image sample file, audio sample file, video sample file, powerpoint sample file, download sample files"
        />

        <link
          rel="canonical"
          href="https://samplefiles.chtechgiant.com/"
        />
      </Helmet>

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
            Download free sample PDF files, Word documents,
            Excel spreadsheets, CSV files, images, audio,
            video and PowerPoint presentations for testing,
            development, software demos, QA validation and
            educational purposes.
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
              <strong>100+</strong>
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
            <h2>Browse Sample File Categories</h2>

            <p>
              Find and download free sample files in multiple
              formats including PDF, DOCX, XLSX, CSV, JPG,
              PNG, MP3, MP4 and PPT for testing applications,
              websites, APIs and software projects.
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

      <section className="seo-content">
        <div className="container">
          <h2>Free Sample Files for Testing and Development</h2>

          <p>
            Sample Files provides a collection of free test
            files for developers, students, software testers,
            businesses and QA engineers. Whether you need a
            sample PDF document, Word file, Excel spreadsheet,
            CSV dataset, image file, audio clip, video file or
            PowerPoint presentation, you can download them
            instantly without registration.
          </p>

          <p>
            These files are useful for software testing,
            website development, file upload validation,
            database imports, API integration testing, mobile
            application development, cloud storage testing and
            educational demonstrations.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;