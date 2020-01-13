import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./header.styles.scss"

export default class Header extends Component {
  render() {
    if (window.location.pathname === '/') return null;
    return (
      <div>

        <Navbar collapseOnSelect expand="lg" className="navbar-inner" variant="dark">
          <Navbar.Brand href="/home"><i class="fas fa-home"></i> Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Services" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/landscaping">Landscaping</NavDropdown.Item>
                <NavDropdown.Item href="/property-management">Property Management</NavDropdown.Item>
                <NavDropdown.Item href="/trash-removal">Trash Removal</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Login
      </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </div >
    );
  }
}
