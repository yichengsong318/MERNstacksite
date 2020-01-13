import React from "react";
import "./home-page.styles.scss";
// import ContentGrid from "../../components/grid/grid-component";
import Signature from "../../components/common/signature/Signature.component";
import logo from "../../assets/logo1.png"

const HomePage = () => (
    <div className="home-container" style={{ justifyContent: "center", alignItems: "center" }}>
        <img src={logo} className="logo-home" />
        <div className="containerContact">
            <span>Call <i class="fas fa-phone"></i> 401-447-5446</span>
            <span>Monday - Friday 8:00AM - 6:00PM</span>
            <span>Serving Rhode Island and Mass</span>
        </div>
    </div>
);
export default HomePage;
