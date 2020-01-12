import React from "react";
import "./home-page.styles.scss";
// import ContentGrid from "../../components/grid/grid-component";
import Signature from "../../components/common/signature/Signature.component";
import logo from "../../assets/logo1.png"

const HomePage = () => (
    <div style={{ justifyContent: "center", alignItems: "center" }}>
        <img src={logo} className="logo-home" />

    </div>

);
export default HomePage;
