import "../styles/layout.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-grid">

          {/* Categories */}
          <div className="footer-column">
            <h4>Categories</h4>

            <div className="footer-links-two-col">
              <div>
                <Link to="/pdf-files">PDF Files</Link>
                <Link to="/word-files">Word Files</Link>
                <Link to="/excel-files">Excel Files</Link>
                <Link to="/csv-files">CSV Files</Link>
              </div>

              <div>
                <Link to="/image-files">Image Files</Link>
                <Link to="/audio-files">Audio Files</Link>
                <Link to="/video-files">Video Files</Link>
                <Link to="/ppt-files">PowerPoint Files</Link>
              </div>
            </div>
          </div>

          <div className="footer-column">

  <h4>Company</h4>

  <a
    href="https://chtechgiant.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    CH TECH GIANT
  </a>

  <Link to="/about-us">About Us</Link>
  <Link to="/contact-us">Contact Us</Link>
  <Link to="/privacy-policy">Privacy Policy</Link>
</div>

          {/* Branding */}
          <div className="footer-column footer-brand">
            

            <h3>Sample Files</h3>

            <p>
              Free sample PDF, Word, Excel, CSV,
              Image, Audio, Video and PowerPoint
              files for testing and development
              purposes.
            </p>
          </div>

        </div>

        <div className="footer-bottom">
  <p>
    © 2026 Sample Files. All Rights Reserved.
  </p>

  <div className="footer-bottom-links">
    <a
      href="https://chtechgiant.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Developed by CH Tech Giant
    </a>
  </div>
</div>

      </div>
    </footer>
  );
}

export default Footer;