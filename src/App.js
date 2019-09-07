import React, { Component } from "react";

import Header from "./components/Header";
import Landing from "./components/Landing";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            paddingBottom: 1000
          }}
        >
          <Landing />
        </div>
      </div>
    );
  }
}

export default App;
