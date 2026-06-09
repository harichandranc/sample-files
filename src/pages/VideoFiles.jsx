import "../styles/category.css";

function VideoFiles() {
  const files = [
    {
      name: "Sample MP4 (1 MB)",
      size: "1 MB",
      path: "/files/video/sample-1mb.mp4",
    },
    {
      name: "Sample MP4 (5 MB)",
      size: "5 MB",
      path: "/files/video/sample-5mb.mp4",
    },
    {
      name: "Sample MP4 (10 MB)",
      size: "10 MB",
      path: "/files/video/sample-10mb.mp4",
    },
  ];

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Download Sample Video Files</h1>

          <p>
            Download free sample MP4 video files for testing uploads,
            streaming services, media players and applications.
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
                  Download Video
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <h2>About Video Sample Files</h2>

          <p>
            Video sample files are commonly used for testing uploads,
            video streaming, media players and content delivery systems.
          </p>

        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>FAQS?</h2>
          <div className="faq-item">
            <h3>Are these video files free?</h3>
            <p>Yes, all sample videos are free to download.</p>
          </div>

          <div className="faq-item">
            <h3>Can I use them for streaming tests?</h3>
            <p>Yes, they are ideal for testing streaming platforms.</p>
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

export default VideoFiles;