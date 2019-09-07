import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { Button, Badge } from "react-bootstrap";

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
                fontSize: 35,
                marginTop: 150,
                textAlign: "center"
              }}
            >
              {" "}
              <h1 style={{ color: "white", fontWeight: "bold" }}>
                LANDSCAPING SERVICES & Property Management
              </h1>
              <Badge variant="primary">Serving all RI/Mass</Badge>
            </div>
          </Fade>
        </div>
        <div
          style={{
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center"
          }}
        >
          <div>
            <span
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 15
              }}
            >
              <i class="fas fa-phone-square"></i> 401-447-5446
            </span>
          </div>
          <span style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            <i class="fas fa-envelope"></i> Naturesfrontierlandscaping@gmail.com
          </span>
          <div>
            <Button variant="primary" onPress={this.handleClick}>
              Free Estimate
            </Button>
          </div>
        </div>
        <div style={{ paddingTop: 250 }}></div>
      </div>
    );
  }
}
