import React from "react";
import Fade from "react-reveal/Fade";
import "./what-we-do.styles.scss";

const WhatWeDo = () => {
  return (
    <div>
      <Fade top cascade>
        <div className="what-we-do-container">
          <div className="job-container">
            <span className="job-div">LAWN MAINTENANCE </span>
            <i class="fas fa-leaf" style={{ color: "green" }}></i>
          </div>
          <div className="job-container">
            <span className="job-div">MULCH (GRADE A HEMLOCK) </span>
            <i class="fas fa-fill-drip" style={{ color: "#654321" }}></i>
          </div>
          <div className="job-container">
            <span className="job-div">SEEDING AND TILLING </span>
            <i class="fas fa-eye-dropper" style={{ color: "blue" }}></i>
          </div>
          <div className="job-container">
            <span className="job-div">SNOW REMOVAL </span>
            <i class="far fa-snowflake" style={{ color: "white" }}></i>
          </div>{" "}
          <div className="job-container">
            <span className="job-div">DETHATCHING </span>
            <i class="fab fa-connectdevelop" style={{ color: "red" }}></i>
          </div>{" "}
          <div className="job-container">
            <span className="job-div">LANDSCAPE DESIGN </span>
            <i class="fab fa-slack-hash" style={{ color: "#9CFF88" }}></i>
          </div>{" "}
          <div className="job-container">
            <span className="job-div">PROPERTY MAINTENANCE </span>
            <i class="fas fa-circle-notch" style={{ color: "#FEFF01" }}></i>
          </div>{" "}
          <div className="job-container">
            <span className="job-div">ODD JOBS </span>
            <i
              class="far fa-thumbs-up"
              style={{ color: "black", fontSize: 20 }}
            ></i>
          </div>
        </div>
      </Fade>
    </div>
  );
};
export default WhatWeDo;
