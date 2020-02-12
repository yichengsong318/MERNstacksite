import React from "react";

import "./about-page.styles.scss";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import Zoom from "react-reveal/Zoom";
import RubberBand from "react-reveal/RubberBand";
import LightSpeed from "react-reveal/LightSpeed";
import ContactEmail from "../../components/common/contact-email/contact-email.component";
import hero from "../../assets/hero.jpg";
import { Card } from "react-bootstrap";

const AboutPage = () => (
  <div style={{ justifyContent: "center", alignItems: "center" }}>
    <Fade left>
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
    </Fade>
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
      <Fade top>
        <span style={{ marginBottom: 20 }}>
          "We don't cut corners, just wood."
        </span>
      </Fade>

      <Fade right>
        <div width="100vw">
          <img src={hero} className="logo" alt="Founder at work" />
        </div>
      </Fade>

      <Card style={{ marginTop: 30 }}>
        <Fade top cascade>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                At Nature's Frontier Landscaping, our goal is to cater to all of
                our customers household needs.
              </p>{" "}
              <p>
                Everything from landscaping to moving a couch. We want to make
                YOU the customer's life simpler and effortless.
              </p>
              <footer className="blockquote-footer">
                <p>Founder</p>
              </footer>
            </blockquote>
          </Card.Body>
        </Fade>
      </Card>
      <LightSpeed top cascade>
        <div style={{ display: "flex", marginTop: 30 }}>
          <p className="about-text">
            We do Residential, Commercial, and State work.
          </p>
        </div>
      </LightSpeed>
      <div style={{ paddingBottom: 200 }}></div>
    </div>
    {/* <div>
      <Signature />
    </div> */}
  </div>
);
export default AboutPage;
