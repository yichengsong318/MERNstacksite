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
      <div>
        <Navbar style={{ justifyContent: "right", backgroundColor: "#2f2fa2" }}>
          <Navbar.Brand href="/" style={{ fontWeight: "bold", color: "white" }}>
            Home <i className="fas fa-leaf" style={{ color: "#46CB18" }}></i>
          </Navbar.Brand>

          <div
            className="headerLogo"
            style={{
              textAlign: "center",
              color: "",

              padding: 5
            }}
          >
            {" "}
            <span style={{ color: "white", fontWeight: "bold" }}>
              <span></span>
              Nature's<span style={{ padding: 5 }}></span>
              <Badge variant="primary">Frontier</Badge>
              <span style={{ padding: 5 }}></span>
              Landscaping
            </span>
          </div>

          <Nav className="ml-auto">
            <Nav.Link
              href="/work"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="/work"
              style={{ color: "white", fontWeight: "bold" }}
            >
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
      </div>
    );
  }
}
