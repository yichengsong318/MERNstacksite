import React from "react";

import pic2 from "../../assets/gallery/gallery1a.JPG";
import pic3 from "../../assets/gallery/gallery1aa.jpeg";
import pic4 from "../../assets/gallery/gallery2.JPG";

import pic6 from "../../assets/gallery/gallery3.JPG";
import pic7 from "../../assets/gallery/gallery4.JPG";
import pic8 from "../../assets/gallery/gallery4a.JPG";
import pic9 from "../../assets/gallery/gallery5.JPG";

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

import pic22 from "../../assets/gallery/gallery15.JPG";
import pic23 from "../../assets/gallery/gallery16.JPG";
import pic24 from "../../assets/gallery/gallery17.JPG";
import pic25 from "../../assets/gallery/gallery18.JPG";
// import pic26 from "../../assets/gallery/gallery19.JPG";
import pic27 from "../../assets/gallery/gallery20.JPG";

import pic28 from "../../assets/gallery/gallery21.JPG";
import pic29 from "../../assets/gallery/gallery22.JPG";
import pic30 from "../../assets/gallery/gallery23.JPG";
import pic31 from "../../assets/gallery/gallery24.jpeg";
import pic32 from "../../assets/gallery/gallery25.JPG";
import pic33 from "../../assets/gallery/gallery34.jpeg";

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
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic2} className="ba-pics" alt="gallery pic" />
      </LazyLoad>
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic3} className="ba-pics" alt="gallery pic" />
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
        <img src={pic9} className="ba-pics" alt="gallery pic" />
      </LazyLoad>

      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic12} className="ba-pics" alt="gallery pic" />
      </LazyLoad>
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic13} className="ba-pics" alt="gallery pic" />
      </LazyLoad>
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic14} className="ba-pics" alt="gallery pic" />
      </LazyLoad>
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic15} className="ba-pics" alt="gallery pic" />
      </LazyLoad>
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic16} className="ba-pics" alt="gallery pic" />
      </LazyLoad>
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic17} className="ba-pics" alt="gallery pic" />
      </LazyLoad>
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic18} className="ba-pics" alt="gallery pic" />
      </LazyLoad>

      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic19} className="ba-pics" alt="gallery pic" />
      </LazyLoad>
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic20} className="ba-pics" alt="gallery pic" />
      </LazyLoad>
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic21} className="ba-pics" alt="gallery pic" />
      </LazyLoad>
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic22} className="ba-pics" alt="gallery pic" />
      </LazyLoad>
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic23} className="ba-pics" alt="gallery pic" />
      </LazyLoad>
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic24} className="ba-pics" alt="gallery pic" />
      </LazyLoad>
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic25} className="ba-pics" alt="gallery pic" />
      </LazyLoad>
      {/* <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic26} className="ba-pics" />
      </LazyLoad> */}
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic27} className="ba-pics" alt="gallery pic" />
      </LazyLoad>

      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic28} className="ba-pics" alt="gallery pic" />
      </LazyLoad>
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic29} className="ba-pics" alt="gallery pic" />
      </LazyLoad>
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic30} className="ba-pics" alt="gallery pic" />
      </LazyLoad>
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic31} className="ba-pics" alt="gallery pic" />
      </LazyLoad>
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic32} className="ba-pics" alt="gallery pic" />
      </LazyLoad>
      <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
        <img src={pic33} className="ba-pics" alt="gallery pic" />
      </LazyLoad>
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
