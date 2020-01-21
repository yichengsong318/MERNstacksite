import React from "react";
import "./home-page.styles.scss";

import logo from "../../assets/logo1.png";
import { Button } from "react-bootstrap";
import ContactForm from "../../components/contact-form/contact-form.component";
import Bounce from "react-reveal/Bounce";
// import homeBackground from "../../assets/homeBackground.jpg"
// import homeBackground1 from "../../assets/homeBackground1.jpg"
// import homeBackground2 from "../../assets/homeBackground2.jpg"

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const HomePage = () => {
  const slides = [
    { title: "Landscaping" },

    { title: "Property Management" },
    { title: "Trash Removal" },
    { title: "and more!" }
  ];
  return (
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
              <span style={{ fontWeight: "bold" }}>Serving RI and Mass</span>
              <span>401-447-5446</span>
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
          <div style={{ marginTop: 80 }}>
            <Slider
              autoplay={2000}
              infinite={true}
              duration={2000}
              animateIn={"animateIn"}
              previousButton={false}
              nextButton={false}
            >
              {slides.map((slide, index) => (
                <div className="slide-div" key={index}>
                  <h2 className="slide-title">{slide.title}</h2>
                  <div>{slide.description}</div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#343A40" }}>
        <div style={{ padding: 40 }}> </div>
        <Bounce left>
          <div>
            <span class="message-header">Send us a message!</span>
          </div>
        </Bounce>

        <ContactForm />
        <div style={{ padding: 30 }}></div>
      </div>
    </div>
  );
};
export default HomePage;
