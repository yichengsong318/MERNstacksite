import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Badge } from "react-bootstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar
        style={{ justifyContent: "space-between", backgroundColor: "#2f2fa2" }}
      >
        <Navbar.Brand href="/" style={{ fontWeight: "bold", color: "white" }}>
          Home <i className="fas fa-leaf" style={{ color: "#46CB18" }}></i>
        </Navbar.Brand>

        <div
          className="headerLogo"
          style={{
            textAlign: "center",
            color: ""
          }}
        >
          {" "}
          <div
            style={{
              textAlign: "center"
            }}
          >
            <span style={{ color: "white", fontWeight: "bold" }}>
              Nature's <span></span>
              <Badge variant="primary">Frontier</Badge> Landscaping
            </span>
          </div>
        </div>

        <Nav>
          <Nav.Link href="/work" style={{ color: "white", fontWeight: "bold" }}>
            Services
          </Nav.Link>
          <Nav.Link href="/work" style={{ color: "white", fontWeight: "bold" }}>
            Gallery
          </Nav.Link>

          <Nav.Link
            style={{ color: "white", fontWeight: "bold" }}
            href="/about"
          >
            About
          </Nav.Link>
          <Nav.Link
            href="/contact"
            style={{ color: "white", fontWeight: "bold" }}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
