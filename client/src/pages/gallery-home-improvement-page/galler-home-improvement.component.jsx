import React from "react";
import "./gallery-home-improvement.styles.scss";
import LazyLoad from "react-lazyload";
import Spinner from "../../components/common/spinner/spinner.component";
import pic11 from "../../assets/gallery/gallery6a.JPG";

const GalleryHomeImprovementPage = () => {
  return (
    <div>
      <span>Home improvement</span>
      <div className="ba-container">
        <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
          <img src={pic11} className="ba-pics" alt="gallery pic" />
        </LazyLoad>
      </div>
    </div>
  );
};

export default GalleryHomeImprovementPage;
