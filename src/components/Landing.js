import React, { Component } from "react";
import LightSpeed from "react-reveal/LightSpeed";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
            width: "100%"
          }}
        >
          <LightSpeed>
            <span
              style={{
                fontSize: 40,
                marginTop: 150,
                textAlign: "center",
                color: "white",
                fontWeight: "bold",

                padding: 5
              }}
            >
              Nature's Frontier Landscaping
            </span>
          </LightSpeed>
        </div>
        <div style={{ paddingTop: 200 }}></div>
      </div>
    );
  }
}
