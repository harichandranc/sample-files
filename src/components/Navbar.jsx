import { useState } from "react";
import "../styles/layout.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          Sample Files
        </Link>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div
          className={`nav-links ${
            menuOpen ? "active" : ""
          }`}
        >
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/pdf-files" onClick={() => setMenuOpen(false)}>
            PDF
          </NavLink>

          <NavLink to="/word-files" onClick={() => setMenuOpen(false)}>
            Word
          </NavLink>

          <NavLink to="/excel-files" onClick={() => setMenuOpen(false)}>
            Excel
          </NavLink>

          <NavLink to="/csv-files" onClick={() => setMenuOpen(false)}>
            CSV
          </NavLink>

          <NavLink to="/image-files" onClick={() => setMenuOpen(false)}>
            Images
          </NavLink>

          <NavLink to="/audio-files" onClick={() => setMenuOpen(false)}>
            Audio
          </NavLink>

          <NavLink to="/video-files" onClick={() => setMenuOpen(false)}>
            Video
          </NavLink>

          <NavLink to="/ppt-files" onClick={() => setMenuOpen(false)}>
            PowerPoint
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;