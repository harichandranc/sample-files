import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import PdfFiles from "./pages/PdfFiles";
import WordFiles from "./pages/WordFiles";
import ExcelFiles from "./pages/ExcelFiles";
import CsvFiles from "./pages/CsvFiles";
import ImageFiles from "./pages/ImageFiles";
import AudioFiles from "./pages/AudioFiles";
import VideoFiles from "./pages/VideoFiles";
import PowerPointFiles from "./pages/PowerPointFiles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pdf-files" element={<PdfFiles />} />
          <Route path="/word-files" element={<WordFiles />} />
          <Route path="/excel-files" element={<ExcelFiles />} />
          <Route path="/csv-files" element={<CsvFiles />} />
          <Route path="/image-files" element={<ImageFiles />} />
          <Route path="/audio-files" element={<AudioFiles />} />
          <Route path="/video-files" element={<VideoFiles />} />
          <Route path="/ppt-files" element={<PowerPointFiles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;