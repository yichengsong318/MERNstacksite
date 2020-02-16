import React from "react";
import "./home-page.styles.scss";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slider.styles..scss";
// import logo from "../../assets/logo1.png";
import { Button } from "react-bootstrap";
import { Wave } from "react-animated-text";
// import ContactForm from "../../components/contact-form/contact-form.component";
// import Fade from "react-reveal/Fade";
// import WhatWeDo from "../../components/what-we-do/what-we-do.component";
// import LazyLoad from "react-lazyload";
// import Spinner from "../../components/common/spinner/spinner.component";

import image1 from "../../assets/homeBackground.jpeg";
import image2 from "../../assets/homeBackground1.jpeg";
import image3 from "../../assets/homeBackground3.jpeg";
import image4 from "../../assets/homeBackground4.jpg";
import image5 from "../../assets/homeBackground5.jpg";

const HomePage = () => {
  const content = [
    {
      title: "Committed to Excellence",
      description:
        "With over 10 years of experience, we work with our clients to make their ideas come true",

      image: image1
    },
    {
      title: "Job Big or Small, We Got You Covered",
      description: "",

      image: image2
    },
    {
      title: "Making RI and MA Greener One Landscape at a Time",
      description: "",

      image: image3
    },
    {
      title: "Providing Residential, State, and Commercial Services",
      description: "",

      image: image4
    },
    {
      title: "Build Your Dream Project Today",
      description: "",

      image: image5
    }
  ];
  return (
    <div style={{ height: "100%" }}>
      <div style={{}}></div>
      <div style={{}}>
        <Slider className="slider-wrapper" infinite={true} autoplay={2000}>
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${item.image}') no-repeat center center`
              }}
            >
              <div className="inner">
                <div style={{ marginRight: 20 }}>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
                <div>
                  <Button variant="light">
                    <a
                      href="tel:401-447-5446"
                      data-rel="external"
                      style={{ color: "black" }}
                    >
                      <i class="fas fa-phone"></i> 401-447-5446
                    </a>
                  </Button>
                  <div style={{ padding: 10 }}></div>
                  <Button
                    style={{ fontWeight: "bold" }}
                    onClick={() => (window.location.href = "/contact")}
                    variant="light"
                    className="contact-button"
                  >
                    <a href="/contact" style={{ color: "black" }}>
                      Free Estimate
                    </a>
                  </Button>
                  <div
                    style={{
                      color: "white",
                      marginTop: "10vh",
                      fontSize: 25
                    }}
                  >
                    <Wave
                      text="0% In-house Financing Available"
                      effect="stretch"
                      effectChange={1.2}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default HomePage;
