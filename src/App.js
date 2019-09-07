import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";

class App extends Component {
  render() {
    return (
      <div className="App" style={{}}>
        <div className="App-header">
          <Header />
          <div
            className="m-auto"
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center"
            }}
          >
            <Landing />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
