import "../styles/category.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function PowerPointFiles() {
  const files = [
    {
      name: "Sample PowerPoint File (100 KB)",
      size: "100 KB",
      path: "/files/ppt/sample100kb.pptx",
    },
    {
      name: "Sample PowerPoint File (500 KB)",
      size: "500 KB",
      path: "/files/ppt/sample500kb.pptx",
    },
    {
      name: "Sample PowerPoint File (1.5 MB)",
      size: "1.5 MB",
      path: "/files/ppt/sample1.5mb.pptx",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Download Sample PowerPoint Files (PPTX) Free - 100 KB, 500 KB, 1.5 MB
        </title>

        <meta
          name="description"
          content="Download free sample PowerPoint PPTX files for testing uploads, presentation software, Microsoft PowerPoint, Google Slides, document converters, and office applications."
        />

        <meta
          name="keywords"
          content="sample powerpoint file download, sample pptx file, powerpoint test file, ppt sample presentation, free pptx files, powerpoint upload testing, sample presentation file, download pptx"
        />

        <link
          rel="canonical"
          href="https://samplefiles.chtechgiant.com/powerpoint-files"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Are these PowerPoint files free to download?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, all sample PowerPoint files are completely free to download.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use these PPTX files for testing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, these PowerPoint files are designed for upload testing, software validation, and presentation applications.",
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
          <h1>Download Sample PowerPoint Files (PPTX)</h1>

          <p>
            Download free sample PowerPoint PPTX files for testing uploads,
            Microsoft PowerPoint, Google Slides, presentation software,
            document converters, office applications, and business workflows.
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
                  Download PPTX File
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <h2>What Are PowerPoint PPTX Files?</h2>

          <p>
            PPTX is the standard presentation format used by Microsoft
            PowerPoint. It allows users to create professional presentations
            containing text, images, charts, animations, videos, and graphical
            elements for business, education, and marketing purposes.
          </p>

          <p>
            These sample PowerPoint files are useful for developers, software
            testers, students, educators, and businesses that need example
            presentation files for upload testing, conversion tools, document
            management systems, and office applications.
          </p>

          

        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <h3>Are these PowerPoint files free to download?</h3>
            <p>
              Yes. All sample PPTX files are completely free to download and
              use for testing, educational, and development purposes.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can I use these PPTX files for testing?</h3>
            <p>
              Yes. These files are specifically created for testing uploads,
              presentation software, office applications, and file conversion
              systems.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do I need registration?</h3>
            <p>
              No. You can download all PowerPoint sample files instantly
              without creating an account.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can I open PPTX files without Microsoft PowerPoint?</h3>
            <p>
              Yes. PPTX files can be opened using Google Slides, LibreOffice
              Impress, WPS Office, Apple Keynote, and several online
              presentation viewers.
            </p>
          </div>

          <div className="faq-item">
            <h3>Are these PowerPoint files safe?</h3>
            <p>
              Yes. These sample presentation files are created for testing
              purposes and do not contain harmful macros, malware, or
              executable content.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PowerPointFiles;