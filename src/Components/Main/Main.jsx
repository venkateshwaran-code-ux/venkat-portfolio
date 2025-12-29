import Propcomponents from "../Concepts/Propcomponents";
import "../Main/Main.css";
import logo from "../../assets/Venkat-logo.png"; // ✔ Use ./ for current folder
import htmlimg from "../../assets/html.png";
import cssimg from "../../assets/css.jpg";
import javascriptimg from "../../assets/javascript.png";
import bootstrapimg from "../../assets/bootstrap.png";
import reactimg from "../../assets/react.png";
import tailwindimg from "../../assets/tailwind.jpg";
import scssimg from "../../assets/scss.png";

function Main() {
  return (
    <div className="Sub-header-Menu" id="home">
      {/* Left Content Area */}
      <div className="Rectangular-area">
        <p className="Hero-name">Creative Front-End Developer</p>

        <p className="designation">
          I build clean, responsive & user-friendly web interfaces
        </p>

        <p className="hero-desc">
          Software professional with experience in banking and financial
          services, strongly interested in building a career as a Frontend
          Developer. Hands-on experience in developing responsive and user
          friendly web interfaces using HTML, CSS, JavaScript, and React. Highly
          motivated, dedicated, and eager to contribute skills, learn
          continuously, and deliver quality frontend solutions in a growth
          oriented organization.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() => (window.location.href = "#contact")}
          >
            Contact Me
          </button>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="Technologies-included">
          <Propcomponents name="HTML" image={htmlimg}></Propcomponents>
          <Propcomponents name="CSS" image={cssimg}></Propcomponents>
          <Propcomponents
            name="JAVASCRIPT"
            image={javascriptimg}
          ></Propcomponents>
          <Propcomponents name="Boostrap" image={bootstrapimg}></Propcomponents>
          <Propcomponents name="React" image={reactimg}></Propcomponents>
          <Propcomponents name="Tailwind" image={tailwindimg}></Propcomponents>
          <Propcomponents name="SCSS" image={scssimg}></Propcomponents>
        </div>
      </div>

      {/* Center Logo / Visual */}
      <div className="Logo-area">
        <img src={logo} alt="venkatLogo" className="venkatLogo" />
      </div>

      {/* Gradient Featured Area */}
      <div className="featured-area"></div>
    </div>
  );
}

export default Main;
