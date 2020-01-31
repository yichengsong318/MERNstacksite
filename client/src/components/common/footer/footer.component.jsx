import React from "react";
import "./footer.styles.scss";

const Footer = () => {
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/home" ||
    window.location.pathname === "/home/"
  )
    return null;
  return (
    <footer className="footer">
      <span>Site built by{"\t"}</span>
      <a href="http://www.christiangracia.com">christiangracia.com</a>{" "}
      <i
        className="fab fa-react fa-spin"
        style={{ color: "#0082BE", fontWeight: "bold" }}
      ></i>
    </footer>
  );
};

export default Footer;
