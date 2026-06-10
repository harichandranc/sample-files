import "../styles/category.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function ExcelFiles() {
  const files = [
    {
      name: "Sample Excel File (100 KB)",
      size: "100 KB",
      path: "/files/excel/sample100kb.xlsx",
    },
    {
      name: "Sample Excel File (500 KB)",
      size: "500 KB",
      path: "/files/excel/sample500kb.xlsx",
    },
    {
      name: "Sample Excel File (1.5 MB)",
      size: "1.5 MB",
      path: "/files/excel/sample1.5mb.xlsx",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Download Sample Excel Files (XLSX) Free - 100 KB, 500 KB, 1.5 MB
        </title>

        <meta
          name="description"
          content="Download free sample Excel XLSX files for testing uploads, spreadsheet applications, data analysis tools, database imports, exports, and software development projects."
        />

        <meta
          name="keywords"
          content="sample excel file download, sample xlsx file, excel test file, xlsx sample data, free excel files, excel upload testing, xlsx download, sample spreadsheet file"
        />

        <link
          rel="canonical"
          href="https://samplefiles.chtechgiant.com/excel-files"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Are these Excel files free to download?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, all sample Excel files are completely free to download.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use these files for upload testing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, these sample Excel files are suitable for testing uploads, imports and exports.",
                },
              },
              {
                "@type": "Question",
                name: "Do these files contain real data?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, the files contain sample data intended for testing purposes only.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <section className="page-header">
        <div className="container">
          <h1>Download Sample Excel Files (XLSX)</h1>

          <p>
            Download free sample Excel XLSX files for testing spreadsheet
            applications, upload forms, data imports, exports, reporting
            systems, business software, and database integrations.
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
                  aria-label={`Download ${file.name}`}
                >
                  Download Excel File
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <h2>What Are Excel XLSX Files?</h2>

          <p>
            XLSX is the default spreadsheet format used by Microsoft Excel.
            It allows users to organize, analyze, calculate, and visualize
            data using rows, columns, formulas, charts, and tables.
          </p>

          <p>
            These sample Excel files are designed for developers, testers,
            students, analysts, and businesses that need realistic spreadsheet
            files for testing uploads, software functionality, import/export
            workflows, and reporting systems.
          </p>

          <h2>Common Uses of Sample Excel Files</h2>

          <ul>
            <li>Excel upload form testing</li>
            <li>Spreadsheet software validation</li>
            <li>Database import and export testing</li>
            <li>Business reporting applications</li>
            <li>Data analysis tool testing</li>
            <li>Software development projects</li>
            <li>QA and quality assurance testing</li>
            <li>Data migration and ETL workflows</li>
          </ul>

          <h2>Why Download Sample XLSX Files?</h2>

          <p>
            Sample Excel files help ensure your applications can correctly
            process spreadsheet data before deployment. They are useful for
            testing file uploads, validating import functionality, checking
            file size limits, and verifying compatibility with Excel-compatible
            software.
          </p>

          <p>
            Looking for more file formats? Browse our{" "}
            <Link to="/sample-files">sample files collection</Link> including
            PDF, DOCX, CSV, JSON, XML, ZIP, MP3, MP4, and many other formats.
          </p>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <h3>Are these Excel files free to download?</h3>
            <p>
              Yes. All sample Excel files are completely free to download and
              use for testing, educational, and development purposes.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can I use these files for upload testing?</h3>
            <p>
              Yes. These sample XLSX files are specifically designed for
              testing uploads, imports, exports, and spreadsheet processing
              systems.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do these files contain real data?</h3>
            <p>
              No. The spreadsheets contain sample data generated for testing
              and demonstration purposes only.
            </p>
          </div>

          <div className="faq-item">
            <h3>Which software can open XLSX files?</h3>
            <p>
              XLSX files can be opened using Microsoft Excel, Google Sheets,
              LibreOffice Calc, WPS Office, Apple Numbers, and many other
              spreadsheet applications.
            </p>
          </div>

          <div className="faq-item">
            <h3>Are the Excel files safe to use?</h3>
            <p>
              Yes. These files are created for testing purposes and do not
              contain macros, executable code, or harmful content.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ExcelFiles;