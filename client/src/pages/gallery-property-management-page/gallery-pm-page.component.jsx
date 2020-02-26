import React from "react";
import "./gallery-pm-page.styles.scss";
import LazyLoad from "react-lazyload";
import Spinner from "../../components/common/spinner/spinner.component";

const GalleryPmPage = () => {
  return (
    <div>
      <span>PM</span>
      <div className="ba-container">
        <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
          <img src={pic3} className="ba-pics" alt="gallery pic" />
        </LazyLoad>
      </div>
    </div>
  );
};

export default GalleryPmPage;
