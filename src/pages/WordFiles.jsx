import "../styles/category.css";

function WordFiles() {
  const files = [
    {
      name: "Sample DOCX (100 KB)",
      size: "100 KB",
      path: "/files/word/sample-100kb.docx",
    },
    {
      name: "Sample DOCX (500 KB)",
      size: "500 KB",
      path: "/files/word/sample-500kb.docx",
    },
    {
      name: "Sample DOCX (1 MB)",
      size: "1 MB",
      path: "/files/word/sample-1mb.docx",
    },
  ];

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Download Sample Word Files</h1>

          <p>
            Download free sample Word documents for testing uploads,
            document editors, file conversion tools and office software.
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

                <a href={file.path} download className="download-btn">
                  Download Word File
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <h2>About Word Sample Files</h2>

          <p>
            Word sample files help developers, students and businesses
            test document uploads, editing tools, office applications
            and document conversion systems.
          </p>

          <div className="related-links">
            <a href="/pdf-files">PDF Files</a>
            <a href="/excel-files">Excel Files</a>
            <a href="/csv-files">CSV Files</a>
            <a href="/ppt-files">PowerPoint Files</a>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="faq-item">
            <h3>Are these Word files free?</h3>
            <p>Yes, all sample Word files are completely free.</p>
          </div>

          <div className="faq-item">
            <h3>Can I use these files for testing?</h3>
            <p>
              Yes, these files are intended for upload and conversion testing.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do I need an account?</h3>
            <p>No registration is required.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default WordFiles;