import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
          <Landing />
        </div>
      </div>
    );
  }
}

export default App;
