import "../styles/category.css";

function ImageFiles() {
  const files = [
    {
      name: "Sample JPG (100 KB)",
      size: "100 KB",
      path: "/files/images/sample-100kb.jpg",
    },
    {
      name: "Sample PNG (500 KB)",
      size: "500 KB",
      path: "/files/images/sample-500kb.png",
    },
    {
      name: "Sample JPG (1 MB)",
      size: "1 MB",
      path: "/files/images/sample-1mb.jpg",
    },
  ];

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Download Sample Image Files</h1>

          <p>
            Download free sample JPG, PNG and image files for testing
            uploads, image processing tools, galleries and websites.
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
                  Download Image
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <h2>About Image Sample Files</h2>

          <p>
            Image sample files are useful for testing image uploads,
            compression tools, galleries, editors and web applications.
          </p>

          <div className="related-links">
            <a href="/pdf-files">PDF Files</a>
            <a href="/word-files">Word Files</a>
            <a href="/video-files">Video Files</a>
            <a href="/audio-files">Audio Files</a>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="faq-item">
            <h3>Are these image files free?</h3>
            <p>Yes, all image files are free to download.</p>
          </div>

          <div className="faq-item">
            <h3>Can I use them for testing?</h3>
            <p>Yes, they are intended for upload and image testing.</p>
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

export default ImageFiles;