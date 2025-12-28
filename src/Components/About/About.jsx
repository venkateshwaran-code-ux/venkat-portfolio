import "../About/About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>
      <h3 className="about-subtitle">
        Welcome to My Web Development Portfolio
      </h3>

      <p className="about-description">
        I am a beginner Front-End Developer who is passionate about learning and
        building modern, responsive, and user-friendly websites. I am currently
        improving my skills in HTML, CSS, JavaScript, and React. I enjoy
        creating clean layouts, experimenting with UI designs, and developing
        interactive components step by step.
      </p>

      <div className="services-container">
        <div className="service-card">
          <div className="service-icon">🖥️</div>
          <h3 className="service-title">Website Development</h3>
          <p className="service-text">
            I build simple, responsive, and user-friendly websites using modern
            web technologies with a focus on clean structure.
          </p>
          <a href="#" className="service-link">
            Read More
          </a>
        </div>

        <div className="service-card">
          <div className="service-icon">🎨</div>
          <h3 className="service-title">Front-End Development</h3>
          <p className="service-text">
            I work on the visual and interactive parts of websites using HTML,
            CSS, JavaScript, and React.
          </p>
          <a href="#" className="service-link">
            Read More
          </a>
        </div>

        <div className="service-card">
          <div className="service-icon">🛠️</div>
          <h3 className="service-title">Web Tools & Learning Projects</h3>
          <p className="service-text">
            I use tools like VS Code, Git, GitHub, and browser dev tools while
            building practice projects.
          </p>
          <a href="#" className="service-link">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
