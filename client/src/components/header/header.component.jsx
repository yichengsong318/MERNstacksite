import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./header.styles.scss"
import logo from "../../assets/logo.png"

export default class Header extends Component {
  render() {


    if (window.location.pathname === '/') return null;


    return (
      <div style={{}}>
        <Navbar
          style={{ justifyContent: "right", backgroundColor: "transparent" }}
        >
          <Navbar.Brand href="/" style={{ color: "#A9A9A9" }}>
            <div className="logo mr-auto ml-auto">
              <div
                className="logo-image"
                style={{
                  backgroundImage: `url(
            ${logo}
          )`,
                  backgroundRepeat: "no-repeat",

                }}
              /></div>

          </Navbar.Brand>

          <Nav className="ml-auto">
            <Nav.Link href="/artists"  >
              Services
            </Nav.Link>
            <Nav.Link href="/about" >
              About
            </Nav.Link>
            <Nav.Link href="/login" >
              Login
            </Nav.Link>
          </Nav>
        </Navbar >
      </div >
    );
  }
}
