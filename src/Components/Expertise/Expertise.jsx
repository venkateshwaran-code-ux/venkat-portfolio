import "../Expertise/Expertise.css";

const skills = [
  { name: "Web Design", percent: 70 },
  { name: "Print Design", percent: 60 },
  { name: "Logo Design", percent: 80 },
  { name: "Graphic Design", percent: 65 },
];

const Expertise = () => {
  return (
    <section className="expertise-section" id="skills">
      <div className="expertise-container">
        {/* Left Content */}
        <div className="expertise-content">
          <span className="expertise-tag">My Expertise</span>
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

        {/* Right Skills */}
        <div className="expertise-skills">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.percent}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
