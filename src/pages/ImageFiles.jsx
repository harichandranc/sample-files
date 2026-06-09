import "../styles/category.css";

function ImageFiles() {
  const files = [
    {
      name: "Sample JPG",
      size: "100 KB",
      path: "/files/image/sample.jpg",
    },
    {
      name: "Sample PNG",
      size: "800 KB",
      path: "/files/image/sample.png",
    },
    {
      name: "Sample WEBP",
      size: "50 KB",
      path: "/files/image/sample.webp",
    },
    {
      name: "Sample Icon",
      size: "2 KB",
      path: "/files/image/sample.ico",
    },
    {
      name: "Sample Icon",
      size: "30 KB",
      path: "/files/image/sample.avif",
    },
  ];

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Download Sample Image Files</h1>

          <p>
            Download free sample JPG, PNG, WEBP, Avif and icon files for testing
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