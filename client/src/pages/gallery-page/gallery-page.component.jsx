import React from "react";

// import pic34 from "../../assets/gallery/gallery35.JPG";
// import pic35 from "../../assets/gallery/gallery36.PNG";

import Fade from "react-reveal/Fade";
import LazyLoad from "react-lazyload";
import Spinner from "../../components/common/spinner/spinner.component";
import ServiceDirectory from "../../components/service-directory/service-directory.component";

import "./gallery-page.styles.scss";

const GalleryPage = () => (
  <div style={{}}>
    <Fade left>
      <p className="ba-title">Before & After</p>
    </Fade>
    <ServiceDirectory />

    <div style={{ paddingBottom: 1000 }}></div>
    <div className="ba-container">
      {/* <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic34} className="ba-pics" />
      </LazyLoad> */}
      {/* <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic35} className="ba-pics" />
      </LazyLoad> */}

      <div style={{ paddingBottom: 1000 }}></div>
    </div>
  </div>
);
export default GalleryPage;
