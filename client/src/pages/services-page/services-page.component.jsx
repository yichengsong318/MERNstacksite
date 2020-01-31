import React from "react";
import "./services-pages.styles.scss";

import Fade from "react-reveal/Fade";
import Services from "../../components/services/services.component";

const ServicePage = () => {
  return (
    <div>
      <Fade left>
        <div>
          <span className="ba-title">Services</span>
        </div>
      </Fade>
      <Services />
    </div>
  );
};

export default ServicePage;
