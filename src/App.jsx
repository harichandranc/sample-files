import "./App.css";

const categories = [
  {
    title: "PDF Files",
    files: [
      {
        name: "Sample PDF (100 KB)",
        path: "/files/pdf/sample-100kb.pdf",
      },
      {
        name: "Sample PDF (1 MB)",
        path: "/files/pdf/sample-1mb.pdf",
      },
    ],
  },

  {
    title: "Word Files",
    files: [
      {
        name: "Sample DOCX",
        path: "/files/docx/sample.docx",
      },
    ],
  },

  {
    title: "Excel Files",
    files: [
      {
        name: "Sample XLSX",
        path: "/files/xlsx/sample.xlsx",
      },
    ],
  },

  {
    title: "CSV Files",
    files: [
      {
        name: "Sample CSV",
        path: "/files/csv/sample.csv",
      },
    ],
  },

  {
    title: "Images",
    files: [
      {
        name: "Sample JPG",
        path: "/files/jpg/sample.jpg",
      },
      {
        name: "Sample PNG",
        path: "/files/png/sample.png",
      },
    ],
  },

  {
    title: "Audio Files",
    files: [
      {
        name: "Sample MP3",
        path: "/files/mp3/sample.mp3",
      },
    ],
  },

  {
    title: "Video Files",
    files: [
      {
        name: "Sample MP4",
        path: "/files/mp4/sample.mp4",
      },
    ],
  },

  {
    title: "ZIP Files",
    files: [
      {
        name: "Sample ZIP",
        path: "/files/zip/sample.zip",
      },
    ],
  },
];

function App() {
  return (
    <div className="container">
      <header>
        <h1>Sample Files Download</h1>

        <p>
          Download free PDF, DOCX, XLSX, CSV, JPG, PNG,
          MP3, MP4 and ZIP sample files for testing.
        </p>
      </header>

      <div className="grid">
        {categories.map((category) => (
          <div className="card" key={category.title}>
            <h2>{category.title}</h2>

            {category.files.map((file) => (
              <a
                key={file.path}
                href={file.path}
                download
                className="download-btn"
              >
                {file.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;