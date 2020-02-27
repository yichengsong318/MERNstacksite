import React from "react";
import "./gallery-landscaping-page.styles.scss";
import LazyLoad from "react-lazyload";
import Spinner from "../../components/common/spinner/spinner.component";
import pic1 from "../../assets/gallery/gallery1.jpeg";
import pic5 from "../../assets/gallery/gallery2b.PNG";
import pic10 from "../../assets/gallery/gallery6.JPG";
import pic3 from "../../assets/gallery/gallery1aa.jpeg";
import pic9 from "../../assets/gallery/gallery5.JPG";

const GalleryLandscapingPage = () => {
  return (
    <div>
      <span>Landscaping</span>{" "}
      <div className="ba-container">
        {" "}
        <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
          <img src={pic1} className="ba-pics" alt="gallery pic" />
        </LazyLoad>
        <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
          <img src={pic5} className="ba-pics" alt="gallery pic" />
        </LazyLoad>
        <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
          <img src={pic10} className="ba-pics" alt="gallery pic" />
        </LazyLoad>
        <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
          <img src={pic3} className="ba-pics" alt="gallery pic" />
        </LazyLoad>
        <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
          <img src={pic9} className="ba-pics" alt="gallery pic" />
        </LazyLoad>
      </div>
    </div>
  );
};

export default GalleryLandscapingPage;
