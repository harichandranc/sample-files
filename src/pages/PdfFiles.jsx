
import "../styles/category.css";

function PdfFiles() {
  const files = [
    {
      name: "Sample PDF (100 KB)",
      size: "100 KB",
      path: "/files/pdf/sample-100kb.pdf",
    },
    {
      name: "Sample PDF (500 KB)",
      size: "500 KB",
      path: "/files/pdf/sample-500kb.pdf",
    },
    {
      name: "Sample PDF (1 MB)",
      size: "1 MB",
      path: "/files/pdf/sample-1mb.pdf",
    },
  ];

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Download Sample PDF Files</h1>

          <p>
            Download free sample PDF files for testing uploads,
            PDF readers, document management systems and file
            conversion tools.
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
                >
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <h2>About PDF Sample Files</h2>

          <p>
            PDF sample files are commonly used by developers,
            students, businesses and testers to verify upload
            functionality, file conversion systems, document
            viewers and cloud storage platforms.
          </p>

          <div className="related-links">
            <a href="/word-files">Word Files</a>
            <a href="/excel-files">Excel Files</a>
            <a href="/csv-files">CSV Files</a>
            <a href="/ppt-files">PowerPoint Files</a>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="faq-item">
            <h3>Are these PDF files free?</h3>
            <p>
              Yes, all sample PDF files are free to download and use.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can I use these files for testing?</h3>
            <p>
              Yes, these files are specifically intended for testing
              applications and software systems.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do I need to register?</h3>
            <p>
              No registration or account creation is required.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PdfFiles;