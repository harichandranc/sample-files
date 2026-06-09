import "../styles/category.css";

function CsvFiles() {
  const files = [
    {
      name: "Sample CSV (100 KB)",
      size: "100 KB",
      path: "/files/csv/sample-100kb.csv",
    },
    {
      name: "Sample CSV (500 KB)",
      size: "500 KB",
      path: "/files/csv/sample-500kb.csv",
    },
    {
      name: "Sample CSV (1 MB)",
      size: "1 MB",
      path: "/files/csv/sample-1mb.csv",
    },
  ];

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Download Sample CSV Files</h1>

          <p>
            Download free sample CSV files for testing data imports,
            exports, database systems and spreadsheet applications.
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
                  Download CSV File
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <h2>About CSV Sample Files</h2>

          <p>
            CSV sample files are widely used for database imports,
            spreadsheet testing and data migration projects.
          </p>

          <div className="related-links">
            <a href="/pdf-files">PDF Files</a>
            <a href="/word-files">Word Files</a>
            <a href="/excel-files">Excel Files</a>
            <a href="/ppt-files">PowerPoint Files</a>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="faq-item">
            <h3>Are these CSV files free?</h3>
            <p>Yes, they are free to download.</p>
          </div>

          <div className="faq-item">
            <h3>Can I use them for import testing?</h3>
            <p>Yes, they are ideal for import and export testing.</p>
          </div>

          <div className="faq-item">
            <h3>Do they require registration?</h3>
            <p>No registration is required.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default CsvFiles;