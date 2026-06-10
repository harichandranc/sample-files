import { Helmet } from "react-helmet-async";
import "../styles/category.css";

function AudioFiles() {
  const files = [
    {
      name: "Sample MP3 File (100 KB)",
      size: "100 KB",
      path: "/files/audio/sample-100kb.mp3",
    },
    {
      name: "Sample MP3 File (500 KB)",
      size: "500 KB",
      path: "/files/audio/sample-500kb.mp3",
    },
    {
      name: "Sample MP3 File (1.5 MB)",
      size: "1.5 MB",
      path: "/files/audio/sample1.5mb.mp3",
    },
    {
      name: "Sample WAV File (100 KB)",
      size: "100 KB",
      path: "/files/audio/sample100kb.wav",
    },
    {
      name: "Sample WAV File (500 KB)",
      size: "500 KB",
      path: "/files/audio/sample500kb.wav",
    },
    {
      name: "Sample WAV File (1.5 MB)",
      size: "1.5 MB",
      path: "/files/audio/sample1.5mb.wav",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Download Sample Audio Files (MP3 & WAV) Free | Sample Files
        </title>

        <meta
          name="description"
          content="Download free sample MP3 and WAV audio files for testing uploads, media players, streaming platforms, audio converters, websites, mobile apps, and software."
        />

        <meta
          name="keywords"
          content="sample mp3 file download, sample wav file, test audio file, mp3 sample download, wav sample download, audio test file"
        />

        <link
          rel="canonical"
          href="https://samplefiles.chtechgiant.com/audio-files"
        />
      </Helmet>

      <section className="page-header">
        <div className="container">
          <h1>Download Sample Audio Files (MP3 & WAV)</h1>

          <p>
            Download free sample MP3 and WAV audio files for testing
            uploads, audio players, streaming services, media apps,
            file converters, websites, and software applications.
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
                  Download Audio File
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <h2>About Sample Audio Files</h2>

          <p>
            Sample audio files are commonly used by developers,
            designers, students, and businesses to test media players,
            upload forms, streaming platforms, audio processing tools,
            and file conversion systems.
          </p>

          <p>
            Our audio samples are available in both MP3 and WAV formats,
            making them suitable for testing compatibility across
            websites, mobile applications, desktop software, cloud
            storage systems, and multimedia platforms.
          </p>

          
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <h3>Are these audio files free to download?</h3>
            <p>
              Yes. All sample MP3 and WAV files are completely free to
              download and use.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can I use these files for testing?</h3>
            <p>
              Yes. These files are specifically created for upload,
              streaming, media player, and conversion testing.
            </p>
          </div>

          <div className="faq-item">
            <h3>What audio formats are available?</h3>
            <p>
              We currently provide MP3 and WAV audio sample files in
              multiple sizes.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do I need to create an account?</h3>
            <p>
              No registration or account creation is required.
            </p>
          </div>

          <div className="faq-item">
            <h3>Are these files safe?</h3>
            <p>
              Yes. All sample files are safe and intended only for
              testing and educational purposes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AudioFiles;