import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
          <h2>Nature's Frontier Landscaping</h2>
        </div>
      </div>
    );
  }
}

export default App;
