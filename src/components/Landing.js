import React, { Component } from "react";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <span
            style={{
              fontSize: 40,
              marginTop: 80,
              justifyContent: "center",
              textAlign: "center"
            }}
          >
            Nature's Frontier Landscaping
          </span>
        </div>
      </div>
    );
  }
}
