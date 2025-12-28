import Header from "./Components/Header/Header.jsx";
import Main from "./Components/Main/Main.jsx";
import About from "./Components/About/About.jsx";
import "../src/App.css";
import Creativity from "./Components/Creativity/Creativity.jsx";
import Expertise from "./Components/Expertise/Expertise.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Song from "./Components/Songs/Song.jsx";
function App() {
  return (
    <div>
      <Header />

      <section id="home">
        <Main />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Expertise />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
      <Song></Song>
    </div>
  );
}

export default App;
