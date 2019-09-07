import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          flex: 1,
          width: "100%",
          height: "100%"
        }}
      >
        <div className="App-header">
          <Header />
          <div
            style={{
              justifyContent: "center",
              display: "flex"
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
