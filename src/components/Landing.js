import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { Badge } from "react-bootstrap";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
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
                textAlign: "center",
                color: "",
                fontWeight: "bold",

                padding: 5
              }}
            >
              {" "}
              <h1 style={{ color: "white" }}>
                <span></span>
                Nature's<span style={{ padding: 5 }}></span>
                <Badge variant="primary">Frontier</Badge>
                <span style={{ padding: 5 }}></span>
                Landscaping
              </h1>
            </div>
          </Fade>
        </div>
        <div style={{ paddingTop: 250 }}></div>
      </div>
    );
  }
}
