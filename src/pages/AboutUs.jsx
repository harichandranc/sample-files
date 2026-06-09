import "../styles/layout.css";

function AboutUs() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>

          <p>
            Learn more about Sample Files and our mission to
            provide free downloadable files for testing and
            development.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <h2>Who We Are</h2>

          <p>
            Sample Files is a free online resource created to
            help developers, students, software testers, and
            businesses download sample files in various formats.
          </p>

          <p>
            We provide PDF, Word, Excel, CSV, Image, Audio,
            Video, and PowerPoint files that can be used for
            software testing, learning, demonstrations, and
            development projects.
          </p>

          <h2>Our Goal</h2>

          <p>
            Our goal is to make it simple and convenient for
            users to access sample files without registration,
            subscriptions, or hidden fees.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutUs;