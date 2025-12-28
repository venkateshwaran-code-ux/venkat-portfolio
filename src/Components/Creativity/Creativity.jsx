import "../Creativity/Creativity.css";
import thirdSectionImage from "../Creativity/home-page-third-section-image.png";

function Creativity() {
  return (
    <section className="creativity-wrapper">
      <div className="creativity-container">
        {/* Left Image */}
        <div className="creativity-image">
          <img
            src={thirdSectionImage}
            alt="Creativity illustration"
            className="third-section-image"
          />
        </div>

        {/* Right Content */}
        <div className="creativity-content">
          <span className="creativity-tag">💡 Our Creativity</span>

          <h2 className="creativity-title">
            Turning Ideas Into Interactive Web Solutions
          </h2>

          <p className="creativity-text">
            I create modern, scalable, and responsive websites tailored to your
            needs. I focus on clean UI design, structured code, and performance
            to ensure quality user experiences.
          </p>

          <p className="creativity-text">
            Let’s build digital products that engage users and grow your ideas.
          </p>

          <button className="creativity-btn">Explore Now</button>
        </div>
      </div>
    </section>
  );
}

export default Creativity;
