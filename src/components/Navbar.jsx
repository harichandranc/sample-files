import "../styles/layout.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          Sample Files
        </Link>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pdf-files">PDF</NavLink>
          <NavLink to="/word-files">Word</NavLink>
          <NavLink to="/excel-files">Excel</NavLink>
          <NavLink to="/csv-files">CSV</NavLink>
          <NavLink to="/image-files">Images</NavLink>
          <NavLink to="/audio-files">Audio</NavLink>
          <NavLink to="/video-files">Video</NavLink>
          <NavLink to="/ppt-files">PowerPoint</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;