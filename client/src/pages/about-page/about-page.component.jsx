import React from "react";

import "./about-page.styles.scss";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import Zoom from "react-reveal/Zoom";
import RubberBand from "react-reveal/RubberBand";
import LightSpeed from "react-reveal/LightSpeed";
import ContactEmail from "../../components/common/contact-email/contact-email.component";
import hero from "../../assets/hero.jpg";

const AboutPage = () => (
  <div style={{ justifyContent: "center", alignItems: "center" }}>
    <p
      style={{
        color: "black",
        fontWeight: "bold",
        fontSize: 30,
        marginTop: 20
      }}
    >
      About Us
    </p>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
        color: "black",
        fontSize: 20,
        textAlign: "center"
      }}
    >
      <Fade left>
        <span style={{ marginBottom: 20 }}>
          "We don't cut corners, just wood."
        </span>
      </Fade>

      <Fade right>
        <div width="100vw">
          <img src={hero} className="logo" alt="Founder at work" />
        </div>
      </Fade>

      <Fade top cascade>
        <div style={{ display: "flex", marginTop: 24 }}>
          <p className="about-text">
            At Nature's Frontier Landscaping, our goal is to cater to all of our
            customers household needs.
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <p className="about-text">
            Everything from landscaping to moving a couch. We want to make YOU
            the customer's life simpler and effortless.
          </p>
        </div>{" "}
        <div style={{ display: "flex" }}>
          <p className="about-text">
            We do residential, commercial, and state work.
          </p>
        </div>
      </Fade>
      <LightSpeed top cascade>
        <p>- Founder</p>
      </LightSpeed>
      <div style={{ paddingBottom: 200 }}></div>
    </div>
    {/* <div>
      <Signature />
    </div> */}
  </div>
);
export default AboutPage;
