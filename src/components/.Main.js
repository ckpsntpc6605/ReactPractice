import React from "react";

const Main = () => {
  return (
    <div>
      <main>
        <div className="img">
          <img src={require("../Photos/123.png")} alt="" />
        </div>
        <div className="selfIntro">
          <h1>Hello</h1>
          <p className="bite">A Bit About Me</p>
          <p className="intro">
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
          <div className="threeCircle">
            <div className="c1">
              <a href="#">Resume</a>
            </div>
            <div className="c2">
              <a href="#">Project</a>
            </div>
            <div className="c3">
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
