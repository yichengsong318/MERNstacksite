import React from "react";
import "./footer.styles.scss";

const Footer = () => {
  if (window.location.pathname === "/") return null;
  return (
    <footer class="footer">
      Site built by Christian Gracia @{" "}
      <a href="http://www.christiangracia.com">christiangracia.com</a>{" "}
      <i
        className="fab fa-react fa-spin"
        style={{ color: "#0082BE", fontWeight: "bold" }}
      ></i>
    </footer>
  );
};

export default Footer;
