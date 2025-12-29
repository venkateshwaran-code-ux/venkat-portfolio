import "../Header/Header.css";
import Resume from "../../assets/VenkateshwaranKalidoss_Resume.pdf";

function Header() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "VenkateshwaranKalidoss_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="Venkat-hire">
      {/* LEFT */}
      <div className="header-left">
        <span className="V-logo">V</span>
        <span className="header-name"> Venkat </span>
        <span className="Portfolio-fnt">Portfolio</span>
      </div>

      {/* CENTER - NAVIGATION */}
      <nav className="header-nav">
        <ul className="nav-links">
          <li>
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
      </nav>

      {/* RIGHT */}
      <button className="Sploper" onClick={handleDownloadResume}>
        Hire Me
      </button>
    </header>
  );
}

export default Header;
