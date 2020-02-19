import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./header.styles.scss";
import logo from "../../assets/logo1.png";

export default class Header extends Component {
  render() {
    if (window.location.pathname === "/") return null;
    return (
      <div style={{}}>
        <Navbar collapseOnSelect expand="lg" className="navbar-inner navbar">
          <Navbar.Brand href="/home">
            <div style={{}}>
              {" "}
              <img src={logo} className="logo-home" />
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Nav
              className="ml-auto"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
              }}
            >
              <Nav.Link href="">
                <i className="fab fa-facebook" style={{ fontSize: 20 }}></i>
              </Nav.Link>
              <div style={{ padding: 5 }}></div>

              <Nav.Link href="https://www.instagram.com/natures_frontier_landscaping/">
                <i className="fab fa-instagram" style={{ fontSize: 20 }}></i>
              </Nav.Link>
            </Nav>
            <Nav></Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
