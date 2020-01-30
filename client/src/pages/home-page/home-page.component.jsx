import React from "react";
import "./home-page.styles.scss";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slider.styles..scss";
import HomeHeader from "../../components/common/home-header/home-header.component";
// import logo from "../../assets/logo1.png";
// import { Button } from "react-bootstrap";
// import ContactForm from "../../components/contact-form/contact-form.component";
// import Fade from "react-reveal/Fade";
// import WhatWeDo from "../../components/what-we-do/what-we-do.component";
// import LazyLoad from "react-lazyload";
// import Spinner from "../../components/common/spinner/spinner.component";
// import homeBackground from "../../assets/homeBackground.jpg"
// import homeBackground1 from "../../assets/homeBackground1.jpg"
// import homeBackground2 from "../../assets/homeBackground2.jpg"
import image1 from "../../assets/homeBackground.jpeg";
import image2 from "../../assets/homeBackground1.jpeg";
import image3 from "../../assets/homeBackground3.jpeg";
import image4 from "../../assets/homeBackground4.jpg";
import image5 from "../../assets/homeBackground5.jpg";

const HomePage = () => {
  const content = [
    {
      title: "Excellence",
      description:
        "With over 10 years of experience, we get the job done right",

      image: image1
    },
    {
      title: "Want something done right?",
      description: "Any type of job... We have you covered",

      image: image2
    },
    {
      title: "Property Maintenance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. modo luctus, nisi erat porttitor ligula.",

      image: image3
    },
    {
      title: "Snow Removal",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis condo itor ligula.",

      image: image4
    },
    {
      title: "Lawn Care",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis condo itor ligula.",

      image: image5
    }
  ];
  return (
    <div style={{ height: "100%" }}>
      <HomeHeader />
      <div style={{}}>
        <Slider className="slider-wrapper">
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${item.image}') no-repeat center center`
              }}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* <div style={{ backgroundSize: "contain" }}>
          <div>
            <img src={logo} className="logo-home" />
            <div className="containerContact">
              <span>Monday - Sunday 24/7</span>
              <span>Available for emergencies</span>
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
            <Button
              style={{ fontWeight: "bold" }}
              onClick={() => (window.location.href = "/contact")}
            >
              Free Estimate
            </Button>
          </div>
        </div> */}

      {/* <Fade right>
        <div style={{ backgroundColor: "#CDCDCD" }}>
          <div style={{ padding: 10 }}> </div>
          <div>
            <span class="what-we-do-header">What we do</span>
          </div>

          <div>
            <span class="what-we-do-sub-head"> Licensed and fully insured</span>
          </div>

          <div style={{ padding: 10 }}> </div>
          <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
            <WhatWeDo />
          </LazyLoad>

          <div style={{ padding: 30 }}></div>
        </div>
      </Fade>
      <Fade left>
        <div style={{ backgroundColor: "#343A40" }}>
          <div style={{ padding: 40 }}> </div>

          <div>
            <span class="message-header">Send us a message!</span>
          </div>

          <ContactForm />
          <div style={{ padding: 30 }}></div>
        </div>
      </Fade> */}
    </div>
  );
};
export default HomePage;
