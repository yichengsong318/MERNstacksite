import React, { Component } from "react";
import LightSpeed from "react-reveal/LightSpeed";

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
            display: "flex",
            alignItems: "center"
          }}
        >
          <LightSpeed>
            <span
              style={{
                fontSize: 40,
                marginTop: 60,
                textAlign: "center",
                color: "white",
                fontWeight: "bold"
              }}
            >
              Nature's Frontier Landscaping
            </span>
          </LightSpeed>
        </div>
      </div>
    );
  }
}
