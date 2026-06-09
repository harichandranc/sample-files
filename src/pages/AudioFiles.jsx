import "../styles/category.css";

function AudioFiles() {
  const files = [
    {
      name: "Sample MP3 (100 KB)",
      size: "100 KB",
      path: "/files/audio/sample-100kb.mp3",
    },
    {
      name: "Sample MP3 (500 KB)",
      size: "500 KB",
      path: "/files/audio/sample-500kb.mp3",
    },
    {
      name: "Sample MP3 (1 MB)",
      size: "1 MB",
      path: "/files/audio/sample-1mb.mp3",
    },
  ];

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Download Sample Audio Files</h1>

          <p>
            Download free sample audio files for testing music players,
            uploads, streaming platforms and media applications.
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
                  Download Audio
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <h2>About Audio Sample Files</h2>

          <p>
            Audio sample files help developers test media players,
            streaming systems, upload forms and audio converters.
          </p>

          
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>FAQS?</h2>
          <div className="faq-item">
            <h3>Are these audio files free?</h3>
            <p>Yes, all sample audio files are free.</p>
          </div>

          <div className="faq-item">
            <h3>Can I use them for media testing?</h3>
            <p>Yes, they are designed for testing purposes.</p>
          </div>

          <div className="faq-item">
            <h3>Do I need an account?</h3>
            <p>No account is required.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AudioFiles;