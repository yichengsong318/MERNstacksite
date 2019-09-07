import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";

class App extends Component {
  render() {
    return (
      <div
        className="backgroundImage"
        style={{
          flex: 1,
          width: "100%",
          height: "100%"
        }}
      >
        <Header />
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            paddingBottom: 700
          }}
        >
          <Landing />
        </div>
      </div>
    );
  }
}

export default App;
