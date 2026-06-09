import "../styles/category.css";

function PowerPointFiles() {
  const files = [
    {
      name: "Sample PPTX (100 KB)",
      size: "100 KB",
      path: "/files/ppt/sample-100kb.pptx",
    },
    {
      name: "Sample PPTX (500 KB)",
      size: "500 KB",
      path: "/files/ppt/sample-500kb.pptx",
    },
    {
      name: "Sample PPTX (1 MB)",
      size: "1 MB",
      path: "/files/ppt/sample-1mb.pptx",
    },
  ];

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Download Sample PowerPoint Files</h1>

          <p>
            Download free sample PowerPoint presentations for testing
            uploads, presentation software and file conversion tools.
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
                  Download PPT File
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <h2>About PowerPoint Sample Files</h2>

          <p>
            PowerPoint sample files help users test presentation
            software, office applications and document conversion tools.
          </p>

          <div className="related-links">
            <a href="/pdf-files">PDF Files</a>
            <a href="/word-files">Word Files</a>
            <a href="/excel-files">Excel Files</a>
            <a href="/video-files">Video Files</a>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="faq-item">
            <h3>Are these PowerPoint files free?</h3>
            <p>Yes, all PPT files are free.</p>
          </div>

          <div className="faq-item">
            <h3>Can I use them for testing?</h3>
            <p>Yes, they are intended for software and upload testing.</p>
          </div>

          <div className="faq-item">
            <h3>Do I need registration?</h3>
            <p>No registration is required.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PowerPointFiles;