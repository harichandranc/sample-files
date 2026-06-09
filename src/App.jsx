import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import ScrollToTop from "./components/ScrollToTop";

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
      <ScrollToTop />
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
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;