import "../About/About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>
      <h3 className="about-subtitle">
        Professional Front-End Developer & Enterprise Software Engineer
      </h3>

      <p className="about-description">
        I'm a skilled front-end developer with 4+ years of enterprise software
        engineering experience at Suntec Business Solutions. I specialize in
        building responsive, accessible, and visually stunning web applications
        while maintaining production-grade code quality. My expertise spans
        React, modern CSS, and full-stack technologies, with proven success
        delivering solutions to international banking and financial services
        clients.
      </p>

      {/* Work Experience */}
      <div className="experience-container">
        <h3 className="experience-title">Professional Experience</h3>

        <div className="experience-card">
          <div className="exp-header">
            <h4 className="company-name">Suntec Business Solutions Pvt-Ltd</h4>
            <span className="duration">4 Years</span>
          </div>

          <div className="role-section">
            <div className="role">
              <h5 className="role-title">Software Engineer</h5>
              <span className="role-duration">3 Years</span>
            </div>
            <div className="role">
              <h5 className="role-title">Associate Software Engineer</h5>
              <span className="role-duration">1 Year</span>
            </div>
          </div>

          <div className="achievements">
            <h5 className="achievements-title">
              Key Achievements & Responsibilities:
            </h5>
            <ul className="achievements-list">
              <li>
                <strong>Core Product Development:</strong> Worked on Suntec
                Xelerate Pricing Suite, an enterprise product serving banking
                and financial services clients
              </li>
              <li>
                <strong>International Client Support:</strong> Supported Qatar
                Islamic Bank (QIB) and First National Bank (FNB) South Africa
                with production implementation
              </li>
              <li>
                <strong>Onsite Assignment:</strong> 3-month assignment in Qatar
                providing go-live support, critical issue resolution, and
                production maintenance
              </li>
              <li>
                <strong>Client Collaboration:</strong> Led UI screen demos,
                gathered requirements, and ensured business alignment in
                client-facing discussions
              </li>
              <li>
                <strong>XML & Configuration:</strong> Profiled and configured
                XML to manage dynamic UI component rendering based on client
                specifications
              </li>
              <li>
                <strong>Production Operations:</strong> Executed and monitored
                production jobs for system stability, accuracy, and timely
                processing
              </li>
              <li>
                <strong>Database Management:</strong> Optimized PostgreSQL,
                Oracle, and MariaDB databases through indexing and query
                performance tuning
              </li>
              <li>
                <strong>Frontend Development:</strong> Enhanced UI with HTML,
                CSS, JavaScript, and Bootstrap; Transitioned to React (Hooks,
                Routing, Material UI, Redux)
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Skills Highlight */}
      <div className="services-container">
        <div className="service-card">
          <div className="service-icon">⚡</div>
          <h3 className="service-title">Enterprise Development</h3>
          <p className="service-text">
            4+ years building scalable enterprise solutions for international
            banking and financial services clients with proven production
            stability.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">🎨</div>
          <h3 className="service-title">Full-Stack Expertise</h3>
          <p className="service-text">
            Frontend mastery with React, HTML/CSS, JavaScript + Backend
            proficiency in database optimization and production operations
            management.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">🚀</div>
          <h3 className="service-title">Client Success</h3>
          <p className="service-text">
            Proven track record delivering quality solutions, managing
            international implementations, and ensuring successful go-live
            deployments.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
