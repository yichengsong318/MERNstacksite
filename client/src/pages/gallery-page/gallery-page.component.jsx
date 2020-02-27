import React from "react";

import Fade from "react-reveal/Fade";

import ServiceDirectory from "../../components/service-directory/service-directory.component";

import "./gallery-page.styles.scss";

const GalleryPage = () => (
  <div style={{}}>
    <Fade left>
      <p className="ba-title">Before & After</p>
    </Fade>
    <div style={{ marginTop: 42 }}>
      <ServiceDirectory />
    </div>

    <div style={{ paddingBottom: 1000 }}></div>
  </div>
);
export default GalleryPage;
