import React from "react";
import "./services-pages.styles.scss";
import { landscapingPic } from "../../assets/landscaping-service.jpg";
import Fade from "react-reveal/Fade";

const ServicePage = () => {
  return (
    <div>
      <Fade left>
        <div>
          <span className="ba-title">Services</span>
        </div>
      </Fade>
      <div className="row"></div>
    </div>
  );
};

export default ServicePage;
