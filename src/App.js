import React, { Component } from "react";

import Header from "./components/Header";
import Landing from "./components/Landing";

class App extends Component {
  render() {
    return (
      <div style={{ flex: 1, width: "100%", height: "150%", flexGrow: 4 }}>
        <Header />
        <Landing />
      </div>
    );
  }
}

export default App;
