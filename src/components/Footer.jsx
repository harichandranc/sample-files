function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Sample Files</h3>

        <p>
          Free sample PDF, Word, Excel, PowerPoint, CSV,
          Image, Audio and Video files for testing.
        </p>

        <p>
          © {new Date().getFullYear()} Sample Files.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;