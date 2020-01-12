import React from "react";

import "./about-page.styles.scss";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import Zoom from "react-reveal/Zoom";
import RubberBand from "react-reveal/RubberBand";
import Signature from "../../components/common/signature/Signature.component";
import LightSpeed from 'react-reveal/LightSpeed';
import ContactEmail from "../../components/common/contact-email/contact-email.component"
import hero from "../../assets/hero.jpg"


const AboutPage = () => (
  <div style={{ justifyContent: "center", alignItems: "center" }}>

    <p style={{ color: "black", fontWeight: "bold", fontSize: 30 }}>About Us</p>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
        color: "black",
        fontSize: 20
      }}
    >
      <Fade left>
        <span>"We don't cut corners, just wood."</span>
      </Fade>

      <Fade right>
        <img src={hero} className="logo" alt="Founder at work" />
      </Fade>

      <Fade top cascade>
        <p>At Nature's Frontier Landscaping, our goal is to cater to all of our customers
        household needs.</p>

        <p>Everything from landscaping to moving a couch. We want to make YOU the customer's life simpler and effortless.</p>
        <p>We do residential, commerical, and state work.</p>
      </Fade>
      <LightSpeed top cascade>
        <p>- Founder</p>
      </LightSpeed>
      <div>
        <Signature />
      </div>
    </div>
  </div>
);
export default AboutPage;
