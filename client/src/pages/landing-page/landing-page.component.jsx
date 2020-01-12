import React from "react";
import logo from "../../assets/logo.png"
import "./landing-page.styles.scss";
// import ContentGrid from "../../components/grid/grid-component";
import Signature from "../../components/common/signature/Signature.component";
import { Wave } from 'react-animated-text';
import JoinEmailList from "../../components/join-email-list/join-email-list.component"
import Bounce from "react-reveal/Bounce";
import LazyLoad from "react-lazyload";
import { Button } from "react-bootstrap"

const LandingPage = () => (
  <div style={{ justifyContent: "center", alignItems: "center" }}>
    <div className="backgroundImage" style={{ width: "100vw", height: "100vh" }}>
      <div className="container">
        <span className="companyName">Nature’s <span className="frontier">Frontier</span> Landscaping

& Property Management LLC</span>
        <span className="quote">“We see our customers as invited guests to a party, and we are the hosts. It’s our job to make the customer experience a little bit better.”</span>
        <span className="quoteSign">-Jeff Bezos, Founder of Amazon</span>
        <div><Button>Join the party</Button></div>
      </div>

    </div>

    {/* 
    <div style={{ marginTop: 30 }}>
      <Signature />
    </div> */}
  </div>

);
export default LandingPage;
