import React from "react";
import logo from "./images/logo.png";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Portofolio from "./components/Portofolio/Portofolio";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <img src={logo} className="logo-image" alt="Logo" />

          <div className="navigation-sub">
            <Link to="/about" className="item">
              About
            </Link>
            <Link to="/resume" className="item">
              Resume
            </Link>
            <Link to="/" className="item">
              Portofolio
            </Link>
          </div>
        </header>

        <Route exact path="/" component={Portofolio} />
        <Route path="/resume" component={Resume} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
