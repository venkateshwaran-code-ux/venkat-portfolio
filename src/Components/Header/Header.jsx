import "../Header/Header.css";

function Header() {
  return (
    <header className="Venkat-hire">
      {/* LEFT */}
      <div className="header-left">
        <span className="V-logo">V</span>
        <span className="header-name"> Venkat </span>
        <span className="Portfolio-fnt">Portfolio</span>
      </div>

      {/* RIGHT */}
      <button className="Sploper">Hire Me</button>
    </header>
  );
}

export default Header;
