import "../styles/category.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function CsvFiles() {
  const files = [
    {
      name: "Sample CSV File (100 KB)",
      size: "100 KB",
      path: "/files/csv/sample100kb.csv",
    },
    {
      name: "Sample CSV File (500 KB)",
      size: "500 KB",
      path: "/files/csv/sample500kb.csv",
    },
    {
      name: "Sample CSV File (1.5 MB)",
      size: "1.5 MB",
      path: "/files/csv/sample1.5mb.csv",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Download Sample CSV Files (100 KB, 500 KB, 1.5 MB) Free
        </title>

        <meta
          name="description"
          content="Download free sample CSV files for testing, spreadsheet applications, database imports, exports, ETL processes, software development, and data migration projects."
        />

        <meta
          name="keywords"
          content="sample csv file download, csv test file, csv sample data, download csv file, csv import testing, csv export testing, free csv files, sample data csv"
        />

        <link
          rel="canonical"
          href="https://samplefiles.chtechgiant.com/csv-files"
        />
      </Helmet>

      <section className="page-header">
        <div className="container">
          <h1>Download Sample CSV Files</h1>

          <p>
            Download free sample CSV files for testing database imports,
            exports, spreadsheet applications, software development,
            ETL pipelines, analytics tools, and data migration projects.
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
                  Download CSV File
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <h2>What Are CSV Files?</h2>

          <p>
            CSV (Comma-Separated Values) files are one of the most widely
            used formats for storing and exchanging structured data.
            They can be opened using Microsoft Excel, Google Sheets,
            LibreOffice Calc, database management systems, and
            countless software applications.
          </p>

          <p>
            These sample CSV files contain realistic tabular data and
            are useful for developers, testers, students, analysts,
            and businesses that need sample datasets for testing
            imports, exports, validation processes, and reporting tools.
          </p>

          <h2>Common Uses of Sample CSV Files</h2>

          <ul>
            <li>Database import testing</li>
            <li>Spreadsheet application testing</li>
            <li>Software development projects</li>
            <li>ETL and data pipeline validation</li>
            <li>Data migration testing</li>
            <li>Machine learning datasets</li>
            <li>Business intelligence dashboards</li>
            <li>Quality assurance and QA testing</li>
          </ul>

          <p>
            Looking for other file formats? Browse our{" "}
            <Link to="/sample-files">sample files collection</Link>{" "}
            including PDF, DOCX, XLSX, JSON, XML, ZIP, MP3, MP4 and more.
          </p>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <h3>Are these CSV files free to download?</h3>
            <p>
              Yes. All sample CSV files on our website are completely
              free to download and use for personal, educational,
              and testing purposes.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can I use these CSV files for import testing?</h3>
            <p>
              Yes. These files are designed specifically for testing
              imports, exports, database systems, spreadsheets,
              and software applications.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do I need to register before downloading?</h3>
            <p>
              No. Downloads are available instantly without registration
              or account creation.
            </p>
          </div>

          <div className="faq-item">
            <h3>Which software can open CSV files?</h3>
            <p>
              CSV files can be opened using Microsoft Excel,
              Google Sheets, LibreOffice Calc, Apple Numbers,
              Notepad, and most database applications.
            </p>
          </div>

          <div className="faq-item">
            <h3>Are the files safe?</h3>
            <p>
              Yes. All sample CSV files are generated for testing
              purposes and do not contain executable code.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default CsvFiles;