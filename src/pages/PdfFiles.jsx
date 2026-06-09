
import "../styles/category.css";

function PdfFiles() {
  const files = [
    {
      name: "Sample PDF",
      size: "200 KB",
      path: "files/pdf/sample PDF (200KB).pdf",
    },
    {
      name: "Sample PDF",
      size: "300 KB",
      path: "files/pdf/sample PDF (300 KB).pdf",
    },
    {
      name: "Sample PDF",
      size: "1.5 MB",
      path: "/files/pdf/sample PDF (1.5MB).pdf",
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

         
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>FAQS?</h2>
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