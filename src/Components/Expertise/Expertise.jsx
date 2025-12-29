import "../Expertise/Expertise.css";
import htmlimg from "../../assets/html.png";
import cssimg from "../../assets/css.jpg";
import javascriptimg from "../../assets/javascript.png";
import bootstrapimg from "../../assets/bootstrap.png";
import reactimg from "../../assets/react.png";

const programs = [
  { name: "HTML5", percent: 95 },
  { name: "CSS3", percent: 92 },
  { name: "Bootstrap 3/4/5", percent: 88 },
  { name: "JavaScript", percent: 85 },
  { name: "EJS", percent: 70 },
  { name: "React", percent: 90 },
  { name: "Redux", percent: 72 },
  { name: "Node.js", percent: 75 },
  { name: "Express.js", percent: 78 },
  { name: "PostgreSQL", percent: 66 },
];

const tools = [
  { name: "Git", percent: 88 },
  { name: "GitHub", percent: 86 },
  { name: "Linux - PuTTY", percent: 65 },
  { name: "FileZilla", percent: 60 },
  { name: "SQL Developer", percent: 62 },
  { name: "Kafka-tool", percent: 50 },
  { name: "JBoss", percent: 48 },
  { name: "Swagger UI", percent: 55 },
  { name: "Jira", percent: 70 },
  { name: "Bitbucket", percent: 60 },
];

const images = {
  HTML5: htmlimg,
  CSS3: cssimg,
  JavaScript: javascriptimg,
  "Bootstrap 3/4/5": bootstrapimg,
  React: reactimg,
};

const Expertise = () => {
  return (
    <section className="expertise-section" id="skills">
      <div className="expertise-container">
        {/* Left Content */}
        <div className="expertise-content">
          <span className="expertise-tag">My Expertises</span>
          <h2 className="expertise-title">
            What’s Included in My Design & Development Skills
          </h2>
          <p className="expertise-desc">
            I specialize in creating visually appealing and user-friendly
            digital experiences. My skill set combines modern UI design
            principles with front-end development best practices to deliver
            high-quality, scalable solutions.
          </p>
        </div>

        {/* Right Skills: Programs and Tools */}
        <div className="expertise-skills">
          <div className="skills-group">
            <h4 className="group-title">Programs</h4>
            {programs.map((p, i) => (
              <div className="skill-card" key={`prog-${i}`}>
                <div className="skill-left">
                  {images[p.name] ? (
                    <img
                      src={images[p.name]}
                      alt={p.name}
                      className="skill-image"
                    />
                  ) : (
                    <div className="skill-image skill-image--fallback">
                      {p.name
                        .split(/\s|\-|\//)
                        .map((t) => t[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                  )}
                  <div className="skill-meta">
                    <div className="skill-name">{p.name}</div>
                    <div
                      className="percent-badge"
                      style={{
                        ["--target"]: `${p.percent}%`,
                        ["--delay"]: `${i * 0.08}s`,
                      }}
                    >
                      <div className="percent-fill"></div>
                      <span className="percent-text">{p.percent}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="skills-group">
            <h4 className="group-title">Tools</h4>
            {tools.map((t, i) => (
              <div className="skill-card" key={`tool-${i}`}>
                <div className="skill-left">
                  <div className="skill-image skill-image--fallback">
                    {t.name
                      .split(/\s|\-|\./)
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div className="skill-meta">
                    <div className="skill-name">{t.name}</div>
                    <div
                      className="percent-badge percent-badge--alt"
                      style={{
                        ["--target"]: `${t.percent}%`,
                        ["--delay"]: `${i * 0.08}s`,
                      }}
                    >
                      <div className="percent-fill"></div>
                      <span className="percent-text">{t.percent}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
