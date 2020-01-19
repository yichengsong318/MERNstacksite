import React from "react";
import "./home-page.styles.scss";
// import ContentGrid from "../../components/grid/grid-component";
import Signature from "../../components/common/signature/Signature.component";
import logo from "../../assets/logo1.png";
import { Button } from "react-bootstrap";
import ContactForm from "../../components/contact-form/contact-form.component";

// import homeBackground from "../../assets/homeBackground.jpg"
// import homeBackground1 from "../../assets/homeBackground1.jpg"
// import homeBackground2 from "../../assets/homeBackground2.jpg"

const HomePage = () => (
  <div>
    <div
      className="home-container"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <div style={{ backgroundSize: "contain" }}>
        <div>
          <img src={logo} className="logo-home" />
          <div className="containerContact">
            {/* <span><i class="fas fa-phone"></i> 401-447-5446</span> */}
            <span>Monday - Friday 8:00AM - 6:00PM</span>
            <span>Serving RI and Mass</span>
          </div>
        </div>

        <div className="button-container">
          <Button>
            <a
              href="tel:401-447-5446"
              data-rel="external"
              style={{ color: "white" }}
            >
              <i class="fas fa-phone"></i> 401-447-5446
            </a>
          </Button>
          <Button>Free Estimate</Button>
        </div>
        <p style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>
          Coming Soon
        </p>
        <div className="signature">
          <Signature />
        </div>
      </div>{" "}
    </div>
    <div style={{ backgroundColor: "#343A40" }}>
      <ContactForm />
    </div>
  </div>
);
export default HomePage;
