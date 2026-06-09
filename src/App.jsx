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
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/pdf-files" element={<PdfFiles />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/word-files" element={<WordFiles />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/excel-files" element={<ExcelFiles />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/csv-files" element={<CsvFiles />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/image-files" element={<ImageFiles />} />
        </Route>
        
        <Route element={<MainLayout />}>
          <Route path="/audio-files" element={<AudioFiles />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/video-files" element={<VideoFiles />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/ppt-files" element={<PowerPointFiles />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;