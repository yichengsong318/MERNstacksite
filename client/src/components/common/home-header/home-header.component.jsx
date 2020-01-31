import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./home-header.styles.scss";
import logo from "../../../assets/logo1.png";

export default class HomeHeader extends Component {
  render() {
    return (
      <div style={{}}>
        <Navbar collapseOnSelect expand="lg" className="navbar-inner navbar">
          <Navbar.Brand href="/home">
            <div style={{}}>
              {" "}
              <img src={logo} className="logo-home" />
            </div>
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
