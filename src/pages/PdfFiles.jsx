import "../styles/category.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function PdfFiles() {
  const files = [
    {
      name: "Sample PDF File (200 KB)",
      size: "200 KB",
      path: "/files/pdf/sample PDF (200KB).pdf",
    },
    {
      name: "Sample PDF File (300 KB)",
      size: "300 KB",
      path: "/files/pdf/sample PDF (300 KB).pdf",
    },
    {
      name: "Sample PDF File (1.5 MB)",
      size: "1.5 MB",
      path: "/files/pdf/sample PDF (1.5MB).pdf",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Download Sample PDF Files Free (200 KB, 300 KB, 1.5 MB)
        </title>

        <meta
          name="description"
          content="Download free sample PDF files for testing uploads, PDF readers, document management systems, file converters, software applications, and development projects."
        />

        <meta
          name="keywords"
          content="sample pdf file download, pdf test file, free pdf files, sample pdf document, pdf upload testing, pdf sample file, download sample pdf, pdf testing files"
        />

        <link
          rel="canonical"
          href="https://samplefiles.chtechgiant.com/pdf-files"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Are these PDF files free to download?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, all sample PDF files are completely free to download.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use these files for testing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, these PDF files are specifically designed for testing uploads and software applications.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need to register?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No registration or account creation is required.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <section className="page-header">
        <div className="container">
          <h1>Download Sample PDF Files</h1>

          <p>
            Download free sample PDF files for testing uploads, PDF readers,
            document management systems, file conversion tools, cloud storage
            platforms, and software applications.
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
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <h2>What Are PDF Files?</h2>

          <p>
            PDF (Portable Document Format) is one of the most widely used file
            formats for sharing documents across devices and operating systems.
            PDF files preserve formatting, fonts, images, and layouts, making
            them ideal for professional and personal document distribution.
          </p>

          <p>
            These sample PDF files are useful for developers, software testers,
            students, businesses, and organizations that need example documents
            for upload testing, PDF viewer validation, conversion tools, and
            document management systems.
          </p>

          <h2>Common Uses of Sample PDF Files</h2>

          <ul>
            <li>PDF upload testing</li>
            <li>Document management systems</li>
            <li>PDF reader validation</li>
            <li>File conversion testing</li>
            <li>Cloud storage platform testing</li>
            <li>Software development projects</li>
            <li>Quality assurance and QA testing</li>
            <li>Document workflow automation</li>
          </ul>

          <h2>Why Download Sample PDF Files?</h2>

          <p>
            Sample PDF files help developers and testers verify upload limits,
            document previews, file conversions, PDF rendering, download
            functionality, and document processing workflows before releasing
            applications to users.
          </p>

          <h2>Benefits of PDF Format</h2>

          <ul>
            <li>Maintains consistent formatting across devices</li>
            <li>Compatible with almost all operating systems</li>
            <li>Supports text, images, tables, and graphics</li>
            <li>Easy to share and archive documents</li>
            <li>Widely supported by software and web applications</li>
          </ul>

          <p>
            Looking for more file formats? Browse our{" "}
            <Link to="/sample-files">sample files collection</Link> including
            DOCX, XLSX, CSV, JSON, XML, ZIP, JPG, PNG, MP3, MP4, and many other
            file types.
          </p>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <h3>Are these PDF files free to download?</h3>
            <p>
              Yes. All sample PDF files are completely free to download and use
              for testing, educational, and development purposes.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can I use these files for testing?</h3>
            <p>
              Yes. These files are specifically intended for testing PDF
              uploads, viewers, converters, storage systems, and software
              applications.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do I need to register?</h3>
            <p>
              No. You can download all sample PDF files instantly without
              registration or account creation.
            </p>
          </div>

          <div className="faq-item">
            <h3>Which software can open PDF files?</h3>
            <p>
              PDF files can be opened using Adobe Acrobat Reader, Google
              Chrome, Microsoft Edge, Firefox, Apple Preview, and many other
              document viewing applications.
            </p>
          </div>

          <div className="faq-item">
            <h3>Are these PDF files safe?</h3>
            <p>
              Yes. These sample PDF files are created for testing purposes and
              do not contain harmful content, malware, or executable code.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PdfFiles;