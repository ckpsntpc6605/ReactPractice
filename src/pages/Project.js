import React, { useState } from "react";

const Project = () => {
  const moreProject = () => {
    let divProject3 = document.querySelector(".p3");
    let divProject4 = document.querySelector(".p4");
    divProject3.classList.toggle("action");
    divProject4.classList.toggle("action");
  };
  return (
    <div className="project">
      <h1 className="projectH1">Projects</h1>
      <div className="section p1">
        <div className="introduction">
          <h2>成績計算網站</h2>
          <p>
            該網站進入時，會先進入動畫，結束後進入網站。網站內可輸入class
            category、class number與credits，
            下方便會計算出所得GPA分數，並可增加隨意數量科目，亦可隨意刪除，並使用演算法簡單依照每科所得分數做升序、降序排列。
          </p>
        </div>
        <div className="projectImg">
          <img src={require("../Photos/math.jpg")} alt="" />
        </div>
      </div>
      <div className="section p2">
        <div className="introduction">
          <h2>Project name 2</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nobis
            nulla tenetur, molestiae labore voluptas fugiat beatae adipisci
            eaque aperiam assumenda deleniti qui quidem, earum expedita
            perferendis deserunt! Voluptates, itaque.
          </p>
        </div>
        <div className="projectImg">
          <img src={require("../Photos/math.jpg")} alt="" />
        </div>
      </div>
      <div className="section p3 action">
        <div className="introduction">
          <h2>Project name 3</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nobis
            nulla tenetur, molestiae labore voluptas fugiat beatae adipisci
            eaque aperiam assumenda deleniti qui quidem, earum expedita
            perferendis deserunt! Voluptates, itaque.
          </p>
        </div>
        <div className="projectImg">
          <img src={require("../Photos/math.jpg")} alt="" />
        </div>
      </div>
      <div className="section p4 action">
        <div className="introduction">
          <h2>Project name 4</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nobis
            nulla tenetur, molestiae labore voluptas fugiat beatae adipisci
            eaque aperiam assumenda deleniti qui quidem, earum expedita
            perferendis deserunt! Voluptates, itaque.
          </p>
        </div>
        <div className="projectImg">
          <img src={require("../Photos/math.jpg")} alt="" />
        </div>
      </div>

      <div className="projectButton">
        <button onClick={moreProject}>Read More</button>
      </div>
    </div>
  );
};

export default Project;
