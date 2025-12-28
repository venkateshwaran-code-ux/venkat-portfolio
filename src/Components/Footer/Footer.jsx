import "../Footer/Footer.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="Footer-area">
      <ul className="Footer-content">
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

      <p className="Copyright-info super-text">
        © 2025 Exolve. All Rights Reserved.
      </p>

      <div className="Footer-socials">
        <div className="Footer-socials">
          <a
            href="https://www.instagram.com/venkat_viens/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/venkateshwaran-kalidoss-71857b179/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/venkateshwaran-code-ux"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
