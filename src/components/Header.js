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
        style={{
          justifyContent: "space-between",
          backgroundColor: "#2f2fa2",
          width: "100%"
        }}
      >
        <Navbar.Brand href="/" style={{ fontWeight: "bold", color: "white" }}>
          Home <i className="fas fa-leaf" style={{ color: "#46CB18" }}></i>
        </Navbar.Brand>

        <div
          className="headerLogo"
          style={{
            textAlign: "center"
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
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              Services <i className="fas fa-toolbox"></i>
            </div>
          </Nav.Link>
          <Nav.Link href="/work" style={{ color: "white", fontWeight: "bold" }}>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              Gallery <i className="fas fa-image"></i>
            </div>
          </Nav.Link>

          <Nav.Link
            style={{ color: "white", fontWeight: "bold" }}
            href="/about"
          >
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              About <i className="fas fa-book-reader"></i>
            </div>
          </Nav.Link>
          <Nav.Link
            href="/contact"
            style={{
              color: "white",
              fontWeight: "bold",
              justifyContent: "center"
            }}
          >
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              Contact <i className="far fa-envelope"></i>
            </div>
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
