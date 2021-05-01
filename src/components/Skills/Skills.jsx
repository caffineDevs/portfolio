import React from "react";
import basket from "../../assets/basket.jpg";
import "./Skills.scss";
import coll from "../../assets/colloseum.png";

function Skills() {
  return (
    <div className="d-flex align-items-center mainCardContainer skills-container">
      <div className="mainCard mainCardmainCard">
        <div className="position-relative main-content">
          <div className="position-absolute s135f">
            <div className="d-flex flex-wrap card-con">
              <div className="skills text-uppercase">HTML</div>
              <div className="skills text-uppercase">CSS</div>
              <div className="skills text-uppercase">Sass</div>
              <div className="skills text-uppercase">angular</div>
              <div className="skills text-uppercase">react</div>
              <div className="skills text-uppercase">tailwind</div>
              <div className="skills text-uppercase">Bootstrap</div>
              <div className="skills text-uppercase">redux</div>
              <div className="skills text-uppercase">ngrx</div>
              <div className="skills text-uppercase">nodejs</div>
              <div className="skills text-uppercase">expressjs</div>
              <div className="skills text-uppercase">mongodb</div>
              <div className="skills text-uppercase">primeng</div>
              {/* <div className="skills text-uppercase"></div> */}
            </div>
          </div>

          <img src={coll} className="position-absolute coll" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
