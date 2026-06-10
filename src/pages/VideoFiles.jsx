import "../styles/category.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function VideoFiles() {
  const files = [
    {
      name: "Sample MP4 Video (1 MB)",
      size: "1 MB",
      path: "/files/video/sample-1mb.mp4",
    },
    {
      name: "Sample MP4 Video (5 MB)",
      size: "5 MB",
      path: "/files/video/sample-5mb.mp4",
    },
    {
      name: "Sample MP4 Video (10 MB)",
      size: "10 MB",
      path: "/files/video/sample-10mb.mp4",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Download Sample Video Files (MP4) Free - 1 MB, 5 MB, 10 MB
        </title>

        <meta
          name="description"
          content="Download free sample MP4 video files for testing uploads, video streaming platforms, media players, video converters, content delivery networks, and software applications."
        />

        <meta
          name="keywords"
          content="sample video file download, sample mp4 file, mp4 test file, free video files, video upload testing, sample mp4 video, download sample video, video testing files"
        />

        <link
          rel="canonical"
          href="https://samplefiles.chtechgiant.com/video-files"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Are these video files free to download?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, all sample video files are completely free to download.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use these videos for streaming tests?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, these video files are ideal for testing streaming platforms, media players, and upload systems.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need registration?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No registration or account creation is required.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <section className="page-header">
        <div className="container">
          <h1>Download Sample Video Files (MP4)</h1>

          <p>
            Download free sample MP4 video files for testing uploads, video
            streaming services, media players, content delivery networks (CDNs),
            video converters, and software applications.
          </p>
        </div>
      </section>

      <section className="files-section">
        <div className="container">
          <div className="files-grid">
            {files.map((file) => (
              <div className="file-card" key={file.path}>
                <h3>{file.name}</h3>

                <p>File Size: {file.size}</p>

                <a
                  href={file.path}
                  download
                  className="download-btn"
                  aria-label={`Download ${file.name}`}
                >
                  Download Video
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <h2>What Are MP4 Video Files?</h2>

          <p>
            MP4 is one of the most popular video formats used across websites,
            mobile devices, streaming platforms, social media networks, and
            multimedia applications. It provides excellent video quality while
            maintaining efficient file sizes.
          </p>

          <p>
            These sample MP4 video files are useful for developers, testers,
            content creators, students, and businesses that need example videos
            for upload testing, streaming validation, media processing, and
            software development projects.
          </p>


        
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <h3>Are these video files free to download?</h3>
            <p>
              Yes. All sample MP4 video files are completely free to download
              and use for testing, development, educational, and demonstration
              purposes.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can I use these videos for streaming tests?</h3>
            <p>
              Yes. These sample videos are specifically designed for testing
              streaming services, media players, upload systems, and video
              processing applications.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do I need registration?</h3>
            <p>
              No. You can download all sample video files instantly without
              creating an account.
            </p>
          </div>

          <div className="faq-item">
            <h3>Which software can play MP4 files?</h3>
            <p>
              MP4 files can be played using VLC Media Player, Windows Media
              Player, QuickTime Player, Google Chrome, Microsoft Edge, and most
              modern media applications.
            </p>
          </div>

          <div className="faq-item">
            <h3>Are these sample videos safe?</h3>
            <p>
              Yes. All sample video files are created for testing purposes and
              do not contain harmful code, malware, or security risks.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default VideoFiles;