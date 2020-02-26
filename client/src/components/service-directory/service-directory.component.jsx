import React, { Component } from "react";
import ServiceItem from "../common/service-item/service-item.component";
import "./service-directory.styles.scss";

class ServiceDirectory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Hats",
          imageUrl:
            "https://www.kangol.com/media/wysiwyg/kangol/homepage/blocks/ss19/SS19_MOBILE_MEN.jpg",
          id: 1,
          linkUrl: "shop"
        },

        {
          title: "Sneakers",
          imageUrl: "https://i.redd.it/kxfcoubfc2gz.jpg",
          id: 3,
          linkUrl: "shop"
        },

        {
          title: "Mens",
          imageUrl:
            "https://snusercontent.global.ssl.fastly.net/member-profile-full/67/1731567_4923774.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop"
        },
        {
          title: "Womens",
          imageUrl: "https://data.whicdn.com/images/66048928/original.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop"
        },
        {
          title: "Hoodies",
          imageUrl:
            "https://www.dhresource.com/0x0s/f2-albu-g9-M00-FF-07-rBVaWFxkHbmAayatAANgdzz58Uk637.jpg/unisex-streetwear-hip-hop-hoody-smile-print.jpg",
          id: 2,
          linkUrl: "shop"
        },
        {
          title: "Jackets",
          imageUrl:
            "https://images.thejacketmaker.com/TJM_0399_smartly_Square-1492000021395.jpg",
          id: 6,
          linkUrl: "shop"
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ServiceDirectory;
