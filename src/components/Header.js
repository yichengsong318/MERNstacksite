import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar
          style={{ justifyContent: "right", backgroundColor: "transparent" }}
        >
          <Navbar.Brand href="/" style={{ color: "black" }}>
            Home{" "}
            <i
              className="fas fa-dice-d20"
              style={{ fontSize: 20, color: "black", marginTop: 4 }}
            ></i>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/work" style={{ color: "black" }}>
              Projects
            </Nav.Link>
            <Nav.Link href="/about" style={{ color: "black" }}>
              About
            </Nav.Link>
            <Nav.Link href="/contact" style={{ color: "black" }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
