import "../styles/category.css";

function ExcelFiles() {
  const files = [
    {
      name: "Sample XLSX (100 KB)",
      size: "100 KB",
      path: "/files/excel/sample-100kb.xlsx",
    },
    {
      name: "Sample XLSX (500 KB)",
      size: "500 KB",
      path: "/files/excel/sample-500kb.xlsx",
    },
    {
      name: "Sample XLSX (1 MB)",
      size: "1 MB",
      path: "/files/excel/sample-1mb.xlsx",
    },
  ];

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Download Sample Excel Files</h1>

          <p>
            Download free sample Excel spreadsheets for testing uploads,
            spreadsheet software, data import tools and converters.
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
                  Download Excel File
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <h2>About Excel Sample Files</h2>

          <p>
            Excel sample files are useful for testing spreadsheet
            applications, data analysis software and import/export systems.
          </p>

          
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="faq-item">
            <h3>Are these Excel files free?</h3>
            <p>Yes, all sample Excel files are free.</p>
          </div>

          <div className="faq-item">
            <h3>Can I test uploads with them?</h3>
            <p>Yes, they are created for testing purposes.</p>
          </div>

          <div className="faq-item">
            <h3>Do they contain real data?</h3>
            <p>No, only sample data is included.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ExcelFiles;