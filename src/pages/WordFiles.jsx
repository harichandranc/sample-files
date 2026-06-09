import { Helmet } from "react-helmet-async";
import "../styles/category.css";

function WordFiles() {
  const files = [
    {
      name: "Sample DOCX File (100 KB)",
      size: "100 KB",
      path: "/files/word/sample100kb.docx",
    },
    {
      name: "Sample DOCX File (500 KB)",
      size: "500 KB",
      path: "/files/word/sample500kb.docx",
    },
    {
      name: "Sample DOCX File (1.5 MB)",
      size: "1.5 MB",
      path: "/files/word/sample1.5mb.docx",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Download Sample Word Files (DOCX) Free | Sample Files
        </title>

        <meta
          name="description"
          content="Download free sample DOCX Word files for testing uploads, document management systems, Microsoft Word, file conversion tools, and office software."
        />

        <meta
          name="keywords"
          content="sample word file, sample docx file, download docx file, word document sample, test docx file, sample files"
        />

        <link
          rel="canonical"
          href="https://samplefiles.chtechgiant.com/word-files"
        />
      </Helmet>

      <section className="page-header">
        <div className="container">
          <h1>Download Sample Word Files (DOCX)</h1>

          <p>
            Download free sample DOCX files for testing file uploads,
            document editors, Microsoft Word, office applications,
            document management systems, and file conversion tools.
          </p>
        </div>
      </section>

      <section className="files-section">
        <div className="container">
          

          <div className="files-grid">
            {files.map((file) => (
              <div className="file-card" key={file.path}>
                <h3>{file.name}</h3>

                <p>
                  <strong>File Size:</strong> {file.size}
                </p>

                <a
                  href={file.path}
                  download
                  className="download-btn"
                  aria-label={`Download ${file.name}`}
                >
                  Download DOCX File
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <h2>FAQS?</h2>
          <h2>What Are Sample Word Files?</h2>

          <p>
            Sample Word files are DOCX documents used for testing,
            development, education, and quality assurance purposes.
            Developers, businesses, and students often use these files
            to test upload systems, cloud storage platforms, document
            conversion tools, and office applications.
          </p>

          <p>
            Our sample DOCX files are safe to download and can be used
            for testing Microsoft Word, Google Docs, LibreOffice,
            document management systems, and online converters.
          </p>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <h3>Are these DOCX files free to download?</h3>
            <p>
              Yes. All sample Word files on our website are completely
              free to download and use.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can I use these files for upload testing?</h3>
            <p>
              Yes. These sample DOCX files are specifically designed for
              upload testing, document processing, and file conversion
              testing.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do these files work with Microsoft Word?</h3>
            <p>
              Yes. All files use the DOCX format and are compatible with
              Microsoft Word, Google Docs, LibreOffice, and other office
              software.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do I need to create an account?</h3>
            <p>
              No. You can download all sample files without registration
              or login.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default WordFiles;