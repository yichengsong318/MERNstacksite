import React from "react";
import "./gallery-home-improvement.styles.scss";
import LazyLoad from "react-lazyload";
import Spinner from "../../components/common/spinner/spinner.component";
import pic11 from "../../assets/gallery/gallery6a.JPG";
import pic2 from "../../assets/gallery/gallery1a.JPG";
import pic3 from "../../assets/gallery/gallery1aa.jpeg";
import pic4 from "../../assets/gallery/gallery2.JPG";
import pic7 from "../../assets/gallery/gallery4.JPG";
import pic8 from "../../assets/gallery/gallery4a.JPG";
import pic17 from "../../assets/gallery/gallery11.JPG";
import Fade from "react-reveal/Fade";

import pic6 from "../../assets/gallery/gallery3.JPG";

const GalleryHomeImprovementPage = () => {
  return (
    <div>
      <span className="ba-title">Home improvement</span>
      <div className="ba-container">
        <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
          <img src={pic11} className="ba-pics" alt="gallery pic" />
        </LazyLoad>
        <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
          <img src={pic2} className="ba-pics" alt="gallery pic" />
        </LazyLoad>

        <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
          <img src={pic4} className="ba-pics" alt="gallery pic" />
        </LazyLoad>

        <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
          <img src={pic6} className="ba-pics" alt="gallery pic" />
        </LazyLoad>
        <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
          <img src={pic7} className="ba-pics" alt="gallery pic" />
        </LazyLoad>
        <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
          <img src={pic8} className="ba-pics" alt="gallery pic" />
        </LazyLoad>
        <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
          <img src={pic17} className="ba-pics" alt="gallery pic" />
        </LazyLoad>
      </div>
    </div>
  );
};

export default GalleryHomeImprovementPage;
