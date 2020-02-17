import React from "react";
import pic1 from "../../assets/gallery/gallery1.jpeg";
import pic2 from "../../assets/gallery/gallery1a.JPG";
import pic3 from "../../assets/gallery/gallery1aa.jpeg";
import pic4 from "../../assets/gallery/gallery2.JPG";
import pic5 from "../../assets/gallery/gallery2b.PNG";
import pic6 from "../../assets/gallery/gallery3.JPG";
import pic7 from "../../assets/gallery/gallery4.JPG";
import pic8 from "../../assets/gallery/gallery4a.JPG";
import pic9 from "../../assets/gallery/gallery5.JPG";
import Fade from "react-reveal/Fade";
import LazyLoad from "react-lazyload";
import Spinner from "../../components/common/spinner/spinner.component";

import "./gallery-page.styles.scss";

const GalleryPage = () => (
  <div>
    <Fade left>
      <p className="ba-title">Before & After</p>
    </Fade>
    <div className="ba-container">
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic1} className="ba-pics" />
      </LazyLoad>
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic2} className="ba-pics" />
      </LazyLoad>
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic3} className="ba-pics" />
      </LazyLoad>
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic4} className="ba-pics" />
      </LazyLoad>
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic5} className="ba-pics" />
      </LazyLoad>
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic6} className="ba-pics" />
      </LazyLoad>
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic7} className="ba-pics" />
      </LazyLoad>
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic8} className="ba-pics" />
      </LazyLoad>
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic9} className="ba-pics" />
      </LazyLoad>
      <div style={{ paddingBottom: 1000 }}></div>
    </div>
  </div>
);
export default GalleryPage;
