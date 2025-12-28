import Propcomponents from "../Concepts/Propcomponents";
import "../Main/Main.css";
import logo from "../Main/Venkat-logo.png";
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
          I am learning and growing as a Front-End UI/UX Developer, with
          hands-on experience in HTML, CSS, JavaScript, Bootstrap, and React,
          and a strong interest in creating clean and user-friendly web designs.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">View Projects</button>
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

      {/* Right Navigation */}
      <div className="Navbar">
        <ul className="Navbar-content">
          <li className="">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
