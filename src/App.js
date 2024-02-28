import "./App.css";
import Success from "./lotties/success";
import Menu from "./lotties/menu";
import Close from "./lotties/close";
import { useState } from "react";

function App() {
  const [expand, setExpand] = useState(false);

  return (
    <div className="app">
      <header className="header">
        <div className="fonts-logo">{`<Hinal Tilavat/>`}</div>
        <nav>
          <button className="menu-button" onClick={() => setExpand(!expand)}>
            <Menu />
          </button>
          <ul className={`header-nav-ul${expand ? "-open" : ""}`}>
            {expand && (
              <dv className="close-button" onClick={() => setExpand(!expand)}>
                <Close />
              </dv>
            )}
            <li className="header-nav-list">
              <a href="#about">About</a>
            </li>

            <li className="header-nav-list">
              <a href="#projects">projects</a>
            </li>
            <li className="header-nav-list">
              <a href="#skills">skills</a>
            </li>
            <li className="header-nav-list">
              <a href="#Timeline">Timeline</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="background-pattern-dots">
          <div>
            {/* <h1>Software Developer</h1> */}
            <div>
              <p id="#about" className="about">
                Welcome! I'm Hinal Tilavat, an end-to-end developer specializing
                in innovative web and hybrid app solutions. My portfolio
                highlights my journey from concept to deployment, showcasing
                seamless, cross-platform experiences. Let's transform your ideas
                into digital success stories together.
              </p>
              {/* <Success height="64vh" /> */}
            </div>
          </div>
        </div>
        {/* <div id="#skills">skills sections</div> */}
        <div className="background-pattern-square" id="#projects">
          <h2 className="Project-text">professional and personal projects</h2>

          <div className="projct-section">
            <div className="project-card">
              <h3>Frejun Dialer</h3>

              <a href="https://play.google.com/store/apps/details?id=com.frejun.FreJunApp">
                View App
              </a>
            </div>
            <div>
              <div className="project-card">
                <h3>PlayDecks Solo</h3>

                <a href="https://play.google.com/store/apps/details?id=com.solo_app&hl=en_IN&gl=US">
                  view App
                </a>
              </div>
            </div>
            <div>
              <div className="project-card">
                <h3>Portfolio</h3>

                <a href="">view App</a>
                <a href="">view Code</a>
              </div>
            </div>
          </div>
        </div>
        <div id="#timeline"></div>
      </main>
      <footer>copyright or something</footer>
    </div>
  );
}

export default App;
