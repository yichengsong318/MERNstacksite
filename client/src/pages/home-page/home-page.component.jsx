import React from "react";
import "./home-page.styles.scss";
// import ContentGrid from "../../components/grid/grid-component";
import Signature from "../../components/common/signature/signature.component";
import logo from "../../assets/logo1.png"
import { Button } from 'react-bootstrap';

// import homeBackground from "../../assets/homeBackground.jpg"
import homeBackground1 from "../../assets/homeBackground1.jpg"
import homeBackground2 from "../../assets/homeBackground2.jpg"

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


const HomePage = () => (
    <div className="home-container" style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{ backgroundSize: "contain" }}>
            <div>
                <img src={logo} className="logo-home" />
                <div className="containerContact">
                    <span><i class="fas fa-phone"></i> 401-447-5446</span>
                    <span>Monday - Friday 8:00AM - 6:00PM</span>
                    <span>Serving Rhode Island and Mass</span>
                </div>
            </div>

            <div className="button-container">
                <Button>Contact Us</Button>   <Button>Free Estimate</Button>
            </div>


            <div className="signature">
                <Signature />
            </div>
        </div>


    </div>
);
export default HomePage;
