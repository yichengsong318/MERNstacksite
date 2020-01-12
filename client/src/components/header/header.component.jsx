import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./header.styles.scss"
import logo from "../../assets/logo1.png"

export default class Header extends Component {
  render() {
    if (window.location.pathname === '/') return null;
    return (
      <div style={{}}>

        <Navbar collapseOnSelect expand="lg" >
          <Navbar.Brand href="/home"><i class="fas fa-home"></i> Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Services" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Landscaping</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Property Management</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Trash Removal</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="#pricing">Gallery</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Contact</Nav.Link>
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
