import "../styles/category.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function ImageFiles() {
  const files = [
    {
      name: "Sample JPG Image",
      size: "100 KB",
      path: "/files/image/sample.jpg",
    },
    {
      name: "Sample PNG Image",
      size: "800 KB",
      path: "/files/image/sample.png",
    },
    {
      name: "Sample WEBP Image",
      size: "50 KB",
      path: "/files/image/sample.webp",
    },
    {
      name: "Sample ICO Icon",
      size: "2 KB",
      path: "/files/image/sample.ico",
    },
    {
      name: "Sample AVIF Image",
      size: "30 KB",
      path: "/files/image/sample.avif",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Download Sample Image Files (JPG, PNG, WEBP, AVIF, ICO) Free
        </title>

        <meta
          name="description"
          content="Download free sample image files including JPG, PNG, WEBP, AVIF and ICO formats for testing uploads, image processing tools, websites, applications, galleries and converters."
        />

        <meta
          name="keywords"
          content="sample image files, sample jpg file, sample png file, sample webp file, sample avif file, sample ico file, image test file, free image download, image upload testing"
        />

        <link
          rel="canonical"
          href="https://samplefiles.chtechgiant.com/image-files"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Are these image files free to download?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, all sample image files are completely free to download.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use these image files for testing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, these image files are intended for upload testing, image processing, and development projects.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need registration?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No registration is required to download the files.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <section className="page-header">
        <div className="container">
          <h1>Download Sample Image Files</h1>

          <p>
            Download free sample JPG, PNG, WEBP, AVIF, and ICO image files for
            testing uploads, image optimization tools, web applications,
            galleries, content management systems, and image converters.
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
                  Download Image
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <h2>What Are Image Files?</h2>

          <p>
            Image files are digital graphics used on websites, mobile
            applications, software products, social media platforms, and
            multimedia projects. Different formats provide varying levels of
            quality, compression, transparency support, and browser
            compatibility.
          </p>

          <p>
            These sample image files are ideal for developers, designers,
            testers, students, and businesses that need example images for
            upload testing, image optimization, conversion tools, and website
            development projects.
          </p>

          <h2>Available Image Formats</h2>

          <ul>
            <li>
              <strong>JPG/JPEG</strong> – Best for photographs and web images
            </li>
            <li>
              <strong>PNG</strong> – Supports transparency and lossless quality
            </li>
            <li>
              <strong>WEBP</strong> – Modern web image format with high
              compression
            </li>
            <li>
              <strong>AVIF</strong> – Next-generation image format with superior
              compression
            </li>
            <li>
              <strong>ICO</strong> – Website favicon and application icon format
            </li>
          </ul>

          <h2>Common Uses of Sample Image Files</h2>

          <ul>
            <li>Image upload testing</li>
            <li>Website development</li>
            <li>Content management systems</li>
            <li>Image compression testing</li>
            <li>Image converter validation</li>
            <li>Gallery and portfolio websites</li>
            <li>Mobile application development</li>
            <li>Quality assurance and QA testing</li>
          </ul>

          <h2>Why Download Sample Images?</h2>

          <p>
            Sample image files help developers and testers verify upload
            functionality, image processing workflows, file size limits,
            thumbnail generation, format compatibility, and optimization
            features before deploying applications to production.
          </p>

          <p>
            Looking for more file formats? Browse our{" "}
            <Link to="/sample-files">sample files collection</Link> including
            PDF, DOCX, XLSX, CSV, JSON, XML, ZIP, MP3, MP4, and many other file
            types.
          </p>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <h3>Are these image files free to download?</h3>
            <p>
              Yes. All sample image files are completely free to download and
              use for testing, development, educational, and demonstration
              purposes.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can I use these image files for testing?</h3>
            <p>
              Yes. These images are specifically provided for upload testing,
              image optimization, conversion tools, and software development
              projects.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do I need registration?</h3>
            <p>
              No. You can download all image files instantly without creating an
              account or registering.
            </p>
          </div>

          <div className="faq-item">
            <h3>Which image format should I use?</h3>
            <p>
              JPG is ideal for photographs, PNG for transparent graphics, WEBP
              for modern websites, AVIF for advanced compression, and ICO for
              website favicons and application icons.
            </p>
          </div>

          <div className="faq-item">
            <h3>Are these files safe?</h3>
            <p>
              Yes. All image files are generated for testing purposes and do not
              contain executable code, scripts, or malicious content.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ImageFiles;