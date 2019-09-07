import React, { Component } from "react";

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
          <span
            style={{
              fontSize: 40,
              marginTop: 80,
              textAlign: "center",
              color: "white"
            }}
          >
            Nature's Frontier Landscaping
          </span>
        </div>
      </div>
    );
  }
}
