import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="left">
            <div className="circle"></div>
            <p className="phil">Phil Lee`s</p>
            <p className="web">web</p>
          </div>
          <div className="right">
            <a href="./Project">Resume</a>
            <a href="#">
              <Link to="projects">Projects</Link>
            </a>
            <a href="#">Contact</a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
