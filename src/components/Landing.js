import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { Button } from "react-bootstrap";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick(e) {
    alert("hi");
  }
  render() {
    return (
      <div className="backgroundImage">
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            padding: 0,
            margin: 0,
            width: "100%",
            height: "100%",
            paddingBottom: 130
          }}
        >
          <Fade>
            <div
              className="headerLogo"
              style={{
                fontSize: 40,
                marginTop: 150,
                textAlign: "center"
              }}
            >
              {" "}
              <h1 style={{ color: "white", fontWeight: "bold" }}>
                LANDSCAPING SERVICES & Property Management
              </h1>
            </div>
          </Fade>
        </div>
        <div
          className="row"
          style={{
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <span style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Call or email for a free estimate
          </span>
          <span style={{ padding: 10 }}></span>
          <Button variant="primary" onPress={this.handleClick}>
            Free Estimate
          </Button>{" "}
        </div>
        <div style={{ paddingTop: 250 }}></div>
      </div>
    );
  }
}
