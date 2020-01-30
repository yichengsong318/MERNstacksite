import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./header.styles.scss";

export default class Header extends Component {
  render() {
    if (
      window.location.pathname === "/" ||
      window.location.pathname === "/home/" ||
      window.location.pathname === "/home"
    )
      return null;
    return (
      <div style={{}}>
        <Navbar collapseOnSelect expand="lg" className="navbar-inner navbar">
          <Navbar.Brand href="/home">
            <i class="fas fa-home"></i>
          </Navbar.Brand>
          <NavDropdown
            title="Services"
            class="dropdown-menu"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="/landscaping">Landscaping</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/property-management">
              Property Management
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/trash-removal">
              Trash Removal
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Other</NavDropdown.Item>
          </NavDropdown>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
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
              <Nav.Link href="https://www.facebook.com/Natures-View-Landscaping-131440330221618/">
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
