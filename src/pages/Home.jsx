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
          Free Sample Files Download | PDF, Word, Excel, CSV, Images, Audio & Video
        </title>

        <meta
          name="description"
          content="Download free sample PDF files, Word documents, Excel spreadsheets, CSV files, images, audio files, video files and PowerPoint presentations for testing, development, software validation and educational purposes."
        />

        <meta
          name="keywords"
          content="sample files, test files, dummy files, free sample files, pdf sample file download, sample pdf, word sample file, docx sample file, excel sample file, xlsx sample file, csv sample file, image sample file, jpg sample file, png sample file, audio sample file, mp3 sample file, video sample file, mp4 sample file, powerpoint sample file, ppt sample file, testing files, upload test files, download sample files"
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Free Sample Files Download"
        />

        <meta
          property="og:description"
          content="Download PDF, Word, Excel, CSV, Image, Audio, Video and PowerPoint sample files for testing and development."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://samplefiles.chtechgiant.com"
        />

        <link
          rel="canonical"
          href="https://samplefiles.chtechgiant.com"
        />
      </Helmet>

      <section className="hero">
        <div className="container hero-content">
          <span className="hero-badge">
            Free Testing Resources
          </span>

          <h1>
            Download Free
            <span>Sample Files</span>
          </h1>

          <p>
            Download free sample PDF, Word, Excel, CSV,
            Image, Audio, Video and PowerPoint files for
            testing, development, education and software
            validation.
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
              <strong>Multiple</strong>
              <span>Sample Files</span>
            </div>

            <div>
              <strong>All</strong>
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
              Download sample PDF, Word, Excel, CSV, Image,
              Audio, Video and PowerPoint files instantly.
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
            Sample Files provides free downloadable test
            files for developers, QA engineers, software
            testers, students, businesses and educators.
            Download PDF sample files, Word documents,
            Excel spreadsheets, CSV datasets, images,
            audio files, video files and PowerPoint
            presentations for testing applications,
            websites, APIs and software systems.
          </p>

          <p>
            These sample files are commonly used for file
            upload testing, software validation, file
            conversion testing, cloud storage integration,
            educational demonstrations and development
            projects.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;