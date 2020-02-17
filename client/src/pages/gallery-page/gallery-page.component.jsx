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

import pic10 from "../../assets/gallery/gallery6.JPG";
import pic11 from "../../assets/gallery/gallery6a.JPG";
import pic12 from "../../assets/gallery/gallery6aa.JPG";
import pic13 from "../../assets/gallery/gallery7.JPG";
import pic14 from "../../assets/gallery/gallery8.JPG";
import pic15 from "../../assets/gallery/gallery9.JPG";

import pic16 from "../../assets/gallery/gallery10.JPG";
import pic17 from "../../assets/gallery/gallery11.JPG";
import pic18 from "../../assets/gallery/gallery11.PNG";
import pic19 from "../../assets/gallery/gallery12.PNG";
import pic20 from "../../assets/gallery/gallery13.JPG";
import pic21 from "../../assets/gallery/gallery14.JPG";

import pic22 from "../../assets/gallery/gallery10.JPG";
import pic23 from "../../assets/gallery/gallery11.JPG";
import pic24 from "../../assets/gallery/gallery11.PNG";
import pic25 from "../../assets/gallery/gallery12.PNG";
import pic26 from "../../assets/gallery/gallery13.JPG";
import pic27 from "../../assets/gallery/gallery14.JPG";

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
